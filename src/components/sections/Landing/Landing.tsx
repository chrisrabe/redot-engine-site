import Header from "@/components/layout/Header";
import { ArrowForward } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import type { FC } from "react";

const Landing: FC = () => {
  return (
    <section className="flex flex-col">
      <Header />
      <div className="w-full h-full flex flex-grow">
        <div className="px-10 md:px-20 lg:px-40 xl:px-80 py-60 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Your free, open-source game engine.
          </h1>
          <p>
            Develop your 2D & 3D games, cross platform projects, or even XR
            ideas!
          </p>
          <Tooltip title="Our first build is on the way!">
            <div className="size-fit">
              <button
                className="rounded flex gap-2 items-center cursor-pointer bg-redot-primary disabled:bg-redot-primary disabled:text-white disabled:opacity-75 capitalize px-8 py-4 text-lg"
                disabled
              >
                <span>Download</span>
                <ArrowForward />
              </button>
            </div>
          </Tooltip>
        </div>
      </div>
      <Image
        src="/assets/hero-background.webp"
        alt="hero-background"
        fill
        priority
        className="-z-20 object-cover"
      />
    </section>
  );
};

export default Landing;
