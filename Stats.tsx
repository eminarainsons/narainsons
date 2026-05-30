import { useTheme } from '../context/ThemeContext';

const stats = [
  { value: '30+', label: 'Years of Experience', icon: '🏛️', desc: 'Serving since 1995' },
  { value: '₹60K', label: 'Max Loan Amount', icon: '💰', desc: 'Quick personal loans' },
  { value: '4+', label: 'Fintech Partners', icon: '🤝', desc: 'Pan-India coverage' },
  { value: '100%', label: 'Digital Process', icon: '📱', desc: 'Paperless lending' },
  { value: 'RBI', label: 'Registered NBFC', icon: '🏦', desc: 'Fully regulated' },
  { value: '24h', label: 'Response Time', icon: '⚡', desc: 'Fast approval process' },
];

export default function Stats() {
  const { themeConfig } = useTheme();

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})`,
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white">
            Why Choose Narainsons?
          </h2>
          <p className="text-white/70 mt-2">Trusted by thousands of borrowers across India</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-white/90 text-xs font-semibold mb-1">{stat.label}</div>
              <div className="text-white/50 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
