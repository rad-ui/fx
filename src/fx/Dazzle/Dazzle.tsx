import React from 'react';
import { DazzleColors, DazzleProps } from './Dazzle.types';

export const DEFAULT_DAZZLE_COLORS: DazzleColors = ['#6ea8ff', '#a78bfa', '#f472b6', '#fbbf24'];

/** Sparkles around the text: x, y as % of its box, size in em, colour slot (0–3, or white), delay in s. */
const SPARKLES: [number, number, number, number | 'white', number][] = [
  [-8, 30, 0.34, 0, 0],
  [104, 22, 0.3, 2, 0.9],
  [48, 2, 0.2, 1, 0.5],
  [109, 66, 0.2, 3, 1.3],
  [14, 102, 0.2, 3, 0.7],
  [62, 104, 0.18, 2, 2],
  [22, 6, 0.14, 'white', 1.1],
  [74, 8, 0.15, 'white', 1.8],
  [-3, 78, 0.18, 'white', 1.5],
];

const STAR = 'M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z';

/*
 * The whole effect is CSS: each letter carries two registered colour properties that animate through
 * the palette with a per-letter offset, so a colour wave (and its glow) travels along the word, while a
 * second animation hops the letters in a ripple on every beat. Shipped inline so the package needs no
 * stylesheet import and renders on the server. Static under prefers-reduced-motion.
 */
const CSS = `
@property --rad-dazzle-a { syntax: "<color>"; inherits: false; initial-value: #6ea8ff; }
@property --rad-dazzle-b { syntax: "<color>"; inherits: false; initial-value: #a78bfa; }
.rad-dazzle { position: relative; display: inline-block; padding: 0 0.04em; }
.rad-dazzle-char { display: inline-block; animation: rad-dazzle-drop 0.8s cubic-bezier(0.2, 1.5, 0.35, 1) both; animation-delay: calc(var(--rad-dazzle-delay) + 0.15s + var(--i) * 0.07s); }
.rad-dazzle-glyph {
  display: inline-block;
  background: linear-gradient(180deg, #fff -25%, var(--rad-dazzle-a) 42%, var(--rad-dazzle-b) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 0 0.14em color-mix(in srgb, var(--rad-dazzle-a) 55%, transparent));
  transform-origin: 50% 90%;
  animation: rad-dazzle-wave 4s linear infinite, rad-dazzle-beat var(--rad-dazzle-beat) cubic-bezier(0.3, 0, 0.2, 1) infinite;
  animation-delay: calc(var(--i) * -0.32s), calc(var(--rad-dazzle-delay) + 1.3s + var(--i) * 0.09s);
  will-change: transform;
}
.rad-dazzle-spark { position: absolute; pointer-events: none; transform: translate(-50%, -50%) scale(0); filter: drop-shadow(0 0 6px currentColor); animation: rad-dazzle-twinkle 2.6s ease-in-out infinite both; }
.rad-dazzle-swoosh { position: absolute; left: 2%; bottom: -0.06em; width: 94%; height: 0.16em; overflow: visible; }
.rad-dazzle-swoosh path { fill: none; stroke-width: 7; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 1; vector-effect: non-scaling-stroke; animation: rad-dazzle-draw 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards; animation-delay: calc(var(--rad-dazzle-delay) + 0.9s); }
.rad-dazzle-sr { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@keyframes rad-dazzle-drop { from { opacity: 0; transform: translateY(-0.55em) scale(1.7) rotate(-14deg); filter: blur(14px); } to { opacity: 1; transform: none; filter: blur(0); } }
@keyframes rad-dazzle-wave {
  0%, 100% { --rad-dazzle-a: var(--rad-dazzle-c1); --rad-dazzle-b: var(--rad-dazzle-c2); }
  25% { --rad-dazzle-a: var(--rad-dazzle-c2); --rad-dazzle-b: var(--rad-dazzle-c3); }
  50% { --rad-dazzle-a: var(--rad-dazzle-c3); --rad-dazzle-b: var(--rad-dazzle-c4); }
  75% { --rad-dazzle-a: var(--rad-dazzle-c4); --rad-dazzle-b: var(--rad-dazzle-c1); }
}
@keyframes rad-dazzle-beat {
  0%, 34%, 100% { transform: none; }
  9% { transform: translateY(-0.13em) rotate(-5deg) scale(1.06, 1.08); }
  17% { transform: translateY(0.015em) scale(1.07, 0.92); }
  25% { transform: translateY(-0.02em) scale(0.98, 1.02); }
}
@keyframes rad-dazzle-twinkle {
  0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0) rotate(0deg); }
  45% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(80deg); }
  60% { opacity: 0.9; transform: translate(-50%, -50%) scale(0.85) rotate(110deg); }
}
@keyframes rad-dazzle-draw { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) {
  .rad-dazzle-char, .rad-dazzle-glyph, .rad-dazzle-spark, .rad-dazzle-swoosh path { animation: none; }
  .rad-dazzle-glyph {
    --rad-dazzle-a: color-mix(in srgb, var(--rad-dazzle-c1) calc(100% - var(--i) * 14%), var(--rad-dazzle-c3));
    --rad-dazzle-b: color-mix(in srgb, var(--rad-dazzle-c2) calc(100% - var(--i) * 14%), var(--rad-dazzle-c4));
  }
  .rad-dazzle-spark { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
  .rad-dazzle-swoosh path { stroke-dashoffset: 0; }
}
`;

let counter = 0;
const useCounterId = (): string => {
  const ref = React.useRef<string>();
  if (!ref.current) ref.current = String(++counter);
  return ref.current;
};
/** A stable id for the swoosh gradient: React's useId where it exists (18+), a counter before that. */
const useStableId: () => string =
  (React as unknown as { useId?: () => string }).useId ?? useCounterId;
const useGradientId = (): string => `rad-dazzle-${useStableId().replace(/:/g, '')}`;

/**
 * Makes a word dazzle: letters drop in one by one, then hop in a wave on every beat while a colour
 * wave and glow run through them, with sparkles twinkling around and a swoosh drawn underneath.
 */
export const Dazzle: React.FC<DazzleProps> = ({
  children,
  colors = DEFAULT_DAZZLE_COLORS,
  beat = 2,
  sparkles = true,
  swoosh = true,
  delay = 0,
  className = '',
  style = {},
}) => {
  const gradientId = useGradientId();
  const text = typeof children === 'string' ? children : null;
  const sparkleCount =
    sparkles === true
      ? SPARKLES.length
      : sparkles === false
        ? 0
        : Math.max(0, Math.min(SPARKLES.length, Math.round(sparkles)));
  const vars = {
    '--rad-dazzle-c1': colors[0],
    '--rad-dazzle-c2': colors[1],
    '--rad-dazzle-c3': colors[2],
    '--rad-dazzle-c4': colors[3],
    '--rad-dazzle-beat': `${beat}s`,
    '--rad-dazzle-delay': `${delay}s`,
    ...style,
  } as React.CSSProperties;

  return (
    <span className={`rad-dazzle ${className}`} style={vars}>
      <style>{CSS}</style>
      {text !== null ? <span className="rad-dazzle-sr">{text}</span> : null}
      <span aria-hidden={text !== null ? true : undefined}>
        {text !== null ? (
          Array.from(text).map((ch, i) => (
            <span key={i} className="rad-dazzle-char" style={{ '--i': i } as React.CSSProperties}>
              <span className="rad-dazzle-glyph">{ch === ' ' ? ' ' : ch}</span>
            </span>
          ))
        ) : (
          <span className="rad-dazzle-glyph" style={{ '--i': 0 } as React.CSSProperties}>
            {children}
          </span>
        )}
      </span>
      {SPARKLES.slice(0, sparkleCount).map(([x, y, size, slot, d], i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="rad-dazzle-spark"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}em`,
            height: `${size}em`,
            color: slot === 'white' ? '#ffffff' : colors[slot],
            animationDelay: `${delay + 1.2 + d}s`,
          }}
        >
          <path d={STAR} fill="currentColor" />
        </svg>
      ))}
      {swoosh ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 600 40"
          preserveAspectRatio="none"
          className="rad-dazzle-swoosh"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" x2="1">
              <stop offset="0" stopColor={colors[0]} />
              <stop offset=".35" stopColor={colors[1]} />
              <stop offset=".68" stopColor={colors[2]} />
              <stop offset="1" stopColor={colors[3]} />
            </linearGradient>
          </defs>
          <path
            d="M8 28C140 8 300 36 420 18S560 10 592 14"
            pathLength={1}
            stroke={`url(#${gradientId})`}
            style={{ filter: `drop-shadow(0 0 6px ${colors[2]})` }}
          />
        </svg>
      ) : null}
    </span>
  );
};
