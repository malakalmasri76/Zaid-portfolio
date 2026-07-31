import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface PreloaderProps {
  /** Called once the exit animation has finished — mount your app/router after this. */
  onFinish?: () => void;
  /** Minimum time the loader stays on screen, in ms. Keeps it from flashing on fast loads. */
  minDuration?: number;
}

export default function Preloader({ onFinish, minDuration = 2200 }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const start = performance.now();

    // Progress climbs unevenly, like real loading, then eases to 100.
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / minDuration, 1);
      // ease-out curve so the last few percent feel deliberate, not instant
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setVisible(false);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minDuration]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: reduceMotion ? 0 : 1,
            y: reduceMotion ? 0 : "-100%",
          }}
          transition={{ duration: reduceMotion ? 0.4 : 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-50"
        >
          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.3 : 1, ease: "easeOut" }}
            className="w-64 sm:w-80"
          >
            <img
              src="/logo-full.png"
              alt="Zaid Almasri, Architect"
              className="w-full h-auto select-none"
              draggable={false}
            />
          </motion.div>

          {/* Progress rule + counter, echoing the ARCHITECT divider in the mark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.5 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="relative h-px w-56 sm:w-64 bg-stone-200 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gold-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <p className="text-xs tracking-widest2 uppercase text-stone-400 tabular-nums">
              <span className="text-gold-600">{progress}</span>
              <span className="mx-1">/</span>100
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}