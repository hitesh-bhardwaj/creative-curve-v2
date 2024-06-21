import '@/styles/globals.css';
import ReactLenis from '@studio-freight/react-lenis';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import useWindowSize from '@/components/useWindowSize';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const WebGl_Canvas = dynamic(() => import('@/components/WebglBackground'), { ssr: false });

export default function App({ Component, pageProps, router }) {
  const { width } = useWindowSize();
  const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    nextRouter.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [nextRouter.events]);

  return (
    <>
      <DefaultSeo
        title='Creative Curve'
        description='The Advertising Agency you were looking for. We are Creative Curve.'
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'preload',
            href: '/fonts/Aeonik-Regular.woff',
            as: 'font',
            type: 'font/woff',
            crossOrigin: 'anonymous'
          },
          {
            rel: 'preload',
            href: '/fonts/SpaceGrotesk-Regular.woff',
            as: 'font',
            type: 'font/woff',
            crossOrigin: 'anonymous'
          }
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: "Creative Curve",
          description: "The Advertising Agency you were looking for. We are Creative Curve.",
          url: "https://creative-curve-v2.vercel.app",
          images: [
            {
              url: "https://creative-curve-v2.vercel.app/images/seo/creative-curve.jpg",
              width: 1290,
              height: 594,
              alt: "Patronum",
              type: "image/jpg",
            },
          ],
          siteName: "Creative Curve",
        }}
        twitter={{
          site: 'Creative Curve',
          cardType: 'summary_large_image',
        }}
      />

      <ReactLenis root>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
          <Analytics />
          <SpeedInsights />
        </AnimatePresence>
      </ReactLenis>

      {width >= 1024 && (<WebGl_Canvas />)}
    </>
  );
}
