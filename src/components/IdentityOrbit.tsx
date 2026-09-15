import { useReducedMotion } from "framer-motion";
import {
  IconBrain,
  IconGraph,
  IconWorkflow,
  IconSparkles,
  IconCloud,
  IconLayers,
  IconServer,
  IconEye,
  IconLayout,
} from "@/components/icons";

/**
 * Hero visual — an animated knowledge graph.
 *
 * The core topics of the work are compact icon nodes arranged in a clean,
 * symmetric wheel around a central "AI Architect" hub. Edges carry subtle
 * moving pulses (data flow) so the system feels alive without being busy.
 */

type Topic = {
  id: string;
  label: string;
  Icon: (p: { className?: string }) => JSX.Element;
};

const TOPICS: Topic[] = [
  { id: "genai", label: "GenAI / LLMs", Icon: IconBrain },
  { id: "rag", label: "RAG & GraphRAG", Icon: IconGraph },
  { id: "agents", label: "Agentic AI", Icon: IconWorkflow },
  { id: "prompt", label: "Prompting", Icon: IconSparkles },
  { id: "aws", label: "AWS", Icon: IconCloud },
  { id: "gcp", label: "GCP", Icon: IconLayers },
  { id: "serving", label: "Model Serving", Icon: IconServer },
  { id: "multimodal", label: "Multimodal", Icon: IconEye },
];

const CX = 260;
const CY = 200;
const RADIUS = 112;
const LABEL_OFFSET = 90;

/** Evenly spaced positions around the wheel, starting at the top.
 *  Each node also gets a label anchor pushed radially outward so labels
 *  never collide with neighbouring nodes. */
const positions = TOPICS.map((_, i) => {
  const angle = ((-90 + i * (360 / TOPICS.length)) * Math.PI) / 180;
  const x = CX + RADIUS * Math.cos(angle);
  const y = CY + RADIUS * Math.sin(angle);
  const lx = CX + (RADIUS + LABEL_OFFSET) * Math.cos(angle);
  const ly = CY + (RADIUS + LABEL_OFFSET) * Math.sin(angle);
  return { x, y, lx, ly };
});

export function IdentityOrbit() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center">
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--accent-soft), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Stage: fixed 520:400 aspect so the SVG and the HTML overlay share one coordinate space */}
      <div className="relative aspect-[13/10] w-full max-w-[400px]">
      <svg
        viewBox="0 0 520 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="io-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-bright)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="io-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-bright)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent-bright)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer ring connecting adjacent topics */}
        <circle
          cx={CX}
          cy={CY}
          r={RADIUS}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.7"
        />

        {/* Spokes: hub -> each topic */}
        <g>
          {positions.map((p, i) => (
            <line
              key={`spoke-${i}`}
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="url(#io-edge)"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
        </g>

        {/* Moving pulses — data flowing from the hub out to each topic */}
        {!reduce &&
          positions.map((p, i) => {
            const dur = 2.8 + (i % 3) * 0.5;
            return (
              <circle key={`pulse-${i}`} r="2.4" fill="var(--accent-bright)">
                <animateMotion
                  dur={`${dur}s`}
                  begin={`${i * 0.35}s`}
                  repeatCount="indefinite"
                  path={`M ${CX} ${CY} L ${p.x} ${p.y}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.2;0.8;1"
                  dur={`${dur}s`}
                  begin={`${i * 0.35}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}

        {/* A couple of pulses travelling around the outer ring */}
        {!reduce &&
          [0, 1].map((k) => (
            <circle key={`ring-${k}`} r="2.2" fill="var(--teal)">
              <animateMotion
                dur="12s"
                begin={`${k * 6}s`}
                repeatCount="indefinite"
                path={`M ${CX} ${CY - RADIUS} A ${RADIUS} ${RADIUS} 0 1 1 ${CX - 0.01} ${CY - RADIUS}`}
              />
            </circle>
          ))}

        {/* Hub glow */}
        <circle cx={CX} cy={CY} r="60" fill="url(#io-hub)" />
      </svg>

      {/* ---- Central hub: AI Architect ---- */}
      <div
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        style={{ left: "50%", top: "50%" }}
      >
        <div
          className="grid h-[58px] w-[58px] place-items-center rounded-full ring-1"
          style={{
            background: "var(--card)",
            borderColor: "var(--accent-bright)",
            boxShadow: "0 0 26px -4px var(--accent-glow)",
          }}
        >
          <IconLayout className="h-6 w-6 text-[var(--accent-bright)]" />
        </div>
        <span
          className="mt-1.5 text-[10px] font-semibold tracking-wide"
          style={{ color: "var(--fg)" }}
        >
          AI Architect
        </span>
      </div>

      {/* ---- Topic nodes ---- */}
      {TOPICS.map((t, i) => {
        const p = positions[i];
        return (
          <div key={t.id} className="absolute inset-0">
            {/* Icon node — on the ring */}
            <div
              className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ring-1 ring-inset transition-transform duration-300 hover:scale-110"
              style={{
                left: `${(p.x / 520) * 100}%`,
                top: `${(p.y / 400) * 100}%`,
                background: "var(--card)",
                borderColor: "var(--border-strong)",
                boxShadow: "0 2px 10px -4px rgba(0,0,0,0.4)",
              }}
            >
              <t.Icon className="h-[18px] w-[18px] text-[var(--accent-bright)]" />
            </div>
            {/* Label — pushed radially outward */}
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2 max-w-[68px] text-center text-[9.5px] font-semibold leading-tight"
              style={{
                left: `${(p.lx / 520) * 100}%`,
                top: `${(p.ly / 400) * 100}%`,
                color: "var(--fg-muted)",
              }}
            >
              {t.label}
            </span>
          </div>
        );
      })}
      </div>

      {/* Caption */}
      <p
        className="absolute bottom-2 right-3 text-[11px] italic"
        style={{ color: "var(--fg-subtle)" }}
      >
        The systems I build, connected →
      </p>
    </div>
  );
}
