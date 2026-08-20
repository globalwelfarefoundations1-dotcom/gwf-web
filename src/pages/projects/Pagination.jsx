import { ChevronLeftIcon, ChevronRightIcon } from "../../components/icons/Icons";

/* Standard "1 … 4 5 6 … 12" windowing: always show the first and last
   page, plus a `delta`-wide band around the current page, and collapse
   any gap into a single ellipsis. */
function getPageWindow(current, total, delta = 1) {
  const pages = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      pages.push(i);
    }
  }

  const withGaps = [];
  let previous;

  for (const page of pages) {
    if (previous !== undefined) {
      if (page - previous === 2) {
        withGaps.push(previous + 1);
      } else if (page - previous !== 1) {
        withGaps.push("…");
      }
    }
    withGaps.push(page);
    previous = page;
  }

  return withGaps;
}

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = getPageWindow(page, totalPages);

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-1.5 sm:mt-10"
      aria-label="Projects pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-gold-deep/20 bg-white text-ink-text transition-colors hover:border-gold hover:text-gold-ink disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="w-6 text-center text-ink-text/40" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-[13px] font-bold transition-colors ${
              p === page
                ? "bg-gold text-gold-onblack"
                : "border border-gold-deep/20 bg-white text-ink-text hover:border-gold hover:text-gold-ink"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-gold-deep/20 bg-white text-ink-text transition-colors hover:border-gold hover:text-gold-ink disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </nav>
  );
}
