interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="bg-linear-to-br from-royal-dark via-royal to-royal-light pt-24 sm:pt-28 pb-14 sm:pb-16 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="text-gold/80 text-xs font-semibold uppercase tracking-widest mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 px-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            {subtitle}
          </p>
        )}
        <div className="mt-5 w-16 h-1 bg-gold rounded-full mx-auto" />
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" className="w-full fill-gray-50">
          <path d="M0,20L60,23C120,27,240,33,360,33C480,33,600,27,720,23C840,20,960,20,1080,23C1200,27,1320,33,1380,36L1440,40L1440,50L0,50Z" />
        </svg>
      </div>
    </section>
  );
}
