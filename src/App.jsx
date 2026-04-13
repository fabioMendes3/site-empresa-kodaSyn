import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntroLoader from "./components/IntroLoader";
import CircleMenu from "./components/CircleMenu";
import KodaSynExperienceSection from "./components/KodaSynExperienceSection";
import ServicesSection from "./components/ServicesSection";
import AboutContactSection from "./components/AboutContactSection";

const SITE_ENTRY_DURATION = 1.1;
const SECTION_TRANSITION_DURATION = 0.95;
const SCROLL_THRESHOLD = 35;
const LAST_SECTION_INDEX = 3;

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [TransitionKey, setSectionTransitionKey] = useState(0);

  const isSectionAnimatingRef = useRef(false);
  const touchStartYRef = useRef(0);

  const goToSection = useCallback(
    (sectionIndex) => {
      if (showIntro) return;
      if (isSectionAnimatingRef.current) return;

      setActiveSection((current) => {
        const nextIndex = Math.max(0, Math.min(sectionIndex, LAST_SECTION_INDEX));

        if (nextIndex === current) return current;

        isSectionAnimatingRef.current = true;
        setSectionTransitionKey((prev) => prev + 1);

        window.setTimeout(() => {
          isSectionAnimatingRef.current = false;
        }, SECTION_TRANSITION_DURATION * 1000 + 120);

        return nextIndex;
      });
    },
    [showIntro]
  );

  const changeSection = useCallback(
    (direction) => {
      if (showIntro) return;
      if (isSectionAnimatingRef.current) return;

      setActiveSection((current) => {
        const nextIndex =
          direction > 0
            ? Math.min(current + 1, LAST_SECTION_INDEX)
            : Math.max(current - 1, 0);

        if (nextIndex === current) return current;

        isSectionAnimatingRef.current = true;
        setSectionTransitionKey((prev) => prev + 1);

        window.setTimeout(() => {
          isSectionAnimatingRef.current = false;
        }, SECTION_TRANSITION_DURATION * 1000 + 120);

        return nextIndex;
      });
    },
    [showIntro]
  );

  const sections = [
    {
      id: "hero",
      component: <HeroSection onNavigate={goToSection} />,
    },
    {
      id: "experience",
      component: <KodaSynExperienceSection />,
    },
    {
      id: "services",
      component: <ServicesSection />,
    },
    {
      id: "contact",
      component: <AboutContactSection />,
    },
  ];

  useEffect(() => {
    if (showIntro) return;

    const isTypingTarget = (target) => {
      if (!(target instanceof HTMLElement)) return false;

      const tagName = target.tagName;

      return (
        target.isContentEditable ||
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT"
      );
    };

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
      if (isTypingTarget(event.target)) return;

      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
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
  }, [showIntro, changeSection]);

  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroLoader
            key="intro"
            isVisible={showIntro}
            onVideoEnd={() => setShowIntro(false)}
          />
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0, y: 24, scale: 1.01, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: SITE_ENTRY_DURATION, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-screen w-full overflow-hidden"
          >
            {activeSection === 0 && (
              <div className="absolute inset-x-0 top-0 z-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`navbar-${activeSection}`}
                    initial={{ opacity: 0, y: -30, scale: 0.98, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <Navbar
                      activeSection={activeSection}
                      transitionKey={TransitionKey}
                      onNavigate={goToSection}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            <div className="absolute right-8 top-28 z-50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`circlemenu-${activeSection}`}
                  initial={{ opacity: 0, x: 40, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -30, scale: 0.92, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CircleMenu
                    activeSection={activeSection}
                    transitionKey={TransitionKey}
                    onNavigate={goToSection}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <main className="relative h-screen w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.section
                  key={sections[activeSection].id}
                  initial={{ opacity: 0, y: 70, scale: 1.03, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -70, scale: 0.985, filter: "blur(12px)" }}
                  transition={{
                    duration: SECTION_TRANSITION_DURATION,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full w-full"
                >
                  {sections[activeSection].component}
                </motion.section>
              </AnimatePresence>

              <div className="pointer-events-none absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3">
                {sections.map((section, index) => (
                  <span
                    key={section.id}
                    className={`h-2.5 rounded-full transition-all duration-500 ${index === activeSection
                      ? "w-10 bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]"
                      : "w-2.5 bg-white/30"
                      }`}
                  />
                ))}
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
