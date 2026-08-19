import { useMemo, useState } from "react";
import { MOCK_PROJECTS, CATEGORIES } from "../../data/mockProjects";
import ProjectsToolbar from "./ProjectsToolbar";
import ProjectCard from "./ProjectCard";
import ViewProjectModal from "./ViewProjectModal";
import { FolderIcon } from "../../components/icons/Icons";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [viewingId, setViewingId] = useState(null);

  // Swap MOCK_PROJECTS for real data from an API call once the backend exists.
  const projects = MOCK_PROJECTS;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return projects.filter((p) => {
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.client || "").toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q);

      const matchesCategory =
        category === "all" || p.category === category;

      const matchesStatus =
        status === "all" || p.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [projects, search, category, status]);

  const stats = useMemo(
    () => ({
      total: projects.length,
      published: projects.filter((p) => p.status === "published").length,
      categories: new Set(projects.map((p) => p.category)).size,
    }),
    [projects]
  );

  const viewingProject =
    projects.find((p) => p.id === viewingId) || null;

  const isFiltering =
    !!search || category !== "all" || status !== "all";

  function resetFilters() {
    setSearch("");
    setCategory("all");
    setStatus("all");
  }

  return (
    <div className="min-h-screen font-body text-ink-text">
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="relative overflow-hidden bg-ink px-4 py-11 text-ivory sm:px-8 sm:py-16 lg:py-[78px]">
        {/* Gold glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 85% -10%, rgba(198,160,62,0.14), transparent 60%)",
          }}
        />

        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-end gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          {/* Hero content */}
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-meta font-medium uppercase tracking-[0.15em] text-gold">
              <span className="h-px w-[22px] bg-current" />
              Portfolio of impact
            </span>

            <h1 className="mt-4 max-w-[720px] text-[clamp(29px,4.6vw,46px)] !font-voice font-medium leading-[1.08] text-ivory">
              Every commitment,
              <br />
              <em className="font-semibold text-gold">
                documented in the field.
              </em>
            </h1>

            <p className="mt-3.5 max-w-[58ch] text-[13px] leading-[1.55] text-[#a9bda9] sm:text-[14px]">
              From a single village nutrition camp to a multi-state disaster
              response, each initiative is catalogued here with photos, footage
              and outcomes — so partners and donors can see exactly where the
              work stands.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 border-t border-gold/20 pt-5 sm:grid-cols-3 sm:gap-3 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            <Stat value={stats.total} label="Total projects" />
            <Stat value={stats.published} label="Published" />
            <Stat value={stats.categories} label="Focus areas" />
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN PROJECT AREA
      ============================================================ */}
      <main className="bg-[#FAF7EF] px-4 py-8 sm:px-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1180px]">
          <ProjectsToolbar
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            status={status}
            onStatusChange={setStatus}
            categories={CATEGORIES}
            resultCount={filtered.length}
          />

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center rounded-[2px] border border-dashed border-gold-deep/25 bg-white px-5 py-14 text-center text-ink-text/65 sm:py-16">
              <FolderIcon className="mb-4 h-11 w-11 text-gold" />

              <h3 className="mb-2 font-voice text-xl font-medium text-ink-text sm:text-[23px]">
                Nothing matches those filters
              </h3>

              <p className="mb-5 max-w-[44ch] text-sm">
                Widen the search, or reset the focus area and status filters to
                see the full portfolio.
              </p>

              {isFiltering && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="rounded-full border border-gold-deep/25 bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-ink-text transition-colors hover:border-gold hover:text-gold-ink"
                >
                  Reset filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onView={setViewingId}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ============================================================
          FUND THE NEXT ENTRY
      ============================================================ */}
      <section className="guilloche relative overflow-hidden bg-seal px-4 py-10 text-ivory sm:px-8 sm:py-14 lg:py-[66px]">
        {/* Gold glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 92% 8%, rgba(198,160,62,0.20), transparent 48%)",
          }}
        />

        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              <span className="h-px w-[22px] bg-current opacity-60" />
              Fund the next entry
            </span>

            <h2 className="mt-3.5 max-w-[400px] font-voice text-2xl font-medium leading-[1.15] text-ivory sm:text-3xl lg:text-[36px]">
              Every project on this page started as{" "}
              <em className="font-semibold text-gold">
                one funded month.
              </em>
            </h2>

            <p className="mt-3 max-w-[52ch] text-sm leading-[1.6] text-ivory/65 sm:text-[15px]">
              ₹45,000 runs a village health camp for four weeks — screening,
              medicines and a follow-up visit. Fund one outright, or tell us
              which focus area you want your money to sit behind and we will
              send you the field report when it closes.
            </p>
          </div>

          <div className="flex flex-col gap-3 !items-center">
            <Link
              to="/get-involved"
              className="w-full rounded-full bg-gold px-6 py-3.5 text-center text-[14px] font-bold uppercase tracking-wider text-gold-onblack shadow-[0_10px_22px_-10px_rgba(198,160,62,0.55)] transition-all hover:bg-gold-light active:translate-y-px"
            >
              Fund a project
            </Link>

            <Link
              to="/contact"
              className="w-full rounded-full border border-gold/50 px-6 py-3.5 text-center text-[14px] font-bold uppercase tracking-wider text-ivory transition-colors hover:border-gold hover:text-gold-light"
            >
              Talk to our programmes team
            </Link>

            <span className="font-mono text-center text-[9px] tracking-wide text-ivory/50 sm:text-left">
              80G receipt issued within 48 hours
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          VIEW MODAL
      ============================================================ */}
      {viewingProject && (
        <ViewProjectModal
          project={viewingProject}
          onClose={() => setViewingId(null)}
        />
      )}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex items-baseline gap-2.5 sm:block sm:gap-0">
      <b className="font-voice block text-[25px] font-normal leading-none text-gold sm:text-3xl lg:text-[32px]">
        {value}
      </b>

      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#a9bda9]">
        {label}
      </span>
    </div>
  );
}