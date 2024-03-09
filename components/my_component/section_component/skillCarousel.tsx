"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SkillCarousel = () => {
  return (
    <>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem className="basis-1/3 text-center justify-center items-center">
            <img src="./icons/html.png" className=""/>
          </CarouselItem>
          <CarouselItem className="basis-1/3 text-center justify-center items-center">
            <img src="./icons/css.png" className=""/>
          </CarouselItem>
          <CarouselItem className="basis-1/3 text-center justify-center items-center">
            <img src="./icons/php.png" className=""/>
          </CarouselItem>
          <CarouselItem className="basis-1/3 text-center justify-center items-center">
            <img src="./icons/javascript.png" className=""/>
          </CarouselItem>
          <CarouselItem className="basis-1/3 text-center justify-center items-center">
            <img src="./icons/react.png" className=""/>
          </CarouselItem>
          <CarouselItem className="basis-1/3 text-center justify-center items-center">
            <img src="./icons/laravel.svg" className=""/>
          </CarouselItem>
          <CarouselItem className="basis-1/3 text-center justify-center items-center">
            <img src="./icons/nextjs.svg" className=""/>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default SkillCarousel;
