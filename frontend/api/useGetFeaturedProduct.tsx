import { useEffect, useState } from "react";
import { fetchFromStrapi } from "@/lib/strapi";

type StrapiCollectionResponse<T> = { data: T[]; meta?: unknown };

export function useGetFeaturedProduct() {
  const [result, setResult] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let isCancelled = false;
    (async () => {
      try {
        const json = await fetchFromStrapi<StrapiCollectionResponse<any>>("/api/articles", {
          params: {
            sort: "createdAt:desc",
            "pagination[pageSize]": 10,
            populate: "*",
          },
        });
        if (!isCancelled) {
          setResult(json.data);
        }
      } catch (e) {
        if (!isCancelled) setError("Error fetching content");
      } finally {
        if (!isCancelled) setLoading(false);
      }
    })();
    return () => {
      isCancelled = true;
    };
  }, []);

  return { result, loading, error };
}