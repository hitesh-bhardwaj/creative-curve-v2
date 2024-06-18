import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogContent from "@/components/PageLayout/BlogDetail/BlogContent";
import PageHero from "@/components/PageLayout/BlogDetail/PageHero";
import RelatedArticles from "@/components/PageLayout/BlogDetail/RelatedArticles";
import Transition from "@/components/Transition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BlogDetail() {

    useGSAP(() => {
        if(globalThis.innerWidth<541){
            const parallaxImgs = document.querySelectorAll(".parallaximg");
        
            parallaxImgs.forEach((parallaxImg) => {
              gsap.to(parallaxImg, {
                yPercent: 20,
                scrollTrigger: {
                  trigger: parallaxImg,
                  start: "20% bottom",
                  end: "bottom top",
                  scrub: true,
                },
              });
            });
    
        }else{
            const parallaxImgs = document.querySelectorAll(".parallaximg");
        
            parallaxImgs.forEach((parallaxImg) => {
              gsap.to(parallaxImg, {
                yPercent: 10,
                scrollTrigger: {
                  trigger: parallaxImg,
                  start: "20% bottom",
                  end: "bottom top",
                  scrub: true,
                  // markers: true
                },
              });
            });
        }
      });

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
            <PageHero />
            <BlogContent />
            <RelatedArticles />
            <Footer />
        </main>
        <Transition />
        </>
    )
}