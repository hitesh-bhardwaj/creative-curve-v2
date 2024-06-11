import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
            <section id="second-section" className="bg-black text-white">
                <div className="container py-[9%] mobile:py-[20%]">
                    <div className="text-center mx-auto w-3/4 mobile:w-full mobile:text-start">
                        <p className="space-grotesk text-48 mobile:text-[5vw] para-animations">
                            <span>
                                Explore our case studies and see how Creative Curve evolves brands for a changing world, ensuring cultural relevance and future readiness
                            </span>
                        </p>
                    </div>
                    <div className="mt-[8vw] mobile:mt-[15vw]">
                        <div className="grid grid-cols-10 gap-[40px] mobile:flex mobile:flex-col">
                            <div className="col-span-5 fadeUp">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden mobile:h-[45vh] mobile:rounded-[20px]">
                                        <Image 
                                            className="cover group-hover:scale-100 transition-all duration-500 ease-out scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-bharti-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw] mobile:text-[5vw] mobile:pl-[2vw] mobile:pt-[2vh]">Bharti Foundation</h3>
                                </Link>
                            </div>
                            <div className="col-span-5 mobile:mt-[5vw] fadeUp">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden mobile:h-[45vh] mobile:rounded-[20px]">
                                        <Image 
                                            className="cover group-hover:scale-100 transition-all duration-500 ease-out scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-wfp-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw] mobile:text-[4.5vw] mobile:pl-[2vw] mobile:pt-[2vh]">World Food Programme</h3>
                                </Link>
                            </div>
                            <div className="col-span-6 mobile:mt-[5vw] fadeUp">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[85vh] relative rounded-[40px] overflow-hidden mobile:h-[25vh] mobile:rounded-[20px]">
                                        <Image 
                                            className="cover group-hover:scale-100 transition-all duration-500 ease-out scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-wwf-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw] mobile:text-[5vw] mobile:pl-[2vw] mobile:pt-[2vh]">World Wildlife Fund</h3>
                                </Link>
                            </div> 
                            <div className="col-span-4 mobile:mt-[5vw] fadeUp">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[85vh] relative rounded-[40px] overflow-hidden mobile:h-[60vh] mobile:rounded-[20px]">
                                        <Image 
                                            className="cover group-hover:scale-100 transition-all duration-500 ease-out scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-stc-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw] mobile:text-[5vw] mobile:pl-[2vw] mobile:pt-[2vh]">Save the children</h3>
                                </Link>
                            </div>
                            <div className="col-span-4 mobile:mt-[5vw] fadeUp">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden mobile:h-[45vh] mobile:rounded-[20px]">
                                        <Image 
                                            className="cover group-hover:scale-100 transition-all duration-500 ease-out scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-unicef-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw] mobile:text-[5vw] mobile:pl-[2vw] mobile:pt-[2vh]">Unicef</h3>
                                </Link>
                            </div>
                            <div className="col-span-6 mobile:mt-[5vw] fadeUp">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden mobile:h-[25vh] mobile:rounded-[20px]">
                                        <Image
                                            className="cover group-hover:scale-100 transition-all duration-500 ease-out scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-oxfam-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw] mobile:text-[5vw] mobile:pl-[2vw] mobile:pt-[2vh]">Oxfam</h3>
                                </Link>
                            </div>
                            <div className="col-span-6 mobile:mt-[5vw] fadeUp">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[70vh] relative rounded-[40px] overflow-hidden mobile:h-[45vh] mobile:rounded-[20px]">
                                        <Image 
                                            className="cover group-hover:scale-100 transition-all duration-500 ease-out scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-ap-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw] mobile:text-[5vw] mobile:pl-[2vw] mobile:pt-[2vh]">Asian Paints</h3>
                                </Link>
                            </div>
                            <div className="col-span-4 mobile:mt-[5vw] fadeUp">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[70vh] relative rounded-[40px] overflow-hidden mobile:h-[60vh] mobile:rounded-[20px]">
                                        <Image 
                                            className="cover group-hover:scale-100 transition-all duration-500 ease-out scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-canon-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw] mobile:text-[5vw] mobile:pl-[2vw] mobile:pt-[2vh]">Canon</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
    
export default Projects