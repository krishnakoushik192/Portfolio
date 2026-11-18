import React from 'react';

const ITEMS = [
  'React Native',
  'TypeScript',
  'iOS and Android',
  'Offline first',
  'Reanimated',
  'Node.js',
  'MongoDB',
  'Firebase',
  'Supabase',
  'Open to work',
];

/**
 * Continuous tech strip. Constant speed is intentional for a looping ticker;
 * it pauses on hover and stays still for reduced motion.
 */
const Marquee: React.FC = () => {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <li key={item} className="heading-4 flex items-center gap-10 whitespace-nowrap text-ink md:heading-2">
          {item}
          <span className="text-accent" aria-hidden>
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="group overflow-hidden py-10" aria-label="Skills I work with">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
};

export default Marquee;
