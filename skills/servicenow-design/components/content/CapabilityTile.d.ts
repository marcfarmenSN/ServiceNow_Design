import * as React from 'react';
/**
 * Capability column head — Sense (indigo) / Decide (purple) / Act (blue) / Secure (green).
 */
export interface CapabilityTileProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  /** capsule chip text, default "ANY" */
  tag?: React.ReactNode;
  /** capsule label, e.g. "Data", "AI Model", "Workflow" */
  label?: React.ReactNode;
  hue?: 'sense' | 'decide' | 'act' | 'secure' | string;
  scale?: number;
  children?: React.ReactNode;
}
export function CapabilityTile(props: CapabilityTileProps): JSX.Element;
