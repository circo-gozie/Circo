import Image from 'next/image';

const PressRelease = () => {
  const articles = [
    {
      image: '/images/tech-cabal.png',
      alt: 'Tech Cabal',
      title: 'Rewriting the creator’s economy playbook'
    },
    {
      image: '/images/c2pa.png',
      alt: 'C2PA',
      title: 'Advancing digital content transparency and authenticity'
    },
    {
      image: '/images/c2pa.png',
      alt: 'aaaa',
      title: '4.5 Rating across stores'
    }
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-5 pt-12.5 pb-21">
      <h2 className="text-[#1B1B1B] text-[31px] md:text-[55px] font-semibold leading-[100%] tracking-normal text-center px-10 md:px-0">
        An Experience worth talking about
      </h2>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-6 lg:gap-8.5">
        {articles.map((article) => (
          <div
            key={article.alt}
            className="space-y-4.5 md:space-y-6 lg:space-y-8"
          >
            <Image
              src={article.image}
              alt={article.alt}
              className="w-full"
              height={146}
              width={390}
            />
            <p className="text-[#1B1B1B] text-base md:text-lg lg:text-2xl text-center font-semibold lg:leading-8 tracking-[-2%] px-10">
              {article.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PressRelease;
