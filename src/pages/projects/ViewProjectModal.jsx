import { useEffect, useRef, useState } from "react";
import {
  XIcon,
  PlayIcon,
  CalendarIcon,
  PersonIcon,
  ServiceIcon,
  GlobeIcon,
} from "../../components/icons/Icons";
import Lightbox from "./Lightbox";
import { Link } from "react-router-dom";
import { getProjectById } from "../../services/projects.js";
import { normalizeProject } from "../../utils/normalizeProject.js";

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

export default function ViewProjectModal({ projectId, onClose }) {
  const [lightbox, setLightbox] = useState(null);
  const closeBtnRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    closeBtnRef.current?.focus({ preventScroll: true });

    document.body.style.overflow = "hidden";

    function handleKey(e) {
      if (e.key === "Escape" && !lightbox) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose, lightbox]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getProjectById(projectId)
      .then((res) => {
        if (cancelled) return;
        setProject(normalizeProject(res?.data ?? res));
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [projectId]);

  const hasPhotos = project?.photos && project.photos.length > 0;
  const hasVideos = project?.videos && project.videos.length > 0;
  const hasYoutubeLinks = project?.youtubeLinks && project.youtubeLinks.length > 0;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-center overflow-y-auto overscroll-contain bg-ink/70 p-0 backdrop-blur-sm sm:items-start sm:p-6 sm:py-10"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="view-project-title"
    >
      <div className="flex h-[100vh] w-full rounded-2xl flex-col overflow-hidden bg-[#FAF7EF] shadow-[0_30px_80px_rgba(4,18,11,0.35)] animate-modalIn sm:h-auto sm:max-h-[calc(100dvh-5rem)] sm:max-w-4xl">
        {loading ? (
          <div className="relative flex min-h-[320px] flex-1 flex-col items-center justify-center gap-4 p-8">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 flex h-10 w-10 items-center justify-center rounded-full border border-gold-deep/20 bg-white text-ink-text transition-colors hover:border-gold hover:text-gold-ink"
            >
              <XIcon className="h-[18px] w-[18px]" />
            </button>

            <div className="h-9 w-9 animate-spin rounded-full border-2 border-gold-deep/20 border-t-gold" />
            <p className="text-sm text-ink-text/60">Loading project…</p>
          </div>
        ) : error || !project ? (
          <div className="relative flex min-h-[320px] flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 flex h-10 w-10 items-center justify-center rounded-full border border-gold-deep/20 bg-white text-ink-text transition-colors hover:border-gold hover:text-gold-ink"
            >
              <XIcon className="h-[18px] w-[18px]" />
            </button>

            <h3 className="font-voice text-xl font-medium text-ink-text">
              Could not load this project
            </h3>

            <p className="max-w-[40ch] text-sm text-ink-text/60">
              Something went wrong fetching the details. Close this and try
              again in a moment.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-gold-deep/25 bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-ink-text transition-colors hover:border-gold hover:text-gold-ink"
            >
              Close
            </button>
          </div>
        ) : (
          <>
        {/* ============================================================
            HERO MEDIA
        ============================================================ */}
        <div className="relative max-h-[34dvh] flex-none bg-ink sm:max-h-[38dvh] aspect-[16/10] sm:aspect-[16/8]">
          <img
            src={project.cover}
            alt={project.name}
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/10 to-transparent" />

          {/* Status */}
          <span
            className={`font-mono absolute left-4 top-[18px] z-[2] rounded-full px-[11px] py-[5px] text-[9px] font-bold uppercase tracking-[0.08em] backdrop-blur-sm ${
              project.status === "published"
                ? "bg-seal-raised/90 text-ivory"
                : "bg-parchment/95 text-ink-text"
            }`}
          >
            {project.status === "published" ? "Published" : "Draft"}
          </span>

          {/* Close */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3.5 top-3.5 z-[2] flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 bg-ink/50 text-ivory transition-colors hover:border-gold hover:text-gold-light"
          >
            <XIcon className="h-[18px] w-[18px]" />
          </button>

          {/* Hero title */}
          <div className="absolute inset-x-4 bottom-4 text-ivory sm:inset-x-6 sm:bottom-[18px]">
            <span className="font-mono mb-2 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-gold">
              <span className="h-px w-[22px] bg-current opacity-60" />
              {project.category}
            </span>

            <h2
              id="view-project-title"
              className="font-voice text-xl font-normal leading-tight sm:text-[29px]"
            >
              {project.name}
            </h2>
          </div>
        </div>

        {/* ============================================================
            BODY
        ============================================================ */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 pb-2 pt-5 sm:px-8 sm:pt-7">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.6fr_1fr] lg:gap-9">
              {/* LEFT */}
              <div>
                <h4 className="mb-3 font-voice text-base font-normal text-ink-text">
                  About this project
                </h4>

                <p className="mb-6 text-[14px] leading-[1.75] text-ink-text/75">
                  {project.fullDescription || project.description}
                </p>

                {/* Photos */}
                {hasPhotos && (
                  <>
                    <h4 className="mb-3 font-voice text-base font-normal text-ink-text">
                      Photo gallery
                    </h4>

                    <div className="mb-6 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                      {project.photos.map((url, i) => (
                        <button
                          key={url + i}
                          type="button"
                          onClick={() => setLightbox({ index: i })}
                          className="cursor-zoom-in overflow-hidden border border-gold-deep/15"
                          aria-label={`Open photo ${i + 1}`}
                        >
                          <img
                            src={url}
                            alt=""
                            loading="lazy"
                            className="aspect-square w-full object-cover transition-transform duration-200 hover:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Videos */}
                {hasVideos && (
                  <>
                    <h4 className="mb-3 font-voice text-[14px] font-medium text-ink-text">
                      Videos
                    </h4>

                    <div className="mb-3 grid grid-cols-1 gap-3 xs:grid-cols-2">
                      {project.videos.map((url, i) => (
                        <button
                          key={url + i}
                          type="button"
                          onClick={() => setPlayingVideo(i)}
                          className="relative aspect-video w-full overflow-hidden bg-ink"
                        >
                          <video
                            src={url}
                            muted={playingVideo !== i}
                            controls={playingVideo === i}
                            playsInline
                            preload="metadata"
                            className="h-full w-full object-cover"
                          />

                          {playingVideo !== i && (
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/30">
                              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-ivory text-seal">
                                <PlayIcon />
                              </span>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* YouTube links */}
                {hasYoutubeLinks && (
                  <>
                    <h4 className="mb-3 font-voice text-[14px] font-medium text-ink-text">
                      More on YouTube
                    </h4>

                    <ul className="mb-3 space-y-1.5">
                      {project.youtubeLinks.map((link, i) => (
                        <li key={link + i}>
                          <a
                            href={link.startsWith("http") ? link : `https://${link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-[13px] font-semibold text-gold-ink hover:text-gold-deep hover:underline"
                          >
                            {link} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* RIGHT */}
              <div>
                {/* Information */}
                <div className="mb-4 rounded-2xl border border-gold-deep/20 bg-white p-[18px]">
                  <InfoRow
                    icon={<PersonIcon />}
                    label="Partner or funder"
                    value={project.client || "Not specified"}
                  />

                  <InfoRow
                    icon={<CalendarIcon className="h-[15px] w-[15px]" />}
                    label="Project date"
                    value={formatDate(project.date)}
                  />

                  <div className="flex items-start gap-3 border-b border-gold-deep/15 py-[11px]">
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[2px] bg-parchment text-gold-ink">
                      <ServiceIcon />
                    </span>

                    <div className="min-w-0">
                      <b className="block text-[13px] font-semibold text-ink-text">
                        Services delivered
                      </b>

                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {project.technologies &&
                        project.technologies.length ? (
                          project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="font-mono rounded-full bg-parchment px-2.5 py-[5px] text-[10px] font-bold uppercase tracking-wider text-ink-text/70"
                            >
                              {technology}
                            </span>
                          ))
                        ) : (
                          <span className="text-[12px] text-ink-text/50">
                            Not specified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project URL */}
                  {project.url && (
                    <div className="flex items-start gap-3 pt-[11px]">
                      <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[2px] bg-parchment text-gold-ink">
                        <GlobeIcon />
                      </span>

                      <div className="min-w-0">
                        <b className="block text-[13px] font-semibold text-ink-text">
                          Project link
                        </b>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-all text-[12px] font-semibold text-gold-ink hover:text-gold-deep hover:underline"
                        >
                          Open the project page ↗
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="guilloche rounded-2xl relative overflow-hidden bg-seal p-5 text-ivory">
                  <div className="relative">
                    <h5 className="mb-1.5 font-body-1 text-[17px] font-semibold text-[#fafafa]">
                      Back a project like this
                    </h5>

                    <p className="mb-4 text-[12px] leading-relaxed text-ivory/65">
                      Co-fund the next round, send volunteers, or ask us to
                      replicate this initiative in your district.
                    </p>

                    <Link
                      to="/contact"
                      className="block rounded-full bg-gold py-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-gold-onblack shadow-[0_10px_22px_-10px_rgba(198,160,62,0.55)] transition-colors hover:bg-gold-light"
                    >
                      Talk to our team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            FOOTER
        ============================================================ */}
        <div className="flex flex-none items-center justify-end gap-2.5 border-t border-gold-deep/20 bg-white px-4 py-3.5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-gold px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gold-onblack shadow-[0_10px_22px_-10px_rgba(198,160,62,0.55)] transition-colors hover:bg-gold-light active:translate-y-px"
          >
            Close
          </button>
        </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && project && (
        <Lightbox
          images={project.photos}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onStep={(dir) =>
            setLightbox((prev) => ({
              index:
                (prev.index + dir + project.photos.length) %
                project.photos.length,
            }))
          }
        />
      )}
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 border-b border-gold-deep/15 py-[11px] first:pt-0">
      <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[2px] bg-parchment text-gold-ink">
        {icon}
      </span>

      <div className="min-w-0">
        <b className="block break-words text-[14px] font-semibold text-ink-text">
          {value}
        </b>

        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-text/50">
          {label}
        </span>
      </div>
    </div>
  );
}