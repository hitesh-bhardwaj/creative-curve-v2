import { SplitInLineWord } from "@/utils";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Parallax() {

    const textbreak = useRef(null);

    useGSAP(()=>{
        SplitInLineWord(textbreak.current)
        const textbreakLine = textbreak.current.querySelectorAll(".line");
        gsap.to(textbreakLine, {
            scrollTrigger: {
                trigger: "#parallax",
                start: "top 80%",
                end: "bottom 40%",
                scrub: true,
            },
            backgroundPositionX: 0,
            duration: 1,
            stagger: 1,
            ease: "power2.inOut"
        })
    }, []);

      useGSAP(() => {
        const parallaxDowns = document.querySelectorAll("[data-parallax-down] img");
        parallaxDowns.forEach((parallaxDown) => {
            gsap.from(parallaxDown, {
                yPercent: -30,
                scrollTrigger: {
                    trigger: parallaxDown,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    markers: false
                  },
            })
        })
    }, []);

    useGSAP(() => {
        const parallaxUps = document.querySelectorAll("[data-parallax-up] img");
        parallaxUps.forEach((parallaxUp) => {
            gsap.from(parallaxUp, {
                yPercent: 30,
                scrollTrigger: {
                    trigger: parallaxUp,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    markers: false
                  },
            })
        })
    }, []);

    return (
        <>
            <section id="parallax">
                <div className="container py-[10%] relative mobile:py-[40%] tablet:py-[25%] min-h-[95vw]">
                    <h3 ref={textbreak} className="text-120 aeonik leading-[1.2] w-[82%] section-break text-textHead mobile:leading-[1.2] mobile:w-full textbreak tablet:w-[90%]">
                        Creative Curve has grown into a global powerhouse, recognized for its unique blend of innovation and expertise. Our diverse team, hailing from various corners of the world
                    </h3>
                    <div data-parallax-down className="absolute h-[22vw] top-[10%] right-[20%] invert mix-blend-exclusion mobile:h-[60vw] mobile:right-0 mobile:top-[7%] tablet:h-[40vw] tablet:top-[15%]">
                        <Image
                            className="w-full h-full object-cover"
                            src="/images/home/parallax-1.webp"
                            width={1000}
                            height={1000}
                            alt="Image"
                            loading="lazy"
                        />
                    </div>
                    <div data-parallax-up className="absolute h-[35vw] top-[40%] right-[-10%] invert mix-blend-exclusion mobile:h-[60vw] mobile:right-[unset] mobile:left-[-10%] mobile:top-[60%] tablet:w-[50vw] tablet:left-[-20%] tablet:top-[60%] table:right-[unset]">
                        <Image
                            className="w-full h-full object-cover"
                            src="/images/home/parallax-2.webp"
                            width={1000}
                            height={1000}
                            alt="Image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Parallax