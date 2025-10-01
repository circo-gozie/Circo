'use client';
import { scrollToDownload } from '@/utils/scrollTo';
import VideoCard from './VideoCard';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';
import { ArrowDownToLine } from 'lucide-react';
import { videos } from '@/utils/datasets';

const OurNumbers2 = () => {
  const router = useRouter();

  const handleDownload = () => {
    if (window.innerWidth < 768) {
      router.push('https://circo.onelink.me/gP9j/16kig3qf');
    } else {
      scrollToDownload();
    }
  };

  return (
    <section className="our-numbers padding_ flex flex-col gap-8 bg-[#FFF9F1] items-center justify-center relative overflow-hidden section-wrapper">
      <div className="w-full grow text-center flex items-center justify-center">
        <p className="text-4xl mt-auto font-bold">
          We’ve helped 2,000+ <br /> creators reach their goals
        </p>
      </div>
      <div className="w-full  grow flex items-center justify-center overflow-x-scroll hide-scrollbar">
        <div className="w-fit grow flex items-center justify-center gap-4 sm:gap-0 py-12">
          {videos.map((vid) => (
            <VideoCard
              key={vid.title}
              video={vid}
            />
          ))}
        </div>
      </div>
      <div className="w-full grow grid place-items-center">
        <Button
          className="mb-auto"
          onClick={handleDownload}
        >
          Download the App
          <ArrowDownToLine className="size-4 stroke-2.5" />
        </Button>
      </div>
    </section>
  );
};

export default OurNumbers2;
