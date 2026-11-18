import React from 'react';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { mailto, profile } from '../data/portfolio';
import ArrowIcon from './ArrowIcon';
import Reveal from './Reveal';

const footerLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
];

/** Nova's dark closing section, with the footer inside it. */
const Contact: React.FC = () => (
  <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-surface-deep text-surface">
    <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-accent/30 motion-safe:animate-spinslow" style={{ borderStyle: 'dashed' }} />
    <span aria-hidden className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-accent/15 motion-safe:animate-float" />

    <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-24 md:px-12 md:pt-32">
      <Reveal>
        <p className="caption-3 uppercase tracking-[0.2em] text-accent">Open to new work</p>
        <h2 id="contact-title" className="heading-3 mt-6 max-w-[680px] font-normal tracking-display md:heading-1 md:font-normal">
          Let's build something <span className="text-accent">together</span>
        </h2>
        <p className="body-3 mt-6 max-w-[520px] text-surface/70 md:body-7">
          I'm open to full time roles, internships, and freelance projects. Tell me what you're building and what you
          need from a mobile developer.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={mailto} className="group btn-light">
            Email me about a role
            <ArrowIcon />
          </a>
          <a href="#work" className="group btn-outline text-surface hover:bg-surface/10">
            See my work
            <ArrowIcon />
          </a>
        </div>
        <p className="caption-2 mt-6 text-surface/50">{profile.email}</p>
      </Reveal>

      <footer className="mt-24 flex flex-col gap-8 border-t border-surface/15 pt-8 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="body-5 rounded-md text-surface/70 transition duration-300 ease-base hover:text-surface">
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {[
            { href: profile.github, label: 'GitHub', Icon: GithubLogo },
            { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinLogo },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface/20 text-surface/80 transition duration-300 ease-base hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Icon size={18} weight="bold" aria-hidden />
            </a>
          ))}
        </div>
      </footer>
      <p className="caption-2 mt-8 text-surface/50">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </div>
  </section>
);

export default Contact;
