'use client';

import { MenuItem } from '@/types/legal';

interface PolicyScrollMenuProps {
  menuItems: MenuItem[];
  activeSection: string | null;
  onScrollTo: (id: string) => void;
}

export default function PolicyScrollMenu({ menuItems, activeSection, onScrollTo }: PolicyScrollMenuProps) {
  const isActive = (id: string) => id === activeSection;

  return (
    <nav className="w-full md:sticky md:top-6 md:w-[inherit]">
      <ul className="relative w-full p-4">
        {menuItems.map((item, index) => (
          <li
            key={item._id}
            className="relative w-full pl-4"
          >
            <div
              className={`absolute left-0 top-0 h-full w-1 ${
                isActive(item._id) ? 'bg-circoRed2 rounded-lg' : 'bg-circoRed2/20'
              } ${!isActive(item._id) && index === 0 ? 'rounded-t-lg' : ''} ${
                !isActive(item._id) && index === menuItems.length - 1 ? 'rounded-b-lg' : ''
              }`}
            />
            <button
              onClick={() => onScrollTo(item._id)}
              className={`block cursor-pointer py-2 text-left w-full ${
                isActive(item._id) ? 'text-red-500' : 'text-black'
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
