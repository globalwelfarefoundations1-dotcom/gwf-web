import { apiGet } from './api.js';

/* Only active categories are worth showing in a filter — the backend does
   not paginate this list on its own, so one wide page covers it. */
export function getCategories({ status = 'active', limit = 100, offset = 0 } = {}) {
  return apiGet('/api/categories', { status, limit, offset });
}

export function getProjects({ offset = 0, limit = 6, search, status, categoryId } = {}) {
  return apiGet('/api/projects', { offset, limit, search, status, categoryId });
}

export function getProjectById(id) {
  return apiGet(`/api/projects/${id}`);
}
