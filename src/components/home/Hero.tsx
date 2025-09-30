'use client';

import Button from '../ui/Button';
import { scrollToDownload } from '@/utils/scrollTo';
import { ArrowDownToLine } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const handleDownload = () => {
    if (window.innerWidth < 768) {
      router.push('https://circo.onelink.me/gP9j/16kig3qf');
    } else {
      scrollToDownload();
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen px-5 pb-16 flex items-end md:items-center md:justify-center relative overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://assets.circleandclique.com/artifacts/videos/Hero.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 w-full px-2 md:px-5 text-white space-y-6 md:pt-32">
        <h1 className=" text-5xl md:text-[80px]  leading-16 md:leading-23 tracking-normal text-wrap font-semibold md:font-medium lg:max-w-3xl xl:max-w-none mx-auto">
          The Internet&apos;s Most <br className="hidden md:block" /> Valuable Stage <br className="hidden md:block" />{' '}
          <span className="md:hidden">- Yours.</span>
        </h1>

        <p className="text-lg hidden md:block">
          Complete Creative Control to turn your passion into business Control to <br /> turn your passion into business
        </p>

        <Button
          variant="secondary"
          className="max-sm:w-full"
          onClick={handleDownload}
        >
          Download the App
          <ArrowDownToLine className="size-4 stroke-2.5" />
        </Button>
      </div>

      <div className="absolute inset-0 bg-black opacity-40 z-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
