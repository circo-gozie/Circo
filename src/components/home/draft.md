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
gsap.set('.left-text', { y: '100%', opacity: 0 });
gsap.set('.right-text', { y: '100%', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.creative-control',
        start: 'top top',
        end: '+=200%',
        scrub: 2,
        pin: true
      }
    });

    tl.to('.video', {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 0,
      zIndex: 10,
      duration: 2,
      ease: 'power2.inOut'
    })
      .to('.video', {
        position: 'relative',
        width: '20rem', // back to w-xs
        height: 'auto',
        borderRadius: '1rem',
        zIndex: 1,
        duration: 2,
        ease: 'power2.inOut'
      })
      .to('.left-text', { y: 0, opacity: 1, duration: 2, ease: 'power2.out' }, '<')
      .to('.right-text', { y: 0, opacity: 1, duration: 2, ease: 'power2.out' }, '<');

});

return (
<div className="creative-control relative space-y-12 py-12 flex flex-col sm:flex-row gap-6 overflow-hidden">
<div className="left-text min-h-full sm:basis-1/3 flex justify-center place-items-center text-center z-10">
<p className="sm:my-auto text-start">
Complete Creative Control to turn your passion into business. Control into business. Passion into business.
</p>
</div>
<div className="sm:basis-1/3 flex flex-col items-center justify-center relative">
<video
src={'https://www.w3schools.com/html/mov_bbb.mp4'} // use direct mp4
className="video w-xs bg-orange-200 aspect-[9/12] rounded-xl object-cover"
autoPlay
loop
muted ></video>
</div>
<div className="right-text flex flex-col sm:basis-1/3 justify-center items-center h-fit z-10">
{creative.map((item, index) => (
<Card
            key={index}
            className="shadow-none"
          >
<CardHeader>
<CardTitle className="text-base text-primary">{item.title}</CardTitle>
</CardHeader>
<CardContent>
<p>{item.description}</p>
</CardContent>
</Card>
))}
</div>
</div>
);
};

export default CreativeControl;
