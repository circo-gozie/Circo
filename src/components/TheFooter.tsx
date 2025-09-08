import Image from 'next/image';
import Link from 'next/link';
import Icon from './ui/Icon';

const TheFooter = () => {
  const navs = [
    {
      category: 'Legal',
      children: [
        {
          name: 'Privacy Policy',
          href: ''
        },
        {
          name: 'Terms & Conditions',
          href: ''
        },
        {
          name: 'Child Safety Policy',
          href: ''
        }
      ]
    },
    {
      category: 'Resources',
      children: [
        {
          name: 'Help Center',
          href: ''
        },
        {
          name: 'Community Guidelines',
          href: ''
        }
      ]
    }
  ];
  const socials = [
    {
      name: 'linkedIn',
      href: 'https://www.linkedin.com/company/circo-africa/'
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com/@CircoAfricaapp'
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/circo.live_'
    },
    {
      name: 'x',
      href: 'https://x.com/circo_live'
    }
  ];

  return (
    <footer className="bg-[#040404] py-10">
      <div className="max-w-screen-xl mx-auto px-5 md:flex justify-between">
        <div className="mb-14.5 md:mb-0 lg:pr-16">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={112}
              height={37}
            />
          </Link>
          <p className="text-[#E0E0E0] tracking-[-3%] mt-5 md:mt-7.5">Experience like never before</p>
        </div>

        {navs.map((nav) => (
          <div
            key={nav.category}
            className="tracking-[-3%] mb-12"
          >
            <span className="text-[#B0B0B0]">{nav.category}</span>
            <div className="mt-7.5 md:mt-6 space-y-7">
              {nav.children.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#FF2F2F] transition-colors duration-200 ease-in-out"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="tracking-[-3%] mb-12">
          <span className="text-[#B0B0B0]">Connect</span>
          <div className="mt-7.5 md:mt-6 flex gap-7">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
              >
                <Icon
                  name={social.name}
                  size={4.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
