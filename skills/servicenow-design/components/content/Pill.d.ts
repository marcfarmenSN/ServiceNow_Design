import * as React from 'react';
/**
 * Capsule label — outline pill with optional bright "ANY" tag chip, or solid accent pill.
 */
export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** short uppercase chip shown first, e.g. "ANY" */
  tag?: React.ReactNode;
  tagColor?: 'green' | 'blue' | 'indigo' | 'purple' | string;
  variant?: 'outline' | 'solid';
  scale?: number;
  children?: React.ReactNode;
}
export function Pill(props: PillProps): JSX.Element;
