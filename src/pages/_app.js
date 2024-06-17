import '@/styles/globals.css';
import ReactLenis from '@studio-freight/react-lenis';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import useWindowSize from '@/components/useWindowSize';

export default function App({ Component, pageProps, router }) {
  const [showWebGL, setShowWebGL] = useState(false);
  const [WebGLComponent, setWebGLComponent] = useState(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWebGL(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (showWebGL && windowSize.width > 1023) {
      const loadWebGL = async () => {
        const WebGl_Canvas = await dynamic(() => import('@/components/WebglBackground'), { ssr: false });
        setWebGLComponent(<WebGl_Canvas />);
      };

      loadWebGL();
    }
  }, [showWebGL, windowSize.width]);

  return (
    <>
      <ReactLenis root duration={2} smoothTouch={true}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
          <Analytics />
          <SpeedInsights />
        </AnimatePresence>
      </ReactLenis>

      {showWebGL && windowSize.width > 1023 && WebGLComponent}
    </>
  );
}
