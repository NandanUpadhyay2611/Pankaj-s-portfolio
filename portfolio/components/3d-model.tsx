import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'loading-anim'?: boolean;
        url: string;
      };
    }
  }
}

export default function ThreeDModel() {
  useEffect(() => {
    // Load Spline viewer
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full relative"
    >
      <spline-viewer
        loading-anim
        url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        className="w-full h-full"
      ></spline-viewer>
      
      {/* Gradient overlays for better blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
    </motion.div>
  );
} 