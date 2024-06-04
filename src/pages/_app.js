import { Fluid } from '@/components/lib/Fluid';
import "@/styles/globals.css";
import { EffectComposer } from '@react-three/postprocessing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactLenis from '@studio-freight/react-lenis';
import { Canvas } from '@react-three/fiber';

export default function App({ Component, pageProps }) {

  return (
    <>
      
      <ReactLenis root duration={2}>
          <Header />
            <Component {...pageProps} />
          <Footer />
      </ReactLenis>
      <Canvas className='three_canvas'>
        <EffectComposer>
          <Fluid fluidColor='#5D0099' />
        </EffectComposer>
      </Canvas>
    </>
  );
}
