export function getStrapiURL(path: string = ""): string {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";
  if (!path) return baseUrl;
  if (path.startsWith("http")) return path;
  return `${baseUrl}${path}`;
}

export type StrapiFetchOptions = {
  params?: Record<string, string | number | boolean | string[]>;
  headers?: HeadersInit;
};

export async function fetchFromStrapi<T = any>(
  path: string,
  options: StrapiFetchOptions = {}
): Promise<T> {
  const { params = {}, headers = {} } = options;

  const url = new URL(getStrapiURL(path));
  const query = new URLSearchParams();

  if (!("populate" in params)) {
    query.set("populate", "*");
  }

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      for (const v of value) query.append(key, String(v));
    } else {
      query.set(key, String(value));
    }
  }

  url.search = query.toString();

  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const finalHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };

  const res = await fetch(url.toString(), { headers: finalHeaders });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi request failed ${res.status}: ${text || res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export function getStrapiMediaUrl(pathOrUrl?: string | null): string | undefined {
  if (!pathOrUrl) return undefined;
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return getStrapiURL(pathOrUrl);
}
