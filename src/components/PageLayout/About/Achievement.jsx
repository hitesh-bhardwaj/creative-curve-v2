import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitInChar } from "@/utils";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Hover on the link
const handleHover = (e) => {
    const chars = e.currentTarget.querySelectorAll('.split-text-1 .char');
    const chars2 = e.currentTarget.querySelectorAll('.split-text-2 .char');
    gsap.to(chars, {
        yPercent: -100,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
    });
    gsap.to(chars2, {
        yPercent: -100,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
    });
};

// Hover off the link
const handleHoverExit = (e) => {
    const chars = e.currentTarget.querySelectorAll('.split-text-1 .char');
    const chars2 = e.currentTarget.querySelectorAll('.split-text-2 .char');

    gsap.to(chars, {
        yPercent: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
    });
    gsap.to(chars2, {
        yPercent: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
    });
};

const Achievement = () => {
    const containerRef = useRef(null);
    const text = useRef(null);

    useGSAP(()=> {

        if (containerRef.current) {
            const paragraphs = containerRef.current.querySelectorAll('.split-text');
            paragraphs.forEach(paragraph => SplitInChar(paragraph));
        }

        const div1 = containerRef.current.querySelectorAll(".ach-block-left");
        const div2 = containerRef.current.querySelectorAll(".ach-block-right");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                end: "bottom 90%",
                markers: false,
                scrub: true,
            },
        });

        tl.from(div1, {
            xPercent: -100,
            yPercent: 50,
            rotateZ: "-30deg",
            duration: 1,
            stagger: 0.5,
        });
        tl.from(div2, {
            xPercent: 100,
            yPercent: 50,
            rotateZ: "30deg",
            duration: 1,
            stagger: 0.5,
        }, "-=1");
    });

    return (
        <>
            <section id="achievement" className="pt-[10%] pb-[10%]">
                <div className="container">
                    
                    <div className="w-[55%] mobile:w-full overflow-hidden">
                        <p className="text-20 mb-[1vw] fadeUp about-ach-small ">Our Achievements</p>
                        <h2 className="text-96 leading-[1] space-grotesk text-textHead mb-[1vw] heading-anim">
                            <span className="">Check Recent
                                </span>
                            <span className=""> Achievements</span>
                        </h2>
                        <p className="text-22 w-[65%] mb-[2vw] para-animations mobile:w-[90%] mobile:mt-[2vh] overflow-hidden">
                        <span className="block">
                            We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                        </span>
                        </p>
                    </div>

                    <div className="w-full flex justify-end -mt-[2%] mobile:mt-[5vh]">
                        <div className="w-1/3 text-left mobile:w-[80%] mobile:text-right ">
                            <p className="text-24 para-animations overflow-hidden">
                                <span className="block">
                                    We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div ref={containerRef} className="w-full grid grid-cols-2 text-textHead grid-rows-5 gap-x-[3vw] gap-y-[4vw] mt-[5vw] mobile:flex mobile:flex-col mobile:gap-[2vh] about-ach-block-container">
                        
                        <div onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className="bg-[#F6FFE7] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-1 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px] ach-block-left">
                            <div className="h-[5.5vw] overflow-hidden">
                                <p ref={text} className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw] split-text split-text-1">
                                    1270
                                    <span className="text-[80%] h-fit overflow-hidden translate-y-[-10%] font-normal mobile:text-[10vw]">
                                    +
                                    </span>
                                </p>
                                <p ref={text} className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw] split-text split-text-2">
                                    1270
                                    <span className="text-[80%] h-fit mt-[-10%] translate-y-[-10%] font-normal mobile:text-[10vw]">
                                    +
                                    </span>
                                </p>
                            </div>
                            
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Project Delivered
                                </h5>
                            </div>
                        </div>

                        <div onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className="bg-[#F3F2FF] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-2 row-start-2 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px] ach-block-right">
                            <div className="h-[5.5vw] overflow-hidden">
                                <p ref={text} className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw] split-text split-text-1">
                                    130
                                    <span className="text-[80%] h-fit overflow-hidden translate-y-[-10%] font-normal mobile:text-[10vw]">
                                    +
                                    </span>
                                </p>
                                <p ref={text} className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw] split-text split-text-2">
                                    130
                                    <span className="text-[80%] h-fit mt-[-10%] translate-y-[-10%] font-normal mobile:text-[10vw]">
                                    +
                                    </span>
                                </p>
                            </div>
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Clients Thrilled
                                </h5>
                            </div>
                        </div>

                        <div onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className="bg-[#E8F2FF] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-1 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px] ach-block-left">
                            <div className="h-[5.5vw] overflow-hidden">
                                <p ref={text} className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw] split-text split-text-1">
                                    8
                                    <span className="text-[80%] h-fit overflow-hidden translate-y-[-10%] font-normal mobile:text-[10vw]">
                                    +
                                    </span>
                                </p>
                                <p ref={text} className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw] split-text split-text-2">
                                    8
                                    <span className="text-[80%] h-fit mt-[-10%] translate-y-[-10%] font-normal mobile:text-[10vw]">
                                    +
                                    </span>
                                </p>
                            </div>
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Nation Served
                                </h5>
                            </div>
                        </div>

                        <div onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className="bg-[#FFF3ED] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px] ach-block-right">
                            <div className="h-[5.5vw] overflow-hidden">
                                <p ref={text} className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw] split-text split-text-1">
                                    20
                                    <span className="text-[80%] h-fit overflow-hidden translate-y-[-10%] font-normal mobile:text-[10vw]">
                                    +
                                    </span>
                                </p>
                                <p ref={text} className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw] split-text split-text-2">
                                    20
                                    <span className="text-[80%] h-fit mt-[-10%] translate-y-[-10%] font-normal mobile:text-[10vw]">
                                    +
                                    </span>
                                </p>
                            </div>
                            <div className="text-left text-[2.8vw] leading-[1.2] w-1/2 mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Years of Unwavering Excellence
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Achievement