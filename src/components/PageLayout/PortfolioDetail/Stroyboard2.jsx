import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";

const Storyboard2 = ({ className, img1, img2, img3, img4, img5, img6 }) => {
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
                <div className="container pt-[7%] pb-[10%] mobile:pt-[20%] mobile:pb-[30%]">
                    <div className="space-y-[1.5vw] mb-[6vw]">
                        <h3 className="text-140 space-grotesk text-center leading-[1.2] overflow-hidden heading-anim">
                            <span className="block ">
                                StoryBoard
                            </span>
                        </h3>
                        <p className="text-center text-24 w-[60%] mx-auto mobile:w-full mobile:text-[4vw] mobile:pt-[3vh] para-animations">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                        </p>
                    </div>

                    <div className="w-full h-full gap-x-[3vw] gap-y-[5vw] grid grid-col-2 mobile:flex mobile:flex-col mobile:gap-[3vh] mobile:mt-[4vh]">
                        <div className="col-span-2 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400 mobile:h-[25vh] mobile:rounded-[20px] mobile:border-2">
                            <Image 
                                loading="lazy"
                                src={img1}
                                alt="StoryBoard Image"
                                fill
                                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                            />
                        </div>
                        <div className="col-span-1 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400 mobile:h-[50vh] mobile:rounded-[20px] mobile:border-2">
                            <Image 
                                loading="lazy"
                                src={img2}
                                alt="StoryBoard Image"
                                fill
                                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                            />
                        </div>
                        <div className="col-span-1 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400 mobile:h-[40vh] mobile:rounded-[20px] mobile:border-2">
                            <Image 
                                loading="lazy"
                                src={img3}
                                alt="StoryBoard Image"
                                fill
                                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                            />
                        </div>
                        <div className="col-span-2 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400 mobile:h-[25vh] mobile:rounded-[20px] mobile:border-2">
                            <Image 
                                loading="lazy"
                                src={img4}
                                alt="StoryBoard Image"
                                fill
                                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                            />
                        </div>
                        <div className="col-span-2 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400 mobile:h-[23vh] mobile:rounded-[20px] mobile:border-2">
                            <Image 
                                loading="lazy"
                                src={img5}
                                alt="StoryBoard Image"
                                fill
                                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                            />
                        </div>
                        <div className="col-span-2 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400 mobile:h-[22vh] mobile:rounded-[20px] mobile:border-2">
                            <Image 
                                loading="lazy"
                                src={img6}
                                alt="StoryBoard Image"
                                fill
                                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Storyboard2