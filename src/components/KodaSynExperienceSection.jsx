import { useState } from "react";
import { motion } from "framer-motion";
import logoMasc from "../assets/log+masc.png";

function SparklesIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12 3 1.9 4.9L19 10l-5.1 2.1L12 17l-1.9-4.9L5 10l5.1-2.1L12 3Z" />
      <path d="M5 19l.8 2L8 22l-2.2 1L5 25l-.8-2L2 22l2.2-1L5 19Z" />
      <path d="M19 15l1.1 2.7L23 19l-2.9 1.3L19 23l-1.1-2.7L15 19l2.9-1.3L19 15Z" />
    </svg>
  );
}

function Code2Icon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function GlobeIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function CpuIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M17 10h4M17 14h4M3 10h4M3 14h4" />
    </svg>
  );
}

function WorkflowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H15.5" />
      <path d="M18 8.5v7" />
      <path d="M7.7 7.8l8.6 8.6" />
    </svg>
  );
}

function DatabaseIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function Layers3Icon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  );
}

function BlocksIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="8" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

const floatingTexts = [
  { id: 1, label: "</>", top: "10%", left: "8%", size: "text-[28px]" },
  { id: 2, label: "{ }", top: "18%", left: "82%", size: "text-[24px]" },
  { id: 3, label: "UI", top: "74%", left: "12%", size: "text-[18px]" },
  { id: 4, label: "API", top: "14%", left: "58%", size: "text-[18px]" },
  { id: 5, label: "SQL", top: "72%", left: "78%", size: "text-[18px]" },
  { id: 6, label: "[]", top: "56%", left: "6%", size: "text-[22px]" },
  { id: 7, label: "<div>", top: "38%", left: "90%", size: "text-[18px]" },
  { id: 8, label: "()", top: "82%", left: "56%", size: "text-[22px]" },
];

const iconNodes = [
  { id: 1, icon: GlobeIcon, top: "18%", left: "18%" },
  { id: 2, icon: CpuIcon, top: "22%", left: "72%" },
  { id: 3, icon: WorkflowIcon, top: "72%", left: "22%" },
  { id: 4, icon: DatabaseIcon, top: "70%", left: "76%" },
  { id: 5, icon: Layers3Icon, top: "50%", left: "88%" },
  { id: 6, icon: BlocksIcon, top: "48%", left: "10%" },
];

const orbitItems = [
  { id: 1, text: "Websites", angle: 0, distance: 154 },
  { id: 2, text: "Sistemas", angle: 60, distance: 162 },
  { id: 3, text: "UX / UI", angle: 120, distance: 150 },
  { id: 4, text: "Automação", angle: 180, distance: 158 },
  { id: 5, text: "Escala", angle: 240, distance: 162 },
  { id: 6, text: "Performance", angle: 300, distance: 154 },
];

function KodaSynExperienceSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMouse({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const getNormalizedMouse = () => {
    const width = window.innerWidth || 1;
    const height = window.innerHeight || 1;

    return {
      x: (mouse.x - width / 2) / width,
      y: (mouse.y - height / 2) / height,
    };
  };

  const normalizedMouse = getNormalizedMouse();

  return (
    <section
      id="experience"
      onMouseMove={handleMouseMove}
      className="relative h-full overflow-hidden bg-black pt-14 md:pt-16"
    >
      <div className="absolute inset-0 bg-black" />

      <div className="absolute left-3 top-3 z-30 md:left-8 md:top-8">
        <img
          src={logoMasc}
          alt="KodaSyn"
          className="h-[70px] w-[140px] object-contain md:h-[96px] md:w-[192px] xl:h-[108px] xl:w-[216px]"
          draggable={false}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[8%] h-[260px] w-[260px] rounded-full bg-[#25B7F3]/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[12%] h-[320px] w-[320px] rounded-full bg-[#1193E6]/8 blur-[140px]" />
        <div className="absolute bottom-[8%] left-[18%] h-[280px] w-[280px] rounded-full bg-[#0A4FB3]/10 blur-[130px]" />
        <div className="absolute bottom-[6%] right-[14%] h-[300px] w-[300px] rounded-full bg-[#25B7F3]/8 blur-[140px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,147,230,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,147,230,0.035)_1px,transparent_1px)] bg-[size:86px_86px] opacity-20" />

      <div className="absolute inset-0">
        {floatingTexts.map((item, index) => {
          const offsetX = normalizedMouse.x * (16 + index * 2.2);
          const offsetY = normalizedMouse.y * (16 + index * 2.2);

          return (
            <motion.div
              key={item.id}
              animate={{ x: offsetX, y: offsetY }}
              transition={{
                type: "spring",
                stiffness: 48,
                damping: 16,
                mass: 0.9,
              }}
              className={`absolute ${item.size} select-none font-semibold tracking-[0.28em] text-[#25B7F3]/15`}
              style={{
                top: item.top,
                left: item.left,
                textShadow: "0 0 26px rgba(17,147,230,0.18)",
              }}
            >
              {item.label}
            </motion.div>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {iconNodes.map(({ id, icon, top, left }, index) => {
          const Icon = icon;
          const moveX = normalizedMouse.x * (22 + index * 2.8);
          const moveY = normalizedMouse.y * (22 + index * 2.8);

          return (
            <motion.div
              key={id}
              animate={{ x: moveX, y: moveY }}
              transition={{
                type: "spring",
                stiffness: 55,
                damping: 18,
              }}
              className="absolute rounded-[22px] border border-[#1193E6]/18 bg-[#1193E6]/[0.04] p-4 backdrop-blur-md"
              style={{
                top,
                left,
                boxShadow:
                  "0 0 32px rgba(17,147,230,0.10), inset 0 0 18px rgba(17,147,230,0.04)",
              }}
            >
              <Icon className="h-6 w-6 text-[#7FD4FF]/70" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-20 mx-auto h-full max-w-6xl px-5 md:px-8">
        <div className="flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full w-full items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-[280px] w-[280px] rounded-full border border-[#1193E6]/12 lg:h-[330px] lg:w-[330px]"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              className="absolute h-[350px] w-[350px] rounded-full border border-[#0A4FB3]/12 lg:h-[400px] lg:w-[400px]"
            />

            <div className="absolute h-[420px] w-[420px] rounded-full border border-[#1193E6]/[0.05] lg:h-[470px] lg:w-[470px]" />

            {orbitItems.map((item, index) => {
              const angleRad = (item.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * item.distance;
              const y = Math.sin(angleRad) * item.distance;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.78 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.08 }}
                  className="absolute hidden xl:block"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div
                    className="rounded-full border border-[#1193E6]/20 bg-[#1193E6]/[0.05] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#CDEFFF]/80 backdrop-blur-md"
                    style={{
                      boxShadow:
                        "0 0 28px rgba(17,147,230,0.10), inset 0 0 14px rgba(17,147,230,0.04)",
                    }}
                  >
                    {item.text}
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.22 }}
              className="relative z-30 w-full max-w-[540px] rounded-[22px] border border-[#1193E6]/16 bg-[#1193E6]/[0.04] px-5 py-6 text-center backdrop-blur-xl md:px-7 md:py-7"
              style={{
                boxShadow:
                  "0 0 70px rgba(17,147,230,0.10), inset 0 0 30px rgba(17,147,230,0.05)",
              }}
            >
              <div className="mb-4 flex items-center justify-center gap-2.5">
                <div className="rounded-full border border-[#25B7F3]/20 bg-[#1193E6]/[0.10] p-2.5">
                  <SparklesIcon className="h-4 w-4 text-[#9EE4FF]/80" />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A9E4FF]/60 md:text-[11px]">
                  Ecossistema KodaSyn
                </span>
              </div>

              <h2 className="mx-auto max-w-[500px] text-2xl font-semibold leading-[1.12] text-white sm:text-3xl md:text-[34px] xl:text-[38px]">
                Tecnologia que não apenas aparece,
                <span className="block text-[#A9E4FF]/70">
                  mas se move, conecta e performa.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-[500px] text-[13px] leading-6 text-cyan-50/70 md:text-[15px]">
                A KodaSyn desenvolve experiências digitais com presença visual,
                inteligência estrutural e acabamento moderno. Cada projeto é
                pensado para transmitir valor, fortalecer a marca e transformar
                tecnologia em resultado real.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <div className="rounded-full border border-[#1193E6]/14 bg-[#1193E6]/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#D6F3FF]/70 md:text-[11px]">
                  Design estratégico
                </div>

                <div className="rounded-full border border-[#1193E6]/14 bg-[#1193E6]/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#D6F3FF]/70 md:text-[11px]">
                  Arquitetura moderna
                </div>

                <div className="rounded-full border border-[#1193E6]/14 bg-[#1193E6]/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#D6F3FF]/70 md:text-[11px]">
                  Presença premium
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-full border border-[#1193E6]/14 bg-[#1193E6]/[0.05] px-4 py-2 text-xs text-[#D6F3FF]/65">
                  <SparklesIcon className="h-4 w-4" />
                  Role para continuar explorando
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.35 }}
              className="absolute"
            >
              <div className="h-[160px] w-[160px] rounded-full bg-[#1193E6]/[0.05] blur-[60px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.45 }}
              className="absolute bottom-[14%] right-[8%] hidden rounded-[18px] border border-[#1193E6]/14 bg-[#1193E6]/[0.05] px-4 py-3 backdrop-blur-md 2xl:block"
              style={{
                boxShadow:
                  "0 0 30px rgba(17,147,230,0.06), inset 0 0 15px rgba(17,147,230,0.03)",
              }}
            >
              <div className="flex items-center gap-3">
                <Code2Icon className="h-5 w-5 text-[#B6E9FF]/75" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#A9E4FF]/50">
                    Estrutura
                  </p>
                  <p className="mt-1 text-sm text-cyan-50/80">
                    Visual, lógica e escalabilidade
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.55 }}
              className="absolute left-[8%] top-[20%] hidden rounded-[18px] border border-[#1193E6]/14 bg-[#1193E6]/[0.05] px-4 py-3 backdrop-blur-md 2xl:block"
              style={{
                boxShadow:
                  "0 0 30px rgba(17,147,230,0.06), inset 0 0 15px rgba(17,147,230,0.03)",
              }}
            >
              <div className="flex items-center gap-3">
                <SparklesIcon className="h-5 w-5 text-[#B6E9FF]/75" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#A9E4FF]/50">
                    Resultado
                  </p>
                  <p className="mt-1 text-sm text-cyan-50/80">
                    Experiência digital marcante
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default KodaSynExperienceSection;
