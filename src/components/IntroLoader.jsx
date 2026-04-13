import { motion, AnimatePresence } from "framer-motion";
import introVideo from "../assets/intro.mp4";

function IntroLoader({ isVisible, onVideoEnd }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <motion.video
            src={introVideo}
            autoPlay
            muted
            playsInline
            onEnded={onVideoEnd}
            initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[520px] max-w-[92vw] select-none sm:w-[680px] md:w-[860px] lg:w-[1000px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroLoader;