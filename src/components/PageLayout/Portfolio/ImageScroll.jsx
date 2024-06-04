import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ImageScroll = () => {
    const container = useRef(null);
    const text = useRef(null);
    const img1 = useRef(null);
    const img2 = useRef(null);
    const img3 = useRef(null);
    const img4 = useRef(null);

    useGSAP(() => {

        const splitText = new SplitType(text.current, { types: 'lines, words, chars' });
        const textAnim = document.querySelectorAll(".line .word .char");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "=+2000 top",
                scrub: 0.25,
                pin: true,
            }
        });

        tl.from(textAnim, {
            opacity: 0.2,
            duration: 1,
            ease: "none",
            stagger: 0.1,
        })

        tl.fromTo(img1.current, {
            yPercent: 100,
        }, {
            yPercent: -450,
            duration: 10,
            delay: -10
        })
        tl.fromTo(img2.current, {
            yPercent: 100,
        }, {
            yPercent: -400,
            duration: 8,
            delay: -8
        })
        tl.fromTo(img3.current, {
            yPercent: 200,
        }, {
            yPercent: -200,
            duration: 20,
            delay: -12
        })
        tl.fromTo(img4.current, {
            yPercent: 100,
        }, {
            yPercent: -100,
            duration: 10,
            delay: -12
        })
        
    })

    return (
        <>
            <section ref={container} className="">
                <div className="container py-[10%] relative h-screen w-full flex justify-center items-center overflow-hidden">
                    <div className="relative z-10">
                        <h4 ref={text} className="aeonik text-textHead text-96 leading-[1.1] text-center">
                            <span>
                                Creative Curve has grown into a global powerhouse, recognized for its unique blend of innovation and expertise.
                            </span>
                        </h4>
                    </div>
                </div>
                    <Image 
                        ref={img1}
                        className="w-[15vw] absolute left-0"
                        src="/images/projects/scroll-1.png"
                        alt="Scroll Image"
                        width={500}
                        height={500}
                    />
                    <Image 
                        ref={img2}
                        className="w-[20vw] absolute right-1/3"
                        src="/images/projects/scroll-2.png"
                        alt="Scroll Image"
                        width={500}
                        height={500}
                    />
                    <Image 
                        ref={img3}
                        className="w-[15vw] absolute right-[10%]"    
                        src="/images/projects/scroll-3.png"
                        alt="Scroll Image"
                        width={500}
                        height={500}
                    />
                    <Image 
                        ref={img4}
                        className="w-[19vw] absolute left-[15%]"
                        src="/images/projects/scroll-4.png"
                        alt="Scroll Image"
                        width={500}
                        height={500}
                    />
            </section>
        </>
    )
}

export default ImageScroll