import PageLayout from "@/components/layout/PageLayout";

const Support = () => {
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
                    { label: "Account Name",        value: "MAHA SEVA DAL FOUNDATION", mono: false },
                    { label: "Account Number",      value: "925010021495473",           mono: true  },
                    { label: "Customer ID",         value: "974751441",                 mono: true  },
                    { label: "IFSC Code",           value: "UTIB0004488",              mono: true  },
                    { label: "Account Type",        value: "Savings",                  mono: false },
                    { label: "Bank",                value: "Axis Bank",                mono: false },
                    { label: "Account Opening",     value: "09-05-2025",               mono: true  },
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

                {/* Donate Now — UPI Deep Link */}
                <div className="mt-8">
                  <a
                    href="upi://pay?pa=MAB.037349044880004@AXISBANK&pn=MAHA%20SEVA%20DAL%20FOUNDATION&tn=Donation%20to%20Maha%20Seva%20Dal&cu=INR"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
                    style={{
                      background: "linear-gradient(135deg, #FF9933 0%, #c8440a 60%, #b83200 100%)",
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      boxShadow: "0 6px 28px rgba(255,153,51,0.4)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    💸 Donate Now — Pay via UPI
                  </a>
                  <p
                    className="mt-2 text-center text-[11px]"
                    style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}
                  >
                    Opens PhonePe · GPay · Paytm · or your default UPI app &nbsp;·&nbsp;
                    <span style={{ color: "#c8440a" }}>Works on mobile only</span>
                  </p>
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
