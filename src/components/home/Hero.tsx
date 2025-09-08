'use client';

import Button from '../ui/Button';
import { scrollToDownload } from '@/utils/scrollTo';
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
        src="https://assets.circleandclique.com/artifacts/videos/Hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 md:text-center">
        <h1 className="text-white text-5xl md:text-[80px] leading-16 md:leading-23 tracking-normal font-semibold md:font-medium lg:max-w-3xl xl:max-w-none mx-auto">
          The Internet&apos;s Most Valuable Stage <br className="hidden md:block" /> - Yours.
        </h1>

        <Button
          variant="secondary"
          className="w-full md:w-auto mt-7 md:mt-8"
          onClick={handleDownload}
        >
          Download the App
        </Button>
      </div>

      <div className="absolute inset-0 bg-black opacity-40 z-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
