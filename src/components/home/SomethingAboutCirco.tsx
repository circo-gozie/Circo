'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const SomethingAboutCirco = () => {
  useGSAP(() => {
    if (window.innerWidth >= 768) {
      gsap.to('.bg-wrapper', {
        scrollTrigger: {
          trigger: '.section-wrapper-2',
          start: 'top top',
          end: '+=550',
          scrub: 1
        },
        width: '65%',
        borderRadius: '40px'
      });

      gsap.to('.section-heading', {
        scrollTrigger: {
          trigger: '.section-wrapper-2',
          start: 'top top',
          end: '+=500',
          scrub: 1
        },
        y: 550,
        fontSize: '3.75rem',
        lineHeight: '4.75rem',
        color: '#1B1B1B',
        maxWidth: '36.5rem'
      });
    }

    if (window.innerWidth < 768) {
      gsap.to('.section-heading', {
        scrollTrigger: {
          trigger: '.section-wrapper-2',
          start: 'top top',
          end: '+=500',
          scrub: 1
        },
        y: 480,
        fontSize: '2.25rem',
        lineHeight: '3.5rem',
        maxWidth: '20.875rem'
      });
    }
  });
  return (
    <section className="relative section-wrapper-2">
      <div className="min-h-screen bg-[url('/images/background-placeholder.jpg')] bg-cover bg-no-repeat bg-center bg-wrapper mx-auto">
        <div className="absolute inset-0 flex items-center justify-center text-[50px] md:text-[90px] font-medium text-[#FCBFBF] leading-14 md:leading-28 text-center max-w-3xl mx-auto section-heading">
          Something about Circo for everybody
        </div>
      </div>
    </section>
  );
};

export default SomethingAboutCirco;
