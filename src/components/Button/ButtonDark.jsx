import Link from "next/link";
import styles from "./index.module.css"

const ButtonDark = ({btnText, link}) => {
  return (
    <>
      <Link
        className={`${styles.cta} ${styles.dark}`}
        href={link}
      >
        <span className={styles.ctaDot}></span>
        <span className={styles.ctaText}>{btnText}</span>
        <span className={styles.ctaArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
            ></path>
          </svg>
        </span>
      </Link>
    </>
  );
};

export default ButtonDark;
