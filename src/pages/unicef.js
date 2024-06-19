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
                heading={"Unicef"}
                subheading={"Unicef Wants to Encourage a Sense of Stability for a Child."}
                imgSrc={"/images/projects/unicef/hero.png"}
            />

            <Overview 
                content1={"UNICEF works in the world's toughest places to reach the most disadvantaged children and adolescents - and to protect the rights of every child, everywhere. Across more than 190 countries and territories, we do whatever it takes to help children survive, thrive and fulfill their potential, from early childhood through adolescence. Before, during and after humanitarian emergencies, UNICEF is on the ground, bringing lifesaving help and hope to children and families."}
            />

            <Campaign  
                secSubHead={"From global branding trends to the nuances of digital storytelling, explore the world through our lens."}
                title={"Unicef"}
                img1={"/images/projects/unicef/image1.webp"}
                img2={"/images/projects/unicef/image2.webp"}
                img3={"/images/projects/unicef/image3.webp"}
                content1={"UNICEF works in over 190 countries and territories to save children's lives, to defend their rights, and to help them fulfil their potential, from early childhood through adolescence."}
                content2={"Discover UNICEF's work for every child, everywhere"}
            />
            <Footer />
        </main>
        <Transition />
      </>
    )
}