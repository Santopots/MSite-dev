import { useEffect, useState } from "react";

export function useGetFeaturedProduct() {
    // generar url
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produts?filters[isFeatured][$eq]=true&populate=*`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResult(json.data);
            } catch (error) {
                setError("Error fetching featured products");
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { result, loading, error };
}