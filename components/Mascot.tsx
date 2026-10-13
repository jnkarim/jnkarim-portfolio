type Props = {
  className?: string;
};

/**
 * Logo mark: a JK monogram set inside a bracket motif — a nod to code
 * syntax ( < /> ) rendered as a clean geometric badge instead of a
 * cartoon avatar.
 */
export default function Mascot({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="58" fill="var(--neon)" stroke="var(--ink)" strokeWidth="2.5" />

      {/* corner brackets, code-syntax motif */}
      <path
        d="M34 38 L24 38 L24 82 L34 82"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M86 38 L96 38 L96 82 L86 82"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* JK monogram */}
      <g fill="var(--ink)">
        {/* J */}
        <path d="M50 40 H58 V70 C58 78 53 82 45 82 V75 C49 75 50 73 50 70 Z" />
        {/* K */}
        <path d="M64 40 H72 V58 L84 40 H93 L79 60 L94 82 H85 L72 63 V82 H64 Z" />
      </g>

      {/* baseline accent dot */}
      <circle cx="60" cy="92" r="3" fill="var(--ink)" />
    </svg>
  );
}