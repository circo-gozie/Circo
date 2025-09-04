import Button from '../ui/Button';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen px-5 pb-16 flex items-end sm:items-center sm:justify-center relative overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://assets.circleandclique.com/artifacts/videos/Hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 sm:text-center">
        <h1 className="text-white text-[55px] sm:text-[80px] leading-18 sm:leading-23 tracking-normal font-semibold sm:font-medium">
          The Internet&apos;s Most Valuable Stage <br className="hidden sm:block" /> - Yours.
        </h1>

        <Button
          variant="secondary"
          className="w-full md:w-auto mt-7 md:mt-8"
        >
          Download the App
        </Button>
      </div>

      <div className="absolute inset-0 bg-black opacity-40 z-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
