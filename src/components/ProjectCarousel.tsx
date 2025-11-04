"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { AllProjectsQueryResult } from "../../sanity.types";

export interface ProjectCarouselProps {
  projects: AllProjectsQueryResult;
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="mb-8 flex flex-col items-end">
      <div className="mx-2 mb-8 hidden md:block">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => carouselApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="disabled:pointer-events-auto"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => carouselApi?.scrollNext()}
          disabled={!canScrollNext}
          className="disabled:pointer-events-auto"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="md:mx-16">
            {projects.map((item) => (
              <CarouselItem key={item._id} className="max-w-90 cursor-pointer">
                <Link
                  href={`/projects/${item.slug?.current}`}
                  className="group rounded-xl"
                >
                  <div className="group relative h-full min-h-108 max-w-full overflow-hidden rounded-xl ">
                    <Image
                      src={item.images?.[0]?.asset?.url || ""}
                      alt={item.title || "image"}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Stronger bottom gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 from-0% to-transparent to-50%" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white drop-shadow-lg md:p-8">
                      <div className="pt-4 text-xl font-semibold">
                        {item.title}
                      </div>
                      <div className="mb-4 line-clamp-2 opacity-90 md:mb-6">
                        {item.location}
                      </div>
                      <div className="flex items-center text-sm font-medium">
                        Se mer
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectCarousel };
