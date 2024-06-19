import Image from "next/image"
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitInLineWord, SplitInWordChar } from "@/utils";
import { useRef } from "react";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

const Hero = ({ heading, subheading, imgSrc }) => {

    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const imgRef = useRef(null);
    
    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {y: "#second-section", offsetY: 50},
            ease: "power3.inOut",
        });
    };

    useGSAP(()=> {
        SplitInLineWord(headingRef.current);
        SplitInWordChar(paraRef.current);

        const headAnim = headingRef.current.querySelectorAll(".line .word");
        const paraAnim = paraRef.current.querySelectorAll(".word");
        const tl = gsap.timeline();
  
        tl.from(headAnim, {
            yPercent: 100,
            duration: 1,
            stagger: 0.1,
            delay: -0.8,
            delay: 1,
            ease: "power3.out"
        })
        .from(imgRef.current, {
            scale: 1.2,
            duration: 1,
            ease: "power1.inOut",
            delay: -0.95,
        })
        .from(paraAnim, {
            filter: "blur(10px)",
            opacity: 0,
            duration: 1,
            yPercent: 100,
            stagger: 0.01,
            delay: -1,
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
        if(globalThis.innerWidth>640){
        const headAnim = headingRef.current.querySelectorAll(".line .word");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom 40%",
            scrub: true,
          }
        });
        
        tl.fromTo(headAnim, {
            yPercent: 0,
        }, {
            yPercent: 100,
            duration: 1,
            ease: "power2.in"
        })
        .to(paraRef.current, {
            opacity: 0,
            duration: 0.6,
            yPercent: 100,
            delay: -0.8,
            ease: "power2.in"
        });
    }
      });

    return (
        <>
            <section className="h-[85vh] bg-black" style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}} id="hero">
                <div className="fixed top-0 left-0 w-full h-[85vh] mobile:static">
                    <div className="w-full h-full mobile:relative tablet:relative">
                        <div className="w-full h-full absolute top-0 left-0">
                            <Image ref={imgRef} className="cover" src={imgSrc} alt={`${heading} Background Image`} fill priority={true} quality={100}/>
                        </div>
                        <div className="container relative z-[1] flex text-center items-center flex-col justify-center h-full w-full mobile:justify-start mobile:pt-[40%] tablet:justify-start tablet:pt-[30%]">
                            <h1 ref={headingRef} className="text-190 tracking-[1px] uppercase drop-shadow-2xl leading-[1.1] space-grotesk text-white overflow-hidden global-heading">
                                {heading}
                            </h1>
                            <div className="flex justify-between w-full items-end mt-[5%] tablet:flex-col tablet:items-start mobile:flex-col mobile:items-start">
                                <div className="mobile:absolute mobile:bottom-[10%] mobile:left-1/2 mobile:-translate-x-1/2 tablet:absolute tablet:bottom-[10%] tablet:left-1/2 tablet:-translate-x-1/2">
                                    <div data-cursor-size="60px" data-cursor-exclusion onClick={handleSmoothScroll} className="scroll-btn uppercase cursor-pointer text-24 mb-2 text-textBody">
                                        <span className="relative text-white after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">Scroll Down</span>
                                    </div>
                                </div>
                                <p ref={paraRef} className="text-24 drop-shadow-2xl text-white text-right w-[25vw] mobile:order-1 mobile:w-full mobile:text-center mobile:mt-[4vh] tablet:order-1 tablet:w-full tablet:text-center tablet:mt-[4vh]">
                                    {subheading}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero