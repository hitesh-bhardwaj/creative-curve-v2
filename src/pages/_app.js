import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactLenis from '@studio-freight/react-lenis';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const WebGl_Canvas = dynamic(() => import('@/components/WebglBackground'), { ssr: false });

export default function App({ Component, pageProps }) {
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWebGL(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ReactLenis root duration={2}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ReactLenis>

      {showWebGL && <WebGl_Canvas />}
    </>
  );
}

