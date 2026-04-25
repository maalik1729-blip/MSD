import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageLayout>

      {/* ══════════════════════════════════════════
          HERO — Organisation Introduction
      ══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 50% at 50% 5%, rgba(255,153,51,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="container max-w-4xl relative z-10">

          {/* ── MSD Banner ── */}
          <div className="relative animate-fade-up mb-12" style={{ animationDelay: "0s" }}>
            <div
              className="absolute -inset-1 rounded-2xl pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,153,51,0.5) 0%, rgba(255,255,255,0.1) 50%, rgba(19,136,8,0.4) 100%)",
                filter: "blur(8px)",
                opacity: 0.6,
              }}
            />
            {/* Image frame */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(255,153,51,0.35)",
                boxShadow: "0 8px 40px rgba(255,153,51,0.18), 0 2px 8px rgba(0,0,0,0.12)",
                background: "rgba(255,153,51,0.05)",
              }}
            >
              <div className="tricolour-bar" />
              <img
                src="/msd-banner.png"
                alt="Maha Seva Dal Banner"
                className="w-full block"
                style={{ 
                  objectFit: "cover", 
                  objectPosition: "center",
                  width: "100%",
                  aspectRatio: "21/9"
                }}
              />
              <div className="tricolour-bar" />
            </div>
            
            <div className="mt-4 mx-auto max-w-xl text-center">
              <p
                className="text-sm md:text-base font-semibold tracking-widest uppercase"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(90deg, #FF9933, #c8440a 50%, #138808)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Unity of People's · Development of Society · Power of Youth
              </p>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <span
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(255,153,51,0.10)",
                border: "1px solid rgba(255,153,51,0.30)",
                color: "#b85c00",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              🪷 Est. 1947 · Serving the Nation
            </span>
          </div>

          {/* Title */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #FF9933 0%, #c8440a 45%, #138808 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 2px 6px rgba(255,153,51,0.2))",
              }}
            >
              महा सेवा दल
            </h1>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#b85c00" }}
            >
              Maha Seva Dal
            </h2>
            <p
              className="text-sm tracking-[0.35em] uppercase text-muted-foreground"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Est. 1947
            </p>

            <div className="lotus-divider max-w-sm mx-auto mt-8">
              <span className="lotus-icon text-2xl">❀</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════════ */}
      <section className="py-8 md:py-12">
        <div className="container max-w-4xl">
          <div className="flex justify-center mb-8">
            <p
              className="text-xs tracking-widest uppercase font-semibold"
              style={{ color: "#138808", fontFamily: "'Inter', sans-serif" }}
            >
              About the Organisation
            </p>
          </div>

          <article
            className="prose-heritage mx-auto animate-fade-up text-center md:text-left"
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              Maha Seva Dal (MSD) is a social and cultural organisation that originated
              in 1947, during the period of India's Independence. Founded by
              Saragabani Gopu, the organisation emerged with a focus on organising
              Hindu society as a foundational element of a newly independent nation.
            </p>
            <p>
              From its inception, MSD emphasised social unity, cultural organisation,
              and community strength rather than participation in direct political
              movements. Over time, Maha Seva Dal grew in influence and membership,
              establishing itself as a significant social presence during one of the
              most critical periods in the country's history.
            </p>
          </article>

          {/* Stat pills */}
          <div
            className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-up"
            style={{ animationDelay: "0.18s" }}
          >
            {[
              { label: "Founded",  value: "1947"                  },
              { label: "Founder",  value: "Saragabani Gopu"       },
              { label: "Mission",  value: "Social & Cultural Unity"},
            ].map((s) => (
              <div
                key={s.label}
                className="px-5 py-3 rounded-xl text-center"
                style={{
                  background: "rgba(255,153,51,0.07)",
                  border: "1px solid rgba(255,153,51,0.2)",
                  minWidth: "150px",
                }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </p>
                <p
                  className="text-base font-bold"
                  style={{ color: "#b85c00", fontFamily: "'Playfair Display', serif" }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — View Events
      ══════════════════════════════════════════ */}
      <section className="py-10 md:py-16">
        <div className="container max-w-3xl">
          <div
            className="rounded-2xl p-8 md:p-12 text-center animate-fade-up relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,153,51,0.08) 0%, rgba(255,255,255,0.0) 50%, rgba(19,136,8,0.08) 100%)",
              border: "1px solid rgba(255,153,51,0.20)",
            }}
          >
            {/* Decorative background lotus */}
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 text-9xl opacity-[0.04] pointer-events-none select-none"
            >
              ❀
            </div>

            <p
              className="text-xs tracking-widest uppercase font-semibold mb-3"
              style={{ color: "#138808", fontFamily: "'Inter', sans-serif" }}
            >
              Latest Activities
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #FF9933, #138808)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Explore Our Events
            </h2>
            <p
              className="text-base mb-8 max-w-md mx-auto"
              style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: "1.1rem",
                color: "#78716c",
              }}
            >
              From Guru Poornima food drives to Mahashivratri celebrations — see how
              Maha Seva Dal is making a difference across India.
            </p>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "linear-gradient(135deg, #FF9933, #c8440a)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(255,153,51,0.4)",
              }}
            >
              View All Events <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DONATE / SUPPORT SECTION
      ══════════════════════════════════════════ */}
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          {/* Section Label */}
          <div className="flex justify-center mb-4">
            <span
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(255,153,51,0.10)",
                border: "1px solid rgba(255,153,51,0.30)",
                color: "#b85c00",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              🙏 Support Our Mission
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(135deg, #FF9933, #c8440a 50%, #138808)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contribute to Maha Seva Dal
          </h2>
          <p
            className="text-center text-base mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#78716c" }}
          >
            Your generous support helps us serve the nation and uplift communities across India.
          </p>

          {/* Card */}
          <div
            className="rounded-3xl overflow-hidden animate-fade-up"
            style={{
              background: "linear-gradient(135deg, rgba(255,248,235,0.95) 0%, rgba(240,255,240,0.9) 100%)",
              border: "1.5px solid rgba(255,153,51,0.25)",
              boxShadow: "0 12px 48px rgba(255,153,51,0.13), 0 2px 12px rgba(0,0,0,0.07)",
            }}
          >
            <div className="tricolour-bar" />

            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-0">

              {/* LEFT — QR Code */}
              <div
                className="flex flex-col items-center justify-center p-8 md:p-10 md:w-72 flex-shrink-0"
                style={{
                  borderRight: "1px solid rgba(255,153,51,0.15)",
                  background: "rgba(255,153,51,0.04)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
                >
                  Scan & Pay
                </p>
                {/* QR Code — PDF rendered via browser native PDF viewer */}
                <div
                  className="w-48 h-56 rounded-2xl overflow-hidden relative"
                  style={{
                    border: "2.5px solid rgba(255,153,51,0.35)",
                    boxShadow: "0 4px 20px rgba(255,153,51,0.18)",
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
                  className="mt-3 text-xs text-center"
                  style={{ color: "#b85c00", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  MAHA SEVA DAL FOUNDATION
                </p>
              </div>

              {/* RIGHT — Bank Details */}
              <div className="flex-1 p-8 md:p-10">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-5"
                  style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
                >
                  Bank Account Details
                </p>

                <div className="space-y-4">
                  {[
                    { label: "Account Name",   value: "MAHA SEVA DAL FOUNDATION" },
                    { label: "Account Number", value: "925010021495473"           },
                    { label: "Customer ID",    value: "974751441"                 },
                    { label: "IFSC Code",      value: "UTIB0004488"              },
                    { label: "Account Type",   value: "Savings"                  },
                    { label: "Bank",           value: "Axis Bank"                },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest w-36 flex-shrink-0"
                        style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{
                          color: label === "Account Number" || label === "IFSC Code" || label === "Customer ID" ? "#c8440a" : "#3d2c00",
                          fontFamily: label === "Account Number" || label === "IFSC Code" || label === "Customer ID"
                            ? "'Courier New', monospace"
                            : "'Playfair Display', serif",
                          letterSpacing: label === "Account Number" || label === "Customer ID" ? "0.1em" : undefined,
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div
                  className="mt-7 px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: "rgba(19,136,8,0.06)",
                    border: "1px solid rgba(19,136,8,0.15)",
                    color: "#3a6b38",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  🙏 Every contribution, big or small, supports the people of India.
                  Thank you for standing with Maha Seva Dal.
                </div>
              </div>

            </div>
            <div className="tricolour-bar" />
          </div>
        </div>
      </section>

      {/* Closing tricolour line */}
      <div className="flex justify-center pb-16">
        <div
          className="w-40 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, #FF9933 35%, #138808 65%, transparent)",
          }}
        />
      </div>

    </PageLayout>
  );
};

export default Home;
