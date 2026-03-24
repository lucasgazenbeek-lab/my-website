export default function AuroraBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 — warm scarlet, top-left anchor */}
      <div className="aurora-blob aurora-blob-1" />
      {/* Blob 2 — deep crimson, bottom-right anchor */}
      <div className="aurora-blob aurora-blob-2" />
      {/* Blob 3 — mid highlight, centre drift */}
      <div className="aurora-blob aurora-blob-3" />
      {/* Grain texture overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.045 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="aurora-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurora-grain)" />
      </svg>
    </div>
  );
}
