import { useTheme } from '../context/ThemeContext';

const items = [
  { icon: '🏦', text: 'RBI Registered NBFC' },
  { icon: '📋', text: 'CIN: U74899DL1995PTC067793' },
  { icon: '🏛️', text: 'Est. 1995 · Delhi, India' },
  { icon: '💳', text: 'CashTM Digital Lending' },
  { icon: '⚡', text: 'Turrant Platform' },
  { icon: '🔗', text: 'Kredit724 · KredSetu · RupeeGet' },
  { icon: '📱', text: '100% Paperless Process' },
  { icon: '🔒', text: 'Secure & RBI Compliant' },
  { icon: '💰', text: 'Loans ₹2,000 – ₹60,000' },
  { icon: '📞', text: '+91 9818459292' },
];

export default function TrustBar() {
  const { themeConfig } = useTheme();

  const allItems = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      className="border-y overflow-hidden py-3 relative"
      style={{
        background: themeConfig.bgSection,
        borderColor: themeConfig.border,
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${themeConfig.bgSection}, transparent)`,
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to left, ${themeConfig.bgSection}, transparent)`,
        }}
      />

      <div
        className="flex gap-8 items-center whitespace-nowrap"
        style={{
          animation: 'marquee 35s linear infinite',
          width: 'max-content',
        }}
      >
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <span className="text-base">{item.icon}</span>
            <span
              className="text-sm font-medium"
              style={{ color: themeConfig.textMuted }}
            >
              {item.text}
            </span>
            <span
              className="w-1 h-1 rounded-full ml-4"
              style={{ background: themeConfig.border }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
