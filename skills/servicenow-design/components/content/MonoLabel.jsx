import React from 'react';

// Uppercase monospace label used for axes/eyebrows in brand guidance ("SINGLE EXECUTION → MULTIPLE EXECUTIONS").
export function MonoLabel({ children, size = 14, color = 'var(--text-primary)', style, ...rest }) {
  return (
    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 400, fontSize: size, lineHeight: 1.2, letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', color, ...style }} {...rest}>{children}</span>
  );
}
