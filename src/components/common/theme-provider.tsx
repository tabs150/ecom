"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from 'react';
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Render children without ThemeProvider during SSR
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}