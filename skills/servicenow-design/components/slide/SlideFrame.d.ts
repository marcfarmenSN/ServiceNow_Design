import * as React from 'react';
/**
 * 1920×1080 slide shell (Corporate Template master): gradient field, footer wordmark, source line, page number.
 */
export interface SlideFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'dark' | 'mid';
  hue?: 'green' | 'blue' | 'indigo' | 'purple';
  /** optional image URL (e.g. assets/backgrounds/bg-content.png) instead of the CSS gradient */
  background?: string;
  pageNumber?: React.ReactNode;
  /** footer source / citation line */
  source?: React.ReactNode;
  showLogo?: boolean;
  children?: React.ReactNode;
}
export function SlideFrame(props: SlideFrameProps): JSX.Element;
