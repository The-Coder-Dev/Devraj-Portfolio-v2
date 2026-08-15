"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

function LenisResizeHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const resize = () => lenis.resize();

    // catch late-loading content (images, fonts, etc.)
    window.addEventListener("load", resize);

    const ro = new ResizeObserver(resize);
    ro.observe(document.body);

    return () => {
      window.removeEventListener("load", resize);
      ro.disconnect();
    };
  }, [lenis]);

  return null;
}

export default function LenisProvider({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.5,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      <LenisResizeHandler />
      {children}
    </ReactLenis>
  );
}