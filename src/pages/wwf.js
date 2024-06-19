import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Campaign from "@/components/PageLayout/PortfolioDetail/Campaign";
import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
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
    return (
        <>
        <ReactCursor />
        <main>
            <Header />
            <Hero 
                heading={"WWF"}
                subheading={"World Wide Fund for Nature-India (WWF India) was founded with the express objective of ensuring the conservation of the country's wildlife and natural habitats."}
                imgSrc={"/images/projects/wwf/hero.png"}
            />

            <Overview 
                content1={"WWF India's modest beginnings entailed operating out of a limited office space at Horn Bill House in Mumbai and very few full-time staff. The running of the office relied largely on the goodwill of the close-knit group of its founders, and other associates who voluntarily contributed their time and resources to the work of the organisation. This year, we mark 50 years of WWF in India, and here's to another 50 years of staying true to our mission of building a future."}
            />

            <Campaign  
                secSubHead={"From global branding trends to the nuances of digital storytelling, explore the world through our lens."}
                title={"WWF INDIA"}
                img1={"/images/projects/wwf/image1.webp"}
                img2={"/images/projects/wwf/image2.webp"}
                img3={"/images/projects/wwf/image3.webp"}
                content1={"WWF created a movement that inspired people to care for nature. As environmental problems grew, so did people's concern. The need arose for a platform where citizens could contribute their time, effort and energy to conservation."}
                content2={"Nature Needs Helping Hands"}
            />
            <Footer/>
        </main>
        <Transition />
      </>
    )
}