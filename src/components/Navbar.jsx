import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

function Navbar({ activeSection = 0, transitionKey = 0, onNavigate }) {
  const isExperience = activeSection === 1;

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1880px] items-center justify-between px-6 pr-10 pt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={transitionKey}
            initial={{ opacity: 0, y: -18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="contents"
          >
            <motion.button
              type="button"
              onClick={() => onNavigate?.(0)}
              className="flex items-center"
            >
              <motion.img
                src={logo}
                alt="KodaSyn"
                draggable={false}
                animate={{
                  filter: isExperience
                    ? "drop-shadow(0 0 18px rgba(34,211,238,0.22))"
                    : "drop-shadow(0 0 0px rgba(34,211,238,0))",
                  scale: isExperience ? 1.015 : 1,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-[100px] w-auto object-contain sm:h-[120px] md:h-[140px]"
              />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => onNavigate?.(3)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                scale: isExperience ? 0.985 : 1,
                boxShadow: isExperience
                  ? "0 0 34px rgba(34,211,238,0.32)"
                  : "0 0 24px rgba(34,211,238,0.22)",
              }}
              transition={{
                scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                boxShadow: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-300/45 bg-cyan-400 px-7 py-3 text-sm font-bold text-black transition duration-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.42)] sm:px-8 sm:py-3.5 sm:text-base"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute -inset-[1px] rounded-full border border-white/20 opacity-60" />
              <span className="relative z-10 tracking-[0.08em]">Fale conosco</span>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        <motion.div
          key={`nav-glow-${transitionKey}`}
          initial={{ opacity: 0.0, scaleX: 0.92 }}
          animate={{ opacity: 0.32, scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-1/2 top-4 h-24 w-[82%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        />
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
