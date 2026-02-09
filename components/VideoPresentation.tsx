'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

// NAPOMENA: Sačuvajte video poster sliku iz Figma exporta u /public/images/video-poster.png
const posterImageSrc = '/images/video-poster.png';

export function VideoPresentation() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPoster, setShowPoster] = useState(true);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255, 107, 53, 0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">
            VIDEO PREZENTACIJA
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Pogledaj kako <span className="text-[#ff6b35]">izgleda naš rad</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Od projektovanja do finalne montaže – procesi koji garantuju vrhunski
            kvalitet ventilacionih sistema
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          <div className="relative aspect-video bg-[#1a2d3d]">
            {showPoster ? (
              <motion.div
                initial={{ opacity: 1 }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => setShowPoster(false)}
              >
                <Image
                  src={posterImageSrc}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/40 to-[#0a1628]/60" />

                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-24 h-24 rounded-full bg-[#ff6b35] flex items-center justify-center shadow-2xl shadow-[#ff6b35]/50 hover:bg-[#ff8c35] transition-colors duration-300">
                    <Play size={40} className="ml-2" fill="white" />
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                ref={videoRef}
                src="https://www.youtube.com/embed/WEluOp7N-Ek?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="AD KLIMAT - Pogledaj kako izgleda naš rad"
                style={{ border: 'none' }}
              />
            )}
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c35] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
