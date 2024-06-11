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
    return (
        <main>
            <Header />
            <Hero 
                heading={"KHPT"}
                subheading={"KHPT's model is comprised of three engines that demonstrate pathways to create scalable impact. We deploy the model through our multiple themes."}
                imgSrc={"/images/projects/khpt/hero.png"}
            />

            <Overview 
                content1={"KHPT is a not-for-profit organization which spearheads focused initiatives to improve the health and wellbeing of communities in India. In 2003, KHPT was founded with a mission to enhance the health and wellbeing of vulnerable communities and our journey started with the focus on reducing the prevalence of HIV in Karnataka, specifically among most at-risk populations."}
                content2={"These interventions were evidence-driven, systematically planned, rigorously implemented, and monitored. We succeeded in scaling impact well beyond Karnataka and KHPT became a learning site for innovative approaches."}
            />
            <Pr 
                img1={"/images/projects/khpt/pr-1.png"}
                img2={"/images/projects/khpt/pr-2.png"}
                img3={"/images/projects/khpt/pr-3.png"}
                img4={"/images/projects/khpt/pr-4.png"}
                img5={"/images/projects/khpt/pr-5.png"}
            />
            <Footer />
        </main>
    )
}