import React from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  /** Optional link shown under the description, Nova style. */
  aside?: React.ReactNode;
};

/** Nova layout: big heading on the left, supporting text on the right. */
const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description, id, aside }) => (
  <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-2 lg:items-end lg:gap-16">
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="heading-3 mt-4 max-w-[680px] text-ink md:heading-1">
        {title}
      </h2>
    </Reveal>
    {(description || aside) && (
      <Reveal delay={0.1} className="flex flex-col gap-6 lg:items-end lg:text-right">
        {description && <p className="body-3 max-w-[480px] text-ink-muted md:body-7">{description}</p>}
        {aside}
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
