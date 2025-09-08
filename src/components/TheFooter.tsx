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
          href: '/legal/privacy-policy'
        },
        {
          name: 'Terms & Conditions',
          href: '/legal/terms-and-conditions'
        },
        {
          name: 'Child Safety Policy',
          href: '/legal/child-safety-policy'
        }
      ]
    },
    {
      category: 'Resources',
      children: [
        // {
        //   name: 'Help Center',
        //   href: '/help-center'
        // },
        {
          name: 'Community Guidelines',
          href: '/legal/community-guidelines'
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
      <div className="max-w-screen-xl mx-auto px-5 md:flex gap-5 justify-between">
        <div className="mb-14.5 md:mb-0 lg:pr-8">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={210}
              height={82}
            />
          </Link>
          <p className="text-[#E0E0E0] tracking-[-3%] mt-5 md:mt-7.5 text-xl md:text-3xl">
            Experience like never before
          </p>
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
                    className="text-white hover:text-[#FF2F2F] transition-colors duration-200 ease-in-out text-xl"
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
                  size={6}
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
