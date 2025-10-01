import DownloadApp from '@/components/home/DownloadApp';
import Hero from '@/components/home/Hero';
import Blog from '@/components/home/Blog';
import OurNumbers2 from '@/components/home/OurNumbers2';
import Section3 from '@/components/home/Section3';

export default function Home() {
  return (
    <main>
      <Hero />
      <OurNumbers2 />
      <Section3 />
      <Blog />
      <DownloadApp />
    </main>
  );
}
