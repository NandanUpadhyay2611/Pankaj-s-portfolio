import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Boxes, 
  Cloud, 
  Binary, 
  Brackets, 
  FileCode2,
  Server
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ICONS = [
  { Icon: Code2, color: '#fbbf24', hoverColor: '#f59e0b' },      // Code
  { Icon: Terminal, color: '#c084fc', hoverColor: '#a855f7' },   // Terminal
  { Icon: Database, color: '#f97316', hoverColor: '#ea580c' },   // Database
  { Icon: Cpu, color: '#06b6d4', hoverColor: '#0891b2' },        // CPU/Hardware
  { Icon: Boxes, color: '#ec4899', hoverColor: '#db2777' },      // Components
  { Icon: Cloud, color: '#64748b', hoverColor: '#475569' },      // Cloud
  { Icon: Binary, color: '#22c55e', hoverColor: '#16a34a' },     // Binary/Data
  { Icon: Brackets, color: '#eab308', hoverColor: '#ca8a04' },   // Code Structure
  { Icon: FileCode2, color: '#8b5cf6', hoverColor: '#7c3aed' },  // Code Files
  { Icon: Server, color: '#ef4444', hoverColor: '#dc2626' },     // Server
];

interface FloatingIcon {
  id: number;
  x: number;
  y: number;
  Icon: any;
  color: string;
  hoverColor: string;
  scale: number;
  rotation: number;
}

export default function FloatingSocials() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    // Create multiple instances of each icon
    const newIcons = Array.from({ length: 20 }, (_, index) => {
      const iconData = ICONS[index % ICONS.length];
      return {
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        Icon: iconData.Icon,
        color: iconData.color,
        hoverColor: iconData.hoverColor,
        scale: 0.6 + Math.random() * 0.4,
        rotation: Math.random() * 360,
      };
    });
    setIcons(newIcons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute cursor-pointer"
          style={{
            filter: hoveredId === icon.id 
              ? 'drop-shadow(0 0 8px currentColor) brightness(1.2)'
              : 'none',
          }}
          initial={{
            x: `${icon.x}vw`,
            y: `${icon.y}vh`,
            scale: icon.scale,
            rotate: icon.rotation,
            opacity: 0.3,
          }}
          animate={{
            x: [
              `${icon.x}vw`,
              `${(icon.x + 20) % 100}vw`,
              `${(icon.x - 20 + 100) % 100}vw`,
              `${icon.x}vw`,
            ],
            y: [
              `${icon.y}vh`,
              `${(icon.y + 20) % 100}vh`,
              `${(icon.y - 20 + 100) % 100}vh`,
              `${icon.y}vh`,
            ],
            rotate: [icon.rotation, icon.rotation + 180, icon.rotation + 360],
          }}
          transition={{
            duration: 25 + Math.random() * 35,
            repeat: Infinity,
            ease: "linear",
          }}
          onHoverStart={() => setHoveredId(icon.id)}
          onHoverEnd={() => setHoveredId(null)}
          whileHover={{
            scale: icon.scale * 1.3,
            opacity: 0.9,
            transition: { duration: 0.2 },
          }}
        >
          <icon.Icon
            size={28}
            style={{ 
              color: hoveredId === icon.id ? icon.hoverColor : icon.color,
              transition: 'color 0.3s ease',
            }}
            className="pointer-events-auto"
          />
        </motion.div>
      ))}
    </div>
  );
} 