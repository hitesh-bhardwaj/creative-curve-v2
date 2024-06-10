import ScrollButton from "./ScrollButton"
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
        tl.from(".about-head",{
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
      gsap.from(".about-small-head",{
        yPercent:-100,
        duration:0.5,
        delay:1.7
        
      })
    })
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh] mobile:relative">
                    <div className="flex flex-col justify-center h-full w-full items-start">
                        <h1 className="text-140 tracking-[1px] leading-[1.1] space-grotesk text-textHead overflow-hidden">
                            <span className="text-76 relative after:absolute after:w-[3vw] after:bg-current after:block after:h-[3px] after:right-0 after:top-[55%] after:translate-x-[140%] mobile:text-[6vw] mobile:after:w-[20vw] mobile:after:translate-x-[120%] about-small-head block">We Are</span>
                            <span className="uppercase about-head block">Creative <span className="about-head mobile:block inline-block"> Curve</span> </span>
                        </h1>
                        <div className="flex justify-between w-full mt-[10%] mobile:flex-col">
                            <ScrollButton />
                            <p className="text-24 text-textBody text-right w-[20vw] mobile:w-[80%] mobile:text-start mobile:order-1 para-anim">
                                <span>
                                    Born from a fervent desire to challenge the norms, our essence is rooted in innovation.
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
