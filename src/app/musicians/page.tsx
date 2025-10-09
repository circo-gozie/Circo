import Blog from '@/components/Blog/Blog';
import Hero from '@/components/home/Hero';
import AccordionSection from '@/components/Accordion/AccordionSection';
import MusiciansCarousel from '@/components/musicians/MusiciansCarousel';
import FindYou from '@/components/musicians/FindYou';
import Hills from '@/components/musicians/Hills';

const Musicians = () => {
  return (
    <main>
      <Hero />
      <MusiciansCarousel />
      <FindYou />
      <Hills />
      <Blog />
      <AccordionSection />
    </main>
  );
};

export default Musicians;
