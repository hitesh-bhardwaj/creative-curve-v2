import ScrollButton from "../About/ScrollButton"
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const PageHero = () => {

    const small = useRef(null);
    const collection = useRef(null);
    const insights = useRef(null);

    useGSAP(() => {
        const text = new SplitType('.para-anim', { types: 'words' });
        const para = document.querySelectorAll(".para-anim .word")
        const tl = gsap.timeline();
  
        tl.from(collection.current, {
            duration: 1,
            xPercent: -150,
            delay: 1,
            ease: "power3.out"
        })
        .from(para, {
            filter: "blur(10px)",
            opacity: 0,
            duration: 1,
            yPercent: 100,
            stagger: 0.01,
            delay: -0.8,
            ease: "power3.out"
        })
        .from(insights.current, {
            duration: 1,
            xPercent: 110,
            delay: -0.8,
            ease: "power3.out"
        })
        .from(small.current, {
            duration: 1,
            yPercent: -100,
            delay: -0.8,
            ease: "power3.out"
        }).from(".scroll-btn", {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: "power3.out",
          delay: -0.4
        })
    }, []);
  
    useGSAP(()=> {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom 40%",
          scrub: true,
        }
      });
  
      tl.to(insights.current, {
        yPercent: 100,
        duration: 0.8,
        ease: "power2.in",
      }).to(".para-anim", {
        yPercent: 100,
        duration: 0.8,
        delay: -0.7,ease: "power2.in",
      }).to(collection.current, {
        yPercent: 100,
        duration: 0.8,
        delay: -0.7,ease: "power2.in",
      }).to(small.current, {
        yPercent: 100,
        duration: 0.8,
        delay: -0.7,ease: "power2.in",
      })
    }, []);

    return (
        <>
            <section className="h-[85vh]" style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}} id="hero">
            <div className="fixed top-0 left-0 w-full h-full">
                <div className="container h-[85vh] mobile:relative">
                    <div className="flex flex-col justify-center h-full w-full items-start mobile:justify-start mobile:mt-[50%]">
                        <h1 className="text-140 tracking-[1px] leading-[1.1] space-grotesk text-textHead overflow-hidden">
                            <div className="overflow-hidden">
                                <span ref={small} className="text-76 mobile:text-[7vw] block">A Curated</span>
                            </div>
                            <div className="overflow-hidden">
                                <span ref={collection} className="uppercase block">Collection OF</span>
                            </div>
                            <div className="overflow-hidden">
                                <span ref={insights} className="uppercase block">Insights</span>
                            </div>
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
                </div>
            </section>
        </>
    )
}

export default PageHero
