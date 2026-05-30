import { useTheme } from '../context/ThemeContext';
import { Building2, Award, Users, TrendingUp, MapPin, Phone, Mail } from 'lucide-react';

const milestones = [
  { year: '1995', event: 'Narainsons Investments Finance & Consultancy Pvt. Ltd. incorporated in Delhi' },
  { year: '2000s', event: 'Expanded financial services to businesses and individuals across NCR' },
  { year: '2015+', event: 'Digital transformation — partnered with Fintech companies across India' },
  { year: '2022', event: 'Launched CashTM & Turrant mobile lending platforms for instant personal loans' },
  { year: '2024', event: 'Pan-India reach with multiple fintech partnerships — Kredit724, KredSetu & more' },
];

const highlights = [
  {
    icon: <Building2 size={22} />,
    title: 'RBI Registered NBFC',
    desc: 'Fully compliant with RBI Act 1934 and NBFC Scale-Based Regulation frameworks.',
  },
  {
    icon: <Award size={22} />,
    title: 'CIN: U74899DL1995PTC067793',
    desc: 'Company limited by shares, active status with authorized capital of ₹1 Crore.',
  },
  {
    icon: <Users size={22} />,
    title: 'Customer-First Approach',
    desc: 'Customized financial solutions designed to meet individual and business needs.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Fintech Partnerships',
    desc: 'Strategic tie-ups with leading fintech partners for wider market reach.',
  },
];

export default function About() {
  const { themeConfig } = useTheme();

  return (
    <section
      id="about"
      className="py-24"
      style={{ background: themeConfig.bg, fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${themeConfig.badge}`}
          >
            Our Story
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: themeConfig.text }}
          >
            About Narainsons
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeConfig.textMuted }}>
            A premier financial services provider established in 1995, rooted in Delhi, committed to
            empowering individuals and businesses through accessible credit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Company Info */}
          <div className="space-y-8">
            <div
              className="rounded-3xl p-8 border shadow-xl"
              style={{
                background: themeConfig.bgCard,
                borderColor: themeConfig.border,
                boxShadow: `0 20px 60px -10px ${themeConfig.isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.08)'}`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})` }}
                >
                  N
                </div>
                <div>
                  <h3 className="font-bold text-xl" style={{ color: themeConfig.text }}>
                    Narainsons Investments Finance & Consultancy Pvt. Ltd.
                  </h3>
                  <p className="text-sm font-medium" style={{ color: themeConfig.textMuted }}>
                    Non-Banking Financial Company (NBFC)
                  </p>
                </div>
              </div>

              <p className="leading-relaxed mb-6" style={{ color: themeConfig.textMuted }}>
                The core objective of Narainsons Investments Finance And Consultancy Private Limited is to
                deliver financing solutions and provide loans to end customers, through offline or completely
                digital and secure process. The company is registered in accordance with applicable laws as a
                non-deposit taking non-banking financial company (NBFC) with the Reserve Bank of India (RBI).
              </p>
              <p className="leading-relaxed" style={{ color: themeConfig.textMuted }}>
                NBFC provides Personal and Business Loans and further, to make lending for customers more
                affordable and easily accessible with higher market reach, has recently entered into arrangement
                with Fintech Partners for small personal loan customers throughout India.
              </p>

              {/* Contact Info */}
              <div
                className="mt-6 pt-6 space-y-3"
                style={{ borderTop: `1px solid ${themeConfig.border}` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: themeConfig.primaryLight }}
                  >
                    <MapPin size={16} style={{ color: themeConfig.primary }} />
                  </div>
                  <span className="text-sm" style={{ color: themeConfig.textMuted }}>
                    1/12, First Floor, Desh Bandhu Gupta Road, Karol Bagh, New Delhi – 110005
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: themeConfig.primaryLight }}
                  >
                    <Phone size={16} style={{ color: themeConfig.primary }} />
                  </div>
                  <span className="text-sm" style={{ color: themeConfig.textMuted }}>
                    +91 9818459292
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: themeConfig.primaryLight }}
                  >
                    <Mail size={16} style={{ color: themeConfig.primary }} />
                  </div>
                  <span className="text-sm" style={{ color: themeConfig.textMuted }}>
                    collection.cashtm@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: themeConfig.bgCard,
                    borderColor: themeConfig.border,
                    boxShadow: `0 4px 20px ${themeConfig.isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: themeConfig.primaryLight, color: themeConfig.primary }}
                  >
                    {h.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: themeConfig.text }}>
                    {h.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: themeConfig.textMuted }}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: themeConfig.text }}>
              Our Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-0.5"
                style={{ background: `linear-gradient(to bottom, ${themeConfig.primary}, transparent)` }}
              />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-lg z-10"
                      style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})` }}
                    >
                      {m.year.replace('s', '').replace('+', '')}
                    </div>
                    <div
                      className="flex-1 rounded-2xl p-4 border"
                      style={{
                        background: themeConfig.bgCard,
                        borderColor: themeConfig.border,
                      }}
                    >
                      <span
                        className="text-xs font-bold"
                        style={{ color: themeConfig.primary }}
                      >
                        {m.year}
                      </span>
                      <p className="text-sm mt-1" style={{ color: themeConfig.text }}>
                        {m.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Identity Card */}
            <div
              className="rounded-3xl p-6 border"
              style={{
                background: themeConfig.bgSection,
                borderColor: themeConfig.border,
              }}
            >
              <h4 className="font-bold mb-4" style={{ color: themeConfig.text }}>
                Corporate Identity
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'CIN', value: 'U74899DL1995PTC067793' },
                  { label: 'Status', value: 'Active' },
                  { label: 'Category', value: 'Company limited by Shares' },
                  { label: 'Industry', value: 'Financial Intermediation' },
                  { label: 'Authorized Capital', value: '₹10,000,000' },
                  { label: 'Regulator', value: 'Reserve Bank of India (RBI)' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: themeConfig.textMuted }}>
                      {item.label}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: themeConfig.text }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
