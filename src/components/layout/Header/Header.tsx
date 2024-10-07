import { GITHUB_URL } from "@/links";
import { Code, Group, Menu as MenuIcon } from "@mui/icons-material";
import { ListItemIcon, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Image from "next/image";
import type { FC } from "react";
import { useState } from "react";

const menuItems = [
  {
    icon: <Code />,
    className: "bg-gray-800",
    text: "Contribute",
    onClick: () => window.open(GITHUB_URL, "_blank"),
  },
  {
    icon: <Group />,
    className: "bg-redot-primary",
    text: "Join the community",
    onClick: () => {
      const communitySection = document.getElementById("community");
      if (communitySection) {
        communitySection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
];

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <header className="px-10 md:px-20 lg:px-40 xl:px-80 py-4 flex justify-between items-center backdrop-blur-sm">
      <Image
        src="assets/logo-redot-with-text.svg"
        alt="Redot Engine Logo"
        width={120}
        height={30}
      />
      <div className="flex sm:hidden">
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <MenuIcon className="text-white" />
        </IconButton>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.text}
              onClick={() => {
                item.onClick();
                setAnchorEl(null);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className="hidden sm:flex flex-row gap-2">
        {menuItems.map((item) => (
          <Button
            key={item.text}
            variant="contained"
            endIcon={item.icon}
            className={item.className}
            sx={{
              textTransform: "unset",
            }}
            onClick={item.onClick}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Header;
