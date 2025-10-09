'use client';
import { musiciansCarousel } from '@/utils/datasets';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const MusiciansCarousel = () => {
  useGSAP(() => {
    gsap.to('.m_card_', {
      scrollTrigger: {
        trigger: '.m_carousel_',
        start: 'top 80%',
        end: 'top top',
        scrub: 1
      },
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      stagger: {
        amount: 2,
        each: 0.15
      }
    });
  });
  return (
    <section className="m_carousel_ padding_ flex flex-col gap-8 items-center justify-center relative overflow-hidden section-wrapper">
      <div className="w-full  grow flex items-center justify-center overflow-x-scroll hide-scrollbar">
        <div className="w-full grow flex flex-col sm:grid grid-cols-4 gap-8">
          {musiciansCarousel.map((_) => (
            <div
              key={_.title}
              className="m_card_ translate-y-22 opacity-0 w-full space-y-3 max-sm:min-w-[80%]"
            >
              <p className="text-lg font-bold">{_.title}</p>
              <p className="">{_.description}</p>
              <div className="w-full aspect-square sm:aspect-[9/13] rounded-2xl bg-gray-100 mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusiciansCarousel;
