import React from 'react';

// "ANY Data" capsule from the platform diagrams: dark outlined pill with an optional bright tag chip.
const TAGS = { green: 'var(--sn-wasabi-green)', blue: 'var(--sn-blue)', indigo: 'var(--sn-light-indigo)', purple: 'var(--sn-light-purple)' };

export function Pill({ tag, tagColor = 'green', variant = 'outline', scale = 1, children, style, ...rest }) {
  const s = (n) => `${Math.round(n * scale)}px`;
  const solid = variant === 'solid';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: s(12), boxSizing: 'border-box',
      height: s(52), padding: tag ? `0 ${s(24)} 0 ${s(8)}` : `0 ${s(24)}`, borderRadius: 'var(--radius-pill)',
      background: solid ? (TAGS[tagColor] || tagColor) : 'rgba(3,45,66,.55)',
      border: solid ? 'none' : `${Math.max(1, Math.round(2 * scale))}px solid rgba(255,255,255,.55)`,
      color: solid ? 'var(--text-on-accent)' : 'var(--text-primary)',
      fontFamily: 'var(--font-brand)', fontWeight: 'var(--weight-bold)', fontSize: s(26), lineHeight: 1, whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      {tag ? <span style={{ display: 'inline-flex', alignItems: 'center', height: s(34), padding: `0 ${s(14)}`, borderRadius: 'var(--radius-pill)', background: TAGS[tagColor] || tagColor, color: 'var(--text-on-accent)', fontSize: s(20), letterSpacing: '.02em' }}>{tag}</span> : null}
      {children}
    </span>
  );
}
