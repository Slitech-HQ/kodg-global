import Link from "next/link";
import {
  GraduationCap,
  FileText,
  Globe2,
  Compass,
  ShoppingBag,
  Plane,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  MapPin,
  Star,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Counseling",
    description:
      "Professional guidance to help you choose the right country and programs that align with your future career goals.",
  },
  {
    icon: FileText,
    title: "Admission & Application Support",
    description:
      "Full assistance with documentation, application submissions, and institutional follow-ups.",
  },
  {
    icon: Globe2,
    title: "Visa Guidance",
    description:
      "Step-by-step support for visa applications, interviews, and all required documentation.",
  },
  {
    icon: Compass,
    title: "Pre-Departure Orientation",
    description:
      "Information on travel, accommodation, cultural preparation, and successfully settling abroad.",
  },
  {
    icon: Plane,
    title: "Tourism Services",
    description:
      "Comprehensive tourism support for memorable and seamless international travel experiences.",
  },
  {
    icon: ShoppingBag,
    title: "General Merchandise & Procurement",
    description:
      "Reliable supply of goods and services for individuals and organizations across various sectors.",
  },
];

const stats = [
  { value: "500+", label: "Students Placed", icon: Users },
  { value: "30+", label: "Partner Universities", icon: Award },
  { value: "20+", label: "Countries Covered", icon: Globe2 },
  { value: "5+", label: "Years of Excellence", icon: Star },
];

const commitments = [
  "Transparent and honest advisory services",
  "End-to-end support from counseling to arrival",
  "Personalized approach tailored for every client",
  "Strong institutional partnerships worldwide",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-linear-to-br from-royal-dark via-royal to-royal-light overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-gold/15 rounded-full" />
          <div className="absolute top-1/4 right-1/3 w-96 h-96 border border-white/10 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-3 sm:px-4 py-1.5 mb-5 sm:mb-6 max-w-full">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse shrink-0" />
                <span className="text-gold text-xs sm:text-sm font-medium truncate">
                  Welcome to KODG Global Link LTD
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 sm:mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gold">World-Class</span> Education Abroad
              </h1>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-7 sm:mb-8 leading-relaxed">
                We provide expert guidance for admissions, visas, and global
                academic opportunities — alongside professional procurement
                services.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/services/"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-royal font-bold px-6 py-3 rounded-full hover:bg-gold-light transition-colors shadow-lg w-full xs:w-auto"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-royal transition-colors w-full xs:w-auto"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Hero card */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white">
                  <Globe2 className="w-14 h-14 text-gold mb-5 animate-float" />
                  <h3 className="text-xl font-bold mb-3">
                    Connecting Dreams to Global Opportunities
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Trusted by students across Nigeria and beyond.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { v: "20+", l: "Countries" },
                      { v: "30+", l: "Universities" },
                      { v: "500+", l: "Students" },
                      { v: "5+", l: "Years" },
                    ].map(({ v, l }) => (
                      <div
                        key={l}
                        className="bg-white/10 rounded-xl p-3 text-center"
                      >
                        <div className="text-gold font-extrabold text-lg">{v}</div>
                        <div className="text-xs text-gray-300">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-gold text-royal text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  #1 Education Consultancy
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-royal text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                  Verified &amp; Trusted
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" className="w-full fill-gray-50">
            <path d="M0,28L60,32C120,37,240,47,360,47C480,47,600,37,720,32C840,28,960,28,1080,32C1200,37,1320,47,1380,52L1440,56L1440,70L0,70Z" />
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-royal/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-royal" />
                </div>
                <div className="text-3xl font-extrabold text-royal">{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Offer"
            title="Comprehensive Services for Your Journey"
            subtitle="From study abroad counseling to procurement solutions — we cover every step of your global aspirations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                highlight={index === 0}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 bg-royal text-white font-bold px-7 py-3 rounded-full hover:bg-royal-dark transition-colors shadow-md"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Commitment ── */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <SectionHeader
                label="Our Commitment"
                title="We Simplify Your Journey"
                subtitle="Supporting you at every step with reliable, transparent, and professional services."
                centered={false}
              />
              <ul className="space-y-3 mb-8">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 text-royal font-semibold hover:text-royal-light transition-colors group"
              >
                Learn More About Us{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-linear-to-br from-royal to-royal-light rounded-3xl p-8 text-white shadow-xl">
                <Globe2 className="w-14 h-14 text-gold mb-5" />
                <h3 className="text-2xl font-bold mb-3">
                  Global Reach, Local Touch
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  We combine international expertise with a deep understanding of
                  our clients&apos; local needs, delivering personalized solutions
                  that make a real difference.
                </p>
                <div className="flex items-center gap-2 text-gold">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="text-sm">
                    Based in Lagos, Nigeria — Serving Globally
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Tagline Banner ── */}
      <section className="py-14 sm:py-20 bg-gold relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1E3A8A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-royal/70 text-xs font-bold uppercase tracking-widest mb-4">
            Our Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-royal leading-tight mb-6 sm:mb-8">
            Connecting Dreams to Global Opportunities
          </h2>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-royal text-white font-bold px-8 py-3.5 rounded-full hover:bg-royal-dark transition-colors shadow-lg"
          >
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
