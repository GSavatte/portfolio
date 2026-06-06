'use client';

import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const options: any = {
    lerp: 0.1,
    duration: 1,
    smoothTouch: false,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}