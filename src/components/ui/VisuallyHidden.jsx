/* Content available to screen readers but not shown — the classic
   clip-rect technique, expressed in Tailwind. */
export function VisuallyHidden({ children, as: Tag = 'span', ...props }) {
  return (
    <Tag className="sr-only" {...props}>
      {children}
    </Tag>
  );
}
