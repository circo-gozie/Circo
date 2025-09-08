import { sanityClient } from '@/lib/sanity';
import { Section } from '@/types/legal';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

const query = `*[_type == "privacyPolicy"] | order(publishedAt asc)`;

async function getPrivacyPolicyData(): Promise<Section[]> {
  if (!sanityClient) {
    console.warn('Sanity client not configured. Please set SANITY_STUDIO_PROJECT_ID environment variable.');
    return [];
  }

  try {
    const data = await sanityClient.fetch(query);
    return data || [];
  } catch (error) {
    console.error('Error fetching privacy policy data:', error);
    return [];
  }
}

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicyData();
  const isLoading = false;
  const hasError = data.length === 0;
  const isSuccess = data.length > 0;

  return (
    <LegalPageLayout
      data={data}
      title="Privacy Policy"
      isLoading={isLoading}
      hasError={hasError}
      isSuccess={isSuccess}
    />
  );
}

export const metadata = {
  title: 'Privacy Policy - Circo',
  description: 'Circo Privacy Policy - Learn about how we collect, use, and protect your personal information.'
};
