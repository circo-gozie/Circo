import DownloadApp from '@/components/home/DownloadApp';
import Hero from '@/components/home/Hero';
import SomethingAboutCirco from '@/components/home/SomethingAboutCirco';
import OurNumbers from '@/components/home/OurNumbers';
import Benefits from '@/components/home/Benefits';
import PressRelease from '@/components/home/PressRelease';

export default function Home() {
  return (
    <main>
      <Hero />
      <OurNumbers />
      <SomethingAboutCirco />
      <Benefits />
      <PressRelease />
      <DownloadApp />
    </main>
  );
}
