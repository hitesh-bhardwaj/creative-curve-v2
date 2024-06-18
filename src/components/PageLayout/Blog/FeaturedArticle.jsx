import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import ButtonDark from "@/components/Button/ButtonDark";
gsap.registerPlugin(ScrollTrigger);

const FeaturedArticle = () => {

  const textSec = useRef(null);
  const textContainer = useRef(null);

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

  if(globalThis.innerWidth>1023){
  useGSAP(()=> {
    gsap.from(textSec.current, {
      scrollTrigger: {
        trigger: textContainer.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.25,
      },  
      yPercent: 40,
      duration: 2,
    }) 
  })
}
 
  return (
    <>
      <section id="second-section" className="bg-black text-white" data-cursor-exclusion>
        <div className="container py-[8%] tablet:py-[15%] mobile:py-[20%]">
          <div className="w-[45%] relative mobile:w-full tablet:w-full">
            <h2 className="text-140 leading-[1.1] space-grotesk mb-[1vw] heading-anim text-white overflow-hidden">
              <span>
                Featured
              </span>{" "}
              <span>
                Work
              </span>
            </h2>
            <p className="text-24 w-[50%] para-animations absolute right-0 bottom-[9%] mobile:static mobile:w-[80%] mobile:pt-[4%] tablet:static tablet:w-[70%]">
              <span>
                From global branding trends to the nuances of digital
                storytelling, explore the world through our lens.
              </span>
            </p>
          </div>

          <div className="flex justify-between items-start mt-[6vw] mobile:flex-col mobile:mt-[10vw] tablet:flex-col tablet:items-center " ref={textContainer}>
            <div className="h-[80vh] w-[55%] relative rounded-[40px] overflow-hidden mobile:w-full mobile:h-[40vh] mobile:rounded-[20px] tablet:h-[50vh] tablet:w-full">
              <Image
                src="/images/blogs/featured.webp"
                fill
                className="cover scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-15%]"
                alt="Featured Blog Image"
                quality={100}
              />
            </div>

            <div ref={textSec} className="w-[40%] space-y-[2vw] pt-4 mobile:w-full mobile:mt-[3vh] tablet:w-full tablet:mt-[2vh]">
              <div className="flex justify-start gap-[2.5vw] items-center">
                <div className="rounded-full bg-white text-textHead space-grotesk text-24 px-[2vw] py-[0.8vw] mobile:px-[5vw] mobile:py-[2.5vw] mobile:text-[4vw] tablet:py-[1.5vw]">
                  <span>Branding</span>
                </div>

                <div className="rounded-full border border-white/70 space-grotesk text-24 px-[1.4vw] py-[0.8vw] mobile:px-[3vw] mobile:py-[3vw] mobile:text-[3.5vw] tablet:py-[1.5vw]">
                  <span>19, June 2023</span>
                </div>
              </div>

              <div className="space-y-[2.5vw] mobile:pt-[2vh] tablet:pt-[1.5vh]">
                <h3 className="text-[2.9vw] leading-[1.2] mobile:text-[5.5vw] tablet:text-[4vw]">
                  Global Branding in a Digital Age: Insights from Creative Curve
                </h3>
                <p className="text-24 mobile:text-[4vw] mobile:pt-[1.5vh] mobile:pb-[4vh] tablet:pt-[1vh] tablet:pb-[2vh]">
                  Digital branding allows companies to tap into new
                  demographics, geos, and psychographics. With 4.66 billion
                  active internet users worldwide.
                </p>

                <div>
                  <ButtonDark link="/global-branding" btnText="Read More"/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedArticle;
