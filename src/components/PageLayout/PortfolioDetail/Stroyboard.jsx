import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import SplitType from "split-type";

const Storyboard = ({ className, img1, img2, img3, img4 }) => {
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
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="pt-[7%] pb-[9%] mobile:pt-[12%] mobile:pb-[20%]">
                    <div className="space-y-[1.5vw] mb-[6vw]">
                        <h3 className="text-140 space-grotesk text-center leading-[1.2] overflow-hidden heading-anim">
                            <span classname="block ">
                                StoryBoard
                            </span>
                        </h3>
                        <p className="text-center text-24 w-[48%] mx-auto mobile:w-[90%] mobile:pt-[2vh] mobile:text-[4vw] para-animations">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                        </p>
                    </div>

                    <div className="w-full h-full space-y-[7vw]">
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] ">
                            <Image 
                                loading="lazy"
                                src={img1}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-left"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] mobile:pt-[3vh]">
                            <Image 
                                loading="lazy"
                                src={img2}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-left"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] mobile:pt-[3vh]">
                            <Image 
                                loading="lazy"
                                src={img3}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-center"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] mobile:pt-[3vh]">
                            <Image 
                                loading="lazy"
                                src={img4}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-right "
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Storyboard