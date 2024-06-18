import { useRef } from "react";
import ScrollButton from "../About/ScrollButton"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const PageHero = () => {

    const heading = useRef(null);
    const category = useRef(null);
    const date = useRef(null);

    useGSAP(() => {
        const text = new SplitType(heading.current, { types: 'lines, words' });
        const textWords = heading.current.querySelectorAll(".word");
        const tl = gsap.timeline();
  
        tl.from(textWords, {
            duration: 0.5,
            yPercent: 100,
            stagger: 0.04,
            delay: 1,
            ease: "power3.out"
        })
        .from(category.current, {
            opacity: 0,
            duration: 0.6,
            yPercent: 100,
            delay: -0.5,
            ease: "power3.out"
        }).from(date.current, {
            opacity: 0,
            duration: 0.6,
            yPercent: 100,
            delay: -0.5,
            ease: "power3.out"
        }).from(".scroll-btn", {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: "power3.out",
          delay: -0.4
        })
    }, []);

    if(globalThis.innerWidth>640){
    useGSAP(()=> {
        const textWords = heading.current.querySelectorAll(".word")
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom 40%",
            scrub: true,
          }
        });
    
        tl.to(date.current, {
          opacity: 0,
          yPercent: 100,
          duration: 1,
          ease: "power2.in",
        }).to(category.current, {
          opacity: 0,
          yPercent: 100,
          duration: 1,
          delay: -1,
          ease: "power2.in",
        }).to(textWords, {
            duration: 1,
            yPercent: 100,
            delay: -0.2,
            ease: "power2.in"
        });
      });
    }
       
    return (
        <>
            <section className="h-[85vh] mobile:h-screen" style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}} id="hero">
                <div className="fixed top-0 left-0 w-full h-[85vh] mobile:h-screen mobile:static">
                    <div className="container w-full h-full mobile:relative tablet:relative">
                        <div className="flex flex-col justify-center h-full w-full items-center tablet:justify-center mobile:justify-start mobile:pt-[40%]">
                            <h1 ref={heading} className="text-76 tracking-[1px] w-4/5 text-center leading-[1.2] space-grotesk text-textHead mobile:w-full mobile:text-[10vw] global-heading">
                                Global Branding in a Digital Age: Insight From Creative Curve 
                            </h1>

                            <div className="flex justify-center w-full mt-[5%] items-center gap-[2vw] mobile:flex-col mobile:mt-[15%] mobile:gap-[2.5vh]">
                                <p ref={category} className="space-grotesk text-white text-24 rounded-full py-[0.8vw] bg-textHead text-center min-w-[11vw] mobile:px-[10vw] mobile:py-[4.5vw] mobile:text-[4vw] tablet:px-[4.2vw] tablet:py-[1.5vw] tablet:text-[3vw]">Branding</p>
                                <p ref={date} className="space-grotesk text-textHead text-24 rounded-full py-[0.8vw] border border-textHead text-center min-w-[11vw] mobile:text-[4vw] mobile:px-[5vw] mobile:py-[4vw] tablet:px-[3vw] tablet:py-[1.5vw] tablet:text-[2.7vw]">19, June 2023</p>
                            </div>

                            <div className="w-full flex items-center justify-center absolute bottom-[10%] mobile:flex-col mobile:gap-[40vh]">
                                <ScrollButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageHero
