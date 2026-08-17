/* Joins class names, dropping anything falsy. Small enough not to warrant
   a dependency. */
export function cn(...parts) {
  return parts.filter(Boolean).join(' ');
}
