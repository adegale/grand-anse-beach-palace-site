const whatsappUrl =
  'https://wa.me/14734391412?text=Hello%20Grand%20Anse%20Beach%20Palace%2C%20I%27d%20like%20to%20inquire%20about%20a%20stay.';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Grand Anse Beach Palace on WhatsApp"
      className="button fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1FB855] hover:shadow-[0_16px_36px_rgba(37,211,102,0.45)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-6 sm:right-6 sm:px-5"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-5 w-5 fill-current"
        >
          <path d="M16.01 3.2c-7.06 0-12.8 5.62-12.8 12.54 0 2.2.59 4.35 1.7 6.24L3.2 28.8l7-1.78a13.1 13.1 0 0 0 5.8 1.36c7.06 0 12.8-5.62 12.8-12.54S23.07 3.2 16.01 3.2Zm0 22.25c-1.83 0-3.62-.5-5.16-1.45l-.37-.23-4.15 1.06 1.1-4.02-.25-.4a9.47 9.47 0 0 1-1.48-5.07c0-5.31 4.4-9.63 9.8-9.63 5.42 0 9.83 4.32 9.83 9.63 0 5.3-4.41 9.61-9.82 9.61Zm5.38-7.21c-.3-.14-1.73-.84-2-.94-.27-.1-.47-.14-.67.14-.2.29-.77.94-.95 1.14-.17.19-.35.21-.65.07-.3-.14-1.24-.45-2.36-1.43a8.84 8.84 0 0 1-1.64-2c-.17-.29-.02-.44.13-.59.13-.13.3-.35.45-.52.15-.17.2-.29.3-.48.1-.2.05-.36-.02-.5-.08-.14-.67-1.58-.92-2.16-.24-.56-.49-.49-.67-.5h-.57c-.2 0-.52.08-.8.36-.27.29-1.05 1.01-1.05 2.45 0 1.45 1.08 2.85 1.23 3.05.15.19 2.12 3.17 5.14 4.44.72.3 1.28.49 1.72.63.72.22 1.38.19 1.9.12.58-.09 1.73-.7 1.97-1.37.25-.67.25-1.25.17-1.37-.07-.12-.27-.19-.57-.33Z" />
        </svg>
      </span>
      <span className="hidden text-sm font-bold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
