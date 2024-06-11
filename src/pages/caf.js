import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Branding from "@/components/PageLayout/PortfolioDetail/Branding";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
                heading={"CAF"}
                subheading={"Charities Aid Foundation (CAF) India, a leading not-for-profit organization set up to promote and support strategic giving in India."}
                imgSrc={"/images/projects/caf/hero.png"}
            />

            <Overview 
                content1={"Charities Aid Foundation (CAF) India, a leading not-for-profit organization set up to promote and support strategic giving in India. We are a part of the global network of CAF organizations with offices in 11 countries – United Kingdom, Australia, New Zealand, Brazil, Canada, Bulgaria, Russia, South Africa, Turkey and the United States of America -- that distributes funds to over 90 countries around the world."}
            />

            <Branding 
                img1={"/images/projects/caf/brand-1.png"}
                img2={"/images/projects/caf/brand-2.png"}
                img3={"/images/projects/caf/brand-3.png"}
            />
            <Footer />
        </main>
    )
}