import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

type VideoModalProps = {
  src: string;
  label: string;
  open: boolean;
  onClose: () => void;
};

export function VideoModal({ src, label, open, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'auto';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-white hover:text-black sm:right-8 sm:top-8"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={src}
              className="max-h-[88vh] w-full rounded-lg object-contain shadow-2xl"
              controls
              autoPlay
              loop
              playsInline
              aria-label={label}
            />
            <p className="mt-3 text-center text-sm font-medium text-white/80">
              {label}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
