import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import mahaImages from "../maha_images.json";
const speakers = [
  {
    name: "Mr. Srinivasan",
    role: "MSD Tamil Nadu State President",
    note: "Formally welcomed Dr. Chuba Ao to Tamil Nadu and hosted the evening's proceedings.",
    icon: "🎙️",
    color: "#FF9933",
  },
  {
    name: "Mr. Kesavan",
    role: "General Secretary, International Sports & Youth Development Campaign of India",
    note: "Delivered an insightful speech on the growth of Hindu development initiatives through Maha Seva Dal.",
    icon: "🏅",
    color: "#138808",
  },
  {
    name: "Mr. Sasikumar",
    role: "State President, MSD Tamil Nadu Advocate Wing",
    note: "Highlighted Dr. Chuba Ao's lifelong dedication to social reform in a special address.",
    icon: "⚖️",
    color: "#000080",
  },
];

const contributions = [
  {
    icon: "🏫",
    text: "Establishing colleges and schools specifically for tribal youth in Nagaland.",
  },
  {
    icon: "🌿",
    text: "Advocating for tribal education and environmental sustainability across Northeast India.",
  },
  {
    icon: "🤝",
    text: "Bridging cultural gaps to promote societal development and national integration.",
  },
];

const msdPillars = [
  {
    icon: "🪷",
    title: "Hindu Traditional Culture",
    desc: "Revitalising and preserving India's ancient cultural and spiritual traditions.",
    color: "#FF9933",
  },
  {
    icon: "📖",
    title: "Educational Advancement",
    desc: "Advancing educational opportunities for youth from all walks of life.",
    color: "#c8440a",
  },
  {
    icon: "🏏",
    title: "Sports & Youth Development",
    desc: "Encouraging sports activities across India to foster national pride and unity.",
    color: "#138808",
  },
];

const Mahashivratri = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout>
      {/* ── MSD Banner ── */}
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
                background: "rgba(255,153,51,0.05)",
              }}
            >
              <div className="tricolour-bar" />
              <img
                src="/ChatGPT Image Apr 25, 2026, 10_09_18 AM.png"
                alt="Maha Seva Dal — Unity of People's, Development of Society, Power of Youth"
                className="w-full block"
                style={{ 
                  objectFit: "cover", 
                  objectPosition: "center",
                  width: "100%"
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
        {/* Green radial glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 45% at 50% 10%, rgba(19,136,8,0.10) 0%, transparent 70%)",
          }}
        />
        {/* Saffron bottom glow */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,153,51,0.06), transparent)",
          }}
        />

        <div className="container max-w-4xl relative z-10">
          {/* Event badge */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(19,136,8,0.10)",
                border: "1px solid rgba(19,136,8,0.30)",
                color: "#0a5c06",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span>🔱</span> September 2025 · Chennai
            </span>
          </div>

          <PageHeader
            title="Mahashivratri Celebration"
            subtitle="A Festival of Faith, Culture & Social Service — T. Nagar Hall, Chennai"
          />


          {/* Chief Guest card */}
          <div
            className="card-heritage p-6 md:p-8 mb-10 animate-fade-up"
            style={{ animationDelay: "0.05s", borderLeft: "4px solid #138808" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{
                  background: "rgba(19,136,8,0.10)",
                  boxShadow: "0 0 16px rgba(19,136,8,0.2)",
                }}
              >
                🏛️
              </div>
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-1 font-semibold"
                  style={{ color: "#FF9933", fontFamily: "'Inter', sans-serif" }}
                >
                  Chief Guest
                </p>
                <h2
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#0a5c06",
                  }}
                >
                  Shri Dr. Chuba Ao
                </h2>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  BJP National Vice President
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded text-xs font-medium"
                    style={{
                      background: "rgba(255,153,51,0.12)",
                      color: "#b85c00",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    30 Years of Service · Nagaland
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main narrative */}
          <article
            className="prose-heritage mx-auto animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <p>
              In September 2025, a significant Mahashivratri celebration was held at
              the T. Nagar Hall in Chennai, featuring Shri Dr. Chuba Ao, BJP National
              Vice President, as the Chief Guest. The event served as a powerful
              platform for both humanitarian service and the promotion of India's
              rich cultural values.
            </p>
            <p>
              During the ceremony, Dr. Chuba Ao demonstrated a profound commitment to
              inclusivity by distributing three-wheeler cycles and hearing aids to
              persons with disabilities — a gesture that resonated deeply with the
              spirit of the occasion and with the core mission of Maha Seva Dal.
            </p>
          </article>
        </div>
      </section>

      {/* ── MSD Pillars ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-2"
              style={{ color: "#FF9933", fontFamily: "'Inter', sans-serif" }}
            >
              Maha Seva Dal
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #138808, #0a5c06)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pillars of the Organisation
            </h2>
            <div className="lotus-divider max-w-xs mx-auto mt-4">
              <span className="lotus-icon">❀</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {msdPillars.map((p, i) => (
              <div
                key={p.title}
                className="card-heritage p-6 text-center animate-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ background: `${p.color}14` }}
                >
                  {p.icon}
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: p.color }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-foreground/75"
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philanthropy Highlight ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <div
            className="rounded-2xl overflow-hidden animate-fade-up"
            style={{
              border: "1px solid rgba(255,153,51,0.2)",
              background:
                "linear-gradient(135deg, rgba(255,153,51,0.06), rgba(255,255,255,0.0) 50%, rgba(19,136,8,0.06))",
            }}
          >
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{ background: "rgba(255,153,51,0.12)" }}
                >
                  🎁
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#c8440a" }}
                >
                  Philanthropy & Social Impact
                </h2>
              </div>
              <p
                className="prose-heritage mb-4"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem" }}
              >
                Dr. Chuba Ao's personal gesture of distributing <strong>three-wheeler
                cycles</strong> and <strong>hearing aids</strong> to persons with
                disabilities at the celebration exemplified inclusive leadership and
                compassion in action. This aligned perfectly with the MSD's mission of
                ensuring every Indian, regardless of ability, is brought into the
                mainstream of national development.
              </p>

              {/* Disability aid items */}
              <div className="flex flex-wrap gap-3 mt-4">
                {["♿ Three-Wheeler Cycles", "👂 Hearing Aids"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: "rgba(255,153,51,0.10)",
                      border: "1px solid rgba(255,153,51,0.25)",
                      color: "#7a3200",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Speakers ── */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-2"
              style={{ color: "#138808", fontFamily: "'Inter', sans-serif" }}
            >
              Programme
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #FF9933, #138808)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Key Leadership & Addresses
            </h2>
            <div className="lotus-divider max-w-xs mx-auto mt-4">
              <span className="lotus-icon">❀</span>
            </div>
          </div>

          <div className="space-y-4">
            {speakers.map((s, i) => (
              <div
                key={s.name}
                className="card-heritage p-5 md:p-6 flex items-start gap-4 animate-fade-up"
                style={{
                  animationDelay: `${0.1 + i * 0.1}s`,
                  borderLeft: `3px solid ${s.color}55`,
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${s.color}12` }}
                >
                  {s.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ fontFamily: "'Playfair Display', serif", color: s.color }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="text-xs font-medium mb-1.5"
                    style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}
                  >
                    {s.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed text-foreground/80"
                    style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.02rem" }}
                  >
                    {s.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dr. Chuba Ao Legacy ── */}
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-2"
              style={{ color: "#FF9933", fontFamily: "'Inter', sans-serif" }}
            >
              Honoring a Legacy
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #c8440a, #000080)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              30 Years of Tireless Service
            </h2>
            <p
              className="text-sm text-muted-foreground mt-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Dr. Chuba Ao's journey — from the age of 19 in Nagaland
            </p>
            <div className="lotus-divider max-w-xs mx-auto mt-4">
              <span className="lotus-icon">❀</span>
            </div>
          </div>

          <div className="space-y-4">
            {contributions.map((c, i) => (
              <div
                key={i}
                className="card-heritage flex items-start gap-4 p-5 animate-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(0,0,128,0.07)" }}
                >
                  {c.icon}
                </div>
                <p
                  className="leading-relaxed text-foreground/85 mt-1.5"
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem" }}
                >
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          {/* Legacy quote */}
          <div
            className="mt-10 rounded-2xl p-8 md:p-10 text-center animate-fade-up"
            style={{
              animationDelay: "0.4s",
              background:
                "linear-gradient(135deg, rgba(19,136,8,0.07) 0%, rgba(255,255,255,0.0) 50%, rgba(255,153,51,0.07) 100%)",
              border: "1px solid rgba(19,136,8,0.18)",
            }}
          >
            <div className="text-4xl mb-4">🙏</div>
            <blockquote
              className="text-xl md:text-2xl font-medium leading-relaxed"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0a5c06",
                fontStyle: "italic",
              }}
            >
              "Serving communities since the age of 19 — Dr. Chuba Ao's legacy in
              Nagaland stands as a beacon of selfless dedication to tribal welfare
              and national integration."
            </blockquote>
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
                background: showGallery ? "rgba(19,136,8,0.05)" : "linear-gradient(135deg, #138808, #0a5c06)",
                color: showGallery ? "#0a5c06" : "#fff",
                border: showGallery ? "1px solid rgba(19,136,8,0.2)" : "1px solid transparent",
                boxShadow: showGallery ? "none" : "0 4px 20px rgba(19,136,8,0.3)",
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
              {mahaImages.map((imgName, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl overflow-hidden aspect-square bg-muted/20 relative cursor-pointer group"
                  style={{ border: "1px solid rgba(19,136,8,0.15)" }}
                  onClick={() => setSelectedImage(`/maha/${imgName}`)}
                >
                  <img
                    src={`/maha/${imgName}`}
                    alt={`Event moment ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Closing tricolour line */}
      <div className="flex justify-center pb-16">
        <div
          className="w-32 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FF9933 40%, #138808 60%, transparent)",
          }}
        />
      </div>

      {/* Image Preview Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          style={{ animation: "fadeIn 0.2s ease-out forwards" }}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Event Preview" 
            className="max-w-full max-h-full object-contain rounded-md"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default Mahashivratri;
