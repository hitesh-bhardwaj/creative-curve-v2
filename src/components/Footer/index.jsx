import Content from "./Content";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { splitInLine } from "@/utils";
import { useEffect, useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
    const headingRef = useRef(null);


    useGSAP(() => {
        splitInLine(headingRef.current);
        const refText = document.querySelectorAll(".footer-creative-curve .line .word .char");
        gsap.from(refText, { 
            scrollTrigger: {
                trigger: "#footer", 
                scrub: 1, 
                start: "35% bottom", 
                end: "80% bottom",
                invalidateOnRefresh: true
            }, 
            yPercent: 100, 
            duration: 1,
            stagger: 0.05
        });
    })
    
    return (
        <>
            <footer 
                data-cursor-exclusion
                id="footer" 
                className="relative h-[50vw] mobile:h-[130vh] bg-black"
                style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
            >
                <div className='fixed bottom-0 h-[50vw] w-full mobile:static mobile:py-[10%]'>
                    <Content>
                        <div ref={headingRef} className="footer-creative-curve space-grotesk text-[#A9ABB5] text-[13vw] tracking-[-5px] leading-[0.8] overflow-hidden creative mobile:text-[23vw] mobile:text-center mobile:leading-[1]" id="text-anim">
                            Creative Curve
                        </div>
                    </Content>
                </div>
            </footer>
        </>
    )
}