import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const isMobile =
        typeof window !== 'undefined' &&
        window.matchMedia('(max-width: 768px)').matches;

    const videoSrc = isMobile
        ? `${import.meta.env.BASE_URL}media/hero-mobile.mp4`
        : `${import.meta.env.BASE_URL}media/Hero.mp4`;

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Poster shown while video loads */}
            <img
                src={`${import.meta.env.BASE_URL}media/hero.jpg`}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Video background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={`${import.meta.env.BASE_URL}media/hero.jpg`}
                src={videoSrc}
                onCanPlay={() => setVideoLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/65" />

            {/* Hero content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
                <p
                    className="text-palace-gold text-sm font-medium tracking-[0.3em] uppercase mb-6"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                    Grand Anse Beach &bull; Grenada
                </p>

                <h1
                    className="text-white mb-6"
                    style={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        fontWeight: 300,
                        letterSpacing: '0.04em',
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        lineHeight: 1.1,
                    }}
                >
                    Where the<br />
                    <em style={{ color: '#FFCD72', fontStyle: 'italic' }}>Caribbean breathes</em>
                </h1>

                <p
                    className="text-white/85 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                    A family-run beachfront retreat on Grenada's most iconic shoreline.
                    Steps from Grand Anse Beach — warm, unhurried, unforgettable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => document.getElementById('send-message')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-palace-navy text-palace-gold px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200 min-w-[200px]"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Book Your Stay
                    </button>
                    <button
                        onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border border-white/70 text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:border-palace-gold hover:text-palace-gold transition-colors duration-200 min-w-[200px]"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Our Story
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-palace-gold transition-colors duration-200 z-10"
                aria-label="Scroll to rooms"
            >
                <ChevronDown size={32} strokeWidth={1} className="animate-bounce" />
            </button>
        </section>
    );
}
