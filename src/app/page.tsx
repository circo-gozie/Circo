import Benefits from '@/components/home/Benefits';
import DownloadApp from '@/components/home/DownloadApp';
import Hero from '@/components/home/Hero';
import OurNumbers from '@/components/home/OurNumbers';
import PressRelease from '@/components/home/PressRelease';
import SomethingAboutCirco from '@/components/home/SomethingAboutCirco';

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
