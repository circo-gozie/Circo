'use client';
import { ArrowDownToLine } from 'lucide-react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';
import { scrollToDownload } from '@/utils/scrollTo';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Hills = () => {
  useGSAP(() => {
    gsap.to('.hills_text_', {
      scrollTrigger: {
        trigger: '.hills_',
        start: 'top 80%',
        end: 'top top',
        scrub: 1
      },
      opacity: 1,
      y: 0,
      ease: 'power2.out'
    });

    gsap.to('.hills_btn_', {
      scrollTrigger: {
        trigger: '.hills_',
        start: 'top 60%',
        end: 'top top',
        scrub: 3
      },
      opacity: 1,
      y: 0,
      ease: 'power2.out'
    });
  });
  const router = useRouter();
  const handleDownload = () => {
    if (window.innerWidth < 768) {
      router.push('https://circo.onelink.me/gP9j/16kig3qf');
    } else {
      scrollToDownload();
    }
  };
  return (
    <section className="hills_ padding_  flex flex-col gap-8 sm:gap-12 items-center justify-center relative overflow-hidden bg-[#FFFBF6]">
      <div className="hills_text_ translate-y-22 opacity-0 w-full flex items-center justify-center overflow-hidden">
        <p className="text-center text-2xl font-semibold sm:text-6xl sm:font-medium max-w-5xl">
          Hills have eyes, the hills have eyes, who are you to judge? Hide your lies, hide your lies only you trust.
          Open hearts hurry up tomorrow
        </p>
      </div>
      <Button
        variant="primary"
        className="hills_btn_ translate-y-12 opacity-0"
        onClick={handleDownload}
      >
        Download the App
        <ArrowDownToLine className="size-4 stroke-2.5" />
      </Button>
    </section>
  );
};

export default Hills;
