import { Code } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";

const Header: FC = () => (
  <header className="px-80 py-4 flex justify-between items-center backdrop-blur-sm">
    <Image
      src="assets/logo-redot-with-text.svg"
      alt="Redot Engine Logo"
      width={120}
      height={30}
    />
    <Button
      variant="contained"
      endIcon={<Code />}
      className="bg-gray-800 capitalize"
    >
      Contribute
    </Button>
  </header>
);

export default Header;
