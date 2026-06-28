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
        style={{ background: 'linear-grad