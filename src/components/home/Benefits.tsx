import Image from 'next/image';
import Button from '../ui/Button';

const Benefits = () => {
  return (
    <>
      <div className="h-24 md:h-36 bg-[#000000] md:bg-white"></div>
      <section className="max-w-screen-xl mx-auto px-7 pt-26 pb-16 space-y-36 bg-[#040404] md:bg-white">
        <div className="flex gap-6 flex-col md:flex-row-reverse items-center justify-between">
          <div className="md:w-1/2">
            <Image
              src="/images/benefit-image-1.png"
              className="ml-auto"
              alt="Benefit 1"
              width={576}
              height={595}
            />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h3 className="text-[32px] md:text-5xl lg:text-[60px] leading-13 md:leading-15 lg:leading-18.5 tracking-normal text-white md:text-[#1B1B1B]">
              Complete Creative Control to turn your passion into business
            </h3>
            <Button className="mt-7 md:mt-11">Create on your terms</Button>
          </div>
        </div>

        <div className="flex gap-6 flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <Image
              src="/images/benefit-image-2.png"
              alt="Benefit 2"
              width={449}
              height={463}
            />
          </div>
          <div className="md:w-1/2 md:max-w-[550px] mt-10 md:mt-0">
            <h3 className="text-[32px] md:text-5xl lg:text-[60px] leading-13 md:leading-15 lg:leading-18.5 tracking-normal text-white md:text-[#1B1B1B]">
              Find trends, content, and topics that inspire you.
            </h3>
            <Button className="mt-7 md:mt-11">Explore content you love</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
