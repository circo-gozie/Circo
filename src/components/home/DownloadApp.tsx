'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';

const DownloadApp = () => {
  const router = useRouter();

  const download = () => {
    router.push('https://circo.onelink.me/gP9j/16kig3qf');
  };

  return (
    <section
      id="download"
      className="bg-black padding_"
    >
      <div className="max-w-screen-xl mx-auto sm:px-8 bg-[url(https://assets.circleandclique.com/artifacts/images/red-radial-bg.png)] py-21 rounded-[60px] overflow-hidden flex justify-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-white text-[64px] leading-18 tracking-[-2%] text-center">
            Circo is where you want to be
          </h2>
          <div className="mt-6.5 hidden md:flex justify-center gap-7">
            <div>
              <Image
                src="https://assets.circleandclique.com/artifacts/images/qr_code.png"
                alt="qr-code-iphone"
                height={250}
                width={250}
              />

              <p className="mt-7.5 text-lg font-medium text-center text-white tracking-[-3%]">Scan to Download</p>
            </div>
          </div>

          <div className="mt-11 flex md:hidden flex-wrap justify-center gap-3">
            <Button
              className="bg-white flex items-center gap-1 rounded-full py-5 px-7 cursor-pointer"
              variant="secondary"
              onClick={download}
            >
              Download the app
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
