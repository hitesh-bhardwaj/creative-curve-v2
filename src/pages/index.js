import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Blog from "@/components/PageLayout/Hero/Blog";
import Brands from "@/components/PageLayout/Hero/Brands";
import Hero from "@/components/PageLayout/Hero/Hero";
import Parallax from "@/components/PageLayout/Hero/Parallax";
import Portfolio from "@/components/PageLayout/Hero/Portfolio";
import Services from "@/components/PageLayout/Hero/Services";
import gsap from "gsap";
import styles from "@/components/Transition/index.module.css";

import { ReactCursor } from "@/components/ReactCursor";
import 'react-creative-cursor/dist/styles.css';
import Loader from "@/components/Loader";
import { motion } from "framer-motion";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

export default function Index () {

  gsap.config({
    nullTargetWarn: false,
  });
  
  return (
    <>
      <Loader />
      <ReactCursor />
      <main>
        <Header />
        <Hero />
        <Portfolio />
        <Parallax />
        <Services />
        <Brands />
        <Blog />
        <Footer />
      </main>
      
      {/* <Transition /> */}
      <div className={`${styles.blocksContainer} ${styles.transitionOut}`}>
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className={styles.block}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}