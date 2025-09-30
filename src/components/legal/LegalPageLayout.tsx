'use client';

// import { useState } from 'react';
import Image from 'next/image';
// import { PortableText } from '@portabletext/react';
import { Section } from '@/types/legal';
// import { portableTextComponents } from './PortableTextComponents';
// import PolicyScrollMenu from './PolicyScrollMenu';
// import PolicyScrollSection from './PolicyScrollSection';

interface LegalPageLayoutProps {
  data: Section[];
  title: string;
  isLoading: boolean;
  hasError: boolean;
  isSuccess: boolean;
}

export default function LegalPageLayout({ title, isLoading, hasError, isSuccess }: LegalPageLayoutProps) {
  // export default function LegalPageLayout({ data, title, isLoading, hasError, isSuccess }: LegalPageLayoutProps) {
  // const [activeSection, setActiveSection] = useState<string | null>(null);

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setActiveSection(id);
  // };

  // const handleSectionInView = (id: string) => {
  //   setActiveSection(id);
  // };

  if (isLoading) {
    return (
      <div className="pt-20">
        <div className="flex h-[calc(100vh-165px)] w-full items-center justify-center">
          <Image
            src="https://assets.circleandclique.com/artifacts/images/loading.gif"
            alt="loading"
            width={50}
            height={50}
          />
          <p>Please wait...</p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="pt-20">
        <div className="h-[calc(100vh-150px)] flex w-full items-center justify-center">
          <p className="text-[200px]">Error: Something went wrong. Please try again.</p>
        </div>
      </div>
    );
  }

  if (!isSuccess) {
    return null;
  }

  return (
    <div className="pt-32">
      <div className="flex flex-col px-3 md:flex-row md:px-8 lg:px-12 xl:px-14">
        {/* <div className="relative min-w-0 md:flex-[2] lg:flex-[35%] xl:flex-[1]">
          <PolicyScrollMenu
            menuItems={data ?? []}
            activeSection={activeSection}
            onScrollTo={scrollToSection}
          />
        </div> */}

        <div className="md:flex-[3] lg:flex-[65%] xl:flex-[3]">
          <div className="my-5 px-3">
            <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              <span className="text-xl font-medium md:text-2xl lg:text-3xl">{title}</span>
            </p>
          </div>
          {/* <PolicyScrollSection onSectionInView={handleSectionInView}>
            {data?.map((section) => (
              <div
                key={section._id}
                id={section._id}
                data-section
                className="my-3"
              >
                <h2 className="mb-4 text-2xl lg:text-3xl">{section.title}</h2>
                <p>{section.description}</p>

                <PortableText
                  value={section.content}
                  components={portableTextComponents}
                />
              </div>
            ))}
          </PolicyScrollSection> */}
        </div>
      </div>
    </div>
  );
}
