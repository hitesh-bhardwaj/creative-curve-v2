import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Story = () => {

    const container = useRef(null);
    const ele = useRef(null);
    const text = useRef(null);

    useGSAP(() => {
        gsap.to(ele.current, {
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
        })
    });
    useGSAP(() => {
        const splitText = new SplitType(text.current, { types: 'lines, words, chars' });

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
    });

    useGSAP(() => {
        gsap.fromTo(document.querySelector("body"), {
            backgroundColor: "#000",
        },{
            backgroundColor: "#fff",
            scrollTrigger: {
                trigger: ".story-container",
                start: "95% 50%",
                end: "bottom 50%",
                markers: false,
                scrub: true,
            },
        });
    });

    return (
        <>
            <section id="second-section" className="story-container h-full" ref={container}>
                <div className="min-h-screen overflow-hidden">
                    <div className="h-screen relative flex justify-center items-center overflow-hidden">
                        <img ref={ele} src="/images/about/about-square.svg" alt="hero" className="absolute w-[20%] scale-0 opacity-0 translate-y-[100px] max-w-[1000%] pointer-events-none" />
                        <div className="mx-auto w-[60%]">
                            <h2 ref={text} className="space-grotesk text-white text-48 text-left story-para">
                                <span>
                                    Every Brand has a Story Waiting to be told, and at Creative Curve, we consider it our mission to tell it in the most impactful way possible. We don't just Create Campaigns; we build narratives. We don't just Design Visuals; We Evoke Emotions.
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="container pb-[10vw]">
                        <div className="story-main text-white">
                            <div className="accordion space-y-[2vw]">
                                <span className="w-full block border-b border-dashed border-white/50"/>
                                <div className="flex justify-between px-[1vw]">
                                    <div className="w-[40%] space-y-[1.5vw]">
                                        <h3 className="text-44">
                                            <span>OUR STORY</span>
                                        </h3>
                                        <p className="text-24">
                                            <span>
                                                At the heart of our agency lies a passion for excellence, spanning continents and industries. We work with Fortune 500 companies, innovative startups, visionary founders, and even governments and investment funds. But what truly defines Creative Curve is our unwavering commitment to bringing visions to life, no matter how big or small.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-[40%] h-[20vw] overflow-hidden rounded-xl border border-white/50">
                                        <Image 
                                            className="object-cover object-top h-full w-full"
                                            src="/images/about/story.png"
                                            alt="Our Story Image"
                                            width={500}
                                            height={400}
                                        />
                                    </div>
                                </div>
                                <span className="w-full block border-b border-dashed border-white/50"/>
                            </div>

                            <div className="accordion space-y-[2vw]">
                                <span className="w-full block border-b border-dashed border-white/50"/>
                                <div className="flex justify-between px-[1vw]">
                                    <div className="w-[40%] space-y-[1.5vw]">
                                        <h3 className="text-44">
                                            <span>OUR MISSION</span>
                                        </h3>
                                        <p className="text-24">
                                            <span>
                                                At the heart of our agency lies a passion for excellence, spanning continents and industries. We work with Fortune 500 companies, innovative startups, visionary founders, and even governments and investment funds. But what truly defines Creative Curve is our unwavering commitment to bringing visions to life, no matter how big or small.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-[40%] h-[20vw] overflow-hidden rounded-xl border border-white/50">
                                        <Image 
                                            className="object-cover object-top h-full w-full"
                                            src="/images/about/story.png"
                                            alt="Our Story Image"
                                            width={500}
                                            height={400}
                                        />
                                    </div>
                                </div>
                                <span className="w-full block border-b border-dashed border-white/50"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Story