import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Pr from "@/components/PageLayout/PortfolioDetail/Pr";
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
    return (
        <>
        <Cursor cursorSize={10} animationDuration={0.5}/>
        <main>
            <Header />
            <Hero 
                heading={"White Ribbon Alliance"}
                subheading={"Most women and girls are never asked to inform the decisions that are made about their bodies, health, or minds."}
                imgSrc={"/images/projects/wra/hero.png"}
            />

            <Overview 
                content1={"Today's youth are tired of waiting for older generations to take actions on issues threatening their lives. They're taking matters into their own hands, becoming major actors for causes like climate change, racial and gender equality, universal healthcare and ending violence."}
                content2={"We're supporting the Partnership for Maternal, Newborn and Child Health's 1.8 Billion Young People for Change campaign by asking young people from all over about their needs."}
            />

            <Pr 
                img1={"/images/projects/wra/pr-1.webp"}
                img2={"/images/projects/wra/pr-2.webp"}
            />
            <Footer />
        </main>
        <Transition />
      </>
    )
}