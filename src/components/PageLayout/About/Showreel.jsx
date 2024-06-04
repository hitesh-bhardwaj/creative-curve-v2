import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Showreel = () => {

    const container = useRef(null);
    const ele = useRef(null);
    const video = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "50% 50%",
                markers: false,
                scrub: true,
            },
        });

        tl.from(video.current, {
            scale: 0.5,
            duration: 2,
        });

        tl.from(ele.current, {
            duration: 2,
            delay: -2,
            gap: "45vw",
            ease: "power3.inOut"
        })
    });

    return (
        <>
            <section ref={container} id="showreel" className="bg-black">
                <div className="h-screen w-screen relative flex items-center justify-center">
                    <div ref={video} className="overflow-hidden w-full h-full absolute">
                        <video 
                            autoPlay
                            muted
                            loop
                            playsInline
                            loading="lazy"
                            className="w-full h-full aspect-video">
                            <source src="/showreel.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div ref={ele} className="container w-full flex items-center justify-center gap-[2vw] relative z-10">
                        <h4 className="text-white text-[10vw]">
                            Play
                        </h4>
                        <h4 className="text-white text-[10vw]">
                            Reel
                        </h4>
                    </div>
                    <div className="absolute z-10 bottom-[2.5%] text-white text-22">
                        <p>
                            Our work is best experienced in motion. <br /> Don’t forget to put on your headphones.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Showreel