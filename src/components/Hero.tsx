import { useEffect, useRef, useState } from 'react';

const MEDIA = [
  { type: 'img', src: 'beach-bay.jpg',        dur: 6.5, from: 'scale(1.06) translate(0,0)',        to: 'scale(1.16) translate(-2%,-1%)' },
  { type: 'vid', src: 'clip-waves.mp4',        dur: 6.5, from: 'scale(1.04)',                       to: 'scale(1.12)', start: 1 },
  { type: 'img', src: 'balcony-bistro.jpg',    dur: 5.5, from: 'scale(1.05) translate(1.5%,1%)',    to: 'scale(1.15) translate(-1.5%,-1.5%)' },
  { type: 'img', src: 'balcony-palms.jpg',     dur: 5.5, from: 'scale(1.08) translate(-1.5%,1.5%)', to: 'scale(1.16) translate(1.5%,-1%)' },
  { type: 'vid', src: 'clip-water.mp4',        dur: 6.5, from: 'scale(1.04)',                       to: 'scale(1.12)', start: 1 },
  { type: 'img', src: 'kitchenette-sea.jpg',   dur: 5.5, from: 'scale(1.05) translate(2%,0)',       to: 'scale(1.15) translate(-2%,-1%)' },
  { type: 'img', src: 'balcony-chairs.jpg',    dur: 5.5, from: 'scale(1.06) translate(0,1.5%)',     to: 'scale(1.16) translate(0,-1.5%)' },
  { type: 'img', src: 'kitchen-door-sea.jpg',  dur: 5.5, from: 'scale(1.05) translate(-2%,0)',      to: 'scale(1.15) translate(2%,-1%)' },
];

const FADE = 1.9;
const BASE = `${import.meta.env.BASE_URL}media/hero-assets/`;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const layerARef = useRef<HTMLDivElement>(null);
  const layerBRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Preload images
  useEffect(() => {
    MEDIA.forEach(m => {
      if (m.type === 'img') { const i = new Image(); i.src = BASE + m.src; }
    });
  }, []);

  function show(i: number) {
    const item = MEDIA[i];
    const layerA = layerARef.current!;
    const layerB = layerBRef.current!;
    const incoming = activeRef.current === layerA ? layerB : layerA;
    const outgoing = activeRef.current;

    // Build media element
    let el: HTMLVideoElement | HTMLImageElement;
    if (item.type === 'vid') {
      const v = document.createElement('video');
      v.src = BASE + item.src;
      v.muted = true; v.loop = true; v.preload = 'auto'; v.playsInline = true;
      el = v;
    } else {
      const img = document.createElement('img');
      img.src = BASE + item.src; img.alt = '';
      el = img;
    }

    el.style.cssText = `position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform-origin:center;will-change:transform,opacity;opacity:0;transition:none;`;
    el.style.transform = item.from;
    incoming.innerHTML = '';
    incoming.appendChild(el);

    function reveal() {
      void (el as HTMLElement).offsetWidth;
      el.style.transition = `transform ${item.dur + FADE * 2}s linear, opacity ${FADE}s ease`;
      el.style.transform = item.to;
      el.style.opacity = '1';
      if (outgoing?.firstChild) {
        (outgoing.firstChild as HTMLElement).style.opacity = '0';
      }
    }

    if (item.type === 'vid') {
      const v = el as HTMLVideoElement;
      let started = false;
      const go = () => { if (started) return; started = true; reveal(); };
      try { v.currentTime = item.start ?? 0; } catch (_) {}
      v.addEventListener('loadeddata', go);
      v.addEventListener('playing', go);
      v.play().catch(() => {});
      setTimeout(go, 600);
    } else if ((el as HTMLImageElement).complete) {
      reveal();
    } else {
      el.addEventListener('load', reveal);
      setTimeout(reveal, 400);
    }

    activeRef.current = incoming;
    setCurrent(i);

    if (outgoing) {
      setTimeout(() => {
        const old = outgoing.querySelector('video');
        if (old) { try { old.pause(); } catch (_) {} }
        if (outgoing !== activeRef.current) outgoing.innerHTML = '';
      }, FADE * 1000 + 400);
    }

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => show((i + 1) % MEDIA.length), item.dur * 1000);
  }

  useEffect(() => {
    show(0);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: 560, overflow: 'hidden', background: '#0a3a44', fontFamily: "'Figtree', system-ui, sans-serif" }}>

      {/* Two crossfade layers */}
      <div ref={layerARef} style={{ position: 'absolute', inset: 0 }} />
      <div ref={layerBRef} style={{ position: 'absolute', inset: 0 }} />

      {/* Scrim */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(to top,rgba(6,32,38,0.72) 0%,rgba(6,32,38,0.20) 38%,rgba(6,32,38,0.05) 60%,rgba(6,32,38,0.18) 100%)' }} />

      {/* Copy */}
      <div style={{ position: 'absolute', left: 0, bottom: 0, padding: '0 clamp(22px,5vw,72px) clamp(48px,7vh,86px)', zIndex: 3, maxWidth: 'min(880px,92%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 15px', borderRadius: 999, background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.28)', color: '#fff', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', marginBottom: 22 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffd23f', boxShadow: '0 0 0 4px rgba(255,210,63,0.3)', display: 'inline-block' }} />
          Grenada · Caribbean
        </div>
        <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(40px,7vw,86px)', lineHeight: 0.98, margin: '0 0 18px', letterSpacing: '-0.02em', textShadow: '0 2px 24px rgba(4,24,30,0.35)' }}>
          Your Grand Anse<br />Beach escape
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'clamp(16px,1.9vw,21px)', lineHeight: 1.5, margin: '0 0 30px', maxWidth: 540, textShadow: '0 1px 12px rgba(4,24,30,0.4)' }}>
          Beachfront rooms steps from the turquoise water of Grenada's most beautiful shore. Family-run, warm, and wonderfully unhurried.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none', fontWeight: 700, fontSize: 17, padding: '16px 28px', borderRadius: 999, background: '#ff6a3d', color: '#fff', boxShadow: '0 8px 26px rgba(255,106,61,0.45)' }}>
            Book your stay <span style={{ fontSize: 19 }}>→</span>
          </a>
          <a href="#rooms" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', fontWeight: 600, fontSize: 17, padding: '16px 24px', borderRadius: 999, color: '#fff', border: '1.5px solid rgba(255,255,255,0.55)' }}>
            Explore rooms
          </a>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', right: 'clamp(22px,5vw,64px)', bottom: 'clamp(48px,7vh,86px)', display: 'flex', gap: 9, zIndex: 3 }}>
        {MEDIA.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); show(i); }}
            style={{
              width: i === current ? 26 : 9,
              height: 9,
              borderRadius: i === current ? 999 : '50%',
              border: 0,
              padding: 0,
              cursor: 'pointer',
              background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', left: '50%', bottom: 22, transform: 'translateX(-50%)', zIndex: 3, color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, animation: 'gabp-bob 2.4s ease-in-out infinite' }}>
        <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
        <span style={{ fontSize: 16 }}>↓</span>
      </div>

      <style>{`
        @keyframes gabp-bob { 0%,100%{transform:translate(-50%,0)} 50%{transform:translate(-50%,7px)} }
        @media (prefers-reduced-motion:reduce){ .gabp-scroll{animation:none} }
      `}</style>
    </section>
  );
}
