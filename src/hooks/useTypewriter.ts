"use client";

import { useEffect, useMemo, useState } from "react";

export function useTypewriter(text: string, speed = 42) {
  const [display, setDisplay] = useState("");

  const done = useMemo(
    () => Boolean(text) && display.length >= text.length,
    [text, display]
  );

  useEffect(() => {
    if (!text) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => {
      window.clearInterval(id);
      setDisplay("");
    };
  }, [text, speed]);

  return { display, done };
}
