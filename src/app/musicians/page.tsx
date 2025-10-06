import Blog from '@/components/Blog/Blog';
import Hero from '@/components/home/Hero';
import AccordionSection from '@/components/Accordion/AccordionSection';
import MusiciansCarousel from '@/components/musicians/MusiciansCarousel';
import FindYou from '@/components/musicians/FindYou';

const Musicians = () => {
  return (
    <main>
      <Hero />

      <MusiciansCarousel />
      <FindYou />
      <Blog />
      <AccordionSection />
    </main>
  );
};

export default Musicians;
