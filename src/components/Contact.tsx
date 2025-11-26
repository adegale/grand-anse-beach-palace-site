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
        headers: {
          'Content-Type': 'application/json',
        },
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#2B59C3]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;re here to help plan your perfect Caribbean getaway.
          </p>
        </div>

        {/* Contact info + form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT: Contact info */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2B59C3]/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#2B59C3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">Grand Anse Beach, St. George&apos;s, Grenada</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#29BF12]/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#29BF12]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (473) 444-4444</p>
                    <p className="text-sm text-gray-500">Available 7am - 10pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#F56416]/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#F56416]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">grandansepalace@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFD166]/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-[#F56416]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Check-in / Check-out</h4>
                    <p className="text-gray-600">Check-in: 3:00 PM</p>
                    <p className="text-gray-600">Check-out: 11:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#2B59C3] p-3 rounded-full text-white hover:bg-[#29BF12] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#F56416] p-3 rounded-full text-white hover:bg-[#29BF12] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2B59C3] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2B59C3] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2B59C3] focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2B59C3] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F56416] text-white px-8 py-4 rounded-full font-bold hover:bg-[#29BF12] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Booking banner */}
        <div className="bg-gradient-to-br from-[#2B59C3] via-[#2B59C3] to-[#29BF12] rounded-2xl p-8 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Paradise?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Book your stay directly with us and enjoy exclusive perks including complimentary
            breakfast, beach gear, and airport transfers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#2B59C3] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FFD166] hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Check Availability
            </button>
            <button className="bg-[#F56416] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#F56416] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Call Now: +1 (473) 444-4444
            </button>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Best Rate Guarantee • No Booking Fees • Instant Confirmation
          </p>
        </div>
      </div>
    </section>
  );
}
