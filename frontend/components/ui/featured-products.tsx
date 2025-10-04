"use client";

import { useGetFeaturedProduct } from "@/api/useGetFeaturedProduct";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { getStrapiMediaUrl } from "@/lib/strapi";

const FeaturedProducts = () => {
  const { loading, result, error } = useGetFeaturedProduct();

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4">Productes destacats</h3>
      <Carousel>
        <CarouselContent>
          {loading && <div>Loading...</div>}
          {error && !loading && (
            <div className="text-red-500">{error}</div>
          )}
          {Array.isArray(result) &&
            result.map((item: any) => {
              const title = item?.attributes?.title || "Untitled";
              const description = item?.attributes?.description || "";
              const coverUrl = getStrapiMediaUrl(
                item?.attributes?.cover?.url ||
                  item?.attributes?.cover?.formats?.medium?.url ||
                  item?.attributes?.cover?.data?.attributes?.url
              );
              return (
                <CarouselItem key={item?.id} className="pl-4">
                  <div className="p-4 border rounded-md bg-white shadow-sm max-w-sm">
                    {coverUrl && (
                      <img
                        src={coverUrl}
                        alt={title}
                        className="w-full h-48 object-cover rounded-md mb-3"
                      />
                    )}
                    <h4 className="text-lg font-semibold">{title}</h4>
                    {description && (
                      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                    )}
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;