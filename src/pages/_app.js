import "@/styles/globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactLenis from '@studio-freight/react-lenis';
import dynamic from "next/dynamic";

const WebGl_Canvas = dynamic(
  () => import('@/components/WebglBackground'),
  { ssr: false }
)

export default function App({ Component, pageProps }) {

  return (
    <>
      
      <ReactLenis root duration={2}>
          <Header />
            <Component {...pageProps} />
          <Footer />
      </ReactLenis>

      <WebGl_Canvas />
    </>
  );
}
