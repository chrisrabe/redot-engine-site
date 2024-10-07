"use client";

import Section from "@/components/layout/Section";
import { DISCORD_INVITE_URL, GITHUB_URL, X_URL } from "@/links";
import { GitHub, X } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import type { FC } from "react";

const links = [
  {
    image: (
      <Image
        src="assets/icon-discord.svg"
        alt="Discord icon"
        width={100}
        height={100}
      />
    ),
    headingText: "Socialise",
    description:
      "Interact with our rapidly growing community. This is a space where you can share your work, and socialise with other community members.",
    ctaText: "Join now",
    onClick: () => window.open(DISCORD_INVITE_URL, "_blank"),
  },
  {
    image: <GitHub sx={{ width: 100, height: 100 }} />,
    headingText: "Code",
    description:
      "If you know how to code, you can help by fixing bugs and working with engine contributors towards the implementation of new features.",
    ctaText: "Contribute",
    onClick: () => window.open(GITHUB_URL, "_blank"),
  },
  {
    image: <X sx={{ width: 100, height: 100 }} />,
    headingText: "Stay informed",
    description:
      "Follow our official social media page on X to get the latest announcements about new features and game showcases.",
    ctaText: "Follow",
    onClick: () => window.open(X_URL, "_blank"),
  },
];

const Community: FC = () => (
  <Section headingText="Get involved" id="community">
    <p>
      Join the community and help create a game engine that belongs to
      everybody.
    </p>
    <div className="flex flex-1 items-center justify-center h-full">
      <Grid container spacing={4}>
        {links.map((link) => (
          <Grid
            key={link.headingText}
            size={{ xs: 12, md: 4 }}
            className="flex flex-col items-center text-center gap-4"
          >
            {link.image}
            <h3 className="text-2xl font-bold">{link.headingText}</h3>
            <p className="flex flex-grow">{link.description}</p>
            <button
              className="rounded px-4 py-2 bg-gray-800 text-redot-primary px-8 text-lg capitalize"
              onClick={link.onClick}
            >
              {link.ctaText}
            </button>
          </Grid>
        ))}
      </Grid>
    </div>
  </Section>
);

export default Community;
