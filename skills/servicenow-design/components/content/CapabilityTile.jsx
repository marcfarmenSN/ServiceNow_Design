import React from 'react';
import { Pill } from './Pill.jsx';

// Capability column head from the platform diagrams (Sense / Decide / Act / Secure):
// bright hue at top fading into the dark field, light-weight title, "ANY x" capsule.
const HUE = { sense: '#7661FF', decide: '#BF71F2', act: '#52B8FF', secure: '#63DF4E' };

export function CapabilityTile({ title, tag = 'ANY', label, hue = 'act', scale = 1, children, style, ...rest }) {
  const s = (n) => `${Math.round(n * scale)}px`;
  const c = HUE[hue] || hue;
  return (
    <div style={{
      position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: s(18),
      padding: `${s(28)} ${s(28)} ${s(32)}`, borderRadius: `${s(28)} ${s(28)} ${s(10)} ${s(10)}`,
      background: `linear-gradient(180deg, ${c} 0%, color-mix(in oklab, ${c} 55%, #032D42) 38%, rgba(3,45,66,.35) 100%)`,
      border: `${Math.max(1, Math.round(2 * scale))}px solid color-mix(in oklab, ${c} 70%, white)`,
      color: 'var(--text-primary)', fontFamily: 'var(--font-brand)', ...style,
    }} {...rest}>
      <div style={{ fontWeight: 'var(--weight-regular)', fontSize: s(76), lineHeight: 1, letterSpacing: '-0.01em' }}>{title}</div>
      {label ? <Pill tag={tag} scale={scale}>{label}</Pill> : null}
      {children}
    </div>
  );
}
