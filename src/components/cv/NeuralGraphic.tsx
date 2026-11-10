import { useRef } from "react";

/** Decorative software architecture motif; no canvas, timers or animation loop. */
export function NeuralGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="neural-graphic no-print" ref={ref} aria-hidden="true" onPointerMove={(event) => {
      if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      ref.current?.style.setProperty("--neural-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 16}px`);
      ref.current?.style.setProperty("--neural-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 16}px`);
    }} onPointerLeave={() => {
      ref.current?.style.setProperty("--neural-x", "0px");
      ref.current?.style.setProperty("--neural-y", "0px");
    }}>
      <svg viewBox="0 0 420 420" fill="none" focusable="false">
        <circle className="neural-orbit" cx="210" cy="210" r="174" />
        <circle className="neural-orbit" cx="210" cy="210" r="124" />
        <path className="neural-grid" d="M0 210H420M210 0V420M62 62L358 358M62 358L358 62" />
        <g className="neural-core">
          <path className="neural-wire" pathLength="1" d="M86 126L210 66L334 126L334 286L210 354L86 286ZM86 126L210 210L334 126M210 66V210L210 354M86 286L210 210L334 286" />
          <path className="neural-inner" d="M148 168L210 136L272 168V246L210 280L148 246ZM148 168L210 210L272 168M210 210V280" />
          {[[86, 126], [210, 66], [334, 126], [334, 286], [210, 354], [86, 286], [210, 210]].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}><circle className="neural-node-halo" cx={cx} cy={cy} r="12" /><circle className="neural-node" cx={cx} cy={cy} r="4" /></g>
          ))}
        </g>
        <path className="neural-ticks" d="M204 24H216M204 396H216M24 204V216M396 204V216" />
      </svg>
      <span className="neural-coordinate">[ 01 — 03 ]</span>
    </div>
  );
}
