import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Events from "@/components/PageLayout/PortfolioDetail/Events";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
                heading={"PACS INDIA"}
                subheading={"Primary Agricultural Credit Societies are the grass root level arms of the short-term co-operative credit structure."}
                imgSrc={"/images/projects/pacs-india/hero.webp"}
            />

            <Overview 
                content1={"Primary Agricultural Credit Societies are the grass root level arms of the short-term co-operative credit structure. PACS deals directly with the rural (agricultural) borrowers, give those loans and collect repayments of loans given and also undertake distribution and marketing functions."}
                content2={"They occupy a predominant position in the co-operative credit structure and form its base. It serves as the final link between the ultimate borrowers on the one hand and the higher financing agencies, namely the Scheduled Commercial Banks, and the RBI/NABARD on the other hand."}
            />

            <Events 
                img1={"/images/projects/pacs-india/event-1.webp"}
                img2={"/images/projects/pacs-india/event-2.webp"}
                img3={"/images/projects/pacs-india/event-3.webp"}
                img4={"/images/projects/pacs-india/event-4.webp"}
                img5={"/images/projects/pacs-india/event-5.webp"}
            />
            <Footer />
        </main>
        <Transition />
      </>
  )
}