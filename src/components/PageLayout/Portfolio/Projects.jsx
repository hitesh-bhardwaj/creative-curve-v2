import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
                },
              });
            });
        }
      });
      
    return (
        <>
            <section id="second-section" className="bg-black text-white" data-cursor-color="#fff">
                <div className="container py-[9%] mobile:py-[20%] tablet:py-[15%]">
                    <div className="text-center mx-auto w-3/4 tablet:w-full mobile:w-full mobile:text-start">
                        <p className="space-grotesk text-48 tablet:text-[4vw] mobile:text-[5vw] para-animations leading-[1.3]">
                            Explore our case studies and see how Creative Curve evolves brands for a changing world, ensuring cultural relevance and future readiness
                        </p>
                    </div>
                    <div className="mt-[8vw] mobile:mt-[15vw] tablet:mt-[15vw]">
                        <div className="grid grid-cols-10 gap-[40px] mobile:flex mobile:flex-col">
                            <div className="col-span-5 fadeUp">
                                <Link href="#" className="space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[2vw] group portfolio-img-div" data-cursor-text="Discover" data-cursor-size="100px">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden mobile:h-[45vh] mobile:rounded-[20px] tablet:h-[35vh] tablet:rounded-2xl">
                                        <Image 
                                            className="cover scale-[110%] group-hover:saturate-0 transition-all duration-500 ease-out translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-bharti-lg.webp"
                                            alt="Portfolio Image"
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="space-grotesk group-hover:-translate-y-[6vw] transition-all duration-500 ease-out text-[2.2vw] tablet:text-[3vw] mobile:text-[5vw] pl-[2vw] mobile:pl-[8vw] mobile:group-hover:-translate-y-[15vw] tablet:group-hover:-translate-y-[8vw]">Bharti Foundation</h3>
                                </Link>
                            </div>
                            <div className="col-span-5 fadeUp">
                                <Link href="#" className="space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[2vw] group portfolio-img-div" data-cursor-text="Discover" data-cursor-size="100px">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden mobile:h-[45vh] mobile:rounded-[20px] tablet:h-[35vh] tablet:rounded-2xl">
                                        <Image 
                                            className="cover scale-[110%] group-hover:saturate-0 transition-all duration-500 ease-out translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-wfp-lg.webp"
                                            alt="Portfolio Image"
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="space-grotesk group-hover:-translate-y-[6vw] transition-all duration-500 ease-out text-[2.2vw] tablet:text-[3vw] mobile:text-[5vw] pl-[2vw] mobile:pl-[8vw] mobile:group-hover:-translate-y-[15vw] tablet:group-hover:-translate-y-[8vw]">World Food Programme</h3>
                                </Link>
                            </div>

                            <div className="col-span-6 fadeUp">
                                <Link href="/portfolio/world-wildlife-fund" className="space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[2vw] group portfolio-img-div" data-cursor-text="Discover" data-cursor-size="100px">
                                    <div className="w-full h-[85vh] relative rounded-[40px] overflow-hidden mobile:h-[30vh] mobile:rounded-[20px] tablet:h-[35vh] tablet:rounded-2xl">
                                        <Image 
                                            className="cover scale-[110%] group-hover:saturate-0 transition-all duration-500 ease-out translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-wwf-lg.webp"
                                            alt="Portfolio Image"
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="space-grotesk group-hover:-translate-y-[6vw] transition-all duration-500 ease-out text-[2.2vw] tablet:text-[3vw] mobile:text-[5vw] pl-[2vw] mobile:pl-[8vw] mobile:group-hover:-translate-y-[15vw] tablet:group-hover:-translate-y-[8vw]">World Wildlife Fund</h3>
                                </Link>
                            </div>

                            <div className="col-span-4 fadeUp">
                                <Link href="#" className="space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[2vw] group portfolio-img-div" data-cursor-text="Discover" data-cursor-size="100px">
                                    <div className="w-full h-[85vh] relative rounded-[40px] overflow-hidden mobile:h-[55vh] mobile:rounded-[20px] tablet:h-[35vh] tablet:rounded-2xl">
                                        <Image    
                                            className="cover scale-[110%] group-hover:saturate-0 transition-all duration-500 ease-out translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-stc-lg.webp"
                                            alt="Portfolio Image"
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="space-grotesk group-hover:-translate-y-[6vw] transition-all duration-500 ease-out text-[2.2vw] tablet:text-[3vw] mobile:text-[5vw] pl-[2vw] mobile:pl-[8vw] mobile:group-hover:-translate-y-[15vw] tablet:group-hover:-translate-y-[8vw]">Save the Children</h3>
                                </Link>
                            </div>

                            <div className="col-span-4 fadeUp">
                                <Link href="/portfolio/unicef" className="space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[2vw] group portfolio-img-div" data-cursor-text="Discover" data-cursor-size="100px">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden mobile:h-[55vh] mobile:rounded-[20px] tablet:h-[35vh] tablet:rounded-2xl">
                                        <Image 
                                            className="cover scale-[110%] group-hover:saturate-0 transition-all duration-500 ease-out translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-unicef-lg.webp"
                                            alt="Portfolio Image"
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="space-grotesk group-hover:-translate-y-[6vw] transition-all duration-500 ease-out text-[2.2vw] tablet:text-[3vw] mobile:text-[5vw] pl-[2vw] mobile:pl-[8vw] mobile:group-hover:-translate-y-[15vw] tablet:group-hover:-translate-y-[8vw]">Unicef</h3>
                                </Link>
                            </div>

                            <div className="col-span-6 fadeUp">
                                <Link href="#" className="space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[2vw] group portfolio-img-div" data-cursor-text="Discover" data-cursor-size="100px">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden mobile:h-[30vh] mobile:rounded-[20px] tablet:h-[35vh] tablet:rounded-2xl">
                                        <Image 
                                            className="scale-[110%] group-hover:saturate-0 cover transition-all duration-500 ease-out translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-oxfam-lg.webp"
                                            alt="Portfolio Image"
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="space-grotesk group-hover:-translate-y-[6vw] transition-all duration-500 ease-out text-[2.2vw] tablet:text-[3vw] mobile:text-[5vw] pl-[2vw] mobile:pl-[8vw] mobile:group-hover:-translate-y-[15vw] tablet:group-hover:-translate-y-[8vw]">Oxfam</h3>
                                </Link>
                            </div>

                            <div className="col-span-6 fadeUp">
                                <Link href="#" className="space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[2vw] group portfolio-img-div" data-cursor-text="Discover" data-cursor-size="100px">
                                    <div className="w-full h-[70vh] relative rounded-[40px] overflow-hidden mobile:h-[45vh] mobile:rounded-[20px] tablet:h-[35vh] tablet:rounded-2xl">
                                        <Image 
                                            className="scale-[110%] group-hover:saturate-0 cover transition-all duration-500 ease-out translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-ap-lg.webp"
                                            alt="Portfolio Image"
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="space-grotesk group-hover:-translate-y-[6vw] transition-all duration-500 ease-out text-[2.2vw] tablet:text-[3vw] mobile:text-[5vw] pl-[2vw] mobile:pl-[8vw] mobile:group-hover:-translate-y-[15vw] tablet:group-hover:-translate-y-[8vw]">Asian Paints</h3>
                                </Link>
                            </div>

                            <div className="col-span-4 fadeUp">
                                <Link href="#" className="space-y-[1vw] tablet:space-y-[2vw] mobile:space-y-[2vw] group portfolio-img-div" data-cursor-text="Discover" data-cursor-size="100px">
                                    <div className="w-full h-[70vh] relative rounded-[40px] overflow-hidden mobile:h-[45vh] mobile:rounded-[20px] tablet:h-[35vh] tablet:rounded-2xl">
                                        <Image 
                                            className="scale-[110%] group-hover:saturate-0 cover transition-all duration-500 ease-out translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"
                                            src="/images/projects/project-canon-lg.webp"
                                            alt="Portfolio Image"
                                            loading="lazy"
                                            width={1000}
                                            height={1000}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="space-grotesk group-hover:-translate-y-[6vw] transition-all duration-500 ease-out text-[2.2vw] tablet:text-[3vw] mobile:text-[5vw] pl-[2vw] mobile:pl-[8vw] mobile:group-hover:-translate-y-[15vw] tablet:group-hover:-translate-y-[8vw]">Canon</h3>
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