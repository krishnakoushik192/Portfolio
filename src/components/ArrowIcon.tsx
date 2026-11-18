import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

/**
 * Nova's arrow swap: on hover of the parent `.group`, the arrow flies out to
 * the top right while a copy slides in from the bottom left.
 */
const ArrowIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <span className={`relative inline-flex h-5 w-5 items-center justify-center overflow-hidden ${className}`} aria-hidden>
    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-base group-hover:-translate-y-[140%] group-hover:translate-x-[140%] motion-reduce:transition-none">
      <ArrowUpRight size={size} weight="bold" />
    </span>
    <span className="absolute inset-0 flex -translate-x-[140%] translate-y-[140%] items-center justify-center transition-transform duration-300 ease-base group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transition-none">
      <ArrowUpRight size={size} weight="bold" />
    </span>
  </span>
);

export default ArrowIcon;
