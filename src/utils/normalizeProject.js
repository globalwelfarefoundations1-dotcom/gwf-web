/* Maps the API's project shape (projectName, coverImageUrl, services, …)
   onto the flatter shape the Projects UI was built against. Keeping the
   translation in one place means a backend field rename is a one-line fix
   here instead of a hunt through every component. */
export function normalizeProject(raw) {
  if (!raw) return null;

  const category = raw.category;
  const categoryName =
    category && typeof category === 'object'
      ? category.categoryName ?? category.name ?? 'Uncategorized'
      : category || 'Uncategorized';
  const categoryId = category && typeof category === 'object' ? category.id : raw.categoryId;

  return {
    id: raw.id,
    name: raw.projectName || 'Untitled project',
    description: raw.description || '',
    fullDescription: raw.description || '',
    category: categoryName,
    categoryId,
    date: raw.projectDate ?? null,
    client: raw.company || '',
    url: raw.projectUrl || '',
    technologies: Array.isArray(raw.services) ? raw.services : [],
    status: raw.status || 'Draft',
    cover: raw.coverImageUrl || '',
    photos: Array.isArray(raw.projectImages) ? raw.projectImages : [],
    videos: Array.isArray(raw.projectVideos) ? raw.projectVideos : [],
    youtubeLinks: Array.isArray(raw.youtubeLinks) ? raw.youtubeLinks.filter(Boolean) : [],
  };
}
