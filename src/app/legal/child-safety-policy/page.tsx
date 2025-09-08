import { sanityClient } from '@/lib/sanity';
import { Section } from '@/types/legal';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

const query = `*[_type == "childSafetyPolicy"] | order(publishedAt asc)`;

async function getChildSafetyPolicyData(): Promise<Section[]> {
  if (!sanityClient) {
    console.warn('Sanity client not configured. Please set SANITY_STUDIO_PROJECT_ID environment variable.');
    return [];
  }

  try {
    const data = await sanityClient.fetch(query);
    return data || [];
  } catch (error) {
    console.error('Error fetching child safety policy data:', error);
    return [];
  }
}

export default async function ChildSafetyPolicyPage() {
  const data = await getChildSafetyPolicyData();
  const isLoading = false;
  const hasError = data.length === 0;
  const isSuccess = data.length > 0;

  return (
    <LegalPageLayout
      data={data}
      title="Child Safety Policy"
      isLoading={isLoading}
      hasError={hasError}
      isSuccess={isSuccess}
    />
  );
}

export const metadata = {
  title: 'Child Safety Policy - Circo',
  description: 'Circo Child Safety Policy - Learn about our commitment to child safety and protection.'
};
