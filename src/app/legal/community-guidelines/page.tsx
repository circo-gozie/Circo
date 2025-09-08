import { sanityClient } from '@/lib/sanity';
import { Section } from '@/types/legal';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

const query = `*[_type == "guidelines"] | order(publishedAt asc)`;

async function getCommunityGuidelinesData(): Promise<Section[]> {
  if (!sanityClient) {
    console.warn('Sanity client not configured. Please set SANITY_STUDIO_PROJECT_ID environment variable.');
    return [];
  }

  try {
    const data = await sanityClient.fetch(query);
    return data || [];
  } catch (error) {
    console.error('Error fetching community guidelines data:', error);
    return [];
  }
}

export default async function CommunityGuidelinesPage() {
  const data = await getCommunityGuidelinesData();
  const isLoading = false;
  const hasError = data.length === 0;
  const isSuccess = data.length > 0;

  return (
    <LegalPageLayout
      data={data}
      title="Community Guidelines"
      isLoading={isLoading}
      hasError={hasError}
      isSuccess={isSuccess}
    />
  );
}

export const metadata = {
  title: 'Community Guidelines - Circo',
  description: 'Circo Community Guidelines - Learn about our community standards and expectations.'
};
