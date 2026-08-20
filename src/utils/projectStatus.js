/* The four statuses the admin panel exposes on a project. Kept as one map
   so the filter dropdown, card badge and modal badge can't drift out of
   sync with each other. */
export const PROJECT_STATUSES = [
  { value: "Published", label: "Published", badgeClass: "bg-[#3f7a4fe6] text-ivory" },
  { value: "Active", label: "Active", badgeClass: "bg-gold text-gold-onblack" },
  { value: "Draft", label: "Draft", badgeClass: "bg-[#ffffffe6] text-ink-text" },
  { value: "Inactive", label: "Inactive", badgeClass: "bg-ink/65 text-ivory/85" },
];

const BY_VALUE = new Map(PROJECT_STATUSES.map((s) => [s.value.toLowerCase(), s]));

export function getStatusMeta(status) {
  return (
    BY_VALUE.get(String(status || "").toLowerCase()) || {
      value: status || "Draft",
      label: status || "Draft",
      badgeClass: "bg-[#ffffffe6] text-ink-text",
    }
  );
}
