import { useEffect, useRef, useState } from "react";
import {
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../components/icons/Icons";

export default function Lightbox({
  images,
  index,
  onClose,
  onStep,
}) {
  const startX = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);

    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onStep(-1);
      if (e.key === "ArrowRight") onStep(1);
    }

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onStep, index]);

  if (!images || !images.length) return null;

  const multi = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[400] flex animate-fadeIn items-center justify-center bg-ink-deep/95 px-4 py-16"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onTouchStart={(e) => {
        startX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (startX.current === null) return;

        const dx =
          e.changedTouches[0].clientX - startX.current;

        if (Math.abs(dx) > 50) {
          onStep(dx < 0 ? 1 : -1);
        }

        startX.current = null;
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute right-4 top-[max(16px,env(safe-area-inset-top))] flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-ivory/10 text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/15 hover:text-gold-light"
      >
        <XIcon className="h-[18px] w-[18px]" />
      </button>

      {/* Previous */}
      {multi && (
        <button
          type="button"
          onClick={() => onStep(-1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/15 bg-ivory/10 text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/15 hover:text-gold-light"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
      )}

      {/* Loading */}
      {!loaded && (
        <div className="absolute h-10 w-10 animate-spin rounded-full border-2 border-ivory/20 border-t-gold" />
      )}

      {/* Image */}
      <img
        src={images[index]}
        alt=""
        onLoad={() => setLoaded(true)}
        className={`max-h-full max-w-full rounded-[2px] shadow-[0_30px_80px_rgba(4,18,11,0.5)] transition-opacity ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Next */}
      {multi && (
        <button
          type="button"
          onClick={() => onStep(1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/15 bg-ivory/10 text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/15 hover:text-gold-light"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      )}

      {/* Counter */}
      <div className="font-mono absolute bottom-[max(20px,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 text-[10px] tracking-wider text-ivory/60">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}