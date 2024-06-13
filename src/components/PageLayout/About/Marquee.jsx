import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Marquee = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    const firstText2 = useRef(null);
    const secondText2 = useRef(null);
    const slider2 = useRef(null);
    let xPercent2 = 0;
    let direction2 = 1;

    const container = useRef(null);

    useGSAP(()=> {
        requestAnimationFrame(animate);
        requestAnimationFrame(animate2);
    })

    const animate = () => {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      };

      const animate2 = () => {
        if (xPercent2 < -100) {
          xPercent2 = 0;
        } else if (xPercent2 > 0) {
          xPercent2 = -100;
        }
        gsap.set(firstText2.current, { xPercent: xPercent2 });
        gsap.set(secondText2.current, { xPercent: xPercent2 });
    
        requestAnimationFrame(animate2);
        xPercent2 += 0.1 * direction2;
      };

    return (
        <>
            <section id="marquee" ref={container} className="overflow-hidden bg-white">
                <div className="h-[50vw] flex justify-center items-center mobile:h-[80vw] mobile:my-[10%] tablet:my-[10%]">
                    <div className="">
                        <div ref={slider} className="text-textHead flex w-max relative rotate-[15deg] mobile:rotate-[12deg]">
                            <p ref={firstText} className="border-y border-textHead text-[4vw] w-max px-[0.5vw] mobile:text-[7vw] mobile:py-[1vw] tablet:text-[5vw]">
                                We Are Creative Curve.... We Transform Brands Worldwide
                            </p>
                            <p ref={secondText} className="border-y border-textHead text-[4vw] w-max absolute left-full px-[0.5vw] mobile:text-[7vw] mobile:py-[1vw] tablet:text-[5vw]">
                                We Are Creative Curve.... We Transform Brands Worldwide
                            </p>
                        </div>

                        <div ref={slider2} className="text-white flex w-max relative -rotate-[15deg] -translate-y-[8vw] mobile:-rotate-[12deg] mobile:-translate-y-[12vw]">
                            <p ref={firstText2} className="text-[4vw] bg-textHead w-max px-[0.5vw] mobile:text-[7vw] mobile:py-[1vw]  tablet:text-[5vw]">
                                We Are Creative Curve.... We Transform Brands Worldwide
                            </p>
                            <p ref={secondText2} className="text-[4vw] bg-textHead w-max absolute left-full px-[0.55vw] mobile:text-[7vw] mobile:py-[1vw] tablet:text-[5vw]">
                                We Are Creative Curve.... We Transform Brands Worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Marquee