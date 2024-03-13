"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SkillImageData {
  images: string;
}

const SkillImage: SkillImageData[] = [
  { images: "./icons/html.png" },
  { images: "./icons/css.png" },
  { images: "./icons/php.png" },
  { images: "./icons/javascript.png" },
  { images: "./icons/react.png" },
  { images: "./icons/laravel.svg" },
  { images: "./icons/nextjs.svg" },
];

const SkillCarousel = () => {
  return (
    <>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {SkillImage.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 text-center justify-center items-center"
            >
              <img src={item.images} className="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default SkillCarousel;
