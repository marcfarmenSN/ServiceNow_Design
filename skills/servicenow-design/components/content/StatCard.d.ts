import * as React from 'react';
/**
 * Big-number proof point card ("97%+ renewal rate").
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
  media?: React.ReactNode;
  valueColor?: string;
  scale?: number;
  variant?: 'template' | 'glass' | 'light';
}
export function StatCard(props: StatCardProps): JSX.Element;
