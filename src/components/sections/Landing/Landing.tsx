import Header from "@/components/layout/Header";
import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";

const Landing: FC = () => {
  return (
    <section className="flex flex-col">
      <Header />
      <div className="w-full h-full flex flex-grow">
        <div className="px-80 py-60 space-y-4">
          <h1 className="text-6xl font-bold">
            Your free, open-source game engine.
          </h1>
          <p>
            Develop your 2D & 3D games, cross platform projects, or even XR
            ideas!
          </p>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            className="bg-redot-primary capitalize px-8 py-4 text-lg"
          >
            Download
          </Button>
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
