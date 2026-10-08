import React from 'react';
import { GradientBackground } from '../brand/GradientBackground.jsx';
import { Logo } from '../brand/Logo.jsx';

// 1920×1080 slide shell matching the Corporate Template master: gradient field, footer wordmark
// at (75,1001) 154×44, optional source line at (288,1019), page number at x 1742.
export function SlideFrame({ tone = 'dark', hue = 'green', background, pageNumber, source, showLogo = true, children, style, ...rest }) {
  const inner = (
    <>
      <div style={{ position: 'absolute', inset: 0 }}>{children}</div>
      {showLogo ? <Logo height={44} style={{ position: 'absolute', left: 75, top: 1001 }} /> : null}
      {source ? <div style={{ position: 'absolute', left: 288, top: 1016, width: 1440, fontSize: 'var(--type-footer)', fontWeight: 'var(--weight-light)', color: 'var(--text-secondary)' }}>{source}</div> : null}
      {pageNumber != null ? <div style={{ position: 'absolute', left: 1742, top: 1010, width: 91, textAlign: 'right', fontSize: 24, lineHeight: '36px', color: 'var(--text-primary)' }}>{pageNumber}</div> : null}
    </>
  );
  const base = { width: 1920, height: 1080, position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-brand)', color: 'var(--text-primary)', ...style };
  if (background) return <div style={{ ...base, backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundColor: 'var(--sn-infinite-blue)' }} {...rest}>{inner}</div>;
  return <GradientBackground tone={tone} hue={hue} style={base} {...rest}>{inner}</GradientBackground>;
}
