import React from 'react';
import { Card } from './Card.jsx';

// Proof-point card: huge display number ("100B+") over a short white label.
export function StatCard({ value, label, media, scale = 1, variant = 'glass', valueColor = 'var(--sn-white)', style, ...rest }) {
  const s = (n) => `${Math.round(n * scale)}px`;
  return (
    <Card variant={variant} scale={scale} padding={`${s(36)} ${s(40)}`} style={{ display: 'flex', alignItems: 'center', gap: s(24), ...style }} {...rest}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: s(14) }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: s(140), lineHeight: .9, letterSpacing: '-0.03em', color: valueColor }}>{value}</div>
        <div style={{ fontWeight: 'var(--weight-medium)', fontSize: s(44), lineHeight: 1.08, textWrap: 'pretty' }}>{label}</div>
      </div>
      {media ? <div style={{ flex: 'none', display: 'flex' }}>{media}</div> : null}
    </Card>
  );
}
