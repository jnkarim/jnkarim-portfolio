const WORDS = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "EXPRESS.JS",
  "MONGODB",
  "YOLOv8 / v11",
  "TAILWIND CSS",
  "POSTGRESQL",
  "PYTORCH",
];

export default function Marquee() {
  const loop = [...WORDS, ...WORDS];
  return (
    <div className="border-hard my-10 overflow-hidden border-y-[1.5px] border-x-0 bg-ink py-3">
      <div className="animate-marquee flex w-max gap-8">
        {loop.map((w, i) => (
          <span
            key={i}
            className="text-mono-label flex items-center gap-8 text-sm font-semibold uppercase text-cream"
          >
            {w}
            <span className="text-neon">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
