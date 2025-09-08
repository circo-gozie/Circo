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
        y: '62vh',
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
        y: '62vh',
        fontSize: '2.25rem',
        lineHeight: '3.5rem',
        maxWidth: '20.875rem'
      });
    }
  });
  return (
    <section className="relative section-wrapper-2">
      <div className="min-h-screen bg-wrapper mx-auto relative">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://assets.circleandclique.com/artifacts/videos/Circo_for_everybody.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center text-[42px] md:text-[90px] font-medium text-[#FCBFBF] leading-14 md:leading-28 text-center max-w-sm md:max-w-3xl mx-auto section-heading z-10">
          Something about Circo for everybody
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-5 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default SomethingAboutCirco;
