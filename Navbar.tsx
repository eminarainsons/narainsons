import { useState, useEffect } from 'react';
import { useTheme, themes, Theme } from '../context/ThemeContext';
import { Menu, X, ChevronDown, Palette } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, themeConfig, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? themeConfig.navBg : 'bg-transparent'
      }`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('#home')}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
              style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})` }}
            >
              N
            </div>
            <div>
              <div
                className={`font-bold text-lg leading-tight ${scrolled ? (themeConfig.isDark ? 'text-white' : 'text-gray-900') : 'text-white'}`}
              >
                Narainsons
              </div>
              <div
                className={`text-xs leading-tight font-medium ${scrolled ? (themeConfig.isDark ? 'text-gray-300' : 'text-gray-500') : 'text-white/80'}`}
              >
                CashTM · NBFC
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  scrolled
                    ? themeConfig.isDark
                      ? 'text-slate-200 hover:text-white hover:bg-white/10'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Picker */}
            <div className="relative">
              <button
                onClick={() => setThemePickerOpen(!themePickerOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? themeConfig.isDark
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                <Palette size={16} />
                <span className="hidden sm:inline">Theme</span>
                <ChevronDown size={14} className={`transition-transform ${themePickerOpen ? 'rotate-180' : ''}`} />
              </button>

              {themePickerOpen && (
                <div
                  className={`absolute right-0 top-12 w-52 rounded-2xl shadow-2xl border p-2 z-50 ${
                    themeConfig.isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
                  }`}
                >
                  <p className={`text-xs font-semibold px-2 py-1 mb-1 ${themeConfig.isDark ? 'text-slate-400' : 'text-gray-400'}`}>
                    Select Theme
                  </p>
                  {(Object.keys(themes) as Theme[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => { setTheme(t); setThemePickerOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all duration-150 ${
                        theme === t
                          ? themeConfig.isDark ? 'bg-blue-600/30 text-blue-300' : 'bg-blue-50 text-blue-700 font-semibold'
                          : themeConfig.isDark ? 'text-slate-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                        style={{ background: themes[t].primary }}
                      />
                      {themes[t].label}
                      {theme === t && <span className="ml-auto">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('#contact')}
              className={`hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg ${
                scrolled
                  ? themeConfig.buttonPrimary
                  : 'bg-white text-gray-900 hover:bg-gray-50'
              }`}
            >
              Apply Now
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? themeConfig.isDark ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden border-t ${
            themeConfig.isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  themeConfig.isDark
                    ? 'text-slate-200 hover:bg-slate-800'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className={`w-full text-center mt-3 px-5 py-3 rounded-xl text-sm font-semibold shadow-md transition-all ${themeConfig.buttonPrimary}`}
            >
              Apply Now →
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {themePickerOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setThemePickerOpen(false)} />
      )}
    </nav>
  );
}
