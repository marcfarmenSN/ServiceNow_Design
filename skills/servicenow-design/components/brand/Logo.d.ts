import * as React from 'react';
/**
 * ServiceNow wordmark (white with Wasabi Green "o") or the green logo mark, copied from source files.
 */
export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /** 'wordmark' (default) or 'mark' (green Figma cover mark) */
  variant?: 'wordmark' | 'mark';
  /** px height; slide footer = 44 on 1920 canvas */
  height?: number;
  /** letterform colour for the wordmark; default white. Use var(--sn-infinite-blue) on light surfaces. */
  color?: string;
  title?: string;
}
export function Logo(props: LogoProps): JSX.Element;
