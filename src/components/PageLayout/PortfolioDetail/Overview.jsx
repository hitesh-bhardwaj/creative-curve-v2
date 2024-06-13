import VideoPlayer from "../VideoPlayer"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const Overview = ({ videoSrc, videoPoster, content1, content2 }) => {
   
    return (
        <>
            <section id="second-section" className="bg-black text-white" data-cursor-exclusion>
                <div className="container pt-[8%] pb-[8%] mobile:py-[20%] tablet:py-[15%]">
                    <div className="flex justify-between items-start mobile:flex-col">
                        <h2 className="overview text-76 space-grotesk uppercase leading-[1.2] overflow-hidden">
                            <span className="block heading-anim">
                                Overview
                            </span>
                        </h2>
                        <div className="w-[55%] space-y-[2vw] mobile:w-full mobile:mt-[4vh]">
                            <p className="text-[2.08vw] leading-[1.3] mobile:text-[4vw] para-animations tablet:text-[2.5vw]">
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
                        <div className="w-full mt-[8%] rounded-[40px] overflow-hidden mobile:h-[70vh] mobile:mt-[15%] fadeUp">
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