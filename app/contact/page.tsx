import { Mail, Phone, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    value: "Lagos, Nigeria",
    sub: "Available for in-person consultations",
    href: null,
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "customercare@kodgglobal.com",
    sub: "We reply within 24 hours",
    href: "mailto:customercare@kodgglobal.com",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+234 701 287 6051",
    sub: "Mon – Fri, 8am – 6pm WAT",
    href: "tel:+2347012876051",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Sat: 8am – 6pm",
    sub: "West Africa Time (WAT)",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Contact"
        title="Get in Touch"
        subtitle="We're here to guide you every step of the way. Reach out and let's start your journey together."
      />

      {/* ── Contact Info + Form ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Left: Info */}
            <div>
              <SectionHeader
                label="Contact Details"
                title="Ways to Reach Us"
                centered={false}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {contactDetails.map(({ icon: Icon, title, value, sub, href }) => (
                  <div
                    key={title}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-royal" />
                    </div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      {title}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-royal font-semibold text-sm hover:text-royal-light transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-royal font-semibold text-sm">{value}</p>
                    )}
                    <p className="text-gray-400 text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Social & Messaging */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-royal font-bold mb-4">Connect With Us</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/message/RSGYRYQPXNY4M1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm group-hover:text-green-700 transition-colors">
                        Chat on WhatsApp
                      </p>
                      <p className="text-gray-500 text-xs">Quick responses via WhatsApp</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/kodgglobal_link?igsh=MTl1Z2oxNzdlaW5k&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors group"
                  >
                    <div className="w-10 h-10 bg-linear-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm group-hover:text-pink-700 transition-colors">
                        Follow on Instagram
                      </p>
                      <p className="text-gray-500 text-xs">@kodgglobal_link</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <SectionHeader
                label="Send a Message"
                title="We'd Love to Hear From You"
                centered={false}
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-royal to-royal-light rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-white text-center shadow-xl">
            <MapPin className="w-14 h-14 text-gold mx-auto mb-5" />
            <h2 className="text-2xl font-extrabold mb-3">Based in Lagos, Nigeria</h2>
            <p className="text-gray-200 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Our office is located in Lagos, Nigeria. We serve clients across
              Nigeria and internationally. Contact us to schedule an in-person
              or virtual consultation.
            </p>
            <a
              href="mailto:customercare@kodgglobal.com"
              className="inline-flex items-center gap-2 bg-gold text-royal font-bold px-7 py-3 rounded-full hover:bg-gold-light transition-colors shadow-md"
            >
              <Mail className="w-4 h-4" />
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ teaser ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader
            label="FAQs"
            title="Common Questions"
            subtitle="Have questions about our services? Here are some things our clients commonly ask."
          />
          <div className="space-y-4 text-left">
            {[
              {
                q: "How long does the visa application process take?",
                a: "The timeline varies by country, but our team will give you an accurate estimate based on your specific destination during your consultation.",
              },
              {
                q: "Do you offer scholarships?",
                a: "While we don't fund scholarships directly, we actively guide clients toward available scholarship opportunities at partner institutions.",
              },
              {
                q: "Can you help with procurement and supply services?",
                a: "Yes! We offer professional general merchandise and procurement services for individuals and organizations. Contact us to discuss your specific requirements.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
              >
                <summary className="p-5 cursor-pointer font-semibold text-royal text-sm select-none flex items-center justify-between">
                  {q}
                  <span className="text-gold text-lg font-bold ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
