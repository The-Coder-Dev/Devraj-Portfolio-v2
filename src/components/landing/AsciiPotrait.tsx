"use client";

import { useEffect, useState } from "react";

import AsciiImage from "@/components/originkit/ui/ascii-reveal";


const COLUMNS = 200;

const PORTRAIT = {
  src: "/me.avif",
  alt: "ASCII rendering of a figure in a mirrored visor helmet, facing forward.",
};

export const AsciiPortrait = () => {
  /*
   * The pointer reveal paints a photo under the cursor, and its loop runs for as
   * long as it is enabled — so it is worth not enabling it where there is no
   * cursor to follow. `reveal` is also a dependency of the component's setup
   * effect, so resolving the query before the first mount avoids decoding the
   * image and rebuilding the whole glyph field a second time.
   */
  const [reveal, setReveal] = useState<boolean | null>(null);

  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setReveal(pointer.matches);
    sync();
    pointer.addEventListener("change", sync);
    return () => pointer.removeEventListener("change", sync);
  }, []);

  if (reveal === null) return null;

  return (
    <AsciiImage
      image={PORTRAIT}
      fit="contain"
      columns={COLUMNS}
      contrast={37}
      inkColor="#ffffff"
      colorMode="image"
      reveal={false}
      style={{ position: "absolute", inset: 0 }}
    />
  );
};
