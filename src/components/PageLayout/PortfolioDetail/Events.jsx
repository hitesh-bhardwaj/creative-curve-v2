import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



import SplitType from "split-type";

const Events = ({ className, img1, img2, img3, img4, img5 }) => {
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
                <div className="container pt-[7%] pb-[9%] mobile:pt-[20%] mobile:pb-[25%]">
                    <div className="space-y-[1.5vw] mb-[6vw] relative w-full">
                        <div className="w-full flex justify-between items-start mobile:flex-col">
                            <h3 className="text-140 space-grotesk leading-[1.2] heading-anim overflow-hidden">
                                <span className="w-full block ">
                                    Events
                                </span>
                            </h3>
                            <p className="pt-[2vw] text-24 w-[25%] mobile:w-[70%] para-animations">
                                From global branding trends to the nuances of digital storytelling, explore the world through our lens.
                            </p>
                        </div>
                        <p className="text-24 w-[35%] mobile:w-[90%] mobile:pt-[4vh] para-animations">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="w-full h-full grid grid-cols-8 gap-[3vw] items-end mobile:flex mobile:flex-col">
                        {img1 && (
                            <div className="col-span-5 h-[60vh] relative rounded-[40px] overflow-hidden mobile:w-full mobile:rounded-[20px] mobile:mt-[8%] mobile:border-2 mobile:border-black mobile:h-[22vh]">
                                <Image 
                                    loading="lazy"
                                    src={img1}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                />
                            </div>
                        )}
                        {img2 && (
                            <div className="col-span-3 -mt-[25%] h-[80vh] relative rounded-[40px] overflow-hidden mobile:w-full mobile:h-[22vh] mobile:rounded-[20px] mobile:mt-[5%] mobile:border-2 mobile:border-black">
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
                            <div className="col-span-8 h-[85vh] relative rounded-[40px] overflow-hidden mobile:w-full mobile:rounded-[20px] mobile:mt-[5%] mobile:border-black mobile:border-2 mobile:h-[22vh]">
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
                            <div className="col-span-4 h-[55vh] relative rounded-[40px] overflow-hidden mobile:rounded-[20px] mobile:mt-[5%] mobile:border-black mobile:hidden">
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
                            <div className="col-span-4 h-[55vh] relative rounded-[40px] overflow-hidden mobile:rounded-[20px] mobile:w-full mobile:mt-[5%] mobile:border-black mobile:border-2 mobile:h-[22vh]">
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

export default Events