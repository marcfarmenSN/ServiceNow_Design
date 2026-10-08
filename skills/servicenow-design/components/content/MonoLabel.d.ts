import * as React from 'react';
/** Uppercase monospace eyebrow / axis label. */
export interface MonoLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  color?: string;
  children?: React.ReactNode;
}
export function MonoLabel(props: MonoLabelProps): JSX.Element;
