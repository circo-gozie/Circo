'use client';

import { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  list: ({ children }) => {
    return <ul className="custom-ul-class">{children}</ul>;
  },
  listItem: ({ children }) => {
    return <li className="custom-li-class my-4">{children}</li>;
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-medium mb-2">{children}</h3>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>
  }
};
