"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-20 rounded-full bg-white/10" />;
  }

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="glass flex h-9 items-center gap-2 rounded-full px-3 text-xs font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 dark:text-cloud"
    >
      <span>{current === "dark" ? "Dark" : "Light"}</span>
      <span className="h-2.5 w-2.5 rounded-full bg-aurora" />
    </button>
  );
}
