import React from 'react';
import { Trophy } from '@phosphor-icons/react';
import { certificates } from '../data/portfolio';
import ArrowIcon from './ArrowIcon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const Certificates: React.FC = () => (
  <section id="certificates" aria-labelledby="certificates-title" className="section">
    <SectionHeading
      id="certificates-title"
      eyebrow="Certificates"
      title="Recognition"
      description="Hackathons where I built under a deadline with a team."
    />

    <div className="flex flex-col gap-12">
      {certificates.map((cert) => (
        <Reveal as="article" key={cert.title} className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <a
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-3xl bg-surface-sunken p-4 md:p-6"
            aria-label={`Open the ${cert.title} certificate`}
          >
            <img
              src={cert.image}
              alt={`${cert.title} certificate of recognition`}
              loading="lazy"
              className="w-full rounded-2xl shadow-pill transition-transform duration-700 ease-base group-hover:-rotate-1 group-hover:scale-[1.03]"
            />
          </a>

          <div className="flex flex-col gap-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-ink transition duration-500 ease-base group-hover:bg-ink group-hover:text-surface" aria-hidden>
              <Trophy size={20} weight="bold" />
            </span>
            <div>
              <p className="eyebrow">{cert.date}</p>
              <h3 className="heading-3 mt-3 text-ink">{cert.title}</h3>
              <p className="title-1 mt-2 text-accent-ink">{cert.issuer}</p>
            </div>
            <p className="body-3 text-ink-muted md:body-7">{cert.description}</p>
            {cert.credentialId && (
              <p className="caption-2 text-ink-muted">
                Credential ID <span className="font-mono text-ink">{cert.credentialId}</span>
              </p>
            )}
            <a href={cert.image} target="_blank" rel="noopener noreferrer" className="group btn-primary w-fit">
              View certificate
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Certificates;
