'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { videos } from '@/utils/datasets';
import VideoCard2 from './VideoCard2';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  useGSAP(() => {
    gsap.set('.block-2', { x: '120%', opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-3',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true,
        anticipatePin: 1
      }
    });

    tl.to('.block-1', { x: '-120%', opacity: 0, duration: 1 }, 2)
      .to('.vid-carousel-container', { x: '-120%', duration: 1 }, 2)
      .to('.block-2', { x: '0%', opacity: 1, duration: 1 }, 3);
  });

  return (
    <>
      <section className="hidden sm:flex section-3 h-svh items-center justify-center gap-22 overflow-y-scroll">
        <div className="block-1 w-md flex flex-col items-center justify-center h-full">
          <div className="space-y-6">
            <h1 className=" text-5xl leading-14  tracking-normal text-wrap font-semibold md:font-medium lg:max-w-3xl xl:max-w-none mx-auto">
              The Internet&apos;s Most <br className="hidden md:block" /> Valuable Stage{' '}
              <br className="hidden md:block" /> <span className="md:hidden">- Yours.</span>
            </h1>

            <p className="text-lg hidden md:block">
              Complete Creative Control to turn your passion into business Control to turn your passion into business
              your passion into business Control to turn your passion into business
            </p>
          </div>
        </div>
        <div className="vid-carousel-container w-md h-full">
          <div className="vid-carousel flex flex-col animate-scroll space-y-9">
            {[...videos, ...videos].map((vid, i) => (
              <VideoCard2
                key={vid.title + i}
                video={vid}
              />
            ))}
          </div>
        </div>

        <div className="block-2 w-md flex absolute right-0 -translate-x-1/2 flex-col items-center justify-center h-full">
          <div className="space-y-6">
            <h1 className=" text-5xl leading-14  tracking-normal text-wrap font-semibold md:font-medium lg:max-w-3xl xl:max-w-none mx-auto">
              The Internet&apos;s Most <br className="hidden md:block" /> Valuable Stage{' '}
              <br className="hidden md:block" /> <span className="md:hidden">- Yours.</span>
            </h1>

            <p className="text-lg hidden md:block">
              Complete Creative Control to turn your passion into business Control to turn your passion into business
              your passion into business Control to turn your passion into business
            </p>
          </div>
        </div>
      </section>
      <section className="sm:hidden p-4 section-3-mobile space-y-9">
        <div className=" w-full h-full">
          <div className="space-y-3">
            <h1 className=" text-3xl leading-10 tracking-normal text-wrap font-semibold md:font-medium lg:max-w-3xl xl:max-w-none mx-auto">
              The Internet&apos;s Most <br className="hidden md:block" /> Valuable Stage{' '}
              <br className="hidden md:block" /> <span className="md:hidden">- Yours.</span>
            </h1>

            <p className="text-base ">
              Complete Creative Control to turn your passion into business Control to turn your passion into business
              your passion into business Control to turn your passion into business
            </p>
          </div>
        </div>

        <div className="vid-carousel-container-mobile w-md h-full">
          <div className="vid-carousel-mobile flex animate-scroll-x gap-6">
            {[...videos, ...videos].map((vid, i) => (
              <VideoCard2
                key={vid.title + i}
                video={vid}
              />
            ))}
          </div>
        </div>

        <div className=" w-full h-full">
          <div className="space-y-3">
            <h1 className=" text-3xl leading-10 tracking-normal text-wrap font-semibold md:font-medium lg:max-w-3xl xl:max-w-none mx-auto">
              The Internet&apos;s Most <br className="hidden md:block" /> Valuable Stage{' '}
              <br className="hidden md:block" /> <span className="md:hidden">- Yours.</span>
            </h1>

            <p className="text-base ">
              Complete Creative Control to turn your passion into business Control to turn your passion into business
              your passion into business Control to turn your passion into business
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
