import React from 'react';
import { Card } from './Card.jsx';

// Pitch-deck pillar card: coloured bold title ("Data"), white bold statement, optional illustration on the right.
export function FeatureCard({ title, body, media, titleColor = 'var(--sn-blue)', scale = 1, variant = 'glass', style, ...rest }) {
  const s = (n) => `${Math.round(n * scale)}px`;
  return (
    <Card variant={variant} scale={scale} padding={`${s(30)} ${s(36)}`} style={{ display: 'flex', alignItems: 'center', gap: s(24), ...style }} {...rest}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: s(10) }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: s(56), lineHeight: 1, color: titleColor, letterSpacing: '-0.01em' }}>{title}</div>
        <div style={{ fontWeight: 'var(--weight-bold)', fontSize: s(40), lineHeight: 1.05, textWrap: 'pretty' }}>{body}</div>
      </div>
      {media ? <div style={{ flex: 'none', display: 'flex' }}>{media}</div> : null}
    </Card>
  );
}
