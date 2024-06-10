import { motion } from "framer-motion";
import styles from "./index.module.css";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const Transition = () => {
  return (
    <>
      <div className={`${styles.blocksContainer} ${styles.transitionIn}`}>
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className={styles.block}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
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
  );
};

export default Transition;
