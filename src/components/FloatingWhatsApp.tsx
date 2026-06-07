import { createPortal } from 'react-dom';

const WHATSAPP_NUMBER = '14734391412';
const PREFILLED_MESSAGE = encodeURIComponent(
  "Hello Grand Anse Beach Palace, I'd like to inquire about a stay."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`;

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="button"
      style={{
        position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 99999,
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        backgroundColor: '#25D366', color: '#ffffff',
        padding: '0.75rem 1.25rem', borderRadius: '9999px',
        fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer', whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.55)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)'; }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M16.002 2C8.268 2 2 8.268 2 16c0 2.477.648 4.8 1.778 6.82L2 30l7.363-1.744A13.942 13.942 0 0 0 16.002 30C23.732 30 30 23.732 30 16S23.732 2 16.002 2Zm0 25.6a11.557 11.557 0 0 1-5.9-1.61l-.422-.252-4.37 1.035 1.063-4.26-.277-.44A11.558 11.558 0 0 1 4.4 16c0-6.399 5.203-11.6 11.602-11.6C22.4 4.4 27.6 9.6 27.6 16S22.4 27.6 16.002 27.6Zm6.364-8.676c-.35-.175-2.07-1.02-2.39-1.137-.32-.118-.553-.175-.786.175-.232.349-.9 1.137-1.104 1.37-.203.232-.407.262-.756.087-.35-.175-1.476-.544-2.812-1.734-1.04-.927-1.742-2.072-1.946-2.421-.203-.35-.022-.538.153-.712.157-.157.35-.408.524-.612.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.612-.087-.175-.786-1.893-1.077-2.593-.283-.68-.572-.588-.786-.598l-.67-.012c-.233 0-.612.087-.932.437-.32.35-1.223 1.195-1.223 2.913s1.252 3.38 1.427 3.613c.175.232 2.464 3.762 5.97 5.276.834.36 1.485.574 1.992.734.837.266 1.599.228 2.202.138.672-.1 2.07-.846 2.363-1.664.291-.817.291-1.517.203-1.664-.087-.146-.32-.232-.67-.407Z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

export default function FloatingWhatsApp() {
  return createPortal(<WhatsAppButton />, document.body);
}
