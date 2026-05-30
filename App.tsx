import { useTheme, ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Compliance from './components/Compliance';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { themeConfig } = useTheme();

  return (
    <div
      style={{
        background: themeConfig.bg,
        color: themeConfig.text,
        minHeight: '100vh',
        fontFamily: 'Poppins, Inter, sans-serif',
        transition: 'background 0.4s ease, color 0.4s ease',
      }}
    >
      <Navbar />
      <Hero />
      <TrustBar />
      <Stats />
      <About />
      <Services />
      <Partners />
      <Compliance />
      <Contact />
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const { themeConfig } = useTheme();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl text-white shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})`,
        boxShadow: `0 8px 24px ${themeConfig.primary}50`,
      }}
      title="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
