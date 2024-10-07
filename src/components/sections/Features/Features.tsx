import Section from "@/components/layout/Section";
import FeatureListItem from "@/components/sections/Features/FeatureListItem";
import List from "@mui/material/List";
import type { FC } from "react";
import features from "./features.json";

const Features: FC = () => (
  <Section headingText="Unlocking Potential">
    <List>
      {features.map((f) => (
        <FeatureListItem
          key={f.imageUrl}
          imageUrl={f.imageUrl}
          imageAlt={f.imageAlt}
          headingText={f.headingText}
          description={f.description}
        />
      ))}
    </List>
  </Section>
);

export default Features;
