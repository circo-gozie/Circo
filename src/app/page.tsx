// import Benefits from '@/components/home/Benefits';
import DownloadApp from '@/components/home/DownloadApp';
import Hero from '@/components/home/Hero';
// import OurNumbers from '@/components/home/OurNumbers';
import Blog from '@/components/home/Blog';
import OurNumbers2 from '@/components/home/OurNumbers2';
// import PressRelease from '@/components/home/PressRelease';
import Section3 from '@/components/home/Section3';
// import SomethingAboutCirco from '@/components/home/SomethingAboutCirco';
import AccordionSection from '@/components/home/AccordionSection';
import CardSection from '@/components/home/CardSection';
import CreativeControl from '@/components/home/CreativeControl';

export default function Home() {
  return (
    <main>
      <Hero />
      <OurNumbers2 />
      <Section3 />
      <Blog />
      <AccordionSection />
      <CardSection />
      <CreativeControl />
      {/* <SomethingAboutCirco />
      <Benefits /> */}
      {/* <PressRelease /> */}
      <DownloadApp />
    </main>
  );
}
