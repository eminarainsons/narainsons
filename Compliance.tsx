import { useTheme } from '../context/ThemeContext';
import { Shield, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';

const interestFactors = [
  { num: '01', title: 'Cost of Funds', desc: 'ALM Committee guidance on base rate determination' },
  { num: '02', title: 'Tenure of Facility', desc: 'Short/long term cost difference factored in pricing' },
  { num: '03', title: 'Perceived Industry Risk', desc: 'Risk premium or discount based on sector analysis' },
  { num: '04', title: 'Profile of Customer', desc: 'Experience, reputation, financial standing assessed' },
  { num: '05', title: 'Annualised Rate', desc: 'Transparent disclosure of effective annual rate' },
  { num: '06', title: 'Sanction Letter', desc: 'Clear interest & penal rates mentioned upfront' },
];

const riskFactors = [
  'Nature of loan and loan purpose',
  'Credit history and repayment track record',
  'Bureau Score (CIBIL / Equifax / CRIF)',
  'Income stability and employment type',
  'Collateral availability and quality',
  'Ticket size and loan-to-value ratio',
  'Other existing liabilities',
  'Prevailing industry rates',
];

const complianceDocs = [
  { icon: '📋', title: 'Privacy Policy', desc: 'Data collection, usage, and protection under IT Act 2000' },
  { icon: '📜', title: 'Terms & Conditions', desc: 'Loan agreement terms governing Turrant/CashTM platforms' },
  { icon: '🔒', title: 'Data Protection', desc: 'Secure handling of personal & financial information' },
  { icon: '💰', title: 'Refund Policy', desc: 'Clear policy for duplicate or erroneous payments' },
  { icon: '⚖️', title: 'Fair Practice Code', desc: 'RBI mandated fair practices in lending' },
  { icon: '🏦', title: 'KYC Norms', desc: 'Know Your Customer compliance for all borrowers' },
];

export default function Compliance() {
  const { themeConfig } = useTheme();

  return (
    <section
      id="compliance"
      className="py-24"
      style={{ background: themeConfig.bgSection, fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${themeConfig.badge}`}>
            Regulatory Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: themeConfig.text }}>
            Transparency & Compliance
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeConfig.textMuted }}>
            Narainsons strictly adheres to RBI Master Directions 2023 and all applicable NBFC
            regulations for fair, transparent, and responsible lending.
          </p>
        </div>

        {/* Interest Rate Policy */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Interest Rate Model */}
          <div
            className="rounded-3xl p-8 border"
            style={{
              background: themeConfig.bgCard,
              borderColor: themeConfig.border,
              boxShadow: `0 10px 40px ${themeConfig.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.07)'}`,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})` }}
              >
                <Scale size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: themeConfig.text }}>
                  📐 Interest Rate Model
                </h3>
                <p className="text-xs" style={{ color: themeConfig.textMuted }}>
                  RBI Master Direction 2023 Compliant
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {interestFactors.map((factor, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl border"
                  style={{ background: themeConfig.bgSection, borderColor: themeConfig.border }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})` }}
                  >
                    {factor.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm" style={{ color: themeConfig.text }}>
                      {factor.title}
                    </h4>
                    <p className="text-xs mt-0.5" style={{ color: themeConfig.textMuted }}>
                      {factor.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-4 rounded-2xl border flex items-start gap-3"
              style={{ background: `${themeConfig.primary}10`, borderColor: `${themeConfig.primary}30` }}
            >
              <CheckCircle size={16} style={{ color: themeConfig.primary, flexShrink: 0, marginTop: 2 }} />
              <p className="text-xs" style={{ color: themeConfig.text }}>
                <strong>Note:</strong> Rate may vary for different customers based on individual risk assessment.
                Policy updated on website as per RBI guidelines.
                <br />
                <span style={{ color: themeConfig.textMuted }}>
                  Source: Interest Rate Policy (RBI NBFC Scale Based Regulation) & Internal Risk Framework
                </span>
              </p>
            </div>
          </div>

          {/* Risk Gradation */}
          <div
            className="rounded-3xl p-8 border"
            style={{
              background: themeConfig.bgCard,
              borderColor: themeConfig.border,
              boxShadow: `0 10px 40px ${themeConfig.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.07)'}`,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, #f59e0b, #d97706)` }}
              >
                <Shield size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: themeConfig.text }}>
                  🏦 Approach for Risk Gradation
                </h3>
                <p className="text-xs" style={{ color: themeConfig.textMuted }}>
                  Fair & transparent risk assessment
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: themeConfig.textMuted }}>
              Our risk gradation framework assesses each borrower individually based on multiple
              parameters to ensure fair pricing and responsible lending:
            </p>

            <div className="grid grid-cols-1 gap-3 mb-6">
              {riskFactors.map((factor, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border"
                  style={{ background: themeConfig.bgSection, borderColor: themeConfig.border }}
                >
                  <CheckCircle size={14} style={{ color: themeConfig.primary, flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: themeConfig.text }}>
                    {factor}
                  </span>
                </div>
              ))}
            </div>

            {/* Loan Terms Summary */}
            <div
              className="rounded-2xl p-5 border"
              style={{ background: `${themeConfig.primary}08`, borderColor: `${themeConfig.primary}25` }}
            >
              <h4 className="font-bold text-sm mb-3" style={{ color: themeConfig.text }}>
                📊 Standard Loan Parameters
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Min Amount', value: '₹2,000' },
                  { label: 'Max Amount', value: '₹60,000' },
                  { label: 'Min Tenure', value: '95 Days' },
                  { label: 'Max Tenure', value: '12 Months' },
                  { label: 'Min Rate', value: '0%' },
                  { label: 'Max Rate', value: '29.95% p.a.' },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-xs" style={{ color: themeConfig.textMuted }}>{item.label}</p>
                    <p className="font-bold text-sm" style={{ color: themeConfig.primary }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Documents Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8" style={{ color: themeConfig.text }}>
            Regulatory Documents & Policies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {complianceDocs.map((doc, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl p-5 border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: themeConfig.bgCard,
                  borderColor: themeConfig.border,
                  boxShadow: `0 4px 15px ${themeConfig.isDark ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.04)'}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: themeConfig.primaryLight }}
                >
                  {doc.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: themeConfig.text }}>
                    {doc.title}
                  </h4>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: themeConfig.textMuted }}>
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RBI Registration Banner */}
        <div
          className="rounded-3xl p-8 md:p-10 text-center border relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})`,
            borderColor: 'transparent',
          }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <FileText size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              🏦 RBI Registered NBFC
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              Narainsons Investments Finance And Consultancy Private Limited is a registered
              non-deposit taking Non-Banking Financial Company (NBFC) with the Reserve Bank of India (RBI)
              under the RBI Act, 1934.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Non-deposit Taking NBFC',
                'Scale-Based Regulation',
                'RBI Master Direction 2023',
                'Fair Practice Code',
              ].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/15 rounded-xl text-white text-sm font-medium border border-white/20">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="mt-8 rounded-2xl p-5 border flex items-start gap-3"
          style={{ background: themeConfig.bgCard, borderColor: themeConfig.border }}
        >
          <AlertCircle size={18} style={{ color: '#f59e0b', flexShrink: 0, marginTop: 2 }} />
          <p className="text-xs leading-relaxed" style={{ color: themeConfig.textMuted }}>
            <strong style={{ color: themeConfig.text }}>Important Disclaimer:</strong>{' '}
            Narainsons Investments Finance And Consultancy Pvt. Ltd. is a registered NBFC with RBI.
            It does not accept public deposits. Loans are subject to credit assessment and approval.
            Interest rates and terms are disclosed transparently as per RBI guidelines. For grievances,
            contact our customer service or email{' '}
            <span style={{ color: themeConfig.primary }}>collection.cashtm@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
