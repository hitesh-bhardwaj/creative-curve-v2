import ScrollButton from "../About/ScrollButton"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import SplitType from "split-type";

const PageHero = () => {
    
       
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh] relative">
                    <div className="flex flex-col justify-center h-full w-full items-center mobile:justify-start mobile:mt-[50%]">
                        <h1 className="text-76 tracking-[1px] w-4/5 text-center leading-[1.1] space-grotesk text-textHead mobile:w-full mobile:text-[10vw] heading-anim global-heading">
                            Global Branding in a Digital Age:Insight From Creative Curve 
                        </h1>

                        <div className="flex justify-center w-full mt-[5%] items-center gap-[2vw] mobile:flex-col mobile:mt-[15%] mobile:gap-[2.5vh]">
                            <p className="space-grotesk text-white text-24 rounded-full py-[0.8vw] bg-textHead text-center min-w-[11vw] mobile:px-[10vw] mobile:py-[4.5vw] mobile:text-[3.5vw]">Branding</p>
                            <p className="space-grotesk text-textHead text-24 rounded-full py-[0.8vw] border border-textHead text-center min-w-[11vw] mobile:text-[3.5vw] mobile:px-[5vw] mobile:py-[4vw]">19, June 2023</p>
                        </div>

                        <div className="w-full flex items-center justify-center absolute bottom-[10%] mobile:flex-col mobile:gap-[40vh]">
                            <ScrollButton />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageHero
