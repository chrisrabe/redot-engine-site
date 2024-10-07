import { GITHUB_URL } from "@/links";
import { Code, Group } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";

const Header: FC = () => (
  <header className="px-10 md:px-20 lg:px-40 xl:px-80 py-4 flex justify-between items-center backdrop-blur-sm">
    <Image
      src="assets/logo-redot-with-text.svg"
      alt="Redot Engine Logo"
      width={120}
      height={30}
    />
    <div className="flex flex-row gap-2">
      <Button
        variant="contained"
        endIcon={<Code />}
        className="bg-gray-800 capitalize"
        onClick={() => window.open(GITHUB_URL, "_blank")}
      >
        Contribute
      </Button>
      <Button
        variant="contained"
        endIcon={<Group />}
        className="bg-redot-primary"
        sx={{
          textTransform: "unset",
        }}
        onClick={() => {
          const communitySection = document.getElementById("community");
          if (communitySection) {
            communitySection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Join the community
      </Button>
    </div>
  </header>
);

export default Header;
