# Sanity Integration Setup

This project has been integrated with Sanity CMS to manage legal pages content. Follow these steps to complete the setup:

## 1. Environment Variables

Create a `.env.local` file in the root directory and add your Sanity configuration:

```env
# Sanity Configuration
SANITY_STUDIO_PROJECT_ID=your_project_id_here
SANITY_STUDIO_DATASET=production
```

Replace `your_project_id_here` with your actual Sanity project ID.

## 2. Sanity Schema

Make sure your Sanity studio has the following document types:

- `childSafetyPolicy` - for Child Safety Policy content
- `guidelines` - for Community Guidelines content  
- `privacyPolicy` - for Privacy Policy content
- `termsAndConditions` - for Terms and Conditions content

Each document type should have the following fields:
- `_id` (string)
- `title` (string)
- `description` (string)
- `content` (portable text/rich text)
- `publishedAt` (datetime, optional)

## 3. Available Pages

The following legal pages are now available:

- `/legal/child-safety-policy`
- `/legal/community-guidelines`
- `/legal/privacy-policy`
- `/legal/terms-and-conditions`

## 4. Features

- **Responsive Design**: Works on all device sizes
- **Clean Layout**: Legal pages have no navbar for distraction-free reading
- **Scroll Navigation**: Side navigation menu that highlights active sections
- **Smooth Scrolling**: Smooth scroll behavior when clicking navigation items
- **Intersection Observer**: Automatically updates active section based on scroll position
- **Portable Text**: Rich text content rendered with custom styling
- **Loading States**: Proper loading and error handling
- **SEO Optimized**: Each page has proper metadata

## 5. Components

- `LegalPageLayout`: Main layout component for all legal pages
- `PolicyScrollMenu`: Side navigation menu component
- `PolicyScrollSection`: Content section with intersection observer
- `PortableTextComponents`: Custom components for rendering rich text
- `LegalLayout`: Custom layout for legal pages (no navbar, includes footer)

## 6. Styling

The components use Tailwind CSS classes and support:
- Custom list styling (`custom-ul-class`, `custom-li-class`, etc.)
- Responsive breakpoints
- Custom Circo brand colors (`circoRed2`)

## 7. Layout Structure

The legal pages use a custom layout that:
- **Excludes the navbar** for a clean, distraction-free reading experience
- **Includes the footer** for consistent branding
- **Adds proper top padding** (`pt-20`) to account for the missing navbar
- **Maintains Lenis smooth scrolling** for enhanced user experience

## 8. Development

To run the development server:

```bash
pnpm dev
```

The legal pages will be available at the URLs mentioned above once you've set up your Sanity project and environment variables.
