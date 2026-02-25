import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

const services = [
  "Study Abroad Counseling",
  "University Admissions",
  "Visa Assistance",
  "Pre-Departure Guidance",
  "Tourism Services",
  "Procurement & Supplies",
];

export default function Footer() {
  return (
    <footer className="bg-royal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shrink-0">
                <Image
                  src="/logo.png"
                  alt="KODG Global Link LTD"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-white font-extrabold text-base block leading-tight">
                  KODG Global Link LTD
                </span>
                <span className="text-gold/80 text-xs">Lagos, Nigeria</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted partner in achieving world-class education abroad.
              Connecting dreams to global opportunities.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kodgglobal_link?igsh=MTl1Z2oxNzdlaW5k&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-royal rounded-full flex items-center justify-center hover:bg-gold hover:text-royal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/message/RSGYRYQPXNY4M1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-royal rounded-full flex items-center justify-center hover:bg-gold hover:text-royal transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 text-sm flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                Lagos, Nigeria
              </li>
              <li>
                <a
                  href="mailto:customercare@kodgglobal.com"
                  className="flex items-start gap-2.5 text-gray-400 hover:text-gold text-sm transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  customercare@kodgglobal.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2347012876051"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-gold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  +234 701 287 6051
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs text-center sm:text-left">
          <p>© {new Date().getFullYear()} KODG Global Link LTD. All rights reserved.</p>
          <p className="text-gray-600">Connecting Dreams to Global Opportunities</p>
        </div>
      </div>
    </footer>
  );
}
