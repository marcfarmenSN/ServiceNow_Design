import React from 'react';

// Two-tone display headline: lead phrase in accent (green/blue), remainder in white.
const ACCENT = { green: 'var(--sn-wasabi-green)', blue: 'var(--sn-blue)', indigo: 'var(--sn-light-indigo)', purple: 'var(--sn-light-purple)' };

export function Headline({ lead, rest, accent = 'green', size = 96, as = 'h2', align = 'left', style, children, ...props }) {
  const Tag = as;
  return (
    <Tag style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)', fontSize: size, lineHeight: 'var(--leading-title)', letterSpacing: '-0.025em', color: 'var(--text-primary)', textAlign: align, textWrap: 'balance', ...style }} {...props}>
      {lead ? <span style={{ color: ACCENT[accent] || accent }}>{lead}</span> : null}
      {lead && rest ? ' ' : null}
      {rest}
      {children}
    </Tag>
  );
}
