import {
  Shield,
  Star,
  Users,
  Briefcase,
  Lightbulb,
  Heart,
  Target,
  Eye,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ValueCard from "@/components/ValueCard";
import PageBanner from "@/components/PageBanner";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity & Ethical Governance",
    description:
      "We conduct our operations with transparency, accountability, and strict adherence to ethical and regulatory standards.",
  },
  {
    icon: Star,
    title: "Excellence & Quality Assurance",
    description:
      "We pursue superior service delivery through structured processes, continuous improvement, and performance accountability.",
  },
  {
    icon: Users,
    title: "Client Value Creation",
    description:
      "We adopt a client-centric philosophy, delivering tailored solutions that align with our clients' strategic objectives and expectations.",
  },
  {
    icon: Briefcase,
    title: "Professionalism & Competence",
    description:
      "We uphold high standards of expertise, discipline, and reliability across all business functions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Adaptability",
    description:
      "We proactively respond to global trends, regulatory changes, and market dynamics, continuously reimagining our services to remain competitive.",
  },
  {
    icon: Heart,
    title: "Reliability & Sustainability",
    description:
      "We honor commitments, manage resources responsibly, and build long-term partnerships founded on trust and consistency.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Who We Are"
        title="About KODG Global Link LTD"
        subtitle="A leading international consultancy dedicated to empowering prospects with access to quality global education and business solutions."
      />

      {/* ── Who We Are ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <SectionHeader
                label="Who We Are"
                title="Your Global Partner"
                centered={false}
              />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-royal">KODG Global Link LTD</strong> is
                  a leading international consultancy dedicated to empowering
                  prospects with access to quality global education. We guide
                  learners through the process of selecting the right
                  institutions, completing applications, and preparing for life
                  abroad.
                </p>
                <p>
                  We are also a business solutions company, and we offer
                  professional and dependable general merchandise and procurement
                  services — leveraging strong networks and operational efficiency
                  to meet the evolving needs of individuals and organizations.
                </p>
              </div>

              {/* Quick highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { num: "500+", txt: "Students Guided" },
                  { num: "30+", txt: "Partner Institutions" },
                  { num: "20+", txt: "Countries Covered" },
                  { num: "5+", txt: "Years in Business" },
                ].map(({ num, txt }) => (
                  <div
                    key={txt}
                    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center"
                  >
                    <div className="text-2xl font-extrabold text-royal">{num}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{txt}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="space-y-4">
              <div className="bg-linear-to-br from-royal to-royal-light rounded-3xl p-8 text-white shadow-xl">
                <div className="w-14 h-14 bg-gold rounded-2xl flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-royal" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  To deliver end-to-end international education advisory
                  services, including study abroad counseling, admissions
                  support, visa guidance, and pre-departure orientation,
                  enabling clients to make informed and successful global
                  academic transitions.
                </p>
                <p className="text-gray-200 text-sm leading-relaxed mt-3">
                  In addition, we provide professional and dependable general
                  merchandise and procurement solutions, leveraging strong
                  networks and operational efficiency to meet the evolving needs
                  of individuals and organizations.
                </p>
              </div>
              <div className="bg-gold rounded-3xl p-8 text-royal shadow-lg">
                <div className="w-14 h-14 bg-royal rounded-2xl flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-royal/80 text-sm leading-relaxed">
                  To be a leading international education and business solutions
                  organization, recognized for excellence, integrity, and the
                  delivery of sustainable value across global education advisory,
                  tourism, and procurement services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Core Values"
            title="The Principles That Guide Us"
            subtitle="Our values define how we work, how we engage with clients, and how we deliver results that matter."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-12 sm:py-16 bg-linear-to-r from-royal-dark to-royal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-gray-200 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            Our team of expert consultants is ready to guide you every step of
            the way — from choosing a university to landing safely abroad.
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 bg-gold text-royal font-bold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}
