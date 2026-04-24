import { useEffect, useRef } from "react";

/* ─── BJP colour palette ────────────────────────────────────────── */
const SAFFRON  = "rgba(255, 153, 51,";   // #FF9933
const WHITE    = "rgba(255, 255, 255,";
const GREEN    = "rgba(19, 136, 8,";     // #138808
const NAVY     = "rgba(0, 0, 128,";      // Ashok Chakra ring

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  color: string;
  alpha: number;
  wobble: number;
  wobbleSpeed: number;
}

/* A simplified 24-spoke Ashok Chakra drawn on canvas */
function drawChakra(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number, r: number, alpha: number, rotate: number
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);
  ctx.rotate(rotate);

  // Outer ring
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.strokeStyle = `${NAVY} 0.6)`;
  ctx.lineWidth = r * 0.08;
  ctx.stroke();

  // Inner circle
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.15, 0, Math.PI * 2);
  ctx.fillStyle = `${NAVY} 0.6)`;
  ctx.fill();

  // 24 spokes
  for (let i = 0; i < 24; i++) {
    const angle = (i * Math.PI * 2) / 24;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * r * 0.92, Math.sin(angle) * r * 0.92);
    ctx.strokeStyle = `${NAVY} 0.5)`;
    ctx.lineWidth = r * 0.04;
    ctx.stroke();
  }

  ctx.restore();
}

/* Draw a stylised lotus petal ring */
function drawLotus(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number, r: number, alpha: number, rotate: number
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);
  ctx.rotate(rotate);

  const petals = 8;
  for (let i = 0; i < petals; i++) {
    const angle = (i / petals) * Math.PI * 2;
    const px = Math.cos(angle) * r * 0.55;
    const py = Math.sin(angle) * r * 0.55;

    ctx.beginPath();
    ctx.ellipse(px, py, r * 0.28, r * 0.48, angle, 0, Math.PI * 2);
    ctx.fillStyle = `${SAFFRON} 0.18)`;
    ctx.strokeStyle = `${SAFFRON} 0.5)`;
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

export default function PartyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const timeRef   = useRef<number>(0);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    function initParticles() {
      const count = Math.floor((canvas.width * canvas.height) / 14000);
      particles.current = Array.from({ length: count }, () => {
        const pick = Math.random();
        const color = pick < 0.45 ? SAFFRON : pick < 0.75 ? WHITE : GREEN;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25 - 0.1,
          r: Math.random() * 3.5 + 1,
          color,
          alpha: Math.random() * 0.55 + 0.1,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: (Math.random() - 0.5) * 0.015,
        };
      });
    }

    resize();
    window.addEventListener("resize", resize);

    function draw(ts: number) {
      timeRef.current = ts / 1000;
      const t = timeRef.current;
      const W = canvas.width;
      const H = canvas.height;

      /* ── Background gradient: tricolour sweep ── */
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0,    "rgba(255, 153, 51, 0.22)");  // saffron top
      grad.addColorStop(0.38, "rgba(255, 248, 235, 0.0)");  // fade to white
      grad.addColorStop(0.62, "rgba(240, 255, 240, 0.0)");
      grad.addColorStop(1,    "rgba(19, 136, 8,   0.14)");  // green bottom
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      /* ── Radial glow pulses ── */
      const pulseAlpha = 0.07 + 0.04 * Math.sin(t * 0.6);
      const glow1 = ctx.createRadialGradient(W * 0.18, H * 0.25, 0, W * 0.18, H * 0.25, W * 0.38);
      glow1.addColorStop(0, `${SAFFRON} ${pulseAlpha})`);
      glow1.addColorStop(1, `${SAFFRON} 0)`);
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, W, H);

      const glow2 = ctx.createRadialGradient(W * 0.82, H * 0.75, 0, W * 0.82, H * 0.75, W * 0.35);
      glow2.addColorStop(0, `${GREEN} ${pulseAlpha})`);
      glow2.addColorStop(1, `${GREEN} 0)`);
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, W, H);

      /* ── Floating decorative Ashok Chakras ── */
      const chakraPositions = [
        { cx: W * 0.08,  cy: H * 0.12,  r: 70,  speed: 0.06,  phase: 0 },
        { cx: W * 0.92,  cy: H * 0.88,  r: 90,  speed: 0.04,  phase: 1 },
        { cx: W * 0.5,   cy: H * 0.05,  r: 50,  speed: 0.08,  phase: 2 },
        { cx: W * 0.5,   cy: H * 0.95,  r: 50,  speed: 0.07,  phase: 3 },
      ];
      for (const c of chakraPositions) {
        drawChakra(ctx, c.cx, c.cy, c.r, 0.15 + 0.05 * Math.sin(t * c.speed + c.phase), t * c.speed);
      }

      /* ── Lotus motifs ── */
      const lotusPositions = [
        { cx: W * 0.92, cy: H * 0.1,  r: 80,  speed: 0.05, phase: 0.5 },
        { cx: W * 0.08, cy: H * 0.9,  r: 65,  speed: 0.06, phase: 1.5 },
        { cx: W * 0.5,  cy: H * 0.5,  r: 110, speed: 0.03, phase: 0   },
      ];
      for (const l of lotusPositions) {
        drawLotus(ctx, l.cx, l.cy, l.r, 0.55, t * l.speed + l.phase);
      }

      /* ── BJP flag-stripe bands (subtle horizontal) ── */
      const stripeH = H / 3;
      ctx.globalAlpha = 0.035 + 0.01 * Math.sin(t * 0.3);
      ctx.fillStyle = SAFFRON + " 1)";
      ctx.fillRect(0, 0, W, stripeH);
      ctx.fillStyle = WHITE + " 0.5)";
      ctx.fillRect(0, stripeH, W, stripeH);
      ctx.fillStyle = GREEN + " 1)";
      ctx.fillRect(0, stripeH * 2, W, stripeH);
      ctx.globalAlpha = 1;

      /* ── Particles ── */
      for (const p of particles.current) {
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.18;
        p.y += p.vy;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + " 1)";
        ctx.shadowColor = p.color + " 0.8)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 1 }}
      aria-hidden="true"
    />
  );
}
