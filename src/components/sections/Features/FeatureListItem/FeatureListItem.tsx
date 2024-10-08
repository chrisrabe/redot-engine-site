import ListItem from "@mui/material/ListItem";
import Image from "next/image";
import type { FC } from "react";

interface FeatureListItemProps {
  imageUrl: string;
  imageAlt: string;
  headingText: string;
  description: string;
}

const FeatureListItem: FC<FeatureListItemProps> = ({
  imageUrl,
  imageAlt,
  headingText,
  description,
}) => (
  <ListItem className="flex flex-col items-center md:flex-row lg:items-start justify-between md:space-x-4 lg:space-x-10">
    <Image src={imageUrl} alt={imageAlt} width={280} height={280} />
    <div className="flex flex-col flex-grow gap-2 py-2 lg:py-12">
      <h3 className="text-2xl font-bold text-redot-primary">{headingText}</h3>
      <p>{description}</p>
    </div>
  </ListItem>
);

export default FeatureListItem;
