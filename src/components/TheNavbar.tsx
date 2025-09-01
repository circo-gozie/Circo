'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';

const TheNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLogoOnly, setShowLogoOnly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);

      if (window.innerWidth < 768) {
        const heroSectionHeight = document.getElementById('hero')?.offsetHeight || 0;
        const pxFromBottom = 500;
        if (currentScrollY > heroSectionHeight - pxFromBottom) {
          setShowLogoOnly(true);
        } else {
          setShowLogoOnly(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`px-5 fixed inset-x-0 top-7.5 z-50 transition-all duration-700 ease-in-out ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-screen-xl mx-auto md:bg-[#8989898C] md:backdrop-blur-[94px] md:border-[0.63px] border-[#FFFFFF17] md:px-10 py-2.5 rounded-[18px]">
        <div className="flex justify-between items-center">
          <Link href="/">
            {showLogoOnly ? (
              <Image
                src="/images/logo-icon-only.svg"
                alt="Logo"
                width={32}
                height={37}
              />
            ) : (
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={112}
                height={37}
              />
            )}
          </Link>

          <div className="flex items-center gap-4">
            <button className="text-white font-semibold text-base py-4.5 px-11 hidden md:block">Sign In</button>
            <div className="hidden md:block">
              <Button>Create Account</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheNavbar;
