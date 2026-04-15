import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import video from "../assets/kodasyn-bg.mp4";

function HeroSection({ onNavigate }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black pt-20 md:pt-24"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] xl:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1 flex justify-center lg:justify-start"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[300px] object-contain sm:max-w-[380px] md:max-w-[500px] lg:max-w-[590px] xl:max-w-[680px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="order-2 flex justify-center lg:justify-start"
          >
            <div className="max-w-[620px] text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-300 backdrop-blur-md sm:text-xs"
              >
                Tecnologia, design e inovação
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 text-4xl font-bold leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]"
                style={{ fontFamily: "var(--font-tech)" }}
              >
                Soluções digitais
                <span className="hero-title-shine mt-3 block bg-clip-text text-transparent">
                  que destacam a sua marca
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 max-w-[560px] text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-[17px]"
              >
                A KodaSyn cria sites, sistemas e experiências digitais com
                visual moderno, performance e posicionamento profissional para
                empresas que querem crescer com mais força no digital.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate?.(3)}
                  className="rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(34,211,238,0.18)] transition duration-300 sm:px-8 sm:text-base"
                >
                  Solicitar projeto
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate?.(2)}
                  className="rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-cyan-400/40 hover:bg-white/10 sm:px-8 sm:text-base"
                >
                  Ver serviços
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto mt-8 h-px w-full max-w-[500px] bg-gradient-to-r from-cyan-400/40 via-white/10 to-transparent lg:mx-0"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

export default HeroSection;
