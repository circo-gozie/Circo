import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export const sanityClient = projectId
    ? createClient({
        projectId,
        dataset,
        useCdn: true,
        apiVersion: '2024-01-01',
    })
    : null

export default sanityClient
