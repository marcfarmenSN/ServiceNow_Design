import * as React from 'react';
/**
 * Two-tone display headline ("ServiceNow was built for this moment").
 */
export interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** accent-coloured lead phrase */
  lead?: React.ReactNode;
  /** white remainder */
  rest?: React.ReactNode;
  accent?: 'green' | 'blue' | 'indigo' | 'purple' | string;
  /** px, default 96 */
  size?: number;
  as?: 'h1' | 'h2' | 'h3' | 'div';
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}
export function Headline(props: HeadlineProps): JSX.Element;
