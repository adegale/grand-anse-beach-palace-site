import { useEffect, useRef, useState } from 'react';

const MEDIA = [
  { type: 'img', src: 'beach-bay.jpg',        dur: 6500, from: 'scale(1.06) translate(0,0)',        to: 'scale(1.16) translate(-2%,-1%)' },
  { type: 'vid', src: 'clip-waves.mp4',        dur: 6500, from: 'scale(1.04)',                       to: 'scale(1.12)',  start: 1 },
  { type: 'img', src: 'balcony-bistro.jpg',    dur: 5500, from: 'scale(1.05) translate(1.5%,1%)',    to: 'scale(1.15) translate(-1.5%,-1.5%)' },
  { type: 'img', src: 'balcony-palms.jpg',     dur: 5500, from: 'scale(1.08) translate(-1.5%,1.5%)', to: 'scale(1.16) translate(1.5%,-1%)' },
  { type: 'vid', src: 'clip-water.mp4',        dur: 6500, from: 'scale(1.04)',                       to: 'scale(1.12)',  start: 1 },
  { type: 'img', src: 'kitchenette-sea.jpg',   dur: 5500, from: 'scale(1.05) translate(2%,0)',       to: 'scale(1.15) translate(-2%,-1%)' },
  { type: 'img', src: 'balcony-chairs.jpg',    dur: 5500, from: 'scale(1.06) translate(0,1.5%)',     to: 'scale(1.16) translate(0,-1.5%)' },
  { type: 'img', src: 'kitchen-door-sea.jpg',  dur: 5500, from: 'scale(1.05) translate(-2%,0)',      to: 'scale(1.15) translate(2%,-1%)' },
];

const BASE = `${import.meta.env.BASE_URL}media/hero-assets/`;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function advance(to: number) {
    setPrev(current);
    setCurrent(to);
  }

  useEffect(() => {
    const item = MEDIA[current];
    timerRef.current = setTimeout(() => {
      advance((current + 1) % MEDIA.length);
    }, item.dur);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 560, background: '#0a3a44' }}>

      {/* Slide layers */}
      {MEDIA.map((item, i) => {
        const isActive = i === current;
        const isPrev   = i === prev;
        if (!isActive && !isPrev) return null;
        return (
          <SlideLayer
            key={`${i}-${isActive ? 'a' : 'p'}`}
            item={item}
            base={BASE}
            visible={isActive}
          />
        );
      })}

      {/* Scrim */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top,rgba(6,32,38,0.72) 0%,rgba(6,32,38,0.20) 38%,rgba(6,32,38,0.05) 60%,rgba(6,32,38,0.18) 100%)' }}
      />

      {/* Copy */}
      <div className="absolute bottom-0 left-0 z-10 px-6 pb-16 md:px-16 md:pb-20 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-white text-sm font-semibold"
          style={{ background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.28)', letterSpacing: '0.04em' }}>
          <span className="w-2 h-2 rounded-full" style={{ background: '#ffd23f', boxShadow: '0 0 0 4px rgba(255,210,63,0.3)' }} />
          Grenada · Caribbean
        </div>
        <h1 className="text-white font-extrabold leading-none mb-4"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(40px,7vw,86px)', letterSpacing: '-0.02em', textShadow: '0 2px 24px rgba(4,24,30,0.35)' }}>
          Your Grand Anse<br />Beach escape
        </h1>
        <p className="mb-8" style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'clamp(16px,1.9vw,21px)', lineHeight: 1.5, maxWidth: 540, textShadow: '0 1px 12px rgba(4,24,30,0.4)' }}>
          Beachfront rooms steps from the turquoise water of Grenada's most beautiful shore. Family-run, warm, and wonderfully unhurried.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a href="#contact"
            className="inline-flex items-center gap-2 font-bold text-white no-underline rounded-full px-7 py-4"
            style={{ background: '#ff6a3d', fontSize: 17, boxShadow: '0 8px 26px rgba(255,106,61,0.45)' }}>
            Book your stay <span style={{ fontSize: 19 }}>→</span>
          </a>
          <a href="#rooms"
            className="inline-flex items-center font-semibold text-white no-underline rounded-full px-6 py-4"
            style={{ fontSize: 17, border: '1.5px solid rgba(255,255,255,0.55)' }}>
            Explore rooms
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute right-6 bottom-16 md:right-16 md:bottom-20 flex gap-2 z-10">
        {MEDIA.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); advance(i); }}
            className="h-2 rounded-full border-0 p-0 cursor-pointer transition-all duration-300"
            style={{
              width: i === current ? 26 : 9,
              background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80"
        style={{ animation: 'gabp-bob 2.4s ease-in-out infinite' }}>
        <span className="text-xs font-semibold" style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}>Scroll</span>
        <span style={{ fontSize: 16 }}>↓</span>
      </div>

      <style>{`
        @keyframes gabp-bob { 0%,100%{transform:translate(-50%,0)} 50%{transform:translate(-50%,7px)} }
        @media (prefers-reduced-motion:reduce){ .gabp-scroll{animation:none} }
      `}</style>
    </section>
  );
}

function SlideLayer({ item, base, visible }: {
  item: typeof MEDIA[number];
  base: string;
  visible: boolean;
}) {
  const elRef = useRef<HTMLVideoElement & HTMLImageElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    void el.offsetWidth;
    el.style.transition = `transform ${(item.dur / 1000) + 1.6}s linear, opacity 1.3s ease`;
    el.style.transform = item.to;
    el.style.opacity = visible ? '1' : '0';

    if (item.type === 'vid' && visible) {
      const v = el as HTMLVideoElement;
      try { v.currentTime = item.start ?? 0; } catch (_) {}
      v.play().catch(() => {});
    }
  }, [visible]);

  const commonStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transformOrigin: 'center',
    willChange: 'transform, opacity',
    opacity: 0,
    transform: item.from,
    transition: 'none',
  };

  if (item.type === 'vid') {
    return (
      <video
        ref={elRef as React.RefObject<HTMLVideoElement>}
        src={base + item.src}
        muted
        loop
        playsInline
        preload="auto"
        style={commonStyle}
      />
    );
  }

  return (
    <img
      ref={elRef as React.RefObject<HTMLImageElement>}
      src={base + item.src}
      alt=""
      style={commonStyle}
    />
  );
}
