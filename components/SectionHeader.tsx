interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
            light
              ? "text-gold bg-white/10"
              : "text-royal bg-royal/10"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight ${
          light ? "text-white" : "text-royal"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-16 bg-gold rounded-full ${
          centered ? "mx-auto" : ""
        } mb-4`}
      />
      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-200" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
