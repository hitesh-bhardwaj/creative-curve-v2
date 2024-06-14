import ScrollButton from "./ScrollButton"
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const PageHero = () => {
  const creative = useRef(null);
  const curve = useRef(null);
  const small = useRef(null);

  useGSAP(() => {
      const text = new SplitType('.para-anim', { types: 'words, chars' });
      const para = document.querySelectorAll(".para-anim .word .char")
      const tl = gsap.timeline();

      tl.from(creative.current, {
          duration: 1,
          xPercent: -150,
          delay: 1,
          ease: "power3.out"
      })
      .from(curve.current, {
          duration: 1,
          xPercent: 110,
          delay: -0.8,
          ease: "power3.out"
      })
      .from(para, {
          filter: "blur(10px)",
          opacity: 0,
          duration: 0.6,
          yPercent: 100,
          stagger: 0.01,
          delay: -1.5,
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
      });
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

    tl.to(creative.current, {
      yPercent: 100,
      duration: 0.8,
      ease: "power2.in",
    }).to(curve.current, {
      yPercent: 100,
      duration: 0.8,
      delay: -0.7,ease: "power2.in",
    }).to(".para-anim", {
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
            <section className="h-[75vh]" style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}} id="hero">
                <div className="fixed top-0 left-0 w-full h-full">
                    <div className="container h-[75vh] mobile:relative">
                        <div className="flex flex-col justify-end h-full w-full items-start mobile:justify-start mobile:mt-[40%]">
                            <h1 className="text-190 tracking-[1px] leading-[1.1] space-grotesk text-textHead overflow-hidden">
                                <span ref={small} className="text-76 relative w-fit after:absolute after:w-[3vw] after:bg-current after:block after:h-[3px] after:right-0 after:top-[55%] after:translate-x-[140%] mobile:text-[6vw] mobile:after:w-[20vw] mobile:after:translate-x-[120%] about-small-head block">We Are</span>
                                <span ref={creative} className="uppercase inline-block mobile:block">Creative</span>{" "}
                                <span ref={curve} className="uppercase mobile:block inline-block">Curve</span>
                            </h1>
                            <div className="flex justify-between w-full items-end mt-[5%] mobile:flex-col mobile:gap-[40vh]">
                                <ScrollButton />
                                <p className="text-24 text-textBody text-right w-[20vw] mobile:w-[80%] mobile:text-start mobile:order-1 para-anim tablet:w-[40vw]">
                                    <span>
                                        Born from a fervent desire to challenge the norms, our essence is rooted in innovation.
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
