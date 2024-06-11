import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";

const Pr = ({ className, img1, img2, img3, img4, img5 }) => {
   
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
                  // markers: true
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
                  // markers: true
                },
              });
            });
    
        }
       
      });
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="container pt-[7%] pb-[9%] mobile:pt-[20%] mobile:pb-[30%]">
                    <div className="space-y-[1.5vw] mb-[6vw] flex justify-between items-end mobile:flex-col mobile:items-start">
                        <div className="w-1/2 mobile:w-full mobile:mb-[8%]">
                            <h3 className="text-140 space-grotesk leading-[1.1] overflow-hidden heading-anim">
                                <span className="block">
                                    Public
                                </span>
                                <span className="block">
                                    Relations
                                </span>
                            </h3>
                            <p className="text-24 w-[70%] mobile:w-[90%] mobile:pt-[10%] para-animations">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div className="relative h-[45vh] border-2 rounded-[35px] overflow-hidden border-black/50 w-[41%] mobile:w-full mobile:h-[22vh] mobile:rounded-[15px] fadeUp">
                            <Image 
                                src={img1}
                                alt="pr-image"
                                fill
                                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                            />
                        </div>
                    </div>

                    <div className="w-full h-full gap-x-[3vw] gap-y-[5vw] grid grid-col-4 mobile:flex mobile:flex-col mobile:mt-[5%]">
                        <div className="col-span-4 h-[85vh] relative border-2 rounded-[35px] overflow-hidden border-black/50 mobile:h-[22vh] mobile:rounded-[15px] fadeUp">
                            <Image 
                                loading="lazy"
                                src={img2}
                                alt="StoryBoard Image"
                                fill
                                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                            />
                        </div>

                        {img3 && (
                            <div className="col-span-4 h-[45vh] relative border-2 rounded-[35px] overflow-hidden border-black/50 mobile:h-[22vh] mobile:rounded-[15px] fadeUp">
                                <Image 
                                    loading="lazy"
                                    src={img3}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                />
                            </div>
                        )}
                        {img4 && (
                            <div className="col-span-1 h-[65vh] relative border-2 rounded-[35px] overflow-hidden border-black/50  mobile:rounded-[15px] fadeUp">
                                <Image 
                                    loading="lazy"
                                    src={img4}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                />
                            </div>
                        )}
                        {img5 && (
                            <div className="col-span-3 h-[65vh] relative border-2 rounded-[35px] overflow-hidden border-black/50 mobile:h-[22vh] mobile:rounded-[15px] fadeUp">
                                <Image 
                                    loading="lazy"
                                    src={img5}
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

export default Pr