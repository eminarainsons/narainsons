import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { themeConfig } = useTheme();
  const [form, setForm] = useState({ name: '', phone: '', email: '', loan: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', phone: '', email: '', loan: '', message: '' });
  };

  const inputStyle = {
    background: themeConfig.bgSection,
    borderColor: themeConfig.border,
    color: themeConfig.text,
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: themeConfig.bg, fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${themeConfig.badge}`}>
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: themeConfig.text }}>
            Apply for a Loan Today
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeConfig.textMuted }}>
            Reach out to our team for loan inquiries, repayment support, or any financial consultation.
            We respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            {[
              {
                icon: <Phone size={20} />,
                title: 'Call Us',
                info: '+91 9818459292',
                sub: 'Mon–Sat, 10AM–6PM IST',
                color: themeConfig.primary,
              },
              {
                icon: <Mail size={20} />,
                title: 'Email Us',
                info: 'collection.cashtm@gmail.com',
                sub: 'We reply within 24 hours',
                color: '#10b981',
              },
              {
                icon: <MapPin size={20} />,
                title: 'Visit Us',
                info: '1/12, Desh Bandhu Gupta Rd',
                sub: 'Karol Bagh, New Delhi – 110005',
                color: '#f59e0b',
              },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: themeConfig.bgCard,
                  borderColor: themeConfig.border,
                  boxShadow: `0 4px 15px ${themeConfig.isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'}`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}18`, color: c.color }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: themeConfig.textMuted }}>
                    {c.title}
                  </p>
                  <p className="font-semibold text-sm" style={{ color: themeConfig.text }}>
                    {c.info}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: themeConfig.textMuted }}>
                    {c.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* CashTM App CTA */}
            <div
              className="rounded-3xl p-6 border text-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})`,
                borderColor: 'transparent',
              }}
            >
              <div className="text-4xl mb-3">📱</div>
              <h4 className="text-white font-bold text-lg mb-2">Download CashTM App</h4>
              <p className="text-white/70 text-sm mb-5">
                Apply for instant loans, check status & pay EMIs — all from your phone.
              </p>
              <div className="flex flex-col gap-2">
                <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-medium">
                  🤖 Android — Google Play Store
                </div>
                <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-medium">
                  🍎 iOS — App Store (Coming Soon)
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2">
                  <Clock size={14} className="text-white/60" />
                  <span className="text-white/60 text-xs">Instant approval · Funds in hours</span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div
              className="rounded-2xl p-5 border"
              style={{ background: themeConfig.bgCard, borderColor: themeConfig.border }}
            >
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle size={16} style={{ color: themeConfig.primary }} />
                <h4 className="font-semibold text-sm" style={{ color: themeConfig.text }}>
                  Turrant Customer Care
                </h4>
              </div>
              <p className="text-xs mb-3" style={{ color: themeConfig.textMuted }}>
                For Turrant platform support:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs" style={{ color: themeConfig.textMuted }}>
                  <span>📞</span> 9818459292
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: themeConfig.textMuted }}>
                  <span>📧</span> CS@TURRANT.IN
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-3xl p-8 border shadow-xl"
              style={{
                background: themeConfig.bgCard,
                borderColor: themeConfig.border,
                boxShadow: `0 20px 60px ${themeConfig.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)'}`,
              }}
            >
              <h3 className="font-bold text-xl mb-2" style={{ color: themeConfig.text }}>
                Loan Inquiry Form
              </h3>
              <p className="text-sm mb-8" style={{ color: themeConfig.textMuted }}>
                Fill in your details and our team will get back to you shortly.
              </p>

              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-12 text-center rounded-2xl border"
                  style={{ background: `${themeConfig.primary}10`, borderColor: `${themeConfig.primary}30` }}
                >
                  <CheckCircle size={48} style={{ color: themeConfig.primary }} className="mb-4" />
                  <h4 className="font-bold text-xl mb-2" style={{ color: themeConfig.text }}>
                    Thank You!
                  </h4>
                  <p style={{ color: themeConfig.textMuted }}>
                    Your inquiry has been submitted. We'll reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: themeConfig.textMuted }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{
                          ...inputStyle,
                          '--tw-ring-color': `${themeConfig.primary}40`,
                        } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: themeConfig.textMuted }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: themeConfig.textMuted }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: themeConfig.textMuted }}>
                      Loan Type Required
                    </label>
                    <select
                      name="loan"
                      value={form.loan}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all appearance-none"
                      style={inputStyle}
                    >
                      <option value="">Select loan type...</option>
                      <option value="personal">Personal Loan (₹2,000 – ₹60,000)</option>
                      <option value="business">Business Loan</option>
                      <option value="cashtm">CashTM App Loan</option>
                      <option value="other">Other / Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: themeConfig.textMuted }}>
                      Message / Query
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your financial requirement..."
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                      style={inputStyle}
                    />
                  </div>

                  {/* Eligibility Checklist */}
                  <div
                    className="rounded-2xl p-4 border"
                    style={{ background: themeConfig.bgSection, borderColor: themeConfig.border }}
                  >
                    <p className="text-xs font-semibold mb-3" style={{ color: themeConfig.text }}>
                      Basic Eligibility Criteria:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Indian Citizen (18–60 years)',
                        'Stable source of income',
                        'Valid PAN & Aadhaar',
                        'Active bank account',
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs" style={{ color: themeConfig.textMuted }}>
                          <CheckCircle size={12} style={{ color: themeConfig.primary }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.primaryDark})`,
                      color: 'white',
                    }}
                  >
                    <Send size={18} />
                    Submit Loan Inquiry
                  </button>

                  <p className="text-center text-xs" style={{ color: themeConfig.textMuted }}>
                    By submitting, you agree to our{' '}
                    <span style={{ color: themeConfig.primary }} className="cursor-pointer hover:underline">
                      Privacy Policy
                    </span>{' '}
                    &{' '}
                    <span style={{ color: themeConfig.primary }} className="cursor-pointer hover:underline">
                      Terms & Conditions
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
