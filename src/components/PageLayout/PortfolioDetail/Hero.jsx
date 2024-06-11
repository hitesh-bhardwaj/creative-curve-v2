import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);



const Hero = ({ heading, subheading, imgSrc }) => {
    useGSAP(() => {
        const headings = document.querySelectorAll(".heading-anim");
        headings.forEach((heading) => {
          const headingSplit = new SplitType(heading, {
            types: "lines, words, chars",
          });
          let headingWord = heading.querySelectorAll(".word .char");
          gsap.from(headingWord, {
            scrollTrigger: {
              trigger: headingWord,
              start: "top 85%",
            },
            duration: 0.6,
            yPercent: 110,
            rotate: "10deg",
            stagger: 0.04,
          });
        });
      }, []);
      useGSAP(() => {
        const paraAnimations = document.querySelectorAll(".para-animations");
        paraAnimations.forEach((paraAnimation) => {
          const paraSplit = new SplitType(paraAnimation, { types: "words, chars" });
          let paraword = paraAnimation.querySelectorAll(".word .char");
          gsap.from(paraword, {
            scrollTrigger: {
              trigger: paraword,
              start: "top 85%",
            },
            filter: "blur(10px)",
            opacity: 0,
            duration: 0.6,
            yPercent: 100,
            stagger: 0.005,
          });
        });
      }, []);

    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {y: "#second-section", offsetY: 50},
            ease: "power3.inOut",
        });
    };

    return (
        <>
            <section id="hero">
                <div className="h-[85vh] relative">
                    <div className="w-full h-full absolute top-0 left-0">
                        <Image className="cover" src={imgSrc} alt={`${heading} Background Image`} fill priority={true}/>
                    </div>
                    <div className="container relative z-[1] flex text-center items-center flex-col justify-center h-full w-full mobile:justify-start mobile:pt-[40%]">
                        <h1 className="text-190 tracking-[1px] leading-[1.1] space-grotesk text-white overflow-hidden">
                            <span className="uppercase drop-shadow-2xl heading-anim block">{heading}</span>
                        </h1>

                        <div className="flex justify-between w-full absolute bottom-[15%] mobile:flex-col mobile:static">
                            <div onClick={handleSmoothScroll} className="uppercase cursor-pointer text-24 text-white mobile:order-2 mobile:absolute mobile:bottom-[10%] mobile:left-[30%]">
                                <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">Scroll Down</span>
                            </div>

                            <p className="text-24 text-white text-right w-[25vw] mobile:order-1 mobile:w-full mobile:text-center mobile:mt-[4vh] para-animations">
                                <span className="drop-shadow-2xl">
                                    {subheading}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero