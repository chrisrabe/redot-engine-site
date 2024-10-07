import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="px-80 py-20">
      <Image
        src="assets/logo-redot-with-text.svg"
        alt="Redot Engine Logo"
        width={120}
        height={30}
      />
      <div className="m-4">
        <h5 className="font-bold text-redot-primary">Site quick links</h5>
        <List className="text-sm">
          <ListItem>
            <Link href="#download">Download</Link>
          </ListItem>
          <ListItem>
            <Link href="#source">Source Code</Link>
          </ListItem>
          <ListItem>
            <Link href="#community">Community</Link>
          </ListItem>
        </List>
      </div>
      <Divider className="bg-gray-500" />
      <div className="px-4 py-2">
        <span className="text-xs">© 2024 ReDOT community</span>
      </div>
    </footer>
  );
};

export default Footer;
