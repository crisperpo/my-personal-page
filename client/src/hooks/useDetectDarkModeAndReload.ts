import { useEffect, useState } from "react";

const useDetectDarkModeAndReload = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      const newDarkMode = event.matches;
      if (newDarkMode !== isDarkMode) {
        setIsDarkMode(newDarkMode);
        window.location.reload();
      }
    };

    // Add listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [isDarkMode]);
  return isDarkMode;
};

export default useDetectDarkModeAndReload;
