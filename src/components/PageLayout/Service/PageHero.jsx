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
    const digital = useRef(null);
    const product = useRef(null);
    const and = useRef(null);
    const experience = useRef(null);

    useGSAP(() => {
        const text = new SplitType('.para-anim', { types: 'words' });
        const para = document.querySelectorAll(".para-anim .word")
        const tl = gsap.timeline();
  
        tl.from(digital.current, {
            duration: 1,
            xPercent: -100,
            delay: 1,
            ease: "power3.out"
        })
        .from(product.current, {
            duration: 1,
            xPercent: 125,
            delay: -0.8,
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
        .from(and.current, {
            duration: 1,
            xPercent: -100,
            delay: -0.9,
            ease: "power3.out",
        }).from(experience.current, {
            duration: 1,
            xPercent: 110,
            delay: -0.9,
            ease: "power3.out",
        }).from(small.current, {
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
      if(globalThis.innerWidth>640){
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom 40%",
            scrub: true,
          }
        });
    
        tl.to(experience.current, {
          yPercent: 110,
          duration: 0.8,
          ease: "power2.in",
        }).to(and.current, {
          yPercent: 110,
          duration: 0.8,
          delay: -0.7,ease: "power2.in",
        }).to(".para-anim", {
          yPercent: 110,
          duration: 0.8,
          delay: -0.7,ease: "power2.in",
        }).to(product.current, {
          yPercent: 110,
          duration: 0.8,
          delay: -0.7,ease: "power2.in",
        }).to(digital.current, {
          yPercent: 110,
          duration: 0.8,
          delay: -0.7,ease: "power2.in",
        }).to(small.current, {
          yPercent: 110,
          duration: 0.8,
          delay: -0.7,ease: "power2.in",
        });
      }    
      });

    return (
        
        <>
            <section className="h-[85vh] mobile:h-screen" style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}} id="hero">
                <div className="fixed top-0 left-0 w-full h-[85vh] mobile:h-screen mobile:static">
                    <div className="container w-full h-full mobile:relative tablet:relative">
                        <div className="flex flex-col justify-center h-full w-full items-start tablet:justify-center mobile:justify-start mobile:pt-[40%]">
                            <h1 className="text-140 uppercase tracking-[1px] leading-[1.1] space-grotesk text-textHead overflow-hidden mobile:w-min">
                                <div className="w-fit overflow-hidden">
                                    <span ref={small} className="text-76 capitalize text-textBody service-small-head block mb-2">We Create</span> 
                                </div>
                                <div className="overflow-hidden">
                                    <span ref={digital} className="service-head inline-block overflow-hidden">Digital</span>{" "}
                                    <span ref={product} className="inline-block overflow-hidden">Products</span>{" "}
                                </div>
                                <div className="overflow-hidden">
                                    <span ref={and} className="inline-block overflow-hidden">And</span>{" "}
                                    <span ref={experience} className="inline-block overflow-hidden">Experiences</span>{" "}
                                </div>
                            </h1>

                            <div className="flex justify-between w-full items-end mt-[5%] tablet:flex-col tablet:items-start mobile:flex-col mobile:items-start">
                                <div className="mobile:absolute mobile:bottom-[15%] mobile:left-1/2 mobile:-translate-x-1/2 tablet:absolute tablet:bottom-[10%] tablet:left-1/2 tablet:-translate-x-1/2">
                                  <ScrollButton />
                                </div>
                                <p className="text-24 text-textBody text-right w-[20vw] mobile:w-[80%] mobile:text-start mobile:order-1 para-anim tablet:w-[40vw] tablet:text-start tablet:order-1">
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
