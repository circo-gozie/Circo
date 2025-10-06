import DownloadApp from '@/components/home/DownloadApp';
import Hero from '@/components/home/Hero';
import OurNumbers2 from '@/components/ugc/OurNumbers2';
import VideoCarousel from '@/components/ugc/VideoCarousel';
import Blog from '@/components/Blog/Blog';

const UGC = () => {
  return (
    <main>
      <Hero />
      <OurNumbers2 />
      <VideoCarousel />
      <Blog />
      <DownloadApp />
    </main>
  );
};

export default UGC;
