import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/meodnblb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Oops! There was a problem sending your message. Please try again or call us directly.');
      }
    } catch {
      alert('Oops! There was a problem sending your message. Please try again or call us directly.');
    }
  };

  const inputClass = 'w-full px-4 py-3 border border-gray-200 focus:border-palace-navy focus:outline-none transition-colors duration-200 text-palace-navy text-sm placeholder-gray-400';
  const labelClass = 'block text-xs font-semibold tracking-widest uppercase text-palace-navy/60 mb-2';

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="section-rule" />
          <h2 className="text-palace-navy mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg max-w-xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Have questions? We're here to help plan your perfect Caribbean getaway.
          </p>
        </div>

        {/* Contact info + form */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">

          {/* LEFT: Contact info */}
          <div>
            <div className="border border-gray-100 p-8 mb-8">
              <h3 className="text-palace-navy mb-8" style={{ fontSize: '1.25rem' }}>Contact Information</h3>

              <div className="space-y-7">
                {[
                  { icon: MapPin, label: 'Address', lines: ['Grand Anse Beach, St. George\'s, Grenada'] },
                  { icon: Phone, label: 'Phone', lines: ['+1 (473) 439-1412', 'Available 7am – 9pm EST'] },
                  { icon: Mail, label: 'Email', lines: ['grandansepalace@gmail.com', 'We respond within 24 hours'] },
                  { icon: Clock, label: 'Check-in / Check-out', lines: ['Check-in: 3:00 PM', 'Check-out: 11:00 AM'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-palace-navy/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-palace-navy" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-palace-navy text-sm mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {label}
                      </p>
                      {lines.map((line, i) => (
                        <p key={i} className={`text-sm ${i === 0 ? 'text-gray-700' : 'text-gray-400'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-palace-navy/50 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/grandansebeachpalace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Grand Anse Beach Palace on Facebook"
                    className="w-10 h-10 bg-palace-navy text-white flex items-center justify-center hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/grandansebeachpalace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Grand Anse Beach Palace on Instagram"
                    className="w-10 h-10 bg-palace-navy text-white flex items-center justify-center hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.52!2d-61.7735!3d12.0075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123ed4aad13d0de3!2sGrand%20Anse%20Beach%20Palace!5e0!3m2!1sen!2sus!4v1717100000000!5m2!1sen!2sus"
                width="100%"
                height="260"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Anse Beach Palace Location"
              />
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            <form id="send-message" onSubmit={handleSubmit} className="border border-gray-100 p-8">
              <h3 className="text-palace-navy mb-8" style={{ fontSize: '1.25rem' }}>Send Us a Message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelClass} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your travel plans..."
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-palace-navy text-palace-gold py-4 text-sm font-semibold tracking-widest uppercase hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200 flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Booking banner */}
        <div className="bg-palace-navy px-8 md:px-20 py-16 text-center text-white">
          <h2
            className="text-white mb-5"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300 }}
          >
            Ready to Experience Paradise?
          </h2>
          <p className="text-white/70 text-base mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Book your stay directly with us, come and relax. Enjoy the soothing rhythms of the sea and island life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('send-message')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-palace-navy px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200 min-w-[220px]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Check Availability
            </button>
            <a
              href="tel:+14734391412"
              className="border border-palace-gold text-palace-gold px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200 min-w-[220px] text-center"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Call +1 (473) 439-1412
            </a>
          </div>
          <p className="mt-8 text-white/40 text-xs tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Best Rate Guarantee &nbsp;&bull;&nbsp; No Booking Fees &nbsp;&bull;&nbsp; Instant Confirmation
          </p>
        </div>
      </div>
    </section>
  );
}
