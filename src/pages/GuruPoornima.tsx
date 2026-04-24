import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import poornimaImages from "../poornima_images.json";
const highlights = [
  {
    icon: "🍱",
    title: "Social Welfare",
    color: "#FF9933",
    borderColor: "rgba(255,153,51,0.35)",
    description:
      "Direct outreach through large-scale food distribution for those in need, exemplifying MSD's commitment to grassroots service delivery.",
  },
  {
    icon: "🪷",
    title: "Cultural Identity",
    color: "#c8440a",
    borderColor: "rgba(200,68,10,0.3)",
    description:
      "A focus on strengthening Indian culture and the values of Hindutva to build national unity and preserve our civilisational heritage.",
  },
  {
    icon: "📚",
    title: "Empowerment through Education",
    color: "#138808",
    borderColor: "rgba(19,136,8,0.3)",
    description:
      "Strategies to provide better academic opportunities for children in underserved sectors, ensuring no child is left behind.",
  },
  {
    icon: "🌐",
    title: "Organisational Growth",
    color: "#000080",
    borderColor: "rgba(0,0,128,0.25)",
    description:
      "Recognition of the Maha Seva Dal's expanding influence in social service across India, reaching new communities every year.",
  },
];

const GuruPoornima = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <PageLayout>
      {/* ── Event Banner ── */}
      <section className="relative pt-10 pb-2 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 5%, rgba(255,153,51,0.14) 0%, transparent 70%)",
          }}
        />
        <div className="container max-w-5xl relative z-10">
          {/* Outer glow */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0s" }}>
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
                background: "rgba(255,153,51,0.05)", // subtle background in case of aspect ratio differences
              }}
            >
              <div className="tricolour-bar" />
              <img
                src="/guru-poornima-banner.png"
                alt="Guru Poornima Food Distribution Drive"
                className="w-full block"
                style={{ 
                  objectFit: "contain", 
                  objectPosition: "center",
                  width: "100%",
                  height: "auto",
                  maxHeight: "600px"
                }}
              />
              <div className="tricolour-bar" />
            </div>
            {/* Tagline */}
            <div className="mt-3 mx-auto max-w-xl text-center">
              <p
                className="text-xs md:text-sm font-semibold tracking-widest uppercase"
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
        </div>
      </section>

      {/* ── Hero Section ── */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        {/* Saffron radial hero glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 10%, rgba(255,153,51,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="container max-w-4xl relative z-10">
          {/* Event badge */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(255,153,51,0.12)",
                border: "1px solid rgba(255,153,51,0.35)",
                color: "#b85c00",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span>🌕</span> July 2025 · Guru Poornima
            </span>
          </div>

          <PageHeader
            title="Guru Poornima"
            subtitle="Food Distribution Drive & Social Outreach by Maha Seva Dal"
          />

          {/* Guest of Honour card */}
          <div
            className="card-heritage p-6 md:p-8 mb-10 animate-fade-up"
            style={{ animationDelay: "0.05s", borderLeft: "4px solid #FF9933" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl saffron-glow"
                style={{ background: "rgba(255,153,51,0.12)" }}
              >
                🏛️
              </div>
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-1 font-semibold"
                  style={{ color: "#138808", fontFamily: "'Inter', sans-serif" }}
                >
                  Chief Guest
                </p>
                <h2
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#c8440a",
                  }}
                >
                  Shri Sanjay Nirmal
                </h2>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  BJP National General Secretary, SC Morcha
                </p>
              </div>
            </div>
          </div>

          {/* Main narrative */}
          <article
            className="prose-heritage mx-auto animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <p>
              In July 2025, Shri Sanjay Nirmal, BJP National General Secretary of
              the SC Morcha, graced a significant food distribution drive organised
              by the Maha Seva Dal (MSD) to support underprivileged communities.
              The event was a powerful demonstration of MSD's unwavering commitment
              to service, compassion, and national development.
            </p>
            <p>
              During the event, Shri Nirmal delivered an inspiring address
              highlighting the MSD's pivotal role in national development. He
              emphasised the organisation's commitment to advancing Hindutva as a
              cultural bedrock, preserving Indian heritage, and fostering educational
              empowerment for the marginalised. By aligning grassroots service with
              long-term social growth, he noted that the Maha Seva Dal is effectively
              uplifting the poor and integrating them into the core of India's
              progress.
            </p>
          </article>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          {/* Section heading */}
          <div className="text-center mb-10">
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-2"
              style={{ color: "#138808", fontFamily: "'Inter', sans-serif" }}
            >
              Programme Overview
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #FF9933, #c8440a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Key Highlights from the Event
            </h2>
            <div className="lotus-divider max-w-xs mx-auto mt-4">
              <span className="lotus-icon">❀</span>
            </div>
          </div>

          {/* Highlight cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="card-heritage p-6 animate-fade-up"
                style={{
                  animationDelay: `${0.1 + i * 0.1}s`,
                  borderLeft: `3px solid ${h.borderColor}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${h.color}18` }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg mb-1.5"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: h.color,
                      }}
                    >
                      {h.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed text-foreground/80"
                      style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem" }}
                    >
                      {h.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote / Closing Banner ── */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <div
            className="relative rounded-2xl p-8 md:p-12 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,153,51,0.08) 0%, rgba(255,255,255,0.04) 50%, rgba(19,136,8,0.08) 100%)",
              border: "1px solid rgba(255,153,51,0.2)",
            }}
          >
            {/* Decorative chakra background */}
            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 w-40 h-40 opacity-5 pointer-events-none"
              style={{ fontSize: "10rem", lineHeight: 1 }}
            >
              ☸
            </div>

            <p
              className="text-xs tracking-widest uppercase font-semibold mb-4"
              style={{ color: "#138808", fontFamily: "'Inter', sans-serif" }}
            >
              MSD's Mission
            </p>
            <blockquote
              className="text-xl md:text-2xl font-medium leading-relaxed mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#7a3200",
                fontStyle: "italic",
              }}
            >
              "Maha Seva Dal is effectively uplifting the poor and integrating them
              into the core of India's progress."
            </blockquote>
            <p
              className="text-sm font-semibold"
              style={{ color: "#b85c00", fontFamily: "'Inter', sans-serif" }}
            >
              — Shri Sanjay Nirmal, BJP National General Secretary, SC Morcha
            </p>
          </div>
        </div>
      </section>

      {/* ── Event Gallery ── */}
      <section className="py-10 md:py-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-8">
            <button
              onClick={() => setShowGallery(!showGallery)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: showGallery ? "rgba(255,153,51,0.05)" : "linear-gradient(135deg, #FF9933, #c8440a)",
                color: showGallery ? "#c8440a" : "#fff",
                border: showGallery ? "1px solid rgba(255,153,51,0.2)" : "1px solid transparent",
                boxShadow: showGallery ? "none" : "0 4px 20px rgba(255,153,51,0.3)",
              }}
            >
              {showGallery ? "Hide Event Gallery" : "View Event Gallery"} 
              <span className="text-xs transition-transform duration-200" style={{ transform: showGallery ? "rotate(180deg)" : "rotate(0deg)" }}>
                ▼
              </span>
            </button>
          </div>

          {showGallery && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in mt-8">
              {poornimaImages.map((imgName, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl overflow-hidden aspect-square bg-muted/20 relative cursor-pointer group"
                  style={{ border: "1px solid rgba(255,153,51,0.15)" }}
                >
                  <img
                    src={`/poornima/${imgName}`}
                    alt={`Event moment ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Closing decorative */}
      <div className="flex justify-center pb-16">
        <div
          className="w-32 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FF9933 40%, #138808 60%, transparent)",
          }}
        />
      </div>
    </PageLayout>
  );
};

export default GuruPoornima;
