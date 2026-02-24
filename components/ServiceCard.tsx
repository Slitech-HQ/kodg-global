import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  highlight = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        highlight
          ? "bg-royal text-white border border-royal-light shadow-lg"
          : "bg-white text-gray-800 border border-gray-100 shadow-md hover:border-gold/30"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
          highlight
            ? "bg-gold"
            : "bg-royal/10 group-hover:bg-royal/20"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            highlight ? "text-royal" : "text-royal"
          }`}
        />
      </div>
      <h3
        className={`font-bold text-lg mb-2 ${
          highlight ? "text-white" : "text-royal"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          highlight ? "text-gray-200" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
