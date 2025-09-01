'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const images = Array.from({ length: 8 });

const OurNumbers = () => {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(() => {
    let radius: number;
    let exitDistance: number;
    if (window.innerWidth >= 768) {
      radius = 300; // px
      exitDistance = 320; // px
    }

    if (window.innerWidth < 768) {
      radius = 150; // px
      exitDistance = 160; // px
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-wrapper',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    if (window.innerWidth >= 768) {
      tl.to(
        '.left-text',
        {
          x: -720,
          duration: 1
        },
        0
      ).to(
        '.right-text',
        {
          x: 790,
          duration: 1
        },
        0
      );

      tl.from(
        '.circle-img',
        {
          opacity: 0,
          scale: 0.5,
          duration: 1
        },
        0
      );
    }

    if (window.innerWidth < 768) {
      tl.to(
        '.left-text',
        {
          x: -400,
          duration: 1
        },
        1
      ).to(
        '.right-text',
        {
          x: 420,
          duration: 1
        },
        1
      );
    }

    // Reveal to circular positions
    images.forEach((_, i) => {
      const angle = (i / images.length) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      tl.to(
        imgRefs.current[i],
        {
          x,
          y,
          borderRadius: '30px',
          duration: 1,
          ease: 'power2.out'
        },
        1
      );
    });

    // Exit outward
    images.forEach((_, i) => {
      const angle = (i / images.length) * Math.PI * 2;
      const x = (radius + exitDistance) * Math.cos(angle);
      const y = (radius + exitDistance) * Math.sin(angle);

      tl.to(
        imgRefs.current[i],
        {
          x,
          y,
          // opacity: 0,
          duration: 1,
          ease: 'power2.in'
        },
        2
      );
    });

    tl.from(
      '.figures',
      {
        opacity: 0,
        scale: 0,
        duration: 1
      },
      2
    );

    if (window.innerWidth >= 768) {
      tl.to(
        '.value',
        {
          y: -220,
          duration: 0.3
        },
        3
      );

      tl.to(
        '.description',
        {
          y: -60,
          duration: 0.3
        },
        3
      );

      tl.to(
        '.value',
        {
          y: -440,
          duration: 0.3
        },
        4
      );

      tl.to(
        '.description',
        {
          y: -120,
          duration: 0.3
        },
        4
      );

      tl.to(
        '.value',
        {
          y: -660,
          duration: 0.3
        },
        5
      );

      tl.to(
        '.description',
        {
          y: -180,
          duration: 0.3
        },
        5
      );
    }

    if (window.innerWidth < 768) {
      tl.to(
        '.value',
        {
          y: -115,
          duration: 0.3
        },
        3
      );

      tl.to(
        '.description',
        {
          y: -40,
          duration: 0.3
        },
        3
      );

      tl.to(
        '.value',
        {
          y: -230,
          duration: 0.3
        },
        4
      );

      tl.to(
        '.description',
        {
          y: -240,
          duration: 0.3
        },
        4
      );

      tl.to(
        '.value',
        {
          y: -345,
          duration: 0.3
        },
        5
      );

      tl.to(
        '.description',
        {
          y: -360,
          duration: 0.3
        },
        5
      );
    }

    // tl.to(
    //   '.figures',
    //   {
    //     opacity: 0,
    //     scale: 15,
    //     duration: 3,
    //     y: 300
    //   },
    //   6
    // );
  });

  return (
    <section className="min-h-screen md:flex items-center justify-center relative overflow-hidden section-wrapper">
      <div className="text-[#1B1B1B] text-[55px] md:text-[122px] md:flex items-center gap-3 text-center py-28 md:py-0">
        <h2 className="left-text">“Social”</h2>
        {Array.from({ length: 8 }).map((_, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            ref={(el) => {
              imgRefs.current[index] = el;
            }}
            src="/images/placeholder-image.jpg"
            alt="Placeholder"
            className="circle-img"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 100,
              height: 100,
              transform: 'translate(-50%, -50%)',
              borderRadius: '100px',
              zIndex: 8 - index
            }}
          />
        ))}

        <h2 className="right-text">Reinvented</h2>
      </div>

      <div className="absolute inset-0 text-center flex items-center justify-center figures">
        <div>
          <div className="h-24 md:h-43.5 overflow-hidden">
            <div className="text-[75px] md:text-[145px] font-semibold text-[#1B1B1B] value">
              <p>100,000 +</p>
              <p>$25,000 +</p>
              <p>15,000 +</p>
              <p>$25,000 +</p>
            </div>
          </div>

          <div className="h-9 md:h-18 overflow-hidden mt-2">
            <div className="text-[26px] md:text-[40px] font-medium text-[#747474] description">
              <div>Users reached weekly</div>
              <div>Gifted to Creators</div>
              <div>Creator Ecosystem</div>
              <div>Paid Out</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
