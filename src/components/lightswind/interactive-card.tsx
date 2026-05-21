import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { FiDownload } from "react-icons/fi";

export const InteractiveCard = ({
  children,
  className,
  InteractiveColor = "#07eae6ff",
  borderRadius = "32px",
  rotationFactor = 0.45,
  transitionDuration = 0.35,
  transitionEasing = "easeOut",
  tailwindBgClass = "bg-white",
  showDownloadIcon = true,
}: {
  children: React.ReactNode;
  className?: string;
  InteractiveColor?: string;
  borderRadius?: string;
  rotationFactor?: number;
  transitionDuration?: number;
  transitionEasing?: string;
  tailwindBgClass?: string;
  showDownloadIcon?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1], [
    rotationFactor * 14,
    -rotationFactor * 14,
  ]);
  const rotateY = useTransform(x, [0, 1], [
    -rotationFactor * 14,
    rotationFactor * 14,
  ]);

  const handlePointerMove = (e: React.PointerEvent) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    x.set((e.clientX - bounds.left) / bounds.width);
    y.set((e.clientY - bounds.top) / bounds.height);
  };

  const xPct = useTransform(x, (v) => `${v * 100}%`);
  const yPct = useTransform(y, (v) => `${v * 100}%`);

  const interactiveBg = useMotionTemplate`
    radial-gradient(
      circle at ${xPct} ${yPct},
      ${InteractiveColor} 0%,
      ${InteractiveColor}55 35%,
      transparent 75%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      style={{ perspective: 1200, borderRadius }}
      className="relative w-[320px] aspect-[17/21]"
    >
      {/* Halo */}
      <motion.div
        className="absolute inset-0 rounded-3xl blur-2xl"
        style={{
          background: InteractiveColor,
          opacity: isHovered ? 0.35 : 0,
        }}
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transition: `transform ${transitionDuration}s ${transitionEasing}`,
        }}
        className="relative w-full h-full rounded-3xl border border-gray-200 shadow-xl overflow-hidden bg-white"
      >
        {/* Interactive gradient */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: interactiveBg,
            opacity: isHovered ? 0.9 : 0,
          }}
        />

        {/* Optional download icon */}
        {showDownloadIcon && (
          <motion.div
            className="absolute top-4 right-4 z-20 text-gray-900"
            initial={{ opacity: 0, y: -6 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -6,
            }}
          >
            <FiDownload size={20} />
          </motion.div>
        )}

        {/* Content */}
        <div
          className={cn(
            "relative z-10 w-full h-full flex items-center justify-center p-10",
            tailwindBgClass,
            className
          )}
          style={{ borderRadius }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};