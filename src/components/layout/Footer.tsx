const Footer = () => {
  return (
    <footer className="relative mt-auto" style={{ borderTop: "1px solid rgba(255,153,51,0.18)" }}>
      <div className="container py-8">
        {/* Lotus divider */}
        <div className="lotus-divider w-48 mx-auto mb-4">
          <span className="lotus-icon text-lg">❀</span>
        </div>

        <p
          className="text-center text-sm tracking-wide"
          style={{ color: "#b85c00", fontFamily: "'Inter', sans-serif" }}
        >
          Maha Seva Dal (MSD) — Historical &amp; Informational Content
        </p>
        <p className="text-center text-xs text-muted-foreground/60 mt-1 tracking-widest uppercase">
          Est. 1947 · भारत माता की जय
        </p>
      </div>

      {/* Tricolour stripe at very bottom */}
      <div className="tricolour-bar" />
    </footer>
  );
};

export default Footer;

