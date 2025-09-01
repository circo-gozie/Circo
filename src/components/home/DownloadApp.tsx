import Image from 'next/image';
import Icon from '../ui/Icon';

const DownloadApp = () => {
  return (
    <section className="bg-black py-21 px-5">
      <div className="max-w-screen-xl mx-auto px-8 bg-[url(/images/red-radial-bg.png)] py-21 rounded-[60px] overflow-hidden flex justify-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-white text-[76px] md:text-[64px] leading-22 md:leading-18 tracking-[-2%] text-center">
            Circo is where you want to be
          </h2>
          <div className="mt-8 hidden md:flex justify-center gap-7">
            <div>
              <Image
                src="/images/qr-code-iphone.png"
                alt="qr-code-iphone"
                height={186}
                width={186}
              />
              <div className="mt-6 flex gap-1 items-center justify-center">
                <Icon name="apple" />
                <p className="text-sm text-white tracking-[-3%]">Get it on iPhone</p>
              </div>
            </div>
            <div>
              <Image
                src="/images/qr-code-android.png"
                alt="qr-code-android"
                height={186}
                width={186}
              />
              <div className="mt-6 flex gap-1 items-center justify-center">
                <Icon name="android" />
                <p className="text-sm text-white tracking-[-3%]">Get it on Android</p>
              </div>
            </div>
          </div>

          <div className="mt-11 flex md:hidden flex-wrap justify-center gap-3">
            <div className="bg-white flex items-center gap-1 rounded-full py-5 px-7">
              <Icon
                name="apple-black"
                size={4}
              />
              <p className="text-sm text-[#1B1B1B] tracking-[-3%]">Get it on iPhone</p>
            </div>
            <div className="bg-white flex items-center gap-1 rounded-full py-5 px-7">
              <Icon
                name="android-black"
                size={4}
              />
              <p className="text-sm text-[#1B1B1B] tracking-[-3%]">Get it on Android</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
