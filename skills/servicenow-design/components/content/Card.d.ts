import * as React from 'react';
/**
 * Rounded content panel. 'template' matches the Corporate Template card, 'glass' matches pitch-deck panels.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'template' | 'glass' | 'light';
  /** 1 = 1920×1080 slide canvas; 0.5 ≈ web/doc scale */
  scale?: number;
  padding?: number | string;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
