import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";

const UPI_ID  = "MAB.037349044880004@AXISBANK";
const UPI_NAME = "MAHA%20SEVA%20DAL%20FOUNDATION";
const UPI_NOTE = "Donation%20to%20Maha%20Seva%20Dal";

const upiApps = [
  {
    name: "PhonePe",
    color: "#5f259f",
    textColor: "#fff",
    href: `phonepe://pay?pa=${UPI_ID}&pn=${UPI_NAME}&tn=${UPI_NOTE}&am=&cu=INR`,
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#5f259f"/>
        <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">Pe</text>
      </svg>
    ),
  },
  {
    name: "Google Pay",
    color: "#fff",
    textColor: "#1a1a1a",
    border: "1.5px solid #e0e0e0",
    href: `tez://upi/pay?pa=${UPI_ID}&pn=${UPI_NAME}&tn=${UPI_NOTE}&am=&cu=INR`,
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48">
        <path fill="#4285F4" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.7-6.7C35.7 2.3 30.2 0 24 0 14.7 0 6.7 5.4 2.9 13.3l7.8 6.1C12.5 13 17.8 9.5 24 9.5z"/>
        <path fill="#34A853" d="M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v8.7h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.2 5.6c4.2-3.9 6.6-9.6 6.6-16.6z" opacity=".9"/>
        <path fill="#FBBC05" d="M10.7 28.6A14.8 14.8 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6L2.5 13.3A23.8 23.8 0 0 0 0 24c0 3.8.9 7.4 2.5 10.6l8.2-6z"/>
        <path fill="#EA4335" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.2-5.6c-2 1.4-4.6 2.1-8 2.1-6.2 0-11.5-4.2-13.3-9.9l-8.2 6C6.7 42.6 14.7 48 24 48z"/>
      </svg>
    ),
  },
  {
    name: "Paytm",
    color: "#00BAF2",
    textColor: "#fff",
    href: `paytmmp://pay?pa=${UPI_ID}&pn=${UPI_NAME}&tn=${UPI_NOTE}&am=&cu=INR`,
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#00BAF2"/>
        <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Ptm</text>
      </svg>
    ),
  },
  {
    name: "BHIM",
    color: "#003580",
    textColor: "#fff",
    href: `upi://pay?pa=${UPI_ID}&pn=${UPI_NAME}&tn=${UPI_NOTE}&am=&cu=INR`,
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#003580"/>
        <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">BHIM</text>
      </svg>
    ),
  },
  {
    name: "Amazon Pay",
    color: "#FF9900",
    textColor: "#fff",
    href: `upi://pay?pa=${UPI_ID}&pn=${UPI_NAME}&tn=${UPI_NOTE}&am=&cu=INR`,
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#FF9900"/>
        <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">A Pay</text>
      </svg>
    ),
  },
];

const Support = () => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">

          {/* Header */}
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{
                background: "rgba(255,153,51,0.10)",
                border: "1px solid rgba(255,153,51,0.30)",
                color: "#b85c00",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              🙏 Support Our Mission
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #FF9933, #c8440a 50%, #138808)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contribute to Maha Seva Dal
            </h1>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem", color: "#78716c" }}
            >
              Your generous support helps us serve the nation and uplift communities across India.
            </p>
          </div>

          {/* Card */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,248,235,0.97) 0%, rgba(240,255,240,0.95) 100%)",
              border: "1.5px solid rgba(255,153,51,0.25)",
              boxShadow: "0 16px 60px rgba(255,153,51,0.14), 0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <div className="tricolour-bar" />

            <div className="flex flex-col md:flex-row items-stretch">

              {/* LEFT — QR Code */}
              <div
                className="flex flex-col items-center justify-center p-10 md:w-80 flex-shrink-0"
                style={{
                  borderRight: "1px solid rgba(255,153,51,0.15)",
                  background: "rgba(255,153,51,0.04)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-5"
                  style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
                >
                  Scan &amp; Pay
                </p>
                <div
                  className="w-52 h-64 rounded-2xl overflow-hidden"
                  style={{
                    border: "2.5px solid rgba(255,153,51,0.35)",
                    boxShadow: "0 6px 24px rgba(255,153,51,0.2)",
                    background: "#fff",
                  }}
                >
                  <img
                    src="/qr-code.png"
                    alt="Maha Seva Dal Foundation QR Code"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <p
                  className="mt-4 text-xs font-bold text-center tracking-wide"
                  style={{ color: "#b85c00", fontFamily: "'Inter', sans-serif" }}
                >
                  MAHA SEVA DAL FOUNDATION
                </p>
                <p
                  className="mt-1 text-[11px] text-center"
                  style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}
                >
                  Use any UPI app to scan &amp; pay
                </p>
              </div>

              {/* RIGHT — Bank Details */}
              <div className="flex-1 p-10">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-6"
                  style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
                >
                  Bank Account Details
                </p>

                <div className="space-y-5">
                  {[
                    { label: "Account Name",    value: "MAHA SEVA DAL FOUNDATION", mono: false },
                    { label: "Account Number",  value: "925010021495473",           mono: true  },
                    { label: "Customer ID",     value: "974751441",                 mono: true  },
                    { label: "IFSC Code",       value: "UTIB0004488",              mono: true  },
                    { label: "Account Type",    value: "Savings",                  mono: false },
                    { label: "Bank",            value: "Axis Bank",                mono: false },
                    { label: "Account Opening", value: "09-05-2025",               mono: true  },
                  ].map(({ label, value, mono }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest w-40 flex-shrink-0"
                        style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-base font-bold"
                        style={{
                          color: mono ? "#c8440a" : "#3d2c00",
                          fontFamily: mono ? "'Courier New', monospace" : "'Playfair Display', serif",
                          letterSpacing: mono ? "0.08em" : undefined,
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div
                  className="mt-8 px-5 py-4 rounded-xl text-sm"
                  style={{
                    background: "rgba(19,136,8,0.06)",
                    border: "1px solid rgba(19,136,8,0.15)",
                    color: "#3a6b38",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  🙏 Every contribution, big or small, supports the people of India.
                  Thank you for standing with Maha Seva Dal.
                </div>

                {/* Contact */}
                <p
                  className="mt-5 text-xs"
                  style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}
                >
                  For queries:{" "}
                  <a
                    href="mailto:Mahasevadalorganization@gmail.com"
                    className="underline hover:text-[#c8440a] transition-colors"
                    style={{ color: "#b85c00" }}
                  >
                    Mahasevadalorganization@gmail.com
                  </a>
                  {" "}· +91 9994625690
                </p>

                {/* ── Donate Now Button ── */}
                <div className="mt-8">
                  <button
                    onClick={() => setShowPicker(!showPicker)}
                    className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
                    style={{
                      background: "linear-gradient(135deg, #FF9933 0%, #c8440a 60%, #b83200 100%)",
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      boxShadow: "0 6px 28px rgba(255,153,51,0.4)",
                      letterSpacing: "0.04em",
                      border: "none",
                    }}
                  >
                    💸 Donate Now — Pay via UPI
                    <span style={{ fontSize: "0.8em", opacity: 0.85 }}>{showPicker ? "▲" : "▼"}</span>
                  </button>

                  {/* ── UPI App Picker ── */}
                  {showPicker && (
                    <div
                      className="mt-3 rounded-2xl overflow-hidden"
                      style={{
                        border: "1.5px solid rgba(255,153,51,0.2)",
                        background: "#fff",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                        animation: "pickerIn 0.22s ease forwards",
                      }}
                    >
                      <p
                        className="px-5 pt-4 pb-2 text-xs font-bold tracking-widest uppercase"
                        style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}
                      >
                        Choose your UPI app
                      </p>
                      {upiApps.map((app) => (
                        <a
                          key={app.name}
                          href={app.href}
                          className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-orange-50"
                          style={{ textDecoration: "none" }}
                          onClick={() => setShowPicker(false)}
                        >
                          <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
                            style={{ background: app.color, border: app.border ?? "none" }}>
                            {app.icon}
                          </div>
                          <span
                            className="font-semibold text-sm"
                            style={{ color: "#3d2c00", fontFamily: "'Inter', sans-serif" }}
                          >
                            {app.name}
                          </span>
                          <span
                            className="ml-auto text-xs"
                            style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}
                          >
                            →
                          </span>
                        </a>
                      ))}
                      <p
                        className="px-5 pt-2 pb-4 text-[11px]"
                        style={{ color: "#ccc", fontFamily: "'Inter', sans-serif" }}
                      >
                        Works on mobile · App must be installed
                      </p>
                    </div>
                  )}

                  <style>{`
                    @keyframes pickerIn {
                      from { opacity: 0; transform: translateY(-8px); }
                      to   { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>
                </div>

              </div>
            </div>

            <div className="tricolour-bar" />
          </div>

        </div>
      </section>
    </PageLayout>
  );
};

export default Support;
