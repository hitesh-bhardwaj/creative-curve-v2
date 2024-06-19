import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Storyboard2 from "@/components/PageLayout/PortfolioDetail/Stroyboard2";
import 'react-creative-cursor/dist/styles.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import SplitType from "split-type";
import Transition from "@/components/Transition";
import { ReactCursor } from "@/components/ReactCursor";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PortfolioDetail({}) {
    useGSAP(() => {
        const headings = document.querySelectorAll(".heading-anim");
        headings.forEach((heading) => {
          const headingSplit = new SplitType(heading, {
            types: "lines, words, chars",
          });
          let headingWord = heading.querySelectorAll(".word .char");
          gsap.from(headingWord, {
            scrollTrigger: {
              trigger: headingWord,
              start: "top 85%",
            },
            duration: 0.6,
            yPercent: 110,
            rotate: "10deg",
            stagger: 0.04,
          });
        });
      }, []);
    
      useGSAP(() => {
        const paraAnimations = document.querySelectorAll(".para-animations");
        paraAnimations.forEach((paraAnimation) => {
          const paraSplit = new SplitType(paraAnimation, { types: "words" });
          let paraword = paraAnimation.querySelectorAll(".word");
          gsap.from(paraword, {
            scrollTrigger: {
              trigger: paraword,
              start: "top 85%",
            },
            filter: "blur(10px)",
            opacity: 0,
            duration: 0.6,
            yPercent: 100,
            stagger: 0.01,
          });
        });
      }, []);
    
      useGSAP(() => {
        const fadeUps = document.querySelectorAll(".fadeUp");
        fadeUps.forEach((fadeUp) => {
          gsap.fromTo(
            fadeUp,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "Power3.out",
              scrollTrigger: {
                trigger: fadeUp,
                start: "top 85%",
              },
            }
          );
        });
      }, []);

    const videoUrl = "https://res.cloudinary.com/djfyshazn/video/upload/v1717667565/msf-portfolio_glwhmw.mp4";

  return (
        <>
          <ReactCursor />
          <main>
              <Header />
              <Hero 
                  heading={"MSF"}
                  subheading={"MSF may speak out publicly to bring a forgotten crisis into view, or to denounce abuses, or challenge the diversion of assistance."}
                  imgSrc={"/images/projects/msf/hero.png"}
              />
              <Overview 
                  content1={"With more than 40 years of field experience as an emergency and humanitarian aid organisation, and as part of our need to reflect critically on our actions and improve our ways of working, several reflection centres have been set up within MSF."}
                  content2={"Their role is mainly to reflect and challenge the organisation on past humanitarian and medical actions, draw lessons-learned and ways forward for future operations."}
                  videoPoster={"/images/projects/msf/video-cover.webp"}
                  videoSrc={videoUrl}
              />
              <Storyboard2
                  img1={"/images/projects/msf/story-1.webp"}
                  img2={"/images/projects/msf/story-2.webp"}
                  img3={"/images/projects/msf/story-3.webp"}
                  img4={"/images/projects/msf/story-4.webp"}
                  img5={"/images/projects/msf/story-5.webp"}
                  img6={"/images/projects/msf/story-6.webp"}
              />
              <Footer />
          </main>
          <Transition />
        </>
    )
}