import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero() {
    const we = useRef(null);
    const transform = useRef(null);
    const brands = useRef(null);
    const worldwide = useRef(null);
    const small = useRef(null);

    useGSAP(() => {
        const text = new SplitType('.para-anim', { types: 'words, chars' });
        const para = document.querySelectorAll(".para-anim .word .char")
        const tl = gsap.timeline();

        tl.from(we.current, {
            duration: 1,
            xPercent: -150,
            delay: 1,
            ease: "power3.out"
        })
        .from(transform.current, {
            duration: 1,
            xPercent: 110,
            delay: -0.5,
            ease: "power3.out"
        })
        .from(brands.current, {
            duration: 1,
            yPercent: 100,
            delay: -0.5,
            ease: "power3.out"

        })
        .from(worldwide.current, {
            duration: 1,
            yPercent: 100,
            delay: -0.5,
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
            delay: -0.5,
            ease: "power3.out"
        })
    }, []);

    useGSAP(()=> {
        gsap.to(".hero-container", {
            scrollTrigger: {
                trigger: "#hero",
                scrub: true,
                start: "top top",
                end: "bottom top",
            },
            yPercent: 50,
        })
    })

    return (
        <>
            <section className="" id="hero">
                <div className="container h-dvh flex justify-center items-center hero-container">
                    <div className="text-center w-full">
                    <h1 className="title-h1">
                        <div className="text-24 aeonik text-left ml-[5vw]  text-anim overflow-hidden">
                            <span ref={small} className="w-[110%] relative leading-10 after:absolute after:top-1/2 after:ml-2 after:-translate-y-1/2 after:bg-current after:h-[1.5px] after:w-[1.5vw]">
                                We Creative Curve 
                            </span>
                        </div>
                        <div className="overflow-hidden text-anim flex justify-center gap-x-[2vw]">
                            <span ref={we} > We</span><span ref={transform}> Transform</span>
                        </div>
                        <div className="w-full text-right pr-[5vw] text-anim overflow-hidden">
                            <span ref={brands}> Brands</span>
                        </div>
                        <div className="text-anim overflow-hidden">
                            <span ref={worldwide}> Worldwide</span>
                        </div>
                    </h1>
                    <p className="text-20 uppercase absolute top-1/2 -translate-y-[30%] w-[34vw] hero-content text-right ml-[3vw] para-anim">
                        Fueled by a relentless passion for excellence, we work with Fortune 500s, visionary founders, governments, and investment funds across industries and continents.
                    </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;