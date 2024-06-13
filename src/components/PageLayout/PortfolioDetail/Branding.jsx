import Image from "next/image"
import VideoPlayer from "../VideoPlayer"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Branding = ({ className, videoSrc, videoPoster, img1, img2, img3 }) => {
    useGSAP(() => {
        if(globalThis.innerWidth<541){
            const parallaxImgs = document.querySelectorAll(".parallaximg");
        
            parallaxImgs.forEach((parallaxImg) => {
              gsap.to(parallaxImg, {
                yPercent: 15,
                scrollTrigger: {
                  trigger: parallaxImg,
                  start: "20% bottom",
                  end: "bottom top",
                  scrub: true,
                },
              });
            });
    
        }else{
            const parallaxImgs = document.querySelectorAll(".parallaximg");
        
            parallaxImgs.forEach((parallaxImg) => {
              gsap.to(parallaxImg, {
                yPercent: 10,
                scrollTrigger: {
                  trigger: parallaxImg,
                  start: "20% bottom",
                  end: "bottom top",
                  scrub: true,
                },
              });
            });
        }
      });
    return (
        <>
            <section id="second-section" className={`${className}`} data-cursor-exclusion>
                <div className="container pt-[7%] pb-[9%] mobile:pt-[12%] mobile:pb-[20%]">
                    <div className="space-y-[1.5vw] mb-[7vw] relative w-2/3">
                        <h3 className="text-140 space-grotesk leading-[1.2] heading-anim">
                            <span className="ml-[10%] w-full block mobile:ml-0">
                                Branding
                            </span>
                            <span className="block">
                                Overview
                            </span>
                        </h3>
                        <p className="right-0 bottom-0 pb-[1.5vw] absolute text-24 w-[40%] mx-auto mobile:static mobile:w-full mobile:text-[4vw] para-animations">
                            From global branding trends to the nuances of digital storytelling, explore the world through our lens.
                        </p>
                    </div>

                    <div className="w-full h-full grid grid-cols-2 gap-[3vw] mobile:flex mobile:flex-col mobile:mt-[6vh]">
                        {img1 && (
                            <div className="col-span-2 h-[90vh] relative rounded-[40px] overflow-hidden mobile:rounded-[20px] mobile:h-[22vh] mobile:border-2 mobile:border-black fadeUp">
                                <Image 
                                    loading="lazy"
                                    src={img1}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                />
                            </div>
                        )}
                        {videoSrc && (
                            <div className="col-span-2 rounded-[40px] overflow-hidden mobile:rounded-[15px] fadeUp">
                                <VideoPlayer 
                                    src={videoSrc}
                                    poster={videoPoster}
                                />
                            </div>
                        )}
                        {img2 && (
                            <div className="col-span-1 h-[55vh] relative rounded-[40px] overflow-hidden  mobile:rounded-[20px] mobile:mt-[2vh] mobile:border-2 mobile:border-black mobile:h-[22vh] fadeUp">
                                <Image 
                                    loading="lazy"
                                    src={img2}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                />
                            </div>
                        )}
                        {img3 && (
                            <div className="col-span-1 h-[55vh] relative rounded-[40px] overflow-hidden  mobile:rounded-[20px] mobile:mt-[2vh] mobile:border-2 mobile:border-black mobile:h-[22vh] fadeUp">
                                <Image 
                                    loading="lazy"
                                    src={img3}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Branding