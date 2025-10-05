"use client";

import { useGetFeaturedProduct } from "@/api/useGetFeaturedProduct";
import { Car } from "lucide-react";
import { Carousel, CarouselContent } from "./carousel";

const FeaturedProducts = () => {
    const {loading,result} = useGetFeaturedProduct();

    console.log(result);
    return (
        <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">Productes destacats</h3>
            <Carousel>
               <CarouselContent>
                {loading && <div>Loading...</div>}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;