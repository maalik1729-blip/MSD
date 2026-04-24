import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/",          label: "Home"            },
  { path: "/origins",   label: "Origins (1947)"  },
  { path: "/ideology",  label: "Ideology"        },
  { path: "/partition", label: "Partition Period" },
  { path: "/legacy",    label: "Growth & Legacy" },
];

const eventItems = [
  { path: "/events/guru-poornima", label: "Guru Poornima", icon: "🌕", date: "July 2025"      },
  { path: "/events/mahashivratri", label: "Mahashivratri", icon: "🔱", date: "September 2025" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  const isEventActive = eventItems.some((e) => e.path === location.pathname);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      {/* BJP tricolour stripe at very top */}
      <div className="tricolour-bar" />

      {/* ── 3-column header row ── */}
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-4">

          {/* ── LEFT: spacer / mirror of logo size on mobile hidden ── */}
          <div className="w-16 md:w-20 flex-shrink-0 hidden md:block" aria-hidden="true" />

          {/* ── CENTER: brand + nav ── */}
          <div className="flex flex-col items-center flex-1">
            {/* Organisation name */}
            <Link to="/" className="mb-2 group text-center">
              <h1
                className="text-2xl md:text-3xl font-serif font-bold tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  background: "linear-gradient(135deg, #FF9933 0%, #c8440a 40%, #138808 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 1px 2px rgba(255,153,51,0.25))",
                }}
              >
                महा सेवा दल
              </h1>
              <p
                className="text-center text-sm font-medium tracking-[0.2em] mt-0.5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#b85c00" }}
              >
                Maha Seva Dal
              </p>
              <p className="text-center text-xs tracking-[0.3em] text-muted-foreground/70 uppercase mt-0.5">
                Est. 1947
              </p>
            </Link>

            {/* Lotus divider */}
            <div className="lotus-divider w-52 mb-2">
              <span className="lotus-icon">❀</span>
            </div>

            {/* Navigation */}
            <nav className="w-full">
              <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 md:gap-x-6">

                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="relative inline-block py-1 px-1 text-sm font-medium tracking-wide transition-all duration-200"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: isActive ? "#c8440a" : "#57534e",
                        }}
                      >
                        {item.label}
                        {isActive && (
                          <span
                            className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                            style={{ background: "linear-gradient(90deg, #FF9933, #138808)" }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}

                {/* Events dropdown */}
                <li ref={dropRef} className="relative">
                  <div className="inline-flex items-center gap-0.5">
                    <Link
                      to="/events"
                      className="relative inline-block py-1 px-1 text-sm font-medium tracking-wide transition-all duration-200"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: (isEventActive || location.pathname === "/events" || open) ? "#c8440a" : "#57534e",
                      }}
                    >
                      Events
                      {(isEventActive || location.pathname === "/events") && (
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                          style={{ background: "linear-gradient(90deg, #FF9933, #138808)" }}
                        />
                      )}
                    </Link>
                    <button
                      onClick={() => setOpen((v) => !v)}
                      className="inline-flex items-center justify-center w-5 h-5 rounded"
                      style={{
                        background: open ? "rgba(255,153,51,0.12)" : "transparent",
                        border: "none", outline: "none", cursor: "pointer",
                        color: open ? "#c8440a" : "#888",
                      }}
                      aria-haspopup="true"
                      aria-expanded={open}
                      aria-label="Toggle events menu"
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s ease" }}>
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Dropdown panel */}
                  {open && (
                    <div
                      className="absolute top-full left-1/2 mt-2 rounded-xl overflow-hidden"
                      style={{
                        transform: "translateX(-50%)",
                        minWidth: "220px",
                        background: "rgba(255, 252, 245, 0.97)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,153,51,0.22)",
                        boxShadow: "0 8px 32px rgba(255,153,51,0.14), 0 2px 8px rgba(0,0,0,0.08)",
                        zIndex: 100,
                        animation: "dropdownIn 0.2s cubic-bezier(0.16,1,0.3,1) forwards",
                      }}
                    >
                      <div className="tricolour-bar" />
                      <div className="px-4 pt-2 pb-1" style={{ borderBottom: "1px solid rgba(255,153,51,0.12)" }}>
                        <p className="text-xs font-bold tracking-widest uppercase"
                          style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
                          Events
                        </p>
                      </div>

                      {eventItems.map((event) => {
                        const isActive = location.pathname === event.path;
                        return (
                          <Link
                            key={event.path}
                            to={event.path}
                            className="flex items-start gap-3 px-4 py-3 transition-all duration-150 group"
                            style={{
                              background: isActive
                                ? "linear-gradient(90deg, rgba(255,153,51,0.10), rgba(19,136,8,0.06))"
                                : "transparent",
                              borderLeft: isActive ? "3px solid #FF9933" : "3px solid transparent",
                            }}
                            onMouseEnter={(e) => {
                              if (!isActive) (e.currentTarget as HTMLElement).style.background = "rgba(255,153,51,0.06)";
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent";
                            }}
                          >
                            <span
                              className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-lg mt-0.5"
                              style={{ background: "rgba(255,153,51,0.10)" }}
                            >
                              {event.icon}
                            </span>
                            <div>
                              <p className="text-sm font-semibold leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif", color: isActive ? "#c8440a" : "#3d2c00" }}>
                                {event.label}
                              </p>
                              <p className="text-xs mt-0.5"
                                style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
                                {event.date}
                              </p>
                            </div>
                            <span className="ml-auto self-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{ color: "#FF9933" }}>→</span>
                          </Link>
                        );
                      })}
                      <div className="tricolour-bar" />
                    </div>
                  )}
                </li>

              </ul>
            </nav>
          </div>

          {/* ── RIGHT: MSD Logo ── */}
          <div className="flex-shrink-0 flex items-center justify-end">
            <Link to="/" aria-label="Maha Seva Dal Home">
              <div
                className="relative group"
                style={{ width: "72px", height: "72px" }}
              >
                {/* Glow ring on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(255,153,51,0.35) 0%, transparent 70%)",
                    filter: "blur(6px)",
                    transform: "scale(1.15)",
                  }}
                />
                <img
                  src="/msd-logo.png"
                  alt="Maha Seva Dal Logo"
                  className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-105 saffron-glow"
                  style={{
                    filter: "drop-shadow(0 2px 8px rgba(255,153,51,0.4))",
                  }}
                />
              </div>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom shimmer line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,153,51,0.4) 30%, rgba(19,136,8,0.4) 70%, transparent)",
        }}
      />

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0)     scale(1);   }
        }
      `}</style>
    </header>
  );
};

export default Header;
