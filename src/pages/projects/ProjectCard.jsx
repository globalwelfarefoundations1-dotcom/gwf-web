import {
  CalendarIcon,
  PlayIcon,
  ArrowRightIcon,
} from "../../components/icons/Icons";
import { getStatusMeta } from "../../utils/projectStatus.js";

function formatDate(d) {
  if (!d) return "Not specified";

  const dt = new Date(`${d}T00:00:00`);

  if (Number.isNaN(dt.getTime())) return d;

  return dt.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ProjectCard({ project, onView }) {
  const hasVideo = project.videos && project.videos.length > 0;
  const photoCount = project.photos ? project.photos.length : 0;
  const statusMeta = getStatusMeta(project.status);

  const meta = `${photoCount} ${
    photoCount === 1 ? "photo" : "photos"
  }${hasVideo ? " · video" : ""}`;

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden border border-gold-deep/20 bg-white shadow-[0_8px_28px_rgba(6,26,17,0.07)] transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,26,17,0.14)]">
      {/* Image */}
      <button
        type="button"
        onClick={() => onView(project.id)}
        aria-label={`Open ${project.name}`}
        className="group relative block aspect-[16/10] w-full cursor-pointer overflow-hidden bg-ink"
      >
        {/* Status */}
        <span
          className={`absolute left-3 top-3 z-10 rounded-full px-[11px] py-[5px] text-[11px] font-bold uppercase tracking-[0.08em] backdrop-blur-sm ${statusMeta.badgeClass}`}
        >
          {statusMeta.label}
        </span>

        {/* Media */}
        {hasVideo ? (
          <>
            <video
              src={project.videos[0]}
              muted
              playsInline
              preload="metadata"
              poster={project.cover}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />

            <span className="absolute bottom-2.5 right-2.5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-ink/70 text-ivory backdrop-blur-sm">
              <PlayIcon />
            </span>
          </>
        ) : (
          <img
            src={project.cover}
            alt={project.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        )}
      </button>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 p-[18px]">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          {/* Category */}
          <span className="rounded-full bg-gold/20 px-2.5 py-[5px] text-[12px] !font-bold uppercase tracking-[0.05em] text-gold">
            {project.category}
          </span>

          {/* Date */}
          <span className="font-body-1 font-semibold inline-flex items-center gap-1 whitespace-nowrap text-[11px] text-ink-text/55">
            <CalendarIcon />
            {formatDate(project.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="!font-voice text-lg !font-bold  leading-relaxed text-ink-text sm:text-xl">
          {project.name}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 text-[14px] font-medium leading-relaxed text-ink-text/65">
          {project.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2.5 border-t border-gold-deep/15 pt-3">
          <span className="font-voice text-[12px] text-ink-text/65">
            {meta}
          </span>

          <button
            type="button"
            onClick={() => onView(project.id)}
            className="group/link inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.12em] text-gold transition-colors hover:text-gold-deep"
          >
            View project

            <ArrowRightIcon className="h-[15px] w-[15px] text-gold transition-transform duration-150 group-hover/link:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}