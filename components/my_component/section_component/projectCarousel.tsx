"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

interface ProjectItem {
  links: string;
  title: string;
  images: string;
}

const ProjectData: ProjectItem[] = [
  {
    links: "https://my-office-project.vercel.app/",
    title: "Landing Page awaludin.com (Still in progress)",
    images: "./images/project1.png",
  },
  {
    links: "https://my-office-project.vercel.app/agen",
    title: "Landing Page Agen",
    images: "./images/project2.png",
  },
];

const ProjectCarousel = () => {
  return (
    <>
      <Carousel orientation="vertical" opts={{ align: "start" }}>
        <CarouselContent className=" max-h-[400px]">
          {ProjectData.map((item, index) => (
            <CarouselItem key={index}>
              <div>
                <Link href={item.links} target="_blank">
                  <Card className="w-full">
                    <CardHeader className="absolute z-10 bottom-0">
                      <p className="text-slate-100 text-2xl font-bold bg-slate-800 rounded-lg p-2 m-4">
                        {item.title}
                      </p>
                    </CardHeader>
                    <Image
                      removeWrapper
                      src={item.images}
                      className="z-0 h-96 object-cover"
                    />
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </>
  );
};

export default ProjectCarousel;
