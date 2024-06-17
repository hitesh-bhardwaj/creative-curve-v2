import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
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

    const videoUrl = "https://res.cloudinary.com/djfyshazn/video/upload/v1717666930/tata-portfolio_qr2j8i.mp4";

    return (
        <>
          <Cursor cursorSize={10} animationDuration={0.5}/>
          <main>
            <Header />
            <Hero 
                heading={"Tata Trust"}
                subheading={"The journey of a million smiles began in 1892 with Jamsetji Tata, the pioneer, visionary and founder of the Tata Group."}
                imgSrc={"/images/projects/tata-trust/hero.webp"}
            />

            <Overview 
                content1={"In a country that is home to the world's second-largest population, when one of its largest enterprises providentially happens to be a philanthropic organisation, it raises hopes for a promising and sustainable future. For people across the country, the Tata Trusts symbolise humanitarianism and personify the prodigious force that advances new frontiers of social and economic development."}
                content2={"The journey of a million smiles began in 1892 with Jamsetji Tata, the pioneer, visionary and founder of the Tata Group, setting up the JN Tata Endowment for higher education of Indians."}
            />

            <section>
                <div className="container py-[10%]">
                    <div className="w-full rounded-[40px] overflow-hidden border-2 border-black/50 mobile:rounded-[15px]">
                        <VideoPlayer 
                            src={videoUrl}
                            poster={"/images/projects/tata-trust/video-cover.webp"}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
        <Transition />
      </>
    )
}