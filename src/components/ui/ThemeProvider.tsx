"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Monkey-patch window.matchMedia client-side to safeguard next-themes from null errors
if (typeof window !== "undefined") {
  try {
    if (!window.matchMedia) {
      (window as any).matchMedia = () => ({
        matches: false,
        media: '',
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      });
    } else {
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = (query) => {
        try {
          const res = originalMatchMedia(query);
          if (!res) {
            return {
              matches: false,
              media: query,
              onchange: null,
              addListener: () => {},
              removeListener: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              dispatchEvent: () => false,
            } as any;
          }
          // Ensure addEventListener is polyfilled if missing on returned object
          if (!res.addEventListener) {
            res.addEventListener = (type: string, listener: any) => {
              if (res.addListener) res.addListener(listener);
            };
            res.removeEventListener = (type: string, listener: any) => {
              if (res.removeListener) res.removeListener(listener);
            };
          }
          return res;
        } catch (e) {
          return {
            matches: false,
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
          } as any;
        }
      };
    }
  } catch (e) {
    console.warn("Failed to patch window.matchMedia:", e);
  }
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
