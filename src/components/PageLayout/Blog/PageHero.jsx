import ScrollButton from "../About/ScrollButton"
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const PageHero = () => {
    useGSAP(() => {
        const text = new SplitType('.para-anim', { types: 'words, chars' });
        const para = document.querySelectorAll(".para-anim .word .char")
        const tl = gsap.timeline();
        tl.from(".blog-head",{
            xPercent:-100,
            delay:1,
            stagger:0.1,
            duration:1,
            ease:"power4.out"

        })
        .from(para, {
          filter: "blur(10px)",
          opacity: 0,
          duration: 0.6,
          yPercent: 100,
          stagger: 0.01,
          delay: -1,
          ease: "power3.out"
      })
      gsap.from(".blog-small-head",{
        yPercent:-100,
        duration:0.5,
        delay:1.7
        
      })
    })
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh] mobile:relative">
                    <div className="flex flex-col justify-center h-full w-full items-start mobile:justify-start mobile:mt-[50%]">
                        <h1 className="text-140 tracking-[1px] leading-[1.1] space-grotesk text-textHead overflow-hidden">
                            <span className="text-76 mobile:text-[7vw] block blog-small-head">A Curated</span>
                            
                            <span className="uppercase block blog-head">Collection OF<br/> Insights</span>
                        </h1>

                        <div className="flex justify-between w-full mt-[6%] mobile:flex-col mobile:gap-[40vh]">
                            <ScrollButton />

                            <p className="text-24 text-textBody text-right w-[21vw] mobile:w-[80%] mobile:text-start mobile:order-1 para-anim tablet:w-[40vw]">
                                <span>
                                    From global branding trends to the nuances of digital storytelling, explore the world through our lens.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageHero
