// import "@/styles/globals.css";
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import ReactLenis from '@studio-freight/react-lenis';
// import dynamic from "next/dynamic";

// const WebGl_Canvas = dynamic(
//   () => import('@/components/WebglBackground'),
//   { ssr: false }
// )

// export default function App({ Component, pageProps }) {

//   return (
//     <>
      
//       <ReactLenis root duration={2}>
//           <Header />
//             <Component {...pageProps} />
//           <Footer />
//       </ReactLenis>

//       <WebGl_Canvas />
//     </>
//   );
// }

import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactLenis from '@studio-freight/react-lenis';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the WebGl_Canvas component
const WebGl_Canvas = dynamic(() => import('@/components/WebglBackground'), { ssr: false });

export default function App({ Component, pageProps }) {
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    // Defer the loading of the WebGL component
    const timer = setTimeout(() => {
      setShowWebGL(true);
    }, 3000); // Adjust the delay as needed

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

