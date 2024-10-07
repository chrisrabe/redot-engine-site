import Section from "@/components/layout/Section";
import { DISCORD_INVITE_URL, GITHUB_URL, X_URL } from "@/links";
import { GitHub, Reddit, X } from "@mui/icons-material";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import type { FC } from "react";

const Community: FC = () => (
  <Section headingText="Get involved" id="community">
    <p>
      Join the community and help create a game engine that belongs to
      everybody.
    </p>
    <div className="flex flex-1 items-center justify-center h-full">
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, md: 4 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <Image
            src="assets/icon-discord.svg"
            alt="Discord icon"
            width={100}
            height={100}
          />
          <h3 className="text-2xl font-bold">Socialise</h3>
          <p>
            Interact with our rapidly growing community. This is a space where
            you can share your work, and socialise with other community members.
          </p>
          <Button
            className="bg-gray-800 text-redot-primary px-8 text-lg capitalize"
            onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
          >
            Join Now
          </Button>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <GitHub sx={{ width: 100, height: 100 }} />
          <h3 className="text-2xl font-bold">Code</h3>
          <p>
            If you know how to code, you can help by fixing bugs and working
            with engine contributors towards the implementation of new features.
          </p>
          <Button
            className="bg-gray-800 text-redot-primary px-8 text-lg capitalize"
            onClick={() => window.open(GITHUB_URL, "_blank")}
          >
            Contribute
          </Button>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <X sx={{ width: 100, height: 100 }} />
          <h3 className="text-2xl font-bold">Stay informed</h3>
          <p>
            If you know how to code, you can help by fixing bugs and working
            with engine contributors towards the implementation of new features.
          </p>
          <Button
            className="bg-gray-800 text-redot-primary px-8 text-lg capitalize"
            onClick={() => window.open(X_URL, "_blank")}
          >
            Follow
          </Button>
        </Grid>
      </Grid>
    </div>
  </Section>
);

export default Community;
