'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const creative = [
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' },
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' },
  { title: 'Header', description: 'lorem impsum saying what i would not say on a page about all there is' }
];

const CreativeControl = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Add a media query for screens wider than 768px (common for tablets/desktop)
    mm.add('(min-width: 768px)', () => {
      // ALL animations inside this function will ONLY run on screens >= 768px

      gsap.to('.video', {
        width: '30%',
        ease: 'linear',
        scrollTrigger: {
          trigger: '.creative-control',
          start: 'top 40%',
          end: 'top 20%',
          scrub: 2
        }
      });

      gsap.fromTo(
        '.copy',
        { y: 100, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          ease: 'linear',
          scrollTrigger: {
            trigger: '.creative-control',
            start: 'top 50%',
            end: 'top 25%',
            scrub: 2
          }
        }
      );

      // Any cleanup logic (optional)
      return () => {
        // Runs when the media query condition is no longer met
      };
    });
  });

  return (
    <div className="relative sm:min-h-svh padding_ creative-control space-y-12 py-12 flex flex-col sm:flex-row gap-6 overflow-hidden">
      <div className="copy sm:absolute sm:w-1/4 sm:-1/2 inset-y-0 sm:-translte-y-1/2 left-text min-h-full  sm:basis-1/3 flex justify-center place-items-center text-center transition-all">
        <p className="sm:my-auto text-start">
          Complete Creative Control to turn your passion into business. Control into business. Passion into business.
          Complete Creative Control to turn your passion into business. come
        </p>
      </div>

      <video
        src={'https://www.w3schools.com/html/mov_bbb.mp4'} // use direct mp4
        className="video z-10 w-full aspect-video rounded-xl object-cover mx-auto"
        autoPlay
        loop
        muted
      ></video>

      <div className="copy sm:absolute sm:w-1/4 sm:-1/2 right-22 inset-y-0  left-text min-h-full  sm:basis-1/3 flex flex-col gap-3 justify-center place-items-center text-start transition-all">
        {creative.map((item, index) => (
          <Card
            key={index}
            className="shadow-none bg-transparent max-sm:p-0"
          >
            <CardHeader className="max-sm:px-0">
              <CardTitle className="text-base text-primary">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="max-sm:px-0">
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CreativeControl;
