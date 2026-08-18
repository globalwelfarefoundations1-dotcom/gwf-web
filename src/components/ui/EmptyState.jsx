import { FolderIcon ,ClockIcon} from "../../components/icons/Icons";

export default function EmptyState({
  title = "Upcoming soon...",
  description = "There is nothing to display at the moment. Please check back later.",
}) {
  return (
    <div className="guilloche relative flex min-h-[280px] w-full flex-col items-center justify-center overflow-hidden border border-dashed border-gold-deep/30 bg-parchment px-5 py-14 text-center sm:min-h-[320px] sm:px-8 sm:py-16 lg:min-h-[360px]">
      {/* Subtle gold glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(198,160,62,0.07), transparent 55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-[480px] flex-col items-center">
        {/* Icon */}
        <div className="mb-5 rounded-2xl flex h-14 w-14 items-center justify-center border border-gold/35 bg-white text-gold sm:h-16 sm:w-16">
          <ClockIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        </div>

        {/* Gold divider */}
        <span className="mb-4 h-px w-8 bg-gold sm:w-10" />

        {/* Common title */}
        <h3 className="font-voice text-[25px] font-normal leading-tight text-ink-text sm:text-[29px] lg:text-[32px]">
          {title}
        </h3>

        {/* Common description */}
        <p className="mt-3 max-w-[400px] text-[12.5px] leading-[1.7] text-ink-text/60 sm:text-[13.5px]">
          {description}
        </p>

        {/* Bottom decoration */}
        <div className="mt-6 flex items-center gap-2">
          <span className="h-px w-5 bg-gold/40" />
          <span className="h-1 w-1 rotate-45 bg-gold" />
          <span className="h-px w-5 bg-gold/40" />
        </div>
      </div>
    </div>
  );
}