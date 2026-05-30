import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'blue' | 'green' | 'purple' | 'orange' | 'dark';

export interface ThemeConfig {
  name: string;
  label: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  accent: string;
  bg: string;
  bgCard: string;
  bgSection: string;
  text: string;
  textMuted: string;
  border: string;
  gradient: string;
  gradientHero: string;
  navBg: string;
  navText: string;
  buttonPrimary: string;
  buttonSecondary: string;
  badge: string;
  shadow: string;
  isDark: boolean;
}

export const themes: Record<Theme, ThemeConfig> = {
  blue: {
    name: 'blue',
    label: '💙 Royal Blue',
    primary: '#1a56db',
    primaryDark: '#1e429f',
    primaryLight: '#e8f0fe',
    secondary: '#0ea5e9',
    accent: '#f59e0b',
    bg: '#f8faff',
    bgCard: '#ffffff',
    bgSection: '#f0f4ff',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    gradient: 'from-blue-600 to-blue-800',
    gradientHero: 'from-blue-900 via-blue-800 to-indigo-900',
    navBg: 'bg-white/95 backdrop-blur-md shadow-md',
    navText: 'text-gray-800',
    buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
    buttonSecondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    shadow: 'shadow-blue-100',
    isDark: false,
  },
  green: {
    name: 'green',
    label: '💚 Emerald Green',
    primary: '#059669',
    primaryDark: '#047857',
    primaryLight: '#ecfdf5',
    secondary: '#10b981',
    accent: '#f59e0b',
    bg: '#f0fdf8',
    bgCard: '#ffffff',
    bgSection: '#ecfdf5',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#d1fae5',
    gradient: 'from-emerald-600 to-emerald-800',
    gradientHero: 'from-emerald-900 via-green-800 to-teal-900',
    navBg: 'bg-white/95 backdrop-blur-md shadow-md',
    navText: 'text-gray-800',
    buttonPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    buttonSecondary: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50',
    badge: 'bg-emerald-100 text-emerald-700',
    shadow: 'shadow-emerald-100',
    isDark: false,
  },
  purple: {
    name: 'purple',
    label: '💜 Royal Purple',
    primary: '#7c3aed',
    primaryDark: '#6d28d9',
    primaryLight: '#f5f3ff',
    secondary: '#a855f7',
    accent: '#f59e0b',
    bg: '#faf8ff',
    bgCard: '#ffffff',
    bgSection: '#f5f3ff',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#ede9fe',
    gradient: 'from-violet-600 to-purple-800',
    gradientHero: 'from-violet-900 via-purple-800 to-indigo-900',
    navBg: 'bg-white/95 backdrop-blur-md shadow-md',
    navText: 'text-gray-800',
    buttonPrimary: 'bg-violet-600 hover:bg-violet-700 text-white',
    buttonSecondary: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50',
    badge: 'bg-violet-100 text-violet-700',
    shadow: 'shadow-violet-100',
    isDark: false,
  },
  orange: {
    name: 'orange',
    label: '🧡 Saffron Orange',
    primary: '#ea580c',
    primaryDark: '#c2410c',
    primaryLight: '#fff7ed',
    secondary: '#f97316',
    accent: '#eab308',
    bg: '#fffbf5',
    bgCard: '#ffffff',
    bgSection: '#fff7ed',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#fed7aa',
    gradient: 'from-orange-500 to-orange-700',
    gradientHero: 'from-orange-900 via-orange-800 to-red-900',
    navBg: 'bg-white/95 backdrop-blur-md shadow-md',
    navText: 'text-gray-800',
    buttonPrimary: 'bg-orange-600 hover:bg-orange-700 text-white',
    buttonSecondary: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
    shadow: 'shadow-orange-100',
    isDark: false,
  },
  dark: {
    name: 'dark',
    label: '🖤 Midnight Dark',
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    primaryLight: '#1e3a5f',
    secondary: '#60a5fa',
    accent: '#f59e0b',
    bg: '#0f172a',
    bgCard: '#1e293b',
    bgSection: '#1a2744',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    border: '#334155',
    gradient: 'from-blue-500 to-blue-700',
    gradientHero: 'from-slate-900 via-blue-950 to-slate-900',
    navBg: 'bg-slate-900/95 backdrop-blur-md shadow-md shadow-black/30',
    navText: 'text-slate-100',
    buttonPrimary: 'bg-blue-500 hover:bg-blue-600 text-white',
    buttonSecondary: 'border-2 border-blue-400 text-blue-400 hover:bg-blue-950',
    badge: 'bg-blue-900 text-blue-300',
    shadow: 'shadow-blue-900/50',
    isDark: true,
  },
};

interface ThemeContextType {
  theme: Theme;
  themeConfig: ThemeConfig;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'blue',
  themeConfig: themes.blue,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('blue');

  useEffect(() => {
    const saved = localStorage.getItem('narainsons-theme') as Theme;
    if (saved && themes[saved]) setThemeState(saved);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('narainsons-theme', t);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeConfig: themes[theme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
