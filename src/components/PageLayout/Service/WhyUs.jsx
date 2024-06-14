import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Hover on the link
const handleHover = (e) => {
    const chars = e.currentTarget.querySelectorAll('.split-text-1 .move');
    const chars2 = e.currentTarget.querySelectorAll('.split-text-2 .move');
    gsap.to(chars, {
        yPercent: -100,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
    });
    gsap.to(chars2, {
        yPercent: -100,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
    });
};

// Hover off the link
const handleHoverExit = (e) => {
    const chars = e.currentTarget.querySelectorAll('.split-text-1 .move');
    const chars2 = e.currentTarget.querySelectorAll('.split-text-2 .move');

    gsap.to(chars, {
        yPercent: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
    });
    gsap.to(chars2, {
        yPercent: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
    });
};

gsap.registerPlugin(useGSAP);

const WhyUs = () => {
    useGSAP(()=>{
        if(globalThis.innerWidth<541){
            gsap.to(".why-img",{
                yPercent:10,
                scrollTrigger:{
                    trigger:".why-img",
                    start:"top 70%",
                    end:"bottom 10%",

                    scrub:true
    
                }
            })

        }else{
            gsap.to(".why-img",{
                yPercent:20,
                scrollTrigger:{
                    trigger:".why-img",
                    start:"top 70%",
                    end:"bottom 10%",
                    
                    scrub:true
    
                }
            })

        }
       
    })
    return (
        <>
            <section className="why-us">
                <div className="container py-[10%] mobile:py-[20%]">
                    <div className="mb-[4vw]">
                        <h2 className="text-140 space-grotesk heading-anim">
                            <span>
                                Why Choose Us
                            </span>
                        </h2>
                    </div>

                    <div className="flex justify-between items-start w-full h-full mobile:flex-col">
                        <div className="flex flex-col gap-[12vw] items-start w-[40%] py-[1vw] mobile:w-full mobile:order-1">
                            <div className="space-y-[2vw]">
                                <p className="text-24 para-animations">
                                    We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                                </p>
                                <p className="text-24 para-animations">
                                    We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                                </p>
                            </div>
                            <div className="w-full space-y-[2vw] mobile:hidden">
                                
                                <div onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className="">
                                    <div className="px-[1vw] flex justify-between items-center w-full mobile:pb-[8%] fadeUp pb-[2%]">
                                        <h4 className="text-96 font-medium relative overflow-hidden pr-[2.5vw] mobile:pr-[5vw] leading-[1.2]">
                                            <div className="split-text-1">
                                                <span className="move inline-block">5</span>
                                                <span className="move inline-block">0</span>
                                                <span className="move inline-block">0</span>
                                                <span className="move inline-block">0</span>
                                                <span className="font-normal move inline-block">
                                                    <span className="relative top-[-1.5vw]">+</span>
                                                </span>
                                            </div>
                                            <div className="absolute split-text-2">
                                                <span className="move inline-block">5</span>
                                                <span className="move inline-block">0</span>
                                                <span className="move inline-block">0</span>
                                                <span className="move inline-block">0</span>
                                                <span className="font-normal move inline-block">
                                                    <span className="relative top-[-1.5vw]">+</span>
                                                </span>
                                            </div>
                                        </h4>
                                        <p className="text-24 w-[7vw] mobile:w-[25vw]">Customer <br /> Reviews</p>
                                    </div>
                                    <span className="block w-full h-[1px] bg-black/20 lineDraw origin-left" />
                                </div>

                                <div onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className="">
                                    <div className="px-[1vw] flex justify-between items-center w-full mobile:pb-[8%] fadeUp pb-[2%]">
                                        <h4 className="text-96 font-medium relative overflow-hidden pr-[2.5vw] mobile:pr-[5vw] leading-[1.2]">
                                            <div className="split-text-1">
                                                <span className="move inline-block">9</span>
                                                <span className="move inline-block">9</span>
                                                <span className="move font-normal text-[60%] inline-block">
                                                    <span className="relative top-[-1.5vw]">%</span>
                                                </span>
                                            </div>
                                            <div className="split-text-2 absolute">
                                                <span className="move inline-block">9</span>
                                                <span className="move inline-block">9</span>
                                                <span className="move font-normal text-[60%] inline-block">
                                                    <span className="relative top-[-1.5vw]">%</span>
                                                </span>
                                            </div>
                                        </h4>
                                        <p className="text-24 w-[7vw] mobile:w-[25vw]">Satisfied <br /> Customers</p>
                                    </div>
                                    <span className="block w-full h-[1px] bg-black/20 lineDraw origin-left"/>
                                </div>
                            </div>

                           
                        </div>
                        <div className="w-[48%] h-[45vw] relative overflow-hidden rounded-[20px] mobile:order-2 mobile:w-full mobile:h-[100vw] mobile:rounded-[10px] mobile:mt-[10%] fadeUp">
                            <Image
                                src="/images/service/why-us.webp"
                                alt="Service Image"
                                fill
                                className="object-cover scale-[120%] translate-y-[-10%] why-img mobile:scale-[110%] mobile:translate-y-[-5%]"
                            />
                        </div>
                        <div className="w-full space-y-[2vw] mobile:order-3 hidden mobile:block mobile:mt-[10%]">
                                <div className="fadeUp">
                                    <div className="px-[1vw] flex justify-between items-center w-full mobile:pb-[6%]">
                                        <h4 className="text-96 font-medium overflow-hidden relative after:absolute after:block after:content-['+'] after:top-[10%] after:right-[0] pr-[2.5vw] after:h-[3vw] after:w-[3vw] after:leading-[0.4] after:font-normal mobile:after:w-[5vw] mobile:pr-[5vw]">
                                            <span>5</span>
                                            <span>0</span>
                                            <span>0</span>
                                            <span>0</span>
                                        </h4>
                                        <p className="text-24 w-[7vw] mobile:w-[25vw]">Customer <br /> Reviews</p>
                                    </div>
                                    <span className="block w-full h-[1px] bg-black/20" />
                                </div>

                                <div className="fadeUp">
                                    <div className="px-[1vw] flex justify-between items-center w-full mobile:pb-[6%] mobile:pt-[4%]">
                                    <h4 className="text-96 font-medium overflow-hidden relative after:absolute after:block after:content-['%'] after:top-[20%] after:right-[0] pr-[2.5vw] after:h-[3vw] after:w-[3vw] after:leading-[0.4] after:text-[3vw] after:font-normal mobile:after:w-[5vw] mobile:pr-[5vw] mobile:after:h-[5vw]">
                                            <span>9</span>
                                            <span>9</span>
                                            <span>.9</span>
                                        </h4>
                                        <p className="text-24 w-[7vw] mobile:w-[25vw]">Satisfied <br /> Customers</p>
                                    </div>
                                    <span className="block w-full h-[1px] bg-black/20" />
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs