import * as React from 'react';
/**
 * Brand gradient field: Infinite Blue (dark) or mid-tone linear base with two soft glows. Dark Green is the default.
 */
export interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 'dark' = brand marketing (default); 'mid' = owned channels */
  tone?: 'dark' | 'mid';
  /** single → multiple executions: green, blue, indigo, purple */
  hue?: 'green' | 'blue' | 'indigo' | 'purple';
  /** Gaussian blur in 1920-canvas units (default 220) */
  blur?: number;
  children?: React.ReactNode;
}
export function GradientBackground(props: GradientBackgroundProps): JSX.Element;
