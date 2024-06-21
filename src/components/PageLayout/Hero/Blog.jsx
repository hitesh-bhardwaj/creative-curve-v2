import { useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react";
import ButtonWhite from "@/components/Button/ButtonWhite";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Blog() {

    const trigger = useRef(null);
    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);

    useGSAP(() => {
        if(globalThis.innerWidth<541){

        }
        if(globalThis.innerWidth<1024){
            
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

    return(
        <>
            <section id="Blog" className="bg-dark relative z-[1]">

                <div className="container py-[10%] mobile:py-[20%] tablet:py-[15%]">
                    <div className="w-[55%] mobile:w-full tablet:w-full">
                        <p className="text-24 mb-[1vw] fadeUp mobile:mb-[5vw] tablet:mb-[3vw]">Our Blogs</p>
                        <h2 className="text-96 space-grotesk mb-[1vw] heading-anim mobile:leading-[1] mobile:mb-[5vw] tablet:mb-[3vw]">
                            <span className="block overflow-hidden">
                                Dive Into Our
                            </span>
                            <span className="block overflow-hidden">
                                Creative Musings
                            </span>
                        </h2>                    
                        <p className="text-22 w-[65%] mb-[2vw] para-animations mobile:w-[90%] table:w-[80%] mobile:mb-[6vw] tablet:mb-[4vw]">
                            <span>
                                A curated collection of thoughts, ideas, and inspirations. Join us in this exploration, where every word is crafted with passion.
                            </span>
                        </p>
                        <div className="fadeUp">
                            <ButtonWhite link="/blog" btnText="View All Blogs" />
                        </div>
                    </div>

                    {/* <!-- Blog Grid --> */}
                        <div className="flex items-center justify-between gap-x-[2vw] pt-[8vw] mobile:flex-col mobile:pt-[12vw]" ref={trigger}>

                            <div className="w-1/3 cursor-none blog-item-1 mobile:w-full tablet:w-1/2 group under-multi-parent" ref={item1}>
                                <div className="space-y-[1.2vw] mobile:space-y-[2vw] fadeUp">
                                    <div className="post-prev-2-img mobile:mb-[4vw]">
                                        <a href="#" className="">
                                            <div 
                                                className="overflow-hidden h-[18vw] tablet:h-[28vw] mobile:h-[60vw] rounded-[20px] w-full"
                                                data-cursor-color="#fff" 
                                                data-cursor-text="Read More" 
                                                data-cursor-size="100px" 
                                                >
                                                <img 
                                                    src="/images/blogs/blog-1.webp" 
                                                    className="absolute top-0 h-full w-full left-0 right-0 bottom-0 object-cover transition-all duration-500 scale-y-[2] translate-y-1/2 opacity-0 blur group-hover:opacity-100 group-hover:blur-[0] group-hover:translate-y-0 group-hover:scale-y-[1]" 
                                                    alt="Blog Image" 
                                                    title="Blog Image" 
                                                    loading="lazy"
                                                /> 
                                                <img 
                                                    src="/images/blogs/blog-1.webp" 
                                                    className="absolute top-0 h-full w-full left-0 right-0 bottom-0 object-cover transition-all duration-500 group-hover:scale-y-[2] group-hover:-translate-y-1/2 group-hover:blur group-hover:opacity-0" 
                                                    alt="Blog Image" 
                                                    title="Blog Image" 
                                                    loading="lazy"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw] text-24">
                                        <a href="#" className="under-multi">Global Branding in a Digital Age: Insights from Creative Curve</a>
                                    </h4>
                                    <div className="text-[1.25vw] px-[0.5vw] text-20">
                                        Branding . 19 June 2023
                                    </div>
                                </div>                                
                            </div>
                            
                            <div className="w-1/3 cursor-none blog-item-2 mobile:w-full mobile:mt-[5vh] tablet:w-1/2 group under-multi-parent" ref={item2}>
                            <div className="space-y-[1.2vw] mobile:space-y-[2vw] fadeUp">
                                    <div className="post-prev-2-img mobile:mb-[4vw]">
                                        <a href="#" className="">
                                            <div 
                                                className="overflow-hidden h-[18vw] tablet:h-[28vw] mobile:h-[60vw] rounded-[20px] w-full"
                                                data-cursor-color="#fff" 
                                                data-cursor-text="Read More" 
                                                data-cursor-size="100px" 
                                                >
                                                <img 
                                                    src="/images/blogs/blog-2.webp" 
                                                    className="absolute top-0 h-full w-full left-0 right-0 bottom-0 object-cover transition-all duration-500 scale-y-[2] translate-y-1/2 opacity-0 blur group-hover:opacity-100 group-hover:blur-[0] group-hover:translate-y-0 group-hover:scale-y-[1]" 
                                                    alt="Blog Image" 
                                                    title="Blog Image" 
                                                    loading="lazy"
                                                /> 
                                                <img 
                                                    src="/images/blogs/blog-2.webp" 
                                                    className="absolute top-0 h-full w-full left-0 right-0 bottom-0 object-cover transition-all duration-500 group-hover:scale-y-[2] group-hover:-translate-y-1/2 group-hover:blur group-hover:opacity-0" 
                                                    alt="Blog Image" 
                                                    title="Blog Image" 
                                                    loading="lazy"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw] text-24 mobile:mt-[2vh]">
                                        <a href="#" className="under-multi">The Power of Psychology in UX Design: Unlocking the Human</a>
                                    </h4>
                                    <div className="text-[1.25vw] px-[0.5vw] text-20 mobile:mt-[1vh]">
                                        UX Design . 20 June 2023
                                    </div>
                                </div>                                
                            </div>
                            
                            <div className="cursor-none w-1/3 blog-item-3 mobile:w-full mobile:mt-[5vh] tablet:hidden group under-multi-parent" ref={item3}>
                            <div className="space-y-[1.2vw] mobile:space-y-[2vw] fadeUp">
                                    <div className="post-prev-2-img mobile:mb-[4vw]">
                                        <a href="#" className="">
                                            <div 
                                                className="overflow-hidden h-[18vw] tablet:h-[28vw] mobile:h-[60vw] rounded-[20px] w-full"
                                                data-cursor-color="#fff" 
                                                data-cursor-text="Read More" 
                                                data-cursor-size="100px" 
                                                >
                                                <img 
                                                    src="/images/blogs/blog-1.webp" 
                                                    className="absolute top-0 h-full w-full left-0 right-0 bottom-0 object-cover transition-all duration-500 scale-y-[2] translate-y-1/2 opacity-0 blur group-hover:opacity-100 group-hover:blur-[0] group-hover:translate-y-0 group-hover:scale-y-[1]" 
                                                    alt="Blog Image" 
                                                    title="Blog Image" 
                                                    loading="lazy"
                                                /> 
                                                <img 
                                                    src="/images/blogs/blog-1.webp" 
                                                    className="absolute top-0 h-full w-full left-0 right-0 bottom-0 object-cover transition-all duration-500 group-hover:scale-y-[2] group-hover:-translate-y-1/2 group-hover:blur group-hover:opacity-0" 
                                                    alt="Blog Image" 
                                                    title="Blog Image" 
                                                    loading="lazy"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw] text-24 mobile:mt-[2vh]">
                                        <a href="#" className="under-multi">How to manage a talented and successful design team</a>
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