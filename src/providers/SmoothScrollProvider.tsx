'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

const SmoothScrollProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother);
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true
    });

    console.log('ScrollSmoother created:', smoother);
  });

  return (
    <div
      id="smooth-wrapper"
      className="fixed inset-0 w-full h-full overflow-hidden"
    >
      <div
        id="smooth-content"
        className="w-full"
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollProvider;
