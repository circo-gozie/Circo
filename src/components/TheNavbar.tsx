'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';
import { scrollToDownload } from '@/utils/scrollTo';
import { NavBar, useCases } from './home/NavBar';
import { ArrowDownToLine, ChevronRight, Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose
} from '@/components/ui/drawer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { navLinks } from './home/NavBar';

const TheNavbar = () => {
  const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL || '#';
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
      className={`px-5 fixed inset-x-0 top-0 bg-white backdrop-blur-xl z-50 transition-all duration-700 ease-in-out ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className=" mx-auto md:border-[0.63px] border-[#FFFFFF17] md:px-10 py-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            {showLogoOnly ? (
              <Image
                src="/images/logo-icon-only.svg"
                alt="Logo"
                width={54}
                height={37}
              />
            ) : (
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={132}
                height={37}
              />
            )}
          </Link>
          <NavBar />
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <Button
                variant="ghost"
                onClick={() => {
                  window.location.href = LOGIN_URL;
                }}
                className=" "
              >
                Sign In <ChevronRight className="size-3 stroke-3" />
              </Button>
              <Button
                onClick={scrollToDownload}
                className=""
                variant="primary"
              >
                Download
                <ArrowDownToLine className="size-3 stroke-3" />
              </Button>
            </div>

            <Drawer>
              <DrawerTrigger className="md:hidden">
                <Menu />
              </DrawerTrigger>
              <DrawerContent className="md:hidden">
                <DrawerHeader>
                  <DrawerTitle className="flex justify-between w-full pb-4">
                    <Image
                      src="/images/logo.svg"
                      alt="Logo"
                      width={104}
                      height={87}
                    />

                    <DrawerClose>
                      <X />
                    </DrawerClose>
                  </DrawerTitle>

                  <div className="w-full">
                    <Accordion
                      type="single"
                      collapsible
                      className=" data-[state=open]:!bg-transparent"
                    >
                      <AccordionItem
                        value="products"
                        className="p-0 border-0 justify-normal data-[state=open]:!bg-transparent"
                      >
                        <AccordionTrigger className="text-xl !p-0 !h-fit justify-normal items-center">
                          Products
                        </AccordionTrigger>
                        <AccordionContent className="*:text-start space-y-4 pt-4">
                          {' '}
                          {useCases.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="use-cases"
                        className="p-0 border-0 justify-normal data-[state=open]:!bg-transparent"
                      >
                        <AccordionTrigger className="text-xl !p-0 !h-fit justify-normal items-center">
                          Use Cases
                        </AccordionTrigger>
                        <AccordionContent className="*:text-start space-y-4 pt-4">
                          {' '}
                          {useCases.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="flex flex-col text-start text-xl">
                      {navLinks.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="py-2 text-xl font-semibold"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </DrawerHeader>
                <DrawerFooter>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      window.location.href = LOGIN_URL;
                    }}
                    className=" w-full text-base font-semibold"
                  >
                    Sign In <ChevronRight className="size-3 stroke-3" />
                  </Button>
                  <Button
                    onClick={scrollToDownload}
                    className="w-full text-base font-semibold"
                    variant="primary"
                  >
                    Download <ArrowDownToLine className="size-3 stroke-3" />
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheNavbar;

function ListItem({ title, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <Link
        href={href}
        className="group/edit space-y-0.5"
      >
        <div className="text-sm leading-none group-hover/edit:text-primary font-medium">{title}</div>
        {/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p> */}
      </Link>
    </li>
  );
}
