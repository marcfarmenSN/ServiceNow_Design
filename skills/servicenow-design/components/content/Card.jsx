import React from 'react';

// variant 'template' = Corporate Template card (tx2 @5.3% fill, 0.5pt white line, roundRect ≈23px on 1920 canvas)
// variant 'glass'    = pitch-deck glass panel (translucent light gradient, soft white edge)
// variant 'light'    = white card for light pages
const VARIANTS = {
  template: { background: 'var(--surface-card)', border: '1px solid var(--border-card)' },
  glass: { background: 'var(--surface-card-glass)', border: '1px solid var(--border-card-soft)', boxShadow: 'var(--shadow-glass)', backdropFilter: 'blur(var(--blur-glass))', WebkitBackdropFilter: 'blur(var(--blur-glass))' },
  light: { background: 'var(--sn-white)', border: '1px solid var(--sn-gray-d9)', color: 'var(--text-on-light)' },
};

export function Card({ variant = 'glass', scale = 1, padding, children, style, ...rest }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
      borderRadius: `calc(var(--radius-card) * ${scale})`,
      padding: padding ?? `${Math.round(32 * scale)}px ${Math.round(36 * scale)}px`,
      color: 'var(--text-primary)', fontFamily: 'var(--font-brand)',
      ...VARIANTS[variant], ...style,
    }} {...rest}>{children}</div>
  );
}
