import VideoPlayer from "../VideoPlayer"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const Overview = ({ videoSrc, videoPoster, content1, content2 }) => {
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
            <section id="second-section" className="bg-black text-white">
                <div className="container pt-[8%] pb-[8%] mobile:py-[20%]">
                    <div className="flex justify-between items-start mobile:flex-col">
                        <h2 className="overview text-76 space-grotesk uppercase leading-[1.2] overflow-hidden">
                            <span className="block heading-anim">
                                Overview
                            </span>
                        </h2>
                        <div className="w-[55%] space-y-[2vw] mobile:w-full mobile:mt-[4vh]">
                            <p className="text-[2.08vw] leading-[1.3] mobile:text-[4vw] para-animations">
                                {content1}
                            </p>
                            {content2 && (
                                <p className="text-[2.08vw] leading-[1.3] mobile:text-[4vw] para-animations">
                                    {content2}
                                </p>
                            )}
                        </div>
                    </div>

                    {videoSrc && (
                        <div className="w-full mt-[8%] rounded-[40px] overflow-hidden mobile:h-[70vh] mobile:mt-[15%]">
                            <VideoPlayer 
                                src={videoSrc}
                                poster={videoPoster}
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Overview