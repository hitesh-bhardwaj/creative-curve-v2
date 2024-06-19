import Content from "./Content";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { splitInLine } from "@/utils";
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
    const headingRef = useRef(null);

    useGSAP(() => {
        splitInLine(headingRef.current);
        const refText = document.querySelectorAll(".footer-creative-curve .line .word .char");
        gsap.to(refText, { 
            scrollTrigger: {
                trigger: "#footer", 
                scrub: true, 
                start: "35% bottom", 
                end: "80% bottom",
                invalidateOnRefresh: true
            }, 
            y: 0, 
            duration: 1,
            stagger: 0.1,
        });
    })
    
    return (
        <>
            <footer
                data-cursor-color="#fff"
                data-cursor-exclusion
                id="footer" 
                className="relative h-[100vh] mobile:h-[130vh] bg-black tablet:h-[110vw]"
                style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
            >
                <div className='fixed bottom-0 h-[100vh] w-full mobile:h-[130vh] mobile:static mobile:py-[10%] tablet:h-[110vw]'>
                    <Content>
                        <div ref={headingRef} className="footer-creative-curve space-grotesk text-[#A9ABB5] text-[13vw] tracking-[-5px] leading-[0.8] overflow-hidden creative mobile:text-[23vw] mobile:text-center mobile:leading-[1] tablet:text-[13.5vw]" id="text-anim">
                            Creative Curve
                        </div>
                    </Content>
                </div>
            </footer>
        </>
    )
}