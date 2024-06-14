import '@/styles/globals.css';
import ReactLenis from '@studio-freight/react-lenis';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const WebGl_Canvas = dynamic(() => import('@/components/WebglBackground'), { ssr: false });

export default function App({ Component, pageProps, router }) {
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWebGL(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ReactLenis root duration={2} smoothTouch={true}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ReactLenis>

      {showWebGL && <WebGl_Canvas />}
    </>
  );
}
