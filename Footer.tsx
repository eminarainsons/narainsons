import { useTheme, themes, Theme } from '../context/ThemeContext';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#compliance' },
  { label: 'Terms & Conditions', href: '#compliance' },
  { label: 'Refund Policy', href: '#compliance' },
  { label: 'Fair Practice Code', href: '#compliance' },
  { label: 'Interest Rate Policy', href: '#compliance' },
  { label: 'KYC Policy', href: '#compliance' },
];

const platforms = [
  { name: 'CashTM', emoji: '💳', url: 'narainsons.in' },
  { name: 'Turrant', emoji: '⚡', url: 'turrant.in' },
  { name: 'Kredit724', emoji: '7️⃣', url: 'kredit724.asia' },
  { name: 'KredSetu', emoji: '🔗', url: 'kredsetu.in' },
  { name: 'RupeeGet', emoji: '₹', url: 'clarkstonllp.com' },
];

export default function Footer() {
  const { themeConfig, setTheme, theme } = useTheme();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: themeConfig.isDark ? '#0a0f1e' : '#0f172a',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
                style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})` }}
              >
                N
              </div>
              <div>
                <div className="font-bold text-lg text-white leading-tight">Narainsons</div>
                <div className="text-xs text-white/50 leading-tight">CashTM · NBFC since 1995</div>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Narainsons Investments Finance & Consultancy Pvt. Ltd. — RBI registered NBFC delivering
              transparent, accessible financial solutions since 1995.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-white/40 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-white/50">
                  1/12, First Floor, Desh Bandhu Gupta Road,<br />
                  Karol Bagh, New Delhi – 110005
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-white/40 flex-shrink-0" />
                <span className="text-xs text-white/50">+91 9818459292</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-white/40 flex-shrink-0" />
                <span className="text-xs text-white/50">collection.cashtm@gmail.com</span>
              </div>
            </div>

            {/* RBI Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
              <span className="text-base">🏦</span>
              <div>
                <p className="text-xs font-semibold text-white/70">RBI Registered NBFC</p>
                <p className="text-xs text-white/40">CIN: U74899DL1995PTC067793</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/80 transition-colors"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">Legal & Policies</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/80 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">Our Platforms</h4>
              <div className="space-y-2">
                {platforms.map((p) => (
                  <div key={p.name} className="flex items-center gap-2">
                    <span className="text-sm">{p.emoji}</span>
                    <span className="text-xs text-white/50">
                      {p.name}
                    </span>
                    <ExternalLink size={10} className="text-white/25 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Theme Switcher & CTA */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">Customize Theme</h4>
            <div className="space-y-2 mb-8">
              {(Object.keys(themes) as Theme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 border ${
                    theme === t
                      ? 'border-white/30 bg-white/15 text-white'
                      : 'border-white/5 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full border-2 border-white/30 flex-shrink-0"
                    style={{ background: themes[t].primary }}
                  />
                  {themes[t].label}
                  {theme === t && <span className="ml-auto text-xs">✓</span>}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo('#contact')}
              className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105 hover:shadow-xl shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})`,
              }}
            >
              Apply for Loan →
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center md:text-left">
            © {new Date().getFullYear()} Narainsons Investments Finance & Consultancy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Non-Deposit Taking NBFC',
              'RBI Act 1934',
              'NBFC-ND Compliant',
            ].map((tag) => (
              <span key={tag} className="text-xs text-white/25 flex items-center gap-1">
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/20">CashTM narainsons.in</p>
        </div>
      </div>
    </footer>
  );
}
