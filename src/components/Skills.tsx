import React from 'react';
import { Code, Database, DeviceMobile, Stack, Wrench } from '@phosphor-icons/react';
import { skillGroups } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const ICONS = [DeviceMobile, Code, Stack, Database, Wrench];

/** Nova "services" layout: numbered rows with an icon that fills on hover. */
const Skills: React.FC = () => (
  <section id="skills" aria-labelledby="skills-title" className="section">
    <SectionHeading
      id="skills-title"
      eyebrow="Toolbox"
      title="The stack behind the apps"
      description="Tools I reach for across my projects, from offline storage to the APIs that keep data in sync."
    />

    <ol className="grid md:grid-cols-2 md:gap-x-16">
      {skillGroups.map((group, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <Reveal as="li" key={group.title} delay={(i % 2) * 0.08} className="group border-t border-surface-line py-8">
            <div className="flex items-start gap-6">
              <span className="caption-3 pt-4 text-accent-ink">{String(i + 1).padStart(2, '0')}.</span>
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-surface-line text-ink transition duration-500 ease-base group-hover:border-ink group-hover:bg-ink group-hover:text-surface">
                <Icon size={20} weight="bold" aria-hidden />
              </span>
              <div className="min-w-0 flex-1 pt-2">
                <h3 className="heading-5 text-ink transition-transform duration-500 ease-base group-hover:translate-x-1">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ol>
  </section>
);

export default Skills;
