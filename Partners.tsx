import { useTheme } from '../context/ThemeContext';
import { ExternalLink, CheckCircle } from 'lucide-react';

const partners = [
  {
    name: 'Kredit724',
    logo: '7️⃣2️⃣4️⃣',
    fullName: 'Tardus Tech Private Limited',
    platform: 'kredit724.asia',
    address: 'Tower A, Ithum IT Park, Noida, UP',
    desc: 'Narainsons has partnered with Tardus Tech Private Limited to operate the Kredit724 intermediary lending platform, extending reach across India.',
    color: '#6366f1',
    features: ['Instant loan approval', 'Digital KYC', 'UPI disbursement'],
  },
  {
    name: 'KredSetu',
    logo: '💳',
    fullName: 'Resilience Engineering Private Limited',
    platform: 'kredsetu.in',
    address: 'India',
    desc: 'Strategic partnership with Resilience Engineering for the KredSetu intermediary platform, enabling broader fintech-driven lending services.',
    color: '#0ea5e9',
    features: ['SME lending', 'Credit scoring', 'Secure platform'],
  },
  {
    name: 'RupeeGet',
    logo: '₹',
    fullName: 'Clarkston Consultancy LLP',
    platform: 'clarkstonllp.com',
    address: 'Mission Chowk, Rohtak Road, Sonepat, Haryana',
    desc: 'Partnered with Clarkston Consultancy LLP to operate the RupeeGet intermediary platform for accessible personal lending solutions.',
    color: '#10b981',
    features: ['Personal loans', 'Quick processing', 'Flexible tenure'],
  },
  {
    name: 'Turrant',
    logo: '⚡',
    fullName: 'NARAINSONS INVESTMENTS FINANCE & CONSULTANCY PVT LTD',
    platform: 'turrant.in',
    address: 'Karol Bagh, New Delhi',
    desc: 'Turrant is the flagship digital lending platform operated directly by Narainsons — reliable and responsible lending for all eligible Indian citizens.',
    color: '#f59e0b',
    features: ['₹2K–₹60K loans', '0%–29.95% interest', 'Pan-India coverage'],
  },
];

const fintechAdvantages = [
  { icon: '🤝', title: 'Strong Partnerships', desc: 'Multiple fintech tie-ups for wider customer reach' },
  { icon: '🔗', title: 'API Integration', desc: 'Seamless digital lending infrastructure' },
  { icon: '🛡️', title: 'RBI Compliant', desc: 'All platforms operate under RBI guidelines' },
  { icon: '📊', title: 'Data Analytics', desc: 'AI-powered credit assessment across partners' },
];

export default function Partners() {
  const { themeConfig } = useTheme();

  return (
    <section
      id="partners"
      className="py-24"
      style={{ background: themeConfig.bg, fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${themeConfig.badge}`}>
            Our Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: themeConfig.text }}>
            Fintech Partners & Platforms
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeConfig.textMuted }}>
            Narainsons has strategically partnered with leading fintech companies to deliver
            seamless digital lending solutions across India.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              style={{
                background: themeConfig.bgCard,
                borderColor: themeConfig.border,
                boxShadow: `0 4px 20px ${themeConfig.isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'}`,
              }}
            >
              <div className="flex items-start gap-5">
                {/* Logo */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${partner.color}, ${partner.color}cc)` }}
                >
                  {partner.logo}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-xl" style={{ color: themeConfig.text }}>
                      {partner.name}
                    </h3>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: partner.color }}
                    />
                  </div>
                  <p className="text-xs font-medium mb-1" style={{ color: partner.color }}>
                    {partner.fullName}
                  </p>
                  <a
                    href={`https://${partner.platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs hover:underline transition-colors"
                    style={{ color: themeConfig.textMuted }}
                  >
                    🌐 {partner.platform}
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <p className="text-sm leading-relaxed mt-5" style={{ color: themeConfig.textMuted }}>
                {partner.desc}
              </p>

              <div className="flex items-center gap-1.5 mt-3 text-xs" style={{ color: themeConfig.textMuted }}>
                <span>📍</span>
                <span>{partner.address}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {partner.features.map((f, j) => (
                  <span
                    key={j}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium"
                    style={{ background: `${partner.color}15`, color: partner.color }}
                  >
                    <CheckCircle size={11} />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div
          className="rounded-3xl p-8 md:p-10 border mb-12"
          style={{
            background: `linear-gradient(135deg, ${themeConfig.primary}15, ${themeConfig.primaryDark}10)`,
            borderColor: `${themeConfig.primary}30`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: themeConfig.text }}>
                💳 Easy Loan Repayment
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: themeConfig.textMuted }}>
                Repay your loan hassle-free using QR code or bank transfer. Simply scan, enter your
                outstanding amount, and complete payment in seconds.
              </p>
              <div className="space-y-3">
                {[
                  'Search your outstanding amount using Name or PAN',
                  'Scan QR Code with any UPI app',
                  'Enter exact outstanding amount',
                  'Mention your Name or PAN in remarks field',
                  'Save the transaction reference number',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                      style={{ background: themeConfig.primary }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-sm" style={{ color: themeConfig.textMuted }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6 border text-center"
              style={{ background: themeConfig.bgCard, borderColor: themeConfig.border }}
            >
              <p className="font-bold mb-4" style={{ color: themeConfig.text }}>
                Contact for Repayment Support
              </p>
              <div className="space-y-3">
                <div
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl"
                  style={{ background: themeConfig.bgSection }}
                >
                  <span>📧</span>
                  <span className="text-sm font-medium" style={{ color: themeConfig.text }}>
                    collection.cashtm@gmail.com
                  </span>
                </div>
                <div
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl"
                  style={{ background: themeConfig.bgSection }}
                >
                  <span>📞</span>
                  <span className="text-sm font-medium" style={{ color: themeConfig.text }}>
                    +91 9818459292
                  </span>
                </div>
                <p className="text-xs font-semibold mt-2" style={{ color: '#ef4444' }}>
                  ⚠️ Always verify bank account before payment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fintech Advantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fintechAdvantages.map((adv, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 border text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: themeConfig.bgCard,
                borderColor: themeConfig.border,
                boxShadow: `0 4px 15px ${themeConfig.isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'}`,
              }}
            >
              <div className="text-3xl mb-3">{adv.icon}</div>
              <h4 className="font-bold text-sm mb-2" style={{ color: themeConfig.text }}>{adv.title}</h4>
              <p className="text-xs" style={{ color: themeConfig.textMuted }}>{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
