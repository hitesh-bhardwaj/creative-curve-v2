import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Campaign = ({ className, secSubHead, title, img1, img2, img3, content1, content2 }) => {
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
            <section id="campaign" className={`${className}`}>
                <div className="container py-[7%] mobile:py-[20%]">
                    <div className="flex justify-start items-center gap-[5vw] mobile:flex-col mobile:items-start">
                        <h3 className="text-140 space-grotesk text-textHead leading-[1.2]">
                            <span>
                                Campaign
                            </span>
                        </h3>
                        <p className="w-[20vw] text-24 pt-[1.5vw] mobile:w-[80vw]">
                            {secSubHead}
                        </p>
                    </div>
                    <div className="mt-[5vw] mobile:flex mobile:flex-col mobile:mt-[15vw]">
                        <h4 className="text-76 uppercase space-grotesk text-right mb-[1vw]">{title}</h4>
                        <div className="grid grid-cols-6 gap-y-[6vw] mobile:flex mobile:flex-col">
                            <div className="col-span-6 relative h-[46.5vw] border-4 border-black rounded-[40px] overflow-hidden mobile:h-[25vh] mobile:rounded-[20px] mobile:border-2">
                                <Image className="cover mobile:object-cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%] " src={img1} alt="Unicef Campaign Image" fill loading="lazy"/>
                            </div>
                            <div className="col-span-4 relative h-[35vw] border-4 border-black rounded-[40px] overflow-hidden mobile:h-[25vh] mobile:rounded-[20px] mobile:mt-[2vh] mobile:border-2">
                                <Image className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]" src={img2} alt="Unicef Campaign Image" fill loading="lazy"/>
                            </div>
                            <div className="col-span-2 flex items-center pl-[22%] mobile:pl-0 mobile:my-[5%]">
                                <p className="text-24">
                                    {content1}
                                </p>
                            </div>
                            <div className="col-span-2 flex items-center pr-[20%] space-grotesk capitalize mobile:hidden">
                                <p className="text-[3.4vw]">
                                    {content2}
                                </p>
                            </div>
                            <div className="col-span-4 relative h-[35vw] border-4 border-black rounded-[40px] overflow-hidden mobile:h-[25vh] mobile:rounded-[20px] mobile:mt-[2vh] mobile:border-2">
                                <Image className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]" src={img3} alt="Unicef Campaign Image" fill loading="lazy"/>
                            </div>
                            <h4 className=" space-grotesk hidden mobile:block text-96 w-[70%] leading-[1.1] my-[10%]">Discover UNICEF's Work For Every Child, Everywhere</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Campaign