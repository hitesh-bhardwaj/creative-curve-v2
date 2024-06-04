import { useEffect, useRef } from "react";
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
    });

    return(
        <>
            <section id="Blog" className="bg-dark relative z-[1]">
                <div className="container py-[10%]">

                    <div className="w-[55%]">
                        <p className="text-24 mb-[1vw] fadeUp">Our Blogs</p>
                        <h2 className="text-96 leading-[1.2] space-grotesk mb-[1vw] heading-anim">
                            Dive Into Our
                            <br />
                            Creative Musings
                        </h2>                    
                        <p className="text-22 w-[65%] mb-[2vw] para-animations">
                            <span>
                                A curated collection of thoughts, ideas, and inspirations. Join us in this exploration, where every word is crafted with passion.
                            </span>
                        </p>
                        <Link href="/portfolio" className="fadeUp border block w-fit border-[#4D4D4D] py-[1vw] sec-content-24 px-[2.5vw] rounded-full">
                            <span className="uppercase">
                                ALL WORKS
                            </span>
                        </Link>
                    </div>

                    {/* <!-- Blog Grid --> */}
                        <div className="flex items-center justify-between gap-x-[2vw] pt-[8vw]" ref={trigger}>
                            <div className="w-1/3 blog-item-1" ref={item1}>
                                <div className="space-y-[1.2vw]">
                                    <div className="post-prev-2-img overflow-hidden rounded-[20px]">
                                        <a href="#">
                                            <img src="/images/blogs/blog-1.png" className="w-full h-full object-cover" alt="Blog Image" title="Blog Image" loading="lazy"/>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw]">
                                        <a href="#">Global Branding in a Digital Age: Insights from Creative Curve</a>
                                    </h4>
                                    <div className="text-[1.25vw] px-[0.5vw]">
                                        Branding . 19 June 2023
                                    </div>
                                </div>                                
                            </div>
                            
                            <div className="w-1/3 blog-item-2" ref={item2}>
                                <div className="space-y-[1.2vw]">
                                    <div className="post-prev-2-img overflow-hidden rounded-[20px]">
                                        <a href="#">
                                            <img src="/images/blogs/blog-2.png" className="w-full h-full object-cover" alt="Blog Image" title="Blog Image" loading="lazy"/>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw]">
                                        <a href="#">The Power of Psychology in UX Design: Unlocking the Human</a>
                                    </h4>
                                    <div className="text-[1.25vw] px-[0.5vw]">
                                        UX Design . 20 June 2023
                                    </div>
                                </div>                                
                            </div>
                            
                            <div className="w-1/3 blog-item-3" ref={item3}>
                                <div className="space-y-[1.2vw]">
                                    <div className="post-prev-2-img overflow-hidden rounded-[20px]">
                                        <a href="#">
                                            <img src="/images/blogs/blog-3.png" className="w-full h-full object-cover" alt="Blog Image" title="Blog Image" loading="lazy"/>
                                        </a>
                                    </div>
                                    <h4 className="font-medium text-[1.55vw] text-textHead leading-[1.2] px-[0.5vw]">
                                        <a href="#">How to manage a talented and successful design team</a>
                                    </h4>
                                    <div className="text-[1.25vw] px-[0.5vwpx]">
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