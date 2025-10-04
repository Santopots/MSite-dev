'use client';
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Page() {
  

  return (
    // 50% on small screens and 33% on larger screens.
        <Carousel>
            <CarouselContent className="-ml-4">
                <CarouselItem className="pl-4">...</CarouselItem>
                <CarouselItem className="pl-4">...</CarouselItem>
                <CarouselItem className="pl-4">...</CarouselItem>
            </CarouselContent>
        </Carousel>
  );
}