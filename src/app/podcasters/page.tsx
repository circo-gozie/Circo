import Hero from '@/components/home/Hero';
import CardSection from '@/components/home/CardSection';
import CreativeControl from '@/components/home/CreativeControl';
import Blog from '@/components/home/Blog';
import AccordionSection from '@/components/home/AccordionSection';
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
