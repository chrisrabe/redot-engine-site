import type { FC, ReactNode } from "react";

interface SectionProps {
  headingText: string;
  children: ReactNode;
  id?: string;
}

const Section: FC<SectionProps> = ({ id, headingText, children }) => {
  return (
    <section className="px-80 py-20 flex flex-col" id={id}>
      <h2 className="text-4xl font-bold underline decoration-redot-primary mb-4">
        {headingText}
      </h2>
      {children}
    </section>
  );
};

export default Section;
