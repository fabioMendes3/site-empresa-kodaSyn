import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "./HeroSection";
import KodaSynExperienceSection from "../components/KodaSynExperienceSection";

const TRANSITION_DURATION = 0.9;
const SCROLL_THRESHOLD = 35;

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef(0);

  const sections = [
    {
      id: "hero",
      component: <Hero />,
    },
    {
      id: "experience",
      component: <KodaSynExperienceSection />,
    },
  ];

  const changeSection = useCallback(
    (direction) => {
      if (isAnimatingRef.current) return;

      setActiveSection((current) => {
        const nextIndex =
          direction > 0
            ? Math.min(current + 1, sections.length - 1)
            : Math.max(current - 1, 0);

        if (nextIndex === current) return current;

        isAnimatingRef.current = true;

        window.setTimeout(() => {
          isAnimatingRef.current = false;
        }, TRANSITION_DURATION * 1000 + 120);

        return nextIndex;
      });
    },
    [sections.length]
  );

  useEffect(() => {
    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < SCROLL_THRESHOLD) return;

      event.preventDefault();

      if (event.deltaY > 0) {
        changeSection(1);
      } else {
        changeSection(-1);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        changeSection(1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        changeSection(-1);
      }
    };

    const handleTouchStart = (event) => {
      touchStartYRef.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      const endY = event.changedTouches[0].clientY;
      const deltaY = touchStartYRef.current - endY;

      if (Math.abs(deltaY) < 50) return;

      if (deltaY > 0) {
        changeSection(1);
      } else {
        changeSection(-1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [changeSection]);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.section
          key={sections[activeSection].id}
          initial={{ opacity: 0, scale: 1.03, y: 70, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.98, y: -70, filter: "blur(12px)" }}
          transition={{
            duration: TRANSITION_DURATION,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-screen w-full"
        >
          {sections[activeSection].component}
        </motion.section>
      </AnimatePresence>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3">
        {sections.map((section, index) => (
          <span
            key={section.id}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === activeSection
                ? "w-10 bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]"
                : "w-2.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </main>
  );
}