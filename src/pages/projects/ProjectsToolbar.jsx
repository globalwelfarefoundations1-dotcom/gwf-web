import {
  SearchIcon,
  XIcon,
  ChevronDownIcon,
} from "../../components/icons/Icons";

export default function ProjectsToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
  categories,
  resultCount,
}) {
  return (
    <div className="mb-6 flex flex-wrap rounded-2xl items-center gap-3 border border-gold-deep/20 bg-white p-3 shadow-[0_6px_20px_rgba(6,26,17,0.06)] sm:mb-8">
      {/* ============================================================
          SEARCH
      ============================================================ */}
      <div className="order-first flex h-12 flex-1 basis-full items-center gap-2.5 rounded-full border border-gold-deep/20 bg-[#FAF7EF] px-4 transition-colors focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/15 sm:order-none sm:basis-[220px]">
        <SearchIcon className="h-[18px] w-[18px] flex-none text-ink-text/50" />

        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>

        <input
          id="project-search"
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, partner or keyword"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent font-medium text-[14px] text-ink-text outline-none placeholder:text-ink-text/45"
        />

        {search && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            className="flex-none rounded-full p-1 text-ink-text/50 transition-colors hover:text-ink-text"
          >
            <XIcon />
          </button>
        )}
      </div>

      {/* ============================================================
          CATEGORY
      ============================================================ */}
      <div className="relative flex-1 basis-[calc(50%-6px)] sm:flex-none sm:basis-auto">
        <label htmlFor="category-filter" className="sr-only">
          Filter by focus area
        </label>

        <select
          id="category-filter"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="h-12 w-full min-w-[150px] appearance-none rounded-full border border-gold-deep/20 bg-[#FAF7EF] px-4 pr-9 text-[14px] font-semibold text-ink-text outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/15"
        >
          <option value="all">All focus areas</option>

          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.categoryName}
            </option>
          ))}
        </select>

        <ChevronDownIcon className="pointer-events-none absolute right-[15px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-ink-text/50" />
      </div>

      {/* ============================================================
          STATUS
      ============================================================ */}
      <div className="relative flex-1 basis-[calc(50%-6px)] sm:flex-none sm:basis-auto">
        <label htmlFor="status-filter" className="sr-only">
          Filter by status
        </label>

        <select
          id="status-filter"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="h-12 w-full min-w-[150px] appearance-none rounded-full border border-gold-deep/20 bg-[#FAF7EF] px-4 pr-9 text-[14px] font-semibold text-ink-text outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/15"
        >
          <option value="all">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>

        <ChevronDownIcon className="pointer-events-none absolute right-[15px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-ink-text/50" />
      </div>

      <div className="hidden flex-1 sm:block" />

      <span
        className="font-mono whitespace-nowrap text-[12px] uppercase tracking-[0.08em] text-ink-text/50"
        aria-live="polite"
      >
        {resultCount} {resultCount === 1 ? "project" : "projects"}
      </span>
    </div>
  );
}