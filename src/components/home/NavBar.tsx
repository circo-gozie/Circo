'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

export const useCases: { title: string; href: string; description: string }[] = [
  {
    title: 'UGC Creators',
    href: '/ugc',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Podcasters',
    href: '/podcasters',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Musicians & Performers',
    href: '/musicians',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Community Leads',
    href: '#',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Digital Enterpreneurs',
    href: '#',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Enterprises',
    href: '#',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Events & Conferences',
    href: '#',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Production Houses',
    href: '#',
    description: 'Maximizing your access plans to suit'
  }
];

export const navLinks: { title: string; href: string; description: string }[] = [
  {
    title: 'Privacy',
    href: '#',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Help Center',
    href: '#',
    description: 'Maximizing your access plans to suit'
  },
  {
    title: 'Blog',
    href: '#',
    description: 'Maximizing your access plans to suit'
  }
];

export function NavBar() {
  return (
    <NavigationMenu
      viewport={false}
      className="hidden md:block"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="-translate-x-1/9">
            <div className="inline-flex gap-12">
              <div className="w-44 grow bg-primary/40 rounded-lg"></div>
              <ul className="grid w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {useCases.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
          <NavigationMenuContent className="-translate-x-1/4">
            <div className="inline-flex gap-12">
              <div className="w-44 grow bg-teal-800 rounded-lg"></div>
              <ul className="grid w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {useCases.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
          >
            <Link
              href="/docs"
              className="!text-base font-medium"
            >
              Privacy
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
          >
            <Link
              href="/docs"
              className="!text-base font-medium"
            >
              Help Center
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
          >
            <Link
              href="/docs"
              className="!text-base font-medium"
            >
              Blog
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="group/edit space-y-0.5"
        >
          <div className="text-base leading-none group-hover/edit:text-primary font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
