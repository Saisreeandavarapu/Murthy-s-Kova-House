import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="font-serif text-3xl sm:text-5xl text-brown-900 font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-brown-900/60 max-w-xl mx-auto text-sm sm:text-lg pt-2 sm:pt-4">
            We’d love to hear from you. Reach out for bulk orders, sweet customizations, or simply to say hello!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-20">

          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">

            {/* Address */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl premium-shadow flex items-start space-x-4 sm:space-x-6 hover:-translate-y-1 transition-transform">
              <div className="bg-gold-500/10 p-3 sm:p-4 rounded-full text-gold-500 shrink-0">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brown-900 mb-1 sm:mb-2">
                  Our Store
                </h3>
                <p className="text-brown-900/70 text-sm sm:text-base leading-relaxed">
                  Shop 42, Heritage Street,<br />
                  Andhra Pradesh, India 530002
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl premium-shadow flex items-start space-x-4 sm:space-x-6 hover:-translate-y-1 transition-transform">
              <div className="bg-gold-500/10 p-3 sm:p-4 rounded-full text-gold-500 shrink-0">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brown-900 mb-1 sm:mb-2">
                  Call Us
                </h3>
                <p className="text-brown-900/70 text-sm sm:text-base leading-relaxed">
                  +91 98765 43210<br />
                  Mon - Sat, 9AM to 8PM
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl premium-shadow flex items-start space-x-4 sm:space-x-6 hover:-translate-y-1 transition-transform">
              <div className="bg-gold-500/10 p-3 sm:p-4 rounded-full text-gold-500 shrink-0">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brown-900 mb-1 sm:mb-2">
                  Email Address
                </h3>
                <p className="text-brown-900/70 text-sm sm:text-base leading-relaxed break-words">
                  hello@murthyskova.com<br />
                  support@murthyskova.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl premium-shadow overflow-hidden">
            <div className="p-6 sm:p-10 md:p-14">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brown-900 mb-6 sm:mb-8 border-b border-brown-900/10 pb-4 sm:pb-6">
                Send us a Message
              </h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-6">

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-brown-900 mb-1 sm:mb-2 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-cream/30 border border-brown-900/20 py-3 sm:py-4 px-4 sm:px-5 rounded focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-brown-900 mb-1 sm:mb-2 uppercase tracking-wide">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-cream/30 border border-brown-900/20 py-3 sm:py-4 px-4 sm:px-5 rounded focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-brown-900 mb-1 sm:mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full bg-cream/30 border border-brown-900/20 py-3 sm:py-4 px-4 sm:px-5 rounded focus:outline-none focus:border-gold-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-brown-900 mb-1 sm:mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full bg-cream/30 border border-brown-900/20 py-3 sm:py-4 px-4 sm:px-5 rounded focus:outline-none focus:border-gold-500"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-brown-900 text-white px-6 sm:px-10 py-3 sm:py-5 uppercase tracking-widest text-xs sm:text-sm font-semibold hover:bg-gold-500 transition-colors rounded"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[280px] sm:h-[400px] lg:h-[500px] bg-white rounded-2xl sm:rounded-3xl premium-shadow overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Shop%2042,%20Heritage%20Street,%20Andhra%20Pradesh,%20India%20530002&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;