const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://gfw-backend-1.onrender.com').replace(
  /\/+$/,
  ''
);

function buildQuery(params = {}) {
  const search = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') continue;
    search.set(key, value);
  }

  const qs = search.toString();
  return qs ? `?${qs}` : '';
}

/* Thin GET wrapper shared by every endpoint in src/services/. Omits
   undefined/empty query params rather than sending them empty, since the
   backend treats a present-but-empty `status` differently from an absent
   one. */
export async function apiGet(path, params) {
  const response = await fetch(`${API_BASE_URL}${path}${buildQuery(params)}`);

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }

  return response.json();
}
