import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { SplitInLineWord } from "@/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ImageScroll = () => {
    const container = useRef(null);
    const text = useRef(null);
    const img1 = useRef(null);
    const img2 = useRef(null);
    const img3 = useRef(null);
    const img4 = useRef(null);

    useGSAP(() => {

        SplitInLineWord(text.current)
        const textbreakLine = text.current.querySelectorAll(".line");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "=+3000 top",
                scrub: true,
                pin: true,
            }
        });

        tl.to(textbreakLine, {
            backgroundPositionX: 0,
            duration: 3,
            stagger: 3,
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
                <div className="container py-[10%] relative h-screen w-full flex justify-center items-center overflow-hidden ">
                    <div className="relative">
                        <h4 ref={text} className="aeonik text-textHead text-96 leading-[1.2] text-center mobile:text-start mobile:text-[12vw] tablet:text-[8vw] textbreak">
                            Creative Curve has grown into a global powerhouse, recognized for its unique blend of innovation and expertise.
                        </h4>
                    </div>
                </div>
                    <Image 
                        ref={img1}
                        className="w-[15vw] absolute left-0 mobile:w-[40vw] mobile:left-[50%] tablet:w-[25vw] mix-blend-exclusion"
                        src="/images/projects/scroll-1.webp"
                        alt="Scroll Image"
                        width={500}
                        height={500}
                    />
                    <Image 
                        ref={img2}
                        className="w-[20vw] absolute right-1/3 mobile:w-[40vw] mobile:left-[5%] tablet:w-[30vw] mix-blend-exclusion"
                        src="/images/projects/scroll-2.webp"
                        alt="Scroll Image"
                        width={500}
                        height={500}
                    />
                    <Image 
                        ref={img3}
                        className="w-[15vw] absolute right-[10%] mobile:w-[40vw] tablet:w-[25vw] mix-blend-exclusion"    
                        src="/images/projects/scroll-3.webp"
                        alt="Scroll Image"
                        width={500}
                        height={500}
                    />
                    <Image 
                        ref={img4}
                        className="w-[19vw] absolute left-[15%] mobile:w-[40vw] mobile:hidden tablet:w-[35vw] mix-blend-exclusion"
                        src="/images/projects/scroll-4.webp"
                        alt="Scroll Image"
                        width={500}
                        height={500}
                    />
            </section>
        </>
    )
}

export default ImageScroll