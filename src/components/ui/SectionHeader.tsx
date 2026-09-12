import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "reveal",
        isCenter && "text-center",
        className
      )}
    >
      {label && (
        <p className={cn(isCenter ? "section-label-center" : "section-label")}>
          {label}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "section-subtitle",
            isCenter && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
