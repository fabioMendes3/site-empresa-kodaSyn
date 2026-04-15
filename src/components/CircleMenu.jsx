import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useMemo, useState } from "react";

const MENU_SIZE = 280;
const CENTER_BUTTON_SIZE = 74;
const ITEM_SIZE = 58;
const RADIUS = 98;

const menuItems = [
  {
    label: "Início",
    section: 0,
    angle: -90,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
      </svg>
    ),
  },
  {
    label: "Experiência",
    section: 1,
    angle: 0,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    label: "Serviços",
    section: 2,
    angle: 180,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="13" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Contato",
    section: 3,
    angle: 90,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

function polarToCartesian(angle, radius) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

function CircleMenu({ activeSection = 0, transitionKey = 0, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const itemsWithPosition = useMemo(
    () =>
      menuItems.map((item) => ({
        ...item,
        ...polarToCartesian(item.angle, RADIUS),
      })),
    []
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - MENU_SIZE / 2);
    mouseY.set(e.clientY - rect.top - MENU_SIZE / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleNavigate = (section) => {
    onNavigate?.(section);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex flex-col items-end md:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 flex w-[188px] flex-col gap-2 rounded-[8px] border border-cyan-300/20 bg-[#07111d]/95 p-2 shadow-[0_0_28px_rgba(34,211,238,0.18)] backdrop-blur-xl"
            >
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.section;

                return (
                  <motion.button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavigate(item.section)}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{
                      duration: 0.18,
                      delay: index * 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`flex min-h-11 items-center gap-3 rounded-[8px] border px-3 text-left transition ${
                      isActive
                        ? "border-cyan-300/55 bg-cyan-400/18 text-cyan-50"
                        : "border-white/8 bg-white/[0.03] text-white/82 active:border-cyan-300/40 active:bg-cyan-400/10"
                    }`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-black/30 text-cyan-200 [&_svg]:h-4 [&_svg]:w-4">
                      {item.icon}
                    </span>
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                      style={{ fontFamily: "var(--font-tech)" }}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{ scale: 0.94 }}
          animate={{
            boxShadow: isOpen
              ? "0 0 34px rgba(34,211,238,0.48)"
              : "0 0 22px rgba(34,211,238,0.28)",
          }}
          transition={{ duration: 0.28 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-400 text-black"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </motion.button>
      </div>

      <div
        className="relative hidden md:block"
        style={{ width: MENU_SIZE, height: MENU_SIZE }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
      <motion.div
        className="absolute left-1/2 top-1/2 z-0 h-[140px] w-[140px] rounded-full bg-cyan-400/10 blur-3xl"
        style={{
          x: glowX,
          y: glowY,
          marginLeft: -70,
          marginTop: -70,
        }}
      />

      <AnimatePresence>
        <motion.div
          key={`menu-ripple-${transitionKey}`}
          initial={{ opacity: 0.38, scale: 0.72 }}
          animate={{ opacity: 0, scale: 1.32 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 rounded-full border border-cyan-300/30"
          style={{
            width: 172,
            height: 172,
            marginLeft: -86,
            marginTop: -86,
          }}
        />
      </AnimatePresence>

      <motion.div
        animate={{
          opacity: activeSection === 1 ? 0.28 : 0.18,
          scale: activeSection === 1 ? 1.02 : 1,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 z-0 rounded-full border border-cyan-400/18"
        style={{
          width: 188,
          height: 188,
          marginLeft: -94,
          marginTop: -94,
          boxShadow:
            "0 0 24px rgba(34,211,238,0.08), inset 0 0 22px rgba(34,211,238,0.05)",
        }}
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 z-0 rounded-full border-t border-cyan-300/25 border-r border-transparent border-b border-transparent border-l border-transparent"
        style={{
          width: 216,
          height: 216,
          marginLeft: -108,
          marginTop: -108,
        }}
      />

      <AnimatePresence>
        <motion.div
          key={`core-pulse-${transitionKey}`}
          initial={{ opacity: 0.15, scale: 0.78 }}
          animate={{ opacity: 0.42, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[90px] w-[90px] rounded-full bg-cyan-400/10 blur-md"
          style={{
            marginLeft: -45,
            marginTop: -45,
          }}
        />
      </AnimatePresence>

      <motion.div
        animate={{
          opacity: activeSection === 1 ? 0.85 : 0.45,
          boxShadow:
            activeSection === 1
              ? "0 0 34px rgba(34,211,238,0.24)"
              : "0 0 14px rgba(34,211,238,0.08)",
        }}
        transition={{ duration: 0.4 }}
        className="absolute left-1/2 top-1/2 z-0 h-[90px] w-[90px] rounded-full border border-cyan-300/20 bg-cyan-400/[0.06] blur-md"
        style={{
          marginLeft: -45,
          marginTop: -45,
        }}
      />

      <AnimatePresence>
        {isOpen &&
          itemsWithPosition.map((item, index) => {
            const length = Math.sqrt(item.x * item.x + item.y * item.y);
            const angle = Math.atan2(item.y, item.x) * (180 / Math.PI);

            return (
              <motion.div
                key={`line-${item.label}`}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 0.28, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.22, delay: index * 0.04 }}
                className="absolute left-1/2 top-1/2 z-10 h-[1px] origin-left bg-gradient-to-r from-cyan-300/40 to-transparent"
                style={{
                  width: `${length - 54}px`,
                  transform: `translate(0, -50%) rotate(${angle}deg)`,
                }}
              />
            );
          })}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen &&
          itemsWithPosition.map((item, index) => {
            const isActive = activeSection === item.section;

            return (
              <motion.button
                key={item.label}
                type="button"
                onClick={() => handleNavigate(item.section)}
                initial={{ opacity: 0, scale: 0.45, x: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  scale: isActive ? [1, 1.08, 1.04] : 1,
                  x: item.x,
                  y: item.y,
                }}
                exit={{ opacity: 0, scale: 0.45, x: 0, y: 0 }}
                transition={{
                  duration: 0.34,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 top-1/2 z-20"
                style={{
                  marginLeft: -(ITEM_SIZE / 2),
                  marginTop: -(ITEM_SIZE / 2),
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      boxShadow: isActive
                        ? "0 0 34px rgba(34,211,238,0.28)"
                        : "0 0 22px rgba(34,211,238,0.12)",
                      borderColor: isActive
                        ? "rgba(103,232,249,0.9)"
                        : "rgba(34,211,238,0.4)",
                    }}
                    transition={{ duration: 0.35 }}
                    className={`flex h-[58px] w-[58px] items-center justify-center rounded-full border backdrop-blur-md transition duration-300 hover:scale-110 [&_svg]:h-5 [&_svg]:w-5 ${isActive
                      ? "bg-cyan-400/20 text-cyan-100"
                      : "bg-[#07111d]/95 text-cyan-200 hover:border-cyan-300 hover:text-cyan-100 hover:shadow-[0_0_34px_rgba(34,211,238,0.26)]"
                      }`}
                  >
                    {item.icon}
                  </motion.div>

                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0.95,
                      y: isActive ? -1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`mt-2 text-[11px] font-semibold tracking-[0.06em] ${isActive ? "text-cyan-200" : "text-white/95"
                      }`}
                    style={{ fontFamily: "var(--font-tech)" }}
                  >
                    {item.label}
                  </motion.span>
                </div>
              </motion.button>
            );
          })}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isOpen
            ? "0 0 48px rgba(34,211,238,0.55), 0 0 90px rgba(34,211,238,0.22)"
            : activeSection === 1
              ? "0 0 34px rgba(34,211,238,0.34)"
              : "0 0 26px rgba(34,211,238,0.28)",
        }}
        transition={{ duration: 0.4 }}
        className="absolute left-1/2 top-1/2 z-30 flex flex-col items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400 text-black"
        style={{
          width: CENTER_BUTTON_SIZE,
          height: CENTER_BUTTON_SIZE,
          marginLeft: -(CENTER_BUTTON_SIZE / 2),
          marginTop: -(CENTER_BUTTON_SIZE / 2),
        }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28 }}
          className="text-[22px] leading-none"
        >
          {isOpen ? "×" : "☰"}
        </motion.span>

        <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-black/90">
          Menu
        </span>
      </motion.button>
      </div>
    </>
  );
}

export default CircleMenu;
