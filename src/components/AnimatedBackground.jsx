import { motion } from "framer-motion";

const farParticles = Array.from({ length: 160 }, (_, i) => ({
  id: `far-${i}`,
  size: Math.random() * 1.8 + 0.4,
  top: Math.random() * 100,
  left: Math.random() * 100,
  opacity: Math.random() * 0.35 + 0.18,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 2,
}));

const midParticles = Array.from({ length: 130 }, (_, i) => ({
  id: `mid-${i}`,
  size: Math.random() * 2.4 + 0.8,
  top: Math.random() * 100,
  left: Math.random() * 100,
  opacity: Math.random() * 0.5 + 0.28,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
}));

const frontParticles = Array.from({ length: 110 }, (_, i) => ({
  id: `front-${i}`,
  size: Math.random() * 3.2 + 1.1,
  top: Math.random() * 100,
  left: Math.random() * 100,
  opacity: Math.random() * 0.7 + 0.38,
  duration: Math.random() * 2.2 + 1.5,
  delay: Math.random() * 1.5,
}));

function ParticleLayer({ particles, glow = false, zIndex = 0 }) {
  return (
    <div className="absolute inset-0" style={{ zIndex }}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: p.opacity,
            boxShadow: glow
              ? "0 0 14px rgba(255,255,255,0.95)"
              : "0 0 6px rgba(255,255,255,0.45)",
          }}
          animate={{
            opacity: [p.opacity * 0.2, p.opacity, p.opacity * 0.25],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <ParticleLayer particles={farParticles} zIndex={1} />
      <ParticleLayer particles={midParticles} zIndex={2} />
      <ParticleLayer particles={frontParticles} glow zIndex={3} />

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}

export default AnimatedBackground;