import { useTheme } from '../context/ThemeContext';
import { Smartphone, Briefcase, User, BarChart3, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <User size={26} />,
    emoji: '👤',
    title: 'Personal Loans',
    subtitle: 'Instant Digital Loans',
    desc: 'Quick personal loans for individuals with minimal documentation. Paperless process with instant approval and disbursement to your bank account.',
    features: ['₹2,000 – ₹60,000 loan range', 'No collateral required', '95 days – 12 months tenure', 'Competitive interest rates'],
    tag: 'Most Popular',
    tagColor: '#f59e0b',
  },
  {
    icon: <Briefcase size={26} />,
    emoji: '💼',
    title: 'Business Loans',
    subtitle: 'SME & Corporate Finance',
    desc: 'Tailored business financing solutions for SMEs, startups, and corporates. Flexible repayment terms designed to match your cash flows.',
    features: ['Customized loan structures', 'Flexible repayment terms', 'Quick sanction process', 'Risk-based pricing'],
    tag: 'Business',
    tagColor: '#3b82f6',
  },
  {
    icon: <Smartphone size={26} />,
    emoji: '📱',
    title: 'CashTM App',
    subtitle: 'Digital Lending Platform',
    desc: 'Download the CashTM mobile app for instant loan applications, repayment tracking, and 24/7 access to your loan account.',
    features: ['Instant loan application', 'Real-time tracking', 'Secure payments', 'UPI & QR code payments'],
    tag: 'Digital',
    tagColor: '#8b5cf6',
  },
  {
    icon: <BarChart3 size={26} />,
    emoji: '📊',
    title: 'Financial Consultancy',
    subtitle: 'Expert Advisory Services',
    desc: 'Professional financial planning and consultancy services for individuals and businesses. Leverage 30+ years of industry expertise.',
    features: ['Credit assessment', 'Risk management', 'Financial planning', 'Investment guidance'],
    tag: 'Advisory',
    tagColor: '#10b981',
  },
];

const loanSteps = [
  { step: '01', title: 'Apply Online', desc: 'Download CashTM app or visit our website and fill the quick application form.', icon: '📱' },
  { step: '02', title: 'Submit Documents', desc: 'Upload your PAN, Aadhaar and income proof digitally — fully paperless.', icon: '📄' },
  { step: '03', title: 'Get Approved', desc: 'Our AI-powered system evaluates your application and gives instant decision.', icon: '✅' },
  { step: '04', title: 'Receive Funds', desc: 'Loan amount disbursed directly to your bank account or e-wallet.', icon: '💰' },
];

export default function Services() {
  const { themeConfig } = useTheme();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="py-24"
      style={{ background: themeConfig.bgSection, fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${themeConfig.badge}`}>
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: themeConfig.text }}>
            Our Financial Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeConfig.textMuted }}>
            Comprehensive lending solutions tailored for every financial need — from instant personal loans
            to business financing.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              style={{
                background: themeConfig.bgCard,
                borderColor: themeConfig.border,
                boxShadow: `0 4px 20px ${themeConfig.isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'}`,
              }}
            >
              {/* Tag */}
              <span
                className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                style={{ background: service.tagColor }}
              >
                {service.tag}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})`, color: 'white' }}
              >
                {service.icon}
              </div>

              <h3 className="font-bold text-lg mb-1" style={{ color: themeConfig.text }}>
                {service.title}
              </h3>
              <p className="text-xs font-semibold mb-3" style={{ color: themeConfig.primary }}>
                {service.subtitle}
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: themeConfig.textMuted }}>
                {service.desc}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs" style={{ color: themeConfig.textMuted }}>
                    <CheckCircle size={13} style={{ color: themeConfig.primary, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
                style={{ color: themeConfig.primary }}
              >
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div
          className="rounded-3xl p-8 md:p-12 border"
          style={{
            background: themeConfig.bgCard,
            borderColor: themeConfig.border,
            boxShadow: `0 20px 60px ${themeConfig.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.07)'}`,
          }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2" style={{ color: themeConfig.text }}>
              How It Works
            </h3>
            <p style={{ color: themeConfig.textMuted }}>
              Get your loan in 4 simple steps — completely online
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div
              className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 z-0"
              style={{ background: `linear-gradient(to right, ${themeConfig.primary}, ${themeConfig.primaryDark})`, opacity: 0.2 }}
            />

            {loanSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})` }}
                >
                  {step.icon}
                </div>
                <span
                  className="text-xs font-bold tracking-wider mb-2"
                  style={{ color: themeConfig.primary }}
                >
                  STEP {step.step}
                </span>
                <h4 className="font-bold mb-2" style={{ color: themeConfig.text }}>
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: themeConfig.textMuted }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Strip */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { icon: <Shield size={20} />, title: 'RBI Regulated', desc: 'Fully compliant NBFC under RBI Act 1934' },
            { icon: <Clock size={20} />, title: 'Fast Disbursal', desc: 'Funds credited within hours of approval' },
            { icon: <CheckCircle size={20} />, title: 'Transparent Rates', desc: 'Clear interest & penal rate disclosure' },
          ].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl p-5 border"
              style={{ background: themeConfig.bgCard, borderColor: themeConfig.border }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: themeConfig.primaryLight, color: themeConfig.primary }}
              >
                {b.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm" style={{ color: themeConfig.text }}>{b.title}</h4>
                <p className="text-xs mt-0.5" style={{ color: themeConfig.textMuted }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
