'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { findYouImages } from '@/utils/datasets';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const FindYou = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = gsap.utils.toArray<HTMLDivElement>('.track-item');
    if (!items.length) return;

    // --- Hide all items immediately (prevents flash) ---
    gsap.set(items, { opacity: 0 });

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const itemSize = items[0].offsetWidth;

    // Increase vertical spacing on mobile by making the track taller
    const isMobile = window.innerWidth < 640; // sm breakpoint
    const baseRadius = (height - itemSize) / 2 - 10;
    const radius = isMobile ? Math.max(baseRadius, height * 0.6, 200) : baseRadius;
    const straightLength = width - 2 * radius - itemSize;
    const total = items.length;
    const perimeter = 2 * straightLength + 2 * Math.PI * radius;

    // --- Position items along racetrack ---
    items.forEach((item, index) => {
      const progress = index / total;
      const distance = progress * perimeter;
      let x = 0;
      let y = 0;

      if (distance <= straightLength) {
        x = radius + itemSize / 2 + distance;
        y = height / 2 - radius;
      } else if (distance <= straightLength + Math.PI * radius) {
        const angle = (distance - straightLength) / radius;
        x = width - radius - itemSize / 2 + radius * Math.sin(angle);
        y = height / 2 - radius * Math.cos(angle);
      } else if (distance <= 2 * straightLength + Math.PI * radius) {
        const d = distance - (straightLength + Math.PI * radius);
        x = width - radius - itemSize / 2 - d;
        y = height / 2 + radius;
      } else {
        const angle = (distance - (2 * straightLength + Math.PI * radius)) / radius;
        x = radius + itemSize / 2 - radius * Math.sin(angle);
        y = height / 2 + radius * Math.cos(angle);
      }

      gsap.set(item, {
        position: 'absolute',
        left: x - item.offsetWidth / 2,
        top: y - item.offsetHeight / 2,
        scale: gsap.utils.random(0.85, 0.95)
      });
    });

    gsap.fromTo(
      items,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.find_you',
          start: 'top 50%',
          end: 'top 10%',
          scrub: false,
          once: true
        },
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        stagger: {
          amount: 2, // total spread time for all items
          from: 'random', // random order
          each: 0.15 // slight offset between starts
        }
      }
    );
  });

  // Determine how many images to show based on screen size
  const getImagesToShow = () => {
    if (typeof window === 'undefined') return findYouImages; // SSR fallback
    const isMobile = window.innerWidth < 640; // sm breakpoint
    return isMobile ? findYouImages.slice(0, 8) : findYouImages; // Show 8 images on mobile, all on desktop
  };

  return (
    <section className="find_you padding_ sm:min-h-svh flex flex-col gap-8 items-center justify-center relative section-wrapper">
      <div
        ref={containerRef}
        className="sm:relative size-full grow flex items-center justify-center"
      >
        {getImagesToShow().map((img, index) => (
          <div
            key={index}
            className="track-item size-12 sm:size-22 aspect-square rounded-xl overflow-hidden opacity-0" // stays hidden until GSAP animates
          >
            <Image
              src={img}
              fill
              alt="Find your favorites"
              className="object-cover"
              priority // ensures image loads before fade-in starts
            />
          </div>
        ))}

        <p className="text-center max-sm:px-12 text-6xl sm:text-7xl sm:font-bold pointer-events-none">
          Where your new <br />
          favorites find you.
        </p>
      </div>

      <div className=""></div>
    </section>
  );
};

export default FindYou;
