import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Storyboard from "@/components/PageLayout/PortfolioDetail/Stroyboard";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import SplitType from "split-type";
import Transition from "@/components/Transition";

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
          const paraSplit = new SplitType(paraAnimation, { types: "words, chars" });
          let paraword = paraAnimation.querySelectorAll(".word .char");
          gsap.from(paraword, {
            scrollTrigger: {
              trigger: paraword,
              start: "top 85%",
            },
            filter: "blur(10px)",
            opacity: 0,
            duration: 0.6,
            yPercent: 100,
            stagger: 0.005,
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

    const videoUrl="https://res.cloudinary.com/djfyshazn/video/upload/v1717667829/ljbphgvojmhucugh9doq.mp4"

    return (
        <>
        <Cursor cursorSize={10} animationDuration={0.5}/>
        <main>
            <Header />
            <Hero 
                heading={"WHO"}
                subheading={"WHO leads global efforts to expand universal health coverage. We direct and coordinate the world's response to health emergencies."}
                imgSrc={"/images/projects/who/hero.png"}
            />

            <Overview 
                content1={"In April 1945, during the Conference to set up the United Nations (UN) held in San Francisco, representatives of Brazil and China proposed that an international health organization be established and a conference to frame its constitution convened. On 15 February 1946, the Economic and Social Council of the UN instructed the Secretary-General to convoke such a conference."}
                videoSrc={videoUrl}
                videoPoster={"/images/projects/who/video-cover.png"}
            />

            <Storyboard 
                img1={"/images/projects/who/story-1.png"}
                img2={"/images/projects/who/story-2.png"}
                img3={"/images/projects/who/story-3.png"}
                img4={"/images/projects/who/story-4.png"}
            />
            <Footer />
        </main>
        <Transition />
      </>
    )
}