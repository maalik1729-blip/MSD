import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, Mail, Phone, Heart } from "lucide-react";
import appointmentsData from "@/data/appointments.json";

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
  const [openAppts, setOpenAppts] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [mobileApptsOpen, setMobileApptsOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);
  const apptsRef = useRef<HTMLLIElement>(null);

  const isEventActive = eventItems.some((e) => e.path === location.pathname);
  const isApptActive = location.pathname.startsWith("/appointment/");

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
      if (apptsRef.current && !apptsRef.current.contains(e.target as Node)) {
        setOpenAppts(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => { 
    setOpen(false); 
    setOpenAppts(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      {/* BJP tricolour stripe at very top */}
      <div className="tricolour-bar" />

      {/* ── Top Contact Bar (Desktop) ── */}
      <div className="hidden xl:flex justify-end items-center px-8 pt-3 pb-1.5 bg-orange-50/50 border-b border-orange-100/50 gap-4">
        <a href="mailto:Mahasevadalorganization@gmail.com" className="flex items-center gap-1.5 text-[11px] xl:text-xs font-medium text-stone-600 hover:text-[#c8440a] transition-colors group" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Mail size={13} className="text-[#c8440a] opacity-80 group-hover:opacity-100" />
          <span>Mahasevadalorganization@gmail.com</span>
        </a>
        <div className="w-px h-3 bg-stone-300"></div>
        <a href="tel:+919994625690" className="flex items-center gap-1.5 text-[11px] xl:text-xs font-medium text-stone-600 hover:text-[#c8440a] transition-colors group" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Phone size={13} className="text-[#c8440a] opacity-80 group-hover:opacity-100" />
          <span>+91 9994625690</span>
        </a>
      </div>

      {/* ── Single-line header row ── */}
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 md:py-3">

          {/* ── LEFT: Brand + Logo ── */}
          <div className="flex items-center gap-3 lg:w-[280px] flex-shrink-0">
            {/* Logo Image */}
            <Link to="/" aria-label="Maha Seva Dal Home" className="flex-shrink-0">
              <div className="relative group w-12 h-12 md:w-14 md:h-14">
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

            {/* Organisation name */}
            <Link to="/" className="group flex flex-col justify-center">
              <h1
                className="text-lg md:text-xl font-serif font-bold tracking-wide leading-none"
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
                className="text-xs font-medium tracking-[0.2em] mt-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#b85c00" }}
              >
                Maha Seva Dal
              </p>
            </Link>
          </div>

          {/* ── CENTER: Desktop Navigation ── */}
          <nav className="hidden xl:flex flex-1 justify-end xl:justify-center">
            <ul className="flex items-center justify-center gap-x-3 xl:gap-x-5 py-1 px-2 whitespace-nowrap">

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

                {/* Appointments dropdown */}
                <li ref={apptsRef} className="relative">
                  <div className="inline-flex items-center gap-0.5">
                    <span
                      className="relative inline-block py-1 px-1 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer"
                      onClick={() => setOpenAppts((v) => !v)}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: (isApptActive || openAppts) ? "#c8440a" : "#57534e",
                      }}
                    >
                      Organization Appointment
                      {isApptActive && (
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                          style={{ background: "linear-gradient(90deg, #FF9933, #138808)" }}
                        />
                      )}
                    </span>
                    <button
                      onClick={() => setOpenAppts((v) => !v)}
                      className="inline-flex items-center justify-center w-5 h-5 rounded"
                      style={{
                        background: openAppts ? "rgba(255,153,51,0.12)" : "transparent",
                        border: "none", outline: "none", cursor: "pointer",
                        color: openAppts ? "#c8440a" : "#888",
                      }}
                      aria-haspopup="true"
                      aria-expanded={openAppts}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                        style={{ transform: openAppts ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s ease" }}>
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Dropdown panel */}
                  {openAppts && (
                    <div
                      className="absolute top-full left-1/2 mt-2 rounded-xl overflow-hidden"
                      style={{
                        transform: "translateX(-50%)",
                        minWidth: "260px",
                        maxHeight: "80vh",
                        overflowY: "auto",
                        background: "rgba(255, 252, 245, 0.97)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,153,51,0.22)",
                        boxShadow: "0 8px 32px rgba(255,153,51,0.14), 0 2px 8px rgba(0,0,0,0.08)",
                        zIndex: 100,
                        animation: "dropdownIn 0.2s cubic-bezier(0.16,1,0.3,1) forwards",
                      }}
                    >
                      <div className="tricolour-bar sticky top-0 z-10" />
                      <div className="px-4 pt-2 pb-1 sticky top-[3px] bg-[rgba(255,252,245,0.95)] z-10" style={{ borderBottom: "1px solid rgba(255,153,51,0.12)" }}>
                        <p className="text-xs font-bold tracking-widest uppercase"
                          style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
                          Appointments
                        </p>
                      </div>

                      {appointmentsData.map((appt) => {
                        const isActive = location.pathname === `/appointment/${appt.id}`;
                        return (
                          <Link
                            key={appt.id}
                            to={`/appointment/${appt.id}`}
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
                              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm mt-0.5"
                              style={{ background: "rgba(0,0,128,0.05)" }}
                            >
                              {appt.type === 'team' ? '👥' : '👤'}
                            </span>
                            <div>
                              <p className="text-sm font-semibold leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif", color: isActive ? "#c8440a" : "#3d2c00" }}>
                                {appt.region}
                              </p>
                              <p className="text-xs mt-0.5"
                                style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
                                {appt.type === 'team' ? 'State Team' : appt.role}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                      <div className="tricolour-bar sticky bottom-0 z-10" />
                    </div>
                  )}
                </li>

              </ul>
            </nav>

          {/* ── RIGHT: Mobile Toggle & Support Button ── */}
          <div className="flex xl:hidden flex-1 justify-end items-center pr-2 gap-2">
            <Link
              to="/support"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #FF9933, #c8440a)",
                color: "#fff",
                boxShadow: "0 0 12px rgba(255,153,51,0.5)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Heart size={12} fill="#fff" /> Support
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md bg-orange-50 text-orange-700 focus:outline-none transition-colors border border-orange-100 shadow-sm"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Desktop: Support Us button on right */}
          <div className="hidden xl:flex xl:w-[280px] flex-shrink-0 justify-end items-center">
            <Link
              to="/support"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 animate-pulse-glow"
              style={{
                background: "linear-gradient(135deg, #FF9933, #c8440a)",
                color: "#fff",
                boxShadow: "0 0 18px rgba(255,153,51,0.55), 0 2px 8px rgba(200,68,10,0.3)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              <Heart size={15} fill="#fff" />
              Support Us
            </Link>
          </div>

        </div>
      </div>

      {/* ── Mobile Navigation Menu ── */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-base font-semibold text-gray-800 pb-2 border-b border-gray-100"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Events Dropdown */}
            <div className="pb-2 border-b border-gray-100">
              <button 
                onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                className="flex items-center justify-between w-full text-base font-semibold text-gray-800 pb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Events {mobileEventsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {mobileEventsOpen && (
                <div className="pl-4 pt-2 flex flex-col space-y-3">
                  {eventItems.map((event) => (
                    <Link key={event.path} to={event.path} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="text-lg">{event.icon}</span> {event.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Appointments Dropdown */}
            <div className="pb-2 border-b border-gray-100">
              <button 
                onClick={() => setMobileApptsOpen(!mobileApptsOpen)}
                className="flex items-center justify-between w-full text-base font-semibold text-gray-800 pb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Organization Appointments {mobileApptsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {mobileApptsOpen && (
                <div className="pl-4 pt-2 flex flex-col space-y-3 border-l-2 border-orange-200 pb-4">
                  {appointmentsData.map((appt) => (
                    <Link key={appt.id} to={`/appointment/${appt.id}`} className="flex flex-col gap-0.5 text-sm py-1 pl-2">
                      <span className="font-semibold text-orange-800">{appt.region}</span>
                      <span className="text-xs text-gray-500">{appt.type === 'team' ? 'State Team' : appt.role}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Info */}
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
              <a href="mailto:Mahasevadalorganization@gmail.com" className="flex items-center gap-2 text-sm font-medium text-stone-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Mail size={16} className="text-[#c8440a]" />
                Mahasevadalorganization@gmail.com
              </a>
              <a href="tel:+919994625690" className="flex items-center gap-2 text-sm font-medium text-stone-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Phone size={16} className="text-[#c8440a]" />
                +91 9994625690
              </a>
            </div>
          </div>
        </div>
      )}

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
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 18px rgba(255,153,51,0.55), 0 2px 8px rgba(200,68,10,0.3); }
          50%       { box-shadow: 0 0 28px rgba(255,153,51,0.85), 0 4px 16px rgba(200,68,10,0.5); }
        }
        .animate-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);     }
        }
      `}</style>
    </header>
  );
};

export default Header;
