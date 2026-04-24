import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const eventCards = [
  {
    path: "/events/guru-poornima",
    icon: "🌕",
    title: "Guru Poornima",
    date: "July 2025",
    guest: "Shri Sanjay Nirmal",
    role: "BJP National General Secretary, SC Morcha",
    summary:
      "A large-scale food distribution drive for underprivileged communities, highlighting MSD's commitment to Hindutva, cultural heritage, and educational empowerment.",
    tags: ["Social Welfare", "Cultural Identity", "Education"],
    color: "#FF9933",
    borderColor: "rgba(255,153,51,0.35)",
    bg: "rgba(255,153,51,0.07)",
  },
  {
    path: "/events/mahashivratri",
    icon: "🔱",
    title: "Mahashivratri Celebration",
    date: "September 2025",
    guest: "Shri Dr. Chuba Ao",
    role: "BJP National Vice President",
    summary:
      "A grand celebration at T. Nagar Hall, Chennai, featuring distribution of assistive devices to persons with disabilities and honouring 30 years of tribal service in Nagaland.",
    tags: ["Philanthropy", "Sports & Youth", "Heritage"],
    color: "#138808",
    borderColor: "rgba(19,136,8,0.3)",
    bg: "rgba(19,136,8,0.06)",
  },
];

const Events = () => {
  return (
    <PageLayout>

      {/* ══════════════════════════════════════
          HERO — Events Header
      ══════════════════════════════════════ */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 5%, rgba(255,153,51,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="container max-w-5xl relative z-10">

          {/* Eyebrow badge */}
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
              🪷 Maha Seva Dal · Events
            </span>
          </div>

          {/* Page title */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #FF9933 0%, #c8440a 45%, #138808 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Events
            </h1>
            <p
              className="text-base text-muted-foreground max-w-xl mx-auto"
              style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem" }}
            >
              Celebrations of culture, service, and national pride — organised by Maha Seva Dal
              in partnership with BJP leaders across India.
            </p>
            <div className="lotus-divider max-w-xs mx-auto mt-6">
              <span className="lotus-icon text-xl">❀</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EVENT CARDS
      ══════════════════════════════════════ */}
      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventCards.map((ev, i) => (
              <Link
                key={ev.path}
                to={ev.path}
                className="group block card-heritage p-0 overflow-hidden animate-fade-up"
                style={{
                  animationDelay: `${0.1 + i * 0.12}s`,
                  borderTop: `3px solid ${ev.color}`,
                  textDecoration: "none",
                }}
              >
                {/* Card header */}
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                      style={{ background: ev.bg }}
                    >
                      {ev.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase font-bold mb-1"
                        style={{ color: ev.color, fontFamily: "'Inter', sans-serif" }}
                      >
                        {ev.date}
                      </p>
                      <h2
                        className="text-xl font-bold leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#3d2c00" }}
                      >
                        {ev.title}
                      </h2>
                    </div>
                  </div>

                  {/* Chief guest */}
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg mb-4"
                    style={{ background: ev.bg, border: `1px solid ${ev.borderColor}` }}
                  >
                    <span className="text-base">🏛️</span>
                    <div>
                      <p
                        className="text-xs font-bold"
                        style={{ color: ev.color, fontFamily: "'Inter', sans-serif" }}
                      >
                        Chief Guest
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#3d2c00" }}
                      >
                        {ev.guest}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {ev.role}
                      </p>
                    </div>
                  </div>

                  {/* Summary */}
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.02rem",
                      color: "#57534e",
                    }}
                  >
                    {ev.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ev.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          background: ev.bg,
                          border: `1px solid ${ev.borderColor}`,
                          color: ev.color,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div
                  className="px-6 py-3 flex items-center justify-between"
                  style={{
                    borderTop: `1px solid ${ev.borderColor}`,
                    background: ev.bg,
                  }}
                >
                  <span
                    className="text-xs font-bold tracking-wide uppercase"
                    style={{ color: ev.color, fontFamily: "'Inter', sans-serif" }}
                  >
                    Read Full Report
                  </span>
                  <span
                    className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: ev.color }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing line */}
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

export default Events;
