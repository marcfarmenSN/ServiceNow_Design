import React from 'react';
import { SN_ICONS } from './icon-data.js';

export const ICON_NAMES = Object.keys(SN_ICONS);

export function Icon({ name, size = 48, color = 'currentColor', accent = '#62D84E', title, style, ...rest }) {
  const body = SN_ICONS[name];
  if (!body) return null;
  const html = accent === '#62D84E' ? body : body.split('#62D84E').join(accent);
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill="currentColor" role={title ? 'img' : 'presentation'}
      aria-label={title} aria-hidden={title ? undefined : true}
      style={{ display: 'inline-block', flex: 'none', color, ...style }} {...rest}
      dangerouslySetInnerHTML={{ __html: html }} />
  );
}
