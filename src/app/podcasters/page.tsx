import Hero from '@/components/home/Hero';
import CardSection from '@/components/podcasters/CardSection';
import CreativeControl from '@/components/podcasters/CreativeControl';
import Blog from '@/components/Blog/Blog';
import AccordionSection from '@/components/Accordion/AccordionSection';
import DownloadApp from '@/components/home/DownloadApp';

const Podcasters = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <CardSection />
      <CreativeControl />
      <Blog />
      <AccordionSection />
      <DownloadApp />
    </div>
  );
};

export default Podcasters;
