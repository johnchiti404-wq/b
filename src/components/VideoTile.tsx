import { useState, useRef } from 'react';
import { Video, Play, CircleAlert as AlertCircle } from 'lucide-react';
import { VideoModal } from './VideoModal';

type VideoTileProps = {
  src: string;
  label: string;
  className?: string;
  videoClassName?: string;
  showLabel?: boolean;
};

export function VideoTile({
  src,
  label,
  className = '',
  videoClassName = '',
  showLabel = true,
}: VideoTileProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div
        className={`group relative cursor-pointer overflow-hidden bg-gray-900 ${className}`}
        onClick={() => setModalOpen(true)}
      >
        {!error && (
          <video
            ref={videoRef}
            src={src}
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${videoClassName}`}
            loop
            muted
            playsInline
            autoPlay
            preload="metadata"
            aria-label={label}
            onLoadedData={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        )}

        {/* Loading / preview state */}
        {!loaded && !error && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-900/80 text-white/60">
            <Video className="h-10 w-10 animate-pulse" />
            {showLabel && (
              <span className="text-xs font-medium tracking-wide uppercase">
                {label}
              </span>
            )}
          </div>
        )}

        {/* Error fallback */}
        {error && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-900/90 text-white/50">
            <AlertCircle className="h-8 w-8" />
            {showLabel && (
              <span className="text-xs font-medium tracking-wide uppercase">
                {label}
              </span>
            )}
            <span className="text-[10px] text-white/30">Tap to try again</span>
          </div>
        )}

        {/* Play overlay on hover */}
        {loaded && !error && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <Play className="h-7 w-7 fill-white text-white" />
            </div>
          </div>
        )}

        {/* Label badge */}
        {showLabel && loaded && !error && (
          <div className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
            {label}
          </div>
        )}
      </div>

      <VideoModal
        src={src}
        label={label}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
