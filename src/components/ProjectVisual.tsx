"use client";

import { motion } from "framer-motion";
import type { ProjectSlug } from "@/lib/content";

type ProjectVisualProps = {
  slug: ProjectSlug;
  compact?: boolean;
};

const nuNodes = [
  { label: "PROFILE", x: 74, y: 72 },
  { label: "COMMUNITIES", x: 286, y: 46 },
  { label: "MARKETPLACE", x: 76, y: 280 },
  { label: "EVENTS", x: 316, y: 286 },
  { label: "MESSAGING", x: 254, y: 174 },
  { label: "JOBS", x: 552, y: 282 }
];

const nuLinks = [
  [122, 91, 334, 66], [122, 100, 308, 190], [122, 287, 308, 204],
  [368, 72, 341, 174], [369, 297, 341, 204], [300, 190, 122, 287],
  [366, 191, 592, 282], [368, 188, 596, 72]
];

function DiagramFrame({ children, label, compact }: { children: React.ReactNode; label: string; compact?: boolean }) {
  return (
    <motion.div
      role="img"
      aria-label={label}
      className={`visual-field ${compact ? "visual-field-compact" : ""}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function NuAtriumVisual({ compact }: { compact?: boolean }) {
  return (
    <DiagramFrame compact={compact} label="A connected system diagram for NU Atrium showing profiles, communities, marketplace, events, messaging, and jobs.">
      <div className="visual-kicker">Community operating layer / 01</div>
      <svg viewBox="0 0 680 360" className="diagram-svg" aria-hidden="true">
        <g className="diagram-links">
          {nuLinks.map(([x1, y1, x2, y2], index) => <line key={`${x1}-${y1}-${index}`} x1={x1} y1={y1} x2={x2} y2={y2} />)}
        </g>
        <circle className="diagram-core" cx="334" cy="190" r="31" />
        <text className="diagram-core-label" x="334" y="187" textAnchor="middle">NU</text>
        <text className="diagram-core-label" x="334" y="202" textAnchor="middle">ATRIUM</text>
        {nuNodes.map((node) => (
          <g className="diagram-node-svg" key={node.label} transform={`translate(${node.x} ${node.y})`}>
            <rect width={node.label === "COMMUNITIES" || node.label === "MARKETPLACE" ? 122 : 106} height="38" rx="0" />
            <text x="12" y="24">{node.label}</text>
          </g>
        ))}
      </svg>
      <div className="visual-footer"><span>Identity</span><span>Activity</span><span>Utility</span></div>
    </DiagramFrame>
  );
}

function InvitationVisual({ compact }: { compact?: boolean }) {
  const steps = ["Create", "Customize", "Preview", "Publish", "RSVP"];
  return (
    <DiagramFrame compact={compact} label="A product flow diagram for the Invitation Platform from create through customize, preview, publish, and RSVP.">
      <div className="visual-kicker">A publishing system / 02</div>
      <div className="flow-visual">
        <div className="flow-axis" aria-hidden="true" />
        {steps.map((step, index) => (
          <div className="flow-step" key={step}>
            <span className="flow-number">0{index + 1}</span>
            <span className="flow-box">{step}</span>
            {index < steps.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <div className="visual-footer"><span>Input</span><span>Control</span><span>Published state</span></div>
    </DiagramFrame>
  );
}

function QuantVisual({ compact }: { compact?: boolean }) {
  const steps = ["Market data", "Analysis", "Agent", "Risk", "Execution", "Evaluation"];
  return (
    <DiagramFrame compact={compact} label="A conceptual pipeline for the Quant-Trade AI Agent from market data to analysis, agent reasoning, risk, execution, and evaluation.">
      <div className="visual-kicker">Experimental system direction / 03</div>
      <div className="quant-visual">
        {steps.map((step, index) => (
          <div className={`quant-step ${step === "Agent" ? "quant-step-active" : ""}`} key={step}>
            <span className="flow-number">0{index + 1}</span>
            <span>{step}</span>
            {index < steps.length - 1 && <span className="quant-arrow" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <div className="development-stamp">IN DEVELOPMENT</div>
      <div className="visual-footer"><span>Direction, not evidence</span><span>No live claims</span></div>
    </DiagramFrame>
  );
}

export function ProjectVisual({ slug, compact = false }: ProjectVisualProps) {
  if (slug === "nu-atrium") return <NuAtriumVisual compact={compact} />;
  if (slug === "invitation-platform") return <InvitationVisual compact={compact} />;
  return <QuantVisual compact={compact} />;
}

export default ProjectVisual;
