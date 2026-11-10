import { useEffect, useState } from "react";

export type ColorMode = "light" | "dark";

const STORAGE_KEY = "portfolio-mode";
const THEME_COLORS: Record<ColorMode, string> = { light: "#f8fafc", dark: "#020617" };

function getInitialMode(): ColorMode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // localStorage indisponible : repli sur la préférence système
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Mode clair / sombre persistant, initialisé depuis la préférence système.
 * La classe `dark` est posée sur <html> pour que le fond de page suive aussi.
 */
export function useColorMode() {
  const [mode, setMode] = useState<ColorMode>(getInitialMode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    root.style.colorScheme = mode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[mode]);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // ignoré
    }
  }, [mode]);

  const toggleMode = () => setMode((value) => (value === "light" ? "dark" : "light"));

  return { mode, toggleMode };
}
