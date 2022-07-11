import { useEffect, useState } from "react";

/**
 * Attach an event listener to the "prefers-color-scheme" media query
 * @returns True if "dark" theme is preferred, false otherwise
 */
export const useDetectTheme = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const mediaQueryListener = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mediaQueryListener);

    return () => darkThemeMq.removeEventListener("change", mediaQueryListener);
  }, []);

  return isDarkTheme;
};
