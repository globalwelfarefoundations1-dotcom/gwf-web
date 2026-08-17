/* First thing in the tab order: jumps a keyboard visitor past the header
   and straight to the page content. Hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-0 top-0 z-[200] -translate-y-[120%] bg-gold px-[1.2rem] py-[0.7rem] font-mono text-note text-ink no-underline focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
