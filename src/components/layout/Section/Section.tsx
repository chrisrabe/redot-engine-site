import type { FC, ReactNode } from "react";

interface SectionProps {
  headingText: string;
  children: ReactNode;
  id?: string;
}

const Section: FC<SectionProps> = ({ id, headingText, children }) => {
  return (
    <section
      className="px-10 md:px-20 lg:px-40 xl:px-80 py-20 flex flex-col"
      id={id}
    >
      <h2 className="text-3xl lg:text-4xl font-bold underline decoration-redot-primary mb-4">
        {headingText}
      </h2>
      {children}
    </section>
  );
};

export default Section;
