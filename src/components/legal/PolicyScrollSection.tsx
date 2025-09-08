'use client';

import { useEffect, useRef } from 'react';

interface PolicyScrollSectionProps {
  children: React.ReactNode;
  onSectionInView: (id: string) => void;
}

export default function PolicyScrollSection({ children, onSectionInView }: PolicyScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onSectionInView(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5
    });

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [onSectionInView]);

  return (
    <div
      ref={containerRef}
      className="ml-1/4 flex-[3] overflow-y-auto p-4"
    >
      {children}
    </div>
  );
}
