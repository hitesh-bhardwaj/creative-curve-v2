import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Box = () => {

    const container = useRef(null);
    const ele = useRef(null);
    const text = useRef(null);

    useGSAP(() => {
        gsap.fromTo(ele.current, {
            scale: 0,
            opacity: 0,
            y: 100,
        },{
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                end: "top top",
                markers: false,
                scrub: true,
            },
            scale: 1,
            opacity: 1,
            y: 0,
            rotate: "45deg",
            ease: "power3.in",
            duration: 1,
        })
    });

    useGSAP(() => {

        const splitText = new SplitType(text.current, { types: 'lines, words, chars' });

        if(globalThis.innerWidth<541){

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=1500 top",
                    markers: false,
                    scrub: true,
                    pin: true,
                }
            });
            tl.to(ele.current, {
                width: "800vw",
                height: "800vw",
                rotate: "180deg",
                ease: "power1.out",
                duration: 15,
            })
            .fromTo(document.querySelector("body"), {
                backgroundColor: "#fff",
            }, {
                backgroundColor: "#000",
                delay: -7,
                duration: 2,
            })
            .from(document.querySelectorAll(".story-para .line .word .char"), {
                filter: "blur(10px)",
                opacity: 0,
                y: 20,
                duration: 1,
                stagger: 0.1,
                delay: -4,
            });

        }
        if(globalThis.innerWidth<1024){
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=2000 top",
                    markers: false,
                    scrub: true,
                    pin: true,
                }
            });
            tl.to(ele.current, {
                width: "800vw",
                height: "800vw",
                rotate: "180deg",
                ease: "power1.out",
                duration: 20,
            })
            .fromTo(document.querySelector("body"), {
                backgroundColor: "#fff",
            }, {
                backgroundColor: "#000",
                delay: -8,
                duration: 2,
            })
            .from(document.querySelectorAll(".story-para .line .word .char"), {
                filter: "blur(10px)",
                opacity: 0,
                y: 20,
                duration: 1,
                stagger: 0.1,
                delay: -5,
            });

        }
        else{
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=2500 top",
                    markers: false,
                    scrub: true,
                    pin: true,
                }
            });
            tl.to(ele.current, {
                width: "380vw",
                height: "380vw",
                rotate: "135deg",
                ease: "power1.out",
                duration: 15,
            })
            .fromTo(container.current, {
                backgroundColor: "#fff",
            }, {
                backgroundColor: "#000",
                delay: -7,
                duration: 2,
            })
            .from(document.querySelectorAll(".story-para .line .word .char"), {
                filter: "blur(10px)",
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.1,
                delay: -4,
            });
        }
    });

    return (
        <>
            <section id="second-section" className="story-container h-full" ref={container}>
                <div className="min-h-screen overflow-hidden">
                    <div className="h-screen relative flex justify-center items-center overflow-hidden">
                        <img ref={ele} src="/images/about/about-square.svg" alt="hero" className="absolute w-[20%] max-w-[1000%] pointer-events-none" />
                        <div className="mx-auto w-[60%] mobile:w-[90%] tablet:w-[70%]">
                            <h2 ref={text} className="space-grotesk text-white text-48 text-left story-para">
                                <span>
                                    Every Brand has a Story Waiting to be told, and at Creative Curve, we consider it our mission to tell it in the most impactful way possible. We don't just Create Campaigns; we build narratives. We don't just Design Visuals; We Evoke Emotions.
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Box