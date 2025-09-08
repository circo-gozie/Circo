# Stage 1: Build the application
FROM node:22 AS build

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Create a .env file from the build argument
ARG ENV_FILE
COPY $ENV_FILE .env

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy application files
COPY src ./src
COPY public ./public
COPY next.config.ts .
COPY postcss.config.mjs .
COPY tsconfig.json .

# Build App
RUN pnpm build

# Remove devDependencies after build
RUN pnpm prune --production

# Stage 2: Create a minimal runtime image
FROM node:22-alpine

# Install pnpm globally
RUN npm install -g pnpm && addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /app

# Copy necessary files from build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public

# Expose application port
EXPOSE 40901

# Change ownership of application files
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Start the production server
CMD ["node_modules/.bin/next", "start", "-p", "40901"]
