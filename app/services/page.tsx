import Link from "next/link";
import {
  GraduationCap,
  FileText,
  Globe2,
  ShoppingBag,
  Briefcase,
  Plane,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PageBanner from "@/components/PageBanner";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Counseling",
    description:
      "Professional guidance to help you choose the right country, and select programs that match your future career goals. We analyze your profile, aspirations, and budget to recommend the best-fit destinations and institutions.",
    highlights: [
      "Country & institution selection",
      "Program fit analysis",
      "Scholarship guidance",
      "Career-aligned planning",
    ],
  },
  {
    icon: FileText,
    title: "University & College Application Support",
    description:
      "We assist with documentation, application submission, and follow-up with institutions. Our team ensures your application stands out and meets every requirement set by your target institution.",
    highlights: [
      "Document preparation & review",
      "Application submission",
      "Statement of purpose support",
      "Institution follow-ups",
    ],
  },
  {
    icon: Globe2,
    title: "Visa Assistance",
    description:
      "Step-by-step support for visa applications, interviews, and required documents. We walk you through the entire visa process, ensuring you're fully prepared and confident.",
    highlights: [
      "Visa application guidance",
      "Interview preparation",
      "Document checklist",
      "Embassy correspondence",
    ],
  },
  {
    icon: ShoppingBag,
    title: "General Merchandise & Procurement",
    description:
      "Professional and dependable general merchandise and procurement solutions. We leverage strong networks and operational efficiency to meet the evolving supply needs of individuals and organizations.",
    highlights: [
      "Goods sourcing & supply",
      "Vendor management",
      "Procurement consulting",
      "Logistics coordination",
    ],
  },
  {
    icon: Briefcase,
    title: "Career Counseling",
    description:
      "Expert advice to help you select programs that match your future career goals. We help you understand the global job market and how to position yourself for success after graduation.",
    highlights: [
      "Career path mapping",
      "Industry insights",
      "Graduate employment guidance",
      "Skills gap analysis",
    ],
  },
  {
    icon: Plane,
    title: "Pre-Departure & Travel Guidance",
    description:
      "Comprehensive information on travel, accommodation, cultural preparation, and settling abroad. We ensure you arrive confident, prepared, and ready to thrive.",
    highlights: [
      "Travel documentation",
      "Accommodation tips",
      "Cultural orientation",
      "Arrival & settling support",
    ],
  },
  {
    icon: Building2,
    title: "Institutional Partnerships",
    description:
      "We collaborate with global universities and colleges to support international student recruitment. Our partnerships ensure students have access to verified programs and institutions.",
    highlights: [
      "University collaboration",
      "Verified institution network",
      "Student recruitment support",
      "Partnership management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Our Services"
        title="What We Offer"
        subtitle="Comprehensive, end-to-end services designed to support every stage of your global education and business journey."
      />

      {/* ── Services Grid ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Services"
            title="Everything You Need to Succeed Globally"
            subtitle="From the first consultation to your first day abroad — we are with you every step of the way."
          />

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Info */}
                <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-royal/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-royal" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-gold uppercase tracking-wider">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-royal leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-1.5 text-royal font-semibold text-sm hover:text-royal-light transition-colors group"
                  >
                    Enquire Now{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Highlights */}
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""} bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6`}>
                  <h4 className="text-sm font-bold text-royal mb-4 uppercase tracking-wide">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-royal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Choose Us"
            title="The KODG Difference"
            subtitle="We go beyond information — we provide actionable guidance and walk with you every step of the way."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Team",
                desc: "Seasoned consultants with deep global education experience.",
                icon: "🎓",
              },
              {
                title: "Personalized Service",
                desc: "Every client gets a tailored plan, not a one-size-fits-all approach.",
                icon: "🤝",
              },
              {
                title: "Transparent Process",
                desc: "No hidden fees. No surprises. Full clarity at every stage.",
                icon: "🔍",
              },
              {
                title: "End-to-End Support",
                desc: "From first consultation to successful arrival — we're with you.",
                icon: "🌍",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-white hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gold">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-royal mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-royal/70 text-sm mb-8">
            Contact us today for a free consultation and discover how we can help
            you achieve your global goals.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-royal text-white font-bold px-8 py-3.5 rounded-full hover:bg-royal-dark transition-colors shadow-lg"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
