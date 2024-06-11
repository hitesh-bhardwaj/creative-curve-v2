import { useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Link from "next/link";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Blog() {

    const trigger = useRef(null);
    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);

    useGSAP(() => {
        if(globalThis.innerWidth<541){

        }
        else{
            const tl = gsap.timeline({
                scrollTrigger : {
                    trigger: trigger.current,
                    scrub: true,
                    start: 'top bottom',
                    end: 'bottom 50%',
                }
            });
    
            tl.to(item2.current, {
                y: "-30%",
                duration: 2.8
            });
            tl.to(item3.current, {
                y: "-50%",
                duration: 2.8
            }, "-0.5");

        }
        
    });
    useGSAP(() => {
        if(globalThis.innerWidth<541){
            // const parallaxImgs = document.querySelectorAll(".parallaxIMG");
        
            // parallaxImgs.forEach((parallaxImg) => {
            //   gsap.to(parallaxImg, {
            //     yPercent: 10,
            //     scrollTrigger: {
            //       trigger: parallaxImg,
            //       start: "20% bottom",
            //       end: "bottom top",
            //       scrub: true,
            //       // markers: true
            //     },
            //   });
            // });
    
        }else{
            const parallaximgs = document.querySelectorAll(".parallaxImg");
        
            parallaximgs.forEach((parallaximg) => {
              gsap.to(parallaximg, {
                yPercent: 10,
                scrollTrigger: {
                  trigger: parallaximg,
                  start: "20% bottom",
                  end: "bottom top",
                  scrub: true,
                  // markers: true
                },
              });
            });
    
        }
       
      });

    return(
        <>
            <section id="Blog" className="bg-dark relative z-[1]">
                <div className="container py-[10%] mobile:py-[20%]">

                    <div className="w-[55%] mobile:w-full">
                        <p className="text-24 mb-[1vw] fadeUp">Our Blogs</p>
                        <h2 className="text-96 space-grotesk mb-[1vw] heading-anim mobile:leading-[1]">
                            <span className="block overflow-hidden">
                                Dive Into Our
                            </span>
                            <span className="block overflow-hidden">
                                Creative Musings
                            </span>
                        </h2>                    
                        <p className="text-22 w-[65%] mb-[2vw] para-animations mobile:w-[90%] mobile:mt-[2vh]">
                            <span>
                                A curated collection of thoughts, ideas, and inspirations. Join us in this exploration, where every word is crafted with passion.
                            </span>
                        </p>
                        <Link href="/portfolio" className="fadeUp border block w-fit border-[#4D4D4D] py-[1vw] sec-content-24 px-[2.5vw] rounded-full mobile:py-[2vw] mobile:px-[7vw] mobile:mt-[4vh]">
                            <span className="uppercase">
                                ALL Blogs
                            </span>
                        </Link>
                    </div>

                    {/* <!-- Blog Grid --> */}
                        <div className="flex items-center justify-between gap-x-[2vw] pt-[8vw] mobile:flex-col" ref={trigger}>
                            <div data-cursor-color="#fff" data-cursor-text="Read More" data-cursor-size="100px" className="w-1/3 cursor-none blog-item-1 mobile:w-full mobile:mt-[8vh]" ref={item1}>
                                <div className="space-y-[1.2vw] mobile:space-y-[4vw]">
                                    <div className="post-prev-2-img overflow-hidden rounded-[20px]">
                                        <a href="#">
                                            <img src="/images/blogs/blog-1.png" className="w-full h-full object-cover scale-[110%] translate-y-[-10%] parallaxIMG mobile:scale-[120%] mobile:translate-y-[-5%]" alt="Blog Image" title="Blog Image" loading="lazy"/>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw] text-24 mobile:mt-[2vh]">
                                        <a href="#">Global Branding in a Digital Age: Insights from Creative Curve</a>
                                    </h4>
                                    <div className="text-[1.25vw] px-[0.5vw] text-20 mobile:mt-[1vh]">
                                        Branding . 19 June 2023
                                    </div>
                                </div>                                
                            </div>
                            
                            <div data-cursor-color="#fff" data-cursor-text="Read More" data-cursor-size="100px" className="w-1/3 cursor-none blog-item-2 mobile:w-full mobile:mt-[5vh]" ref={item2}>
                                <div className="space-y-[1.2vw] mobile:space-y-[4vw]">
                                    <div className="post-prev-2-img overflow-hidden rounded-[20px]">
                                        <a href="#">
                                            <img src="/images/blogs/blog-2.png" className="w-full h-full object-cover scale-[110%] translate-y-[-10%] parallaxIMG mobile:scale-[120%] mobile:translate-y-[-5%]" alt="Blog Image" title="Blog Image" loading="lazy"/>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw] text-24 mobile:mt-[2vh]">
                                        <a href="#">The Power of Psychology in UX Design: Unlocking the Human</a>
                                    </h4>
                                    <div className="text-[1.25vw] px-[0.5vw] text-20 mobile:mt-[1vh]">
                                        UX Design . 20 June 2023
                                    </div>
                                </div>                                
                            </div>
                            
                            <div data-cursor-color="#fff" data-cursor-text="Read More" data-cursor-size="100px" className="cursor-none w-1/3 blog-item-3 mobile:w-full mobile:mt-[5vh]" ref={item3}>
                                <div className="space-y-[1.2vw] mobile:space-y-[4vw]">
                                    <div className="post-prev-2-img overflow-hidden rounded-[20px]">
                                        <a href="#">
                                            <img src="/images/blogs/blog-3.png" className="w-full h-full object-cover scale-[110%] translate-y-[-10%] parallaxIMG mobile:scale-[120%] mobile:translate-y-[-10%]" alt="Blog Image" title="Blog Image" loading="lazy"/>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw] text-24 mobile:mt-[2vh]">
                                        <a href="#">How to manage a talented and successful design team</a>
                                    </h4>
                                    <div className="text-[1.25vw] px-[0.5vwpx] text-20 mobile:mt-[1vh]">
                                        UI Design . 29 June 2023
                                    </div>
                                </div>                                
                            </div>

                        </div>
                    </div>
            </section>
        </>
    )
}