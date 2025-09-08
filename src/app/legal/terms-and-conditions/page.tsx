import { sanityClient } from '@/lib/sanity';
import { Section } from '@/types/legal';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

const query = `*[_type == "termsAndConditions"] | order(publishedAt asc)`;

async function getTermsAndConditionsData(): Promise<Section[]> {
  if (!sanityClient) {
    console.warn('Sanity client not configured. Please set SANITY_STUDIO_PROJECT_ID environment variable.');
    return [];
  }

  try {
    const data = await sanityClient.fetch(query);
    return data || [];
  } catch (error) {
    console.error('Error fetching terms and conditions data:', error);
    return [];
  }
}

export default async function TermsAndConditionsPage() {
  const data = await getTermsAndConditionsData();
  const isLoading = false;
  const hasError = data.length === 0;
  const isSuccess = data.length > 0;

  return (
    <LegalPageLayout
      data={data}
      title="Terms and Conditions"
      isLoading={isLoading}
      hasError={hasError}
      isSuccess={isSuccess}
    />
  );
}

export const metadata = {
  title: 'Terms and Conditions - Circo',
  description: 'Circo Terms and Conditions - Learn about the terms and conditions for using our platform.'
};
