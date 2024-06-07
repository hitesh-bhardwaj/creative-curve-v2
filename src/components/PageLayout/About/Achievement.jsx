import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";


gsap.registerPlugin(useGSAP);
const Achievement = () => {
    useGSAP(()=>{
        if(globalThis.innerWidth<541){
            const text = new SplitType('.para-animations', { types: 'words, chars' });
        const headText = new SplitType('.about-ach-head',{types:"words,chars"})
        const head = document.querySelectorAll(".about-ach-head .word .char")
      const paragraph = document.querySelectorAll(".para-animations .word .char")
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:"#achievement",
        }
      });
      tl.from(head,{
          yPercent:100,
          delay:1,
          stagger:0.04,
          duration:0.5,
          ease:"power4.out",
          

      })
      .from(paragraph, {
        filter: "blur(10px)",
        opacity: 0,
        duration: 0.6,
        yPercent: 100,
        stagger: 0.01,
        delay: -1,
        ease: "power3.out",
        
      
    })
    .from(".about-ach-small",{
      yPercent:-100,
      duration:0.4,
      delay:-0.39
      
    })
    .from(".about-ach-blocks",{
        yPercent:70,
        opacity:0,
        duration:1,
        delay:-2,
        ease:"power1.in",
        stagger:0.3,
        scrollTrigger:{
            trigger:".about-ach-block-container",
            // markers:true,
            // scrub:true,
            start:"top 70%",
            end:"30% 50%"

        }
    })

        }else{
            const text = new SplitType('.para-animations', { types: 'words, chars' });
        const headText = new SplitType('.about-ach-head',{types:"words,chars"})
        const head = document.querySelectorAll(".about-ach-head .word .char")
      const paragraph = document.querySelectorAll(".para-animations .word .char")
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:"#achievement",
        }
      });
      tl.from(head,{
          yPercent:100,
          delay:1,
          stagger:0.04,
          duration:0.5,
          ease:"power4.out",
          

      })
      .from(paragraph, {
        filter: "blur(10px)",
        opacity: 0,
        duration: 0.6,
        yPercent: 100,
        stagger: 0.01,
        delay: -1,
        ease: "power3.out",
        
      
    })
    .from(".about-ach-small",{
      yPercent:-100,
      duration:0.4,
      delay:-0.39
      
    })
    .from(".about-ach-blocks",{
        yPercent:70,
        opacity:0,
        duration:1,
        delay:-2,
        ease:"power1.in",
        stagger:0.2,
        scrollTrigger:{
            trigger:".about-ach-block-container",
            markers:true,
            scrub:true,
            start:"top 70%",
            end:"bottom top"

        }
    })

        }
        

      })
      useGSAP(()=>{
        
      })
      
    return (
        <>
            <section id="achievement" className="pt-[10%] pb-[10%]">
                <div className="container">
                    
                    <div className="w-[55%] mobile:w-full overflow-hidden">
                        <p className="text-20 mb-[1vw] fadeUp about-ach-small ">Our Achievements</p>
                        <h2 className="text-96 leading-[1.2] text-textHead mb-[1vw] heading-anim ">
                            <span className="block about-ach-head overflow-hidden ">Check Recent
                                </span>
                        
                            <span className="block about-ach-head overflow-hidden"> Achievements</span>
                        </h2>
                        <p className="text-22 w-[65%] mb-[2vw] para-animations mobile:w-[90%] mobile:mt-[2vh] overflow-hidden">
                        <span className="block">
                            We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                        </span>
                        </p>
                    </div>

                    <div className="w-full flex justify-end -mt-[2%] mobile:mt-[5vh]">
                        <div className="w-1/3 text-left mobile:w-[80%] mobile:text-right ">
                            <p className="text-24 para-animations overflow-hidden">
                                <span className="block">
                                We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.

                                </span>
                                
                            </p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 text-textHead grid-rows-5 gap-x-[3vw] gap-y-[4vw] mt-[5vw] mobile:flex mobile:flex-col mobile:gap-[2vh] about-ach-block-container">
                        
                        <div className="bg-[#F6FFE7] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-1 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px] about-ach-blocks">
                            <p className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw]">
                                1270
                                <span className="block leading-[0.6] text-[5vw] font-normal mobile:text-[10vw]">
                                +
                                </span>
                            </p>
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Project Delivered
                                </h5>
                            </div>
                        </div>

                        <div className="bg-[#F3F2FF] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-2 row-start-2 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px] about-ach-blocks">
                            <p className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw]">
                                130
                                <span className="block leading-[0.6] text-[5vw] font-normal  mobile:text-[10vw]">
                                +
                                </span>
                            </p>
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Clients Thrilled
                                </h5>
                            </div>
                        </div>
                        <div className="bg-[#E8F2FF] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-1 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px] about-ach-blocks">
                            <p className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw]">
                                8
                                <span className="block leading-[0.6] text-[5vw] font-normal mobile:text-[10vw]">
                                +
                                </span>
                            </p>
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Nation Served
                                </h5>
                            </div>
                        </div>
                        <div className="bg-[#FFF3ED] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px] about-ach-blocks">
                            <p className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw]">
                                20
                                <span className="block leading-[0.6] text-[5vw] font-normal mobile:text-[10vw]">
                                +
                                </span>
                            </p>
                            <div className="text-left text-[2.8vw] leading-[1.2] w-1/2 mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Years of Unwavering Excellence
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Achievement