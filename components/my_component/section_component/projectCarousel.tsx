"use client";

import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

const ProjectCarousel = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Link href="https://my-office-project.vercel.app/" target="_blank">
            <Card className="w-full">
              <CardHeader className="absolute z-10 bottom-0">
                <p className="text-slate-100 text-2xl font-bold bg-slate-800 rounded-lg p-2 m-4">
                  Landing Page Awaludin Channel <span>(Still in progress)</span>
                </p>
              </CardHeader>
              <Image
                removeWrapper
                src="./images/project1.png"
                className="z-0 h-96 object-cover"
              />
            </Card>
          </Link>
        </div>
        <div>
          <Link href="https://my-office-project.vercel.app/agen" target="_blank">
            <Card className="w-full">
              <CardHeader className="absolute z-10 bottom-0">
                <p className="text-slate-100 text-2xl font-bold bg-slate-800 rounded-lg p-2 m-4">
                  Landing Page Agen
                </p>
              </CardHeader>
              <Image
                removeWrapper
                src="./images/project2.png"
                className="z-0 h-96 object-cover"
              />
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
