import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart, Mail, Phone, Utensils, Flame, FileText, Search } from "lucide-react";
import appointmentsData from "@/data/appointments.json";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/origins", label: "Origins (1947)" },
  { path: "/ideology", label: "Ideology" },
  { path: "/partition", label: "Partition Period" },
  { path: "/legacy", label: "Growth & Legacy" },
];

const eventItems = [
  { path: "/events/guru-poornima", label: "Guru Poornima", icon: Utensils, date: "July 2025" },
  { path: "/events/mahashivratri", label: "Mahashivratri", icon: Flame, date: "September 2025" },
];

const Header = () => {
  const location = useLocation();
  const [openEvents, setOpenEvents] = useState(false);
  const [openAppts, setOpenAppts] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [apptSearch, setApptSearch] = useState("");
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [mobileApptsOpen, setMobileApptsOpen] = useState(false);

  const eventsRef = useRef<HTMLLIElement>(null);
  const apptsRef = useRef<HTMLLIElement>(null);
  const apptScrollRef = useRef<HTMLDivElement>(null);

  const isEventActive = eventItems.some((e) => e.path === location.pathname);
  const isApptActive = location.pathname.startsWith("/appointment/");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (eventsRef.current && !eventsRef.current.contains(e.target as Node)) {
        setOpenEvents(false);
      }
      if (apptsRef.current && !apptsRef.current.contains(e.target as Node)) {
        setOpenAppts(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setOpenEvents(false);
    setOpenAppts(false);
    setIsMobileMenuOpen(false);
    setApptSearch("");
    setMobileEventsOpen(false);
    setMobileApptsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);


  // Completely trap wheel + touchmove inside the dropdown to prevent background page scrolling
  useEffect(() => {
    const el = apptScrollRef.current;
    if (!el || !openAppts) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isScrollable = scrollHeight > clientHeight;

      // Always stop propagation so the page never sees this event
      e.stopPropagation();

      if (!isScrollable) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      const isAtTop = scrollTop <= 0 && delta < 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight && delta > 0;

      // Only block default when we'd scroll past an edge
      if (isAtTop || isAtBottom) {
        e.preventDefault();
      }
    };

    // Two-finger touch scrolling (touchscreen / trackpad with touch events)
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const deltaY = touchStartY - e.touches[0].clientY;
      const isAtTop = scrollTop <= 0 && deltaY < 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight && deltaY > 0;
      if (isAtTop || isAtBottom) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [openAppts, apptSearch]);

  const filteredAppts = Array.isArray(appointmentsData)
    ? appointmentsData.filter((a) => {
      if (!apptSearch.trim()) return true;
      const q = apptSearch.toLowerCase();
      return (
        a.region.toLowerCase().includes(q) ||
        (a.name && a.name.toLowerCase().includes(q))
      );
    })
    : [];

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-hairline transition-colors">
      {/* BJP Saffron-to-Green Top Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF6200] via-[#FF9933] to-[#138808]" />

      {/* Editorial Top Contact Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-1.5 bg-surface-soft border-b border-hairline text-xs text-muted-editorial">
        <div className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/wq9znxvs/image/upload/v1785928702/msd/brand/logo.png" alt="Maha Seva Dal Logo" className="w-4 h-4 rounded-full object-cover" />
          <span className="font-serif italic text-ink font-semibold">Maha Seva Dal</span>
          <span className="text-muted-soft">| Est. 1947 — Unity, Service & Empowerment</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:mahasevadalorganization@gmail.com" className="flex items-center gap-1.5 hover:text-[#FF6200] transition-colors">
            <Mail size={12} className="text-[#FF6200]" />
            <span>mahasevadalorganization@gmail.com</span>
          </a>
          <a href="tel:+919994625690" className="flex items-center gap-1.5 hover:text-[#FF6200] transition-colors">
            <Phone size={12} className="text-[#FF6200]" />
            <span>+91 9994625690</span>
          </a>
        </div>
      </div>

      {/* Main Top Nav Bar (Height 64px) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand Logo & Wordmark — Cloudinary CDN Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FF6200]/40 flex items-center justify-center group-hover:border-[#FF6200] transition-colors flex-shrink-0 bg-surface-card shadow-sm">
            <img src="https://res.cloudinary.com/wq9znxvs/image/upload/v1785928702/msd/brand/logo.png" alt="Maha Seva Dal Logo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold text-ink tracking-tight group-hover:text-[#FF6200] transition-colors leading-none" title="'महा सेवा दल">
              Maha Seva Dal
            </span>
            <span className="text-[10px] text-muted-editorial uppercase tracking-widest leading-tight mt-0.5 font-semibold text-[#FF6200]" title="'महा सेवा दल">
              மஹா சேவா தளம் · 1947
            </span>
          </div>
        </Link>

        {/* Desktop Menu Navigation */}
        <nav className="hidden lg:flex items-center gap-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors relative py-1 ${isActive ? "text-[#FF6200] font-semibold" : "text-body-main hover:text-[#FF6200]"
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6200] rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Events Dropdown */}
          <li ref={eventsRef} className="list-none relative">
            <button
              onClick={() => setOpenEvents((v) => !v)}
              className={`flex items-center gap-1 transition-colors py-1 ${isEventActive || location.pathname === "/events" || openEvents
                ? "text-[#FF6200] font-semibold"
                : "text-body-main hover:text-[#FF6200]"
                }`}
            >
              Events
              <ChevronDown size={14} className={`transition-transform duration-200 ${openEvents ? "rotate-180" : ""}`} />
            </button>

            {openEvents && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-canvas border border-hairline rounded-xl shadow-lg p-2.5 z-50 animate-fade-in">
                <Link
                  to="/events"
                  className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#FF6200] hover:bg-surface-soft rounded-lg border-b border-hairline mb-1 transition-colors"
                >
                  All Events Overview →
                </Link>
                {eventItems.map((ev) => {
                  const IconComp = ev.icon;
                  return (
                    <Link
                      key={ev.path}
                      to={ev.path}
                      className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-soft transition-colors text-sm text-ink group"
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <IconComp size={15} className="text-[#FF6200] flex-shrink-0" />
                        <span className="font-medium group-hover:text-[#FF6200] transition-colors truncate">{ev.label}</span>
                      </span>
                      <span className="text-[11px] font-mono text-muted-editorial group-hover:text-[#FF6200] transition-colors whitespace-nowrap flex-shrink-0 pl-2">
                        {ev.date}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </li>

          {/* Appointments Dropdown */}
          <li ref={apptsRef} className="list-none relative">
            <button
              onClick={() => setOpenAppts((v) => !v)}
              className={`flex items-center gap-1 transition-colors py-1 ${isApptActive || openAppts ? "text-[#FF6200] font-semibold" : "text-body-main hover:text-[#FF6200]"
                }`}
            >
              Appointments
              <ChevronDown size={14} className={`transition-transform duration-200 ${openAppts ? "rotate-180" : ""}`} />
            </button>

            {openAppts && (
              <div className="absolute top-full right-0 lg:right-auto lg:left-0 mt-2 w-80 bg-canvas border border-hairline rounded-xl shadow-xl p-3 z-50 animate-fade-in">
                {/* Dropdown Header & Search Bar */}
                <div className="pb-2 border-b border-hairline mb-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#FF6200] mb-1.5 px-1">
                    Official State Appointments
                  </div>
                  <div className="relative">
                    <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-editorial" />
                    <input
                      type="text"
                      placeholder="Search state or region..."
                      value={apptSearch}
                      onChange={(e) => setApptSearch(e.target.value)}
                      className="w-full text-xs pl-7 pr-3 py-1.5 rounded-lg border border-hairline bg-surface-soft text-ink placeholder:text-muted-editorial focus:outline-none focus:border-[#FF6200] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>

                {/* Scrollable Appointment Record Items with non-passive wheel trap & overscroll-contain */}
                <div
                  ref={apptScrollRef}
                  style={{ overscrollBehavior: "contain" }}
                  className="custom-scrollbar max-h-72 overflow-y-auto space-y-1 pr-1"
                >
                  {filteredAppts.length > 0 ? (
                    filteredAppts.map((appt) => (
                      <Link
                        key={appt.id}
                        to={`/appointment/${appt.id}`}
                        className="block px-2.5 py-2 rounded-lg hover:bg-surface-soft transition-colors group border border-transparent hover:border-hairline"
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-semibold text-ink group-hover:text-[#FF6200] flex items-center gap-1.5 transition-colors">
                            <FileText size={12} className="text-[#FF6200] flex-shrink-0" />
                            <span>{appt.region}</span>
                          </div>
                          <span className="text-[10px] font-medium text-[#FF6200] opacity-0 group-hover:opacity-100 transition-opacity">
                            View →
                          </span>
                        </div>
                        <div className="text-[11px] text-muted-editorial mt-0.5 pl-4 flex items-center justify-between">
                          <span className="truncate">{appt.type === "individual" ? appt.name : "State Leadership Team"}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-xs text-muted-editorial text-center py-4">
                      No matching state records found.
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
        </nav>

        {/* Right CTA Cluster */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maalik1729@gmail.com&su=Support%20%26%20Donation%20Enquiry" target="_blank" rel="noopener noreferrer" className="btn-primary-coral text-xs px-4 py-2">
            <Heart size={14} />
            <span>Support & Donate</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="p-2 rounded-md text-ink hover:bg-surface-card border border-hairline"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-canvas overflow-y-auto custom-scrollbar animate-fade-in">
          {/* Overlay Header — mirrors the main header bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#FF6200] via-[#FF9933] to-[#138808]" />
          <div className="flex items-center justify-between px-5 py-3 border-b border-hairline bg-canvas">
            <div className="flex items-center gap-2.5">
              <img
                src="https://res.cloudinary.com/wq9znxvs/image/upload/v1785928702/msd/brand/logo.png"
                alt="Maha Seva Dal Logo"
                className="w-8 h-8 rounded-full object-cover border border-hairline"
              />
              <div>
                <div className="font-serif font-bold text-sm text-ink leading-tight">Maha Seva Dal</div>
                <div className="text-[10px] text-muted-editorial">மஹா சேவா தளம் · 1947</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/support" className="btn-primary-coral text-xs px-3 py-1.5">Donate</Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-ink hover:bg-surface-card border border-hairline"
                aria-label="Close Navigation"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Nav Content */}
          <nav className="flex flex-col px-5 pb-8">

            {/* Main Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm py-3 border-b border-hairline font-medium transition-colors ${location.pathname === item.path ? "text-[#FF6200]" : "text-ink hover:text-[#FF6200]"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Events Accordion */}
            <div className="border-b border-hairline">
              <button
                onClick={() => setMobileEventsOpen((v) => !v)}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-ink hover:text-[#FF6200] transition-colors"
              >
                <span>Events</span>
                <ChevronDown
                  size={16}
                  className={`text-[#FF6200] transition-transform duration-200 ${mobileEventsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileEventsOpen && (
                <div className="pb-3 pl-2 flex flex-col gap-1 animate-fade-in">
                  <Link
                    to="/events"
                    className="block text-xs font-semibold text-[#FF6200] py-1.5 px-2 rounded-lg hover:bg-surface-soft transition-colors"
                  >
                    All Events Overview →
                  </Link>
                  {eventItems.map((ev) => {
                    const IconComp = ev.icon;
                    return (
                      <Link
                        key={ev.path}
                        to={ev.path}
                        className="flex items-center justify-between text-sm text-ink py-2 px-2 rounded-lg hover:bg-surface-soft transition-colors group"
                      >
                        <span className="flex items-center gap-2">
                          <IconComp size={14} className="text-[#FF6200]" />
                          <span className="group-hover:text-[#FF6200] transition-colors">{ev.label}</span>
                        </span>
                        <span className="text-[11px] text-muted-editorial font-mono">{ev.date}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Appointments Accordion */}
            <div className="border-b border-hairline">
              <button
                onClick={() => setMobileApptsOpen((v) => !v)}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-ink hover:text-[#FF6200] transition-colors"
              >
                <span>Appointments</span>
                <ChevronDown
                  size={16}
                  className={`text-[#FF6200] transition-transform duration-200 ${mobileApptsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileApptsOpen && (
                <div className="pb-3 pl-2 flex flex-col gap-0.5 animate-fade-in">
                  {Array.isArray(appointmentsData) && appointmentsData.map((appt) => (
                    <Link
                      key={appt.id}
                      to={`/appointment/${appt.id}`}
                      className="flex items-center gap-2 text-sm text-ink py-2 px-2 rounded-lg hover:bg-surface-soft hover:text-[#FF6200] transition-colors group"
                    >
                      <FileText size={13} className="text-[#FF6200] flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium text-xs group-hover:text-[#FF6200] transition-colors">{appt.region}</div>
                        <div className="text-[11px] text-muted-editorial truncate">
                          {appt.type === "individual" ? appt.name : "State Leadership Team"}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Donate CTA */}
            <div className="pt-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maalik1729@gmail.com&su=Support%20%26%20Donation%20Enquiry" target="_blank" rel="noopener noreferrer" className="btn-primary-coral w-full justify-center">
                Support & Donate
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
