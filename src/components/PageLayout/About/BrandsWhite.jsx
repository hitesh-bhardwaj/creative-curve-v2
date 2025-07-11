import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);


function BrandsWhite() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const slider = useRef(null);
    
    let xPercent = 0;
    let direction = -1;
  
    const brands = useRef(null);
  
    const firstText2 = useRef(null);
    const secondText2 = useRef(null);
    const thirdText2 = useRef(null);
    const slider2 = useRef(null);
    let xPercent2 = 0;
    let direction2 = 1;
     


  
    useGSAP(() => {
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: brands.current,
            scrub: 0.25,
            start: "top bottom",
            end: brands.current.innerHeight,
            onUpdate: (e) => (direction = e.direction * -1),
          },
          x: "-500px",
        });
        requestAnimationFrame(animate);
      });
    
      const animate = () => {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        gsap.set(thirdText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      };
    
      useGSAP(() => {
        gsap.to(slider2.current, {
          scrollTrigger: {
            trigger: brands.current,
            scrub: 0.25,
            start: "top bottom",
            end: brands.current.innerHeight,
            onUpdate: (e) => (direction2 = e.direction * 1),
          },
          x: "500px",
        });
        requestAnimationFrame(animate2);
      });
    
      const animate2 = () => {
        if (xPercent2 < -100) {
          xPercent2 = 0;
        } else if (xPercent2 > 0) {
          xPercent2 = -100;
        }
        gsap.set(firstText2.current, { xPercent: xPercent2 });
        gsap.set(secondText2.current, { xPercent: xPercent2 });
        gsap.set(thirdText2.current, { xPercent: xPercent2 });
    
        requestAnimationFrame(animate2);
        xPercent2 += 0.1 * direction2;
      };
      

  return (
    <>
      <section data-cursor-color="#000" ref={brands} className="pt-[5%] pb-[10%] mobile:pt-[15%] mobile:pb-[25%] tablet:pt-[15%] tablet:pb-[15%] bg-white" id="brands">
        <div className="container">
          <div className="w-[55%] mobile:w-full tablet:w-full">
            <p className="text-24 mb-[1vw] fadeUp text-textBody mobile:mb-[5vw]">Our Clients</p>
            <h2 className="text-96 leading-[1.1] space-grotesk mb-[1vw] heading-anim text-textHead mobile:mb-[5vw]">
              <span className="block overflow-hidden">They Choose Us</span>
              <span className="block overflow-hidden">
              And We Delivered!
              </span>
            </h2>
            <p className="text-22 w-[65%] mb-[2vw] mobile:mb-[6vw] tablet:mb-[4vw] text-textHead para-animations mobile:w-[90%]">
              <span>
                We forge meaningful connections that translate into tangible
                results. Our marketing solutions are crafted with a deep
                understanding.
              </span>
            </p>
          </div>
        </div>

        <div className="brands flex flex-col gap-[1.5vw] mt-[4vw] tablet:mt-[10vw] mobile:mt-[15vw] mobile:gap-[2.5vw] tablet:gap-[2.5vw]">

        <div ref={slider} className="relative whitespace-nowrap mobile:w-[185%] tablet:w-[150%]">

          <div ref={firstText} className="w-full grid h-[18vw] grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            <div className="col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/tnc-black.svg" />
            </div>
            <div className="col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/unicef.svg" />
            </div>
            <div className="col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/oxfam.svg" />
            </div>
            <div className="col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/wwf-black.svg" />
            </div>
            <div className="col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/bharti.svg" />
            </div>
          </div>

          <div ref={secondText} className="w-full top-0 left-full absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] h-[18vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/unicef.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/oxfam.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/bharti.svg" />
            </div>
          </div>

          <div ref={thirdText} className="w-full top-0 left-[200%] absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] h-[18vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/unicef.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/oxfam.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/bharti.svg" />
            </div>
          </div>

        </div>

        <div ref={slider2} className="relative whitespace-nowrap mobile:w-[180%] tablet:w-[150%]">
          <div ref={firstText2} className="w-full grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] h-[18vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/unicef.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/oxfam.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/bharti.svg" />
            </div>
          </div>
          <div ref={secondText2} className="w-full top-0 left-full absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] h-[18vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/unicef.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/oxfam.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/bharti.svg" />
            </div>
          </div>
          <div ref={thirdText2} className="w-full top-0 left-[-100%] absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw] h-[18vw] mobile:h-[35vw] mobile:gap-[2.5vw] mobile:pr-[2.5vw] tablet:h-[27vw] tablet:gap-[2.5vw] tablet:pr-[2.5vw]">
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/unicef.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/oxfam.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" col-span-1 h-full border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img alt="brand img" loading="lazy" src="/images/brands/bharti.svg" />
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default BrandsWhite;
