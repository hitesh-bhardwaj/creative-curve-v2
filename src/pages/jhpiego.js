import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Branding from "@/components/PageLayout/PortfolioDetail/Branding";
import Events from "@/components/PageLayout/PortfolioDetail/Events";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

    const videoUrl = "https://res.cloudinary.com/djfyshazn/video/upload/v1717666886/jhpiego-portfolio_a1lefg.mp4";

    return (
      <>
        <ReactCursor />
        <main>
            <Header />
            <Hero 
                heading={"JHPIEGO"}
                subheading={"Every day, thousands of women, children and men die of preventable causes: cervical cancer, malaria, HIV, and complications from pregnancy and childbirth."}
                imgSrc={"/images/projects/jhpiego/hero.png"}
            />

            <Overview 
                content1={"In 1973, Jhpiego was founded at Johns Hopkins University. That year, we partnered with the US Agency for International Development to bring reproductive health breakthroughs to the world. Today, our US-based and international partners are public and private organizations, thought leaders, pioneers and visionaries. From then to now, some things have remained constant: the trust we enjoy together and our unwavering commitment to improving the health of women and families."}
            />

            <Branding 
                className={"bg-black text-white"}
                videoSrc={videoUrl}
                videoPoster={"/images/projects/jhpiego/video-cover.webp"}
                img2={"/images/projects/jhpiego/brand-2.webp"}
                img3={"/images/projects/jhpiego/brand-3.webp"}
            />

            <Events 
                img1={"/images/projects/jhpiego/event-1.webp"}
                img2={"/images/projects/jhpiego/event-2.webp"}
                img3={"/images/projects/jhpiego/event-3.webp"}
            />
            <Footer />
        </main>
        <Transition />
      </>
    )
}