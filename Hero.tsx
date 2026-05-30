import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Shield, Clock, IndianRupee, CheckCircle, Download, Star } from 'lucide-react';

const stats = [
  { value: '1995', label: 'Est. Year', icon: '🏛️' },
  { value: 'RBI', label: 'Registered NBFC', icon: '🏦' },
  { value: '₹2Cr+', label: 'Authorized Capital', icon: '💰' },
  { value: 'PAN India', label: 'Coverage', icon: '🗺️' },
];

const badges = [
  { icon: <Shield size={14} />, text: 'RBI Certified' },
  { icon: <CheckCircle size={14} />, text: 'Trusted Since 1995' },
  { icon: <Star size={14} />, text: 'Transparent Rates' },
];

export default function Hero() {
  const { themeConfig } = useTheme();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${themeConfig.gradientHero}`}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: themeConfig.secondary }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: themeConfig.accent }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20 backdrop-blur-sm"
                >
                  {b.icon}
                  {b.text}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Trusted{' '}
                <span
                  className="relative inline-block"
                  style={{
                    background: `linear-gradient(135deg, #fbbf24, #f59e0b)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Financial
                </span>{' '}
                Partner
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
                Narainsons Investments Finance & Consultancy Pvt. Ltd. — RBI registered NBFC since 1995.
                Providing accessible, transparent and customized financial solutions across India.
              </p>
            </div>

            {/* Loan Range */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 w-fit">
              <div className="bg-amber-400 rounded-xl p-2">
                <IndianRupee size={20} className="text-amber-900" />
              </div>
              <div>
                <p className="text-white/70 text-xs font-medium">Loan Amount</p>
                <p className="text-white font-bold text-lg">₹2,000 – ₹60,000</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="bg-green-400 rounded-xl p-2">
                <Clock size={20} className="text-green-900" />
              </div>
              <div>
                <p className="text-white/70 text-xs font-medium">Tenure</p>
                <p className="text-white font-bold text-lg">95d – 12 Months</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('#services')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${themeConfig.accent}, #d97706)`, color: '#1a1a1a' }}
              >
                Explore Services
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base bg-white/15 border border-white/30 text-white hover:bg-white/25 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Download size={18} />
                Download CashTM App
              </button>
            </div>
          </div>

          {/* Right Content — Stats Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})` }}
                >
                  N
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Narainsons CashTM</h3>
                  <p className="text-white/60 text-sm">RBI Registered NBFC</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-white font-bold text-xl">{stat.value}</div>
                    <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick Features */}
              <div className="space-y-3">
                {[
                  { icon: '⚡', text: 'Instant digital loan approval' },
                  { icon: '📄', text: '100% paperless process' },
                  { icon: '🔒', text: 'Secure & encrypted platform' },
                  { icon: '💳', text: 'No collateral required' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2.5 border border-white/10">
                    <span className="text-lg">{f.icon}</span>
                    <span className="text-white/80 text-sm font-medium">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* CIN */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs text-center">
                  CIN: U74899DL1995PTC067793 · Karol Bagh, New Delhi
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 rounded-2xl px-4 py-2 shadow-xl font-bold text-sm">
              🏆 Est. 1995
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo('#about')}
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Discover More</span>
            <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
