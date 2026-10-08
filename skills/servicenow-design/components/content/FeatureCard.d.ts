import * as React from 'react';
/**
 * Pillar card — coloured title + bold one-line argument + optional right-side illustration.
 */
export interface FeatureCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  body: React.ReactNode;
  /** image/illustration slot (3D brand renders in the source deck) */
  media?: React.ReactNode;
  /** default var(--sn-blue); var(--sn-wasabi-green) for emphasis */
  titleColor?: string;
  scale?: number;
  variant?: 'template' | 'glass' | 'light';
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;
