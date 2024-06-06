import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
      <section ref={brands} className="pt-[10%] pb-[10%]" id="brands">
        <div className="container">
          <div className="w-[55%] mobile:w-full">
            <p className="text-24 mb-[1vw] fadeUp ">Our Clients</p>
            <h2 className="text-96 text-textHead leading-[1.2] mb-[1vw] heading-anim ">
              They Choose Us
              <br />
              And We Delivered!
            </h2>
            <p className="text-22 w-[65%] mb-[2vw] para-animations mobile:w-[90%]">
              <span>
                We forge meaningful connections that translate into tangible
                results. Our marketing solutions are crafted with a deep
                understanding.
              </span>
            </p>
          </div>
        </div>

        <div className="brands flex flex-col gap-[1.5vw] mt-[4vw]">
        <div ref={slider} className="relative whitespace-nowrap">
          <div ref={firstText} className="w-full grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw]">
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/unicef.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/oxfam.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/bharti.svg" />
            </div>
          </div>
          <div ref={secondText} className="w-full top-0 left-full absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw]">
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/unicef.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/oxfam.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/bharti.svg" />
            </div>
          </div>
          <div ref={thirdText} className="w-full top-0 left-[200%] absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw]">
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/unicef.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/oxfam.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/bharti.svg" />
            </div>
          </div>
        </div>

        <div ref={slider2} className="relative whitespace-nowrap">
          <div ref={firstText2} className="w-full grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw]">
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/unicef.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/oxfam.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/bharti.svg" />
            </div>
          </div>
          <div ref={secondText2} className="w-full top-0 left-full absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw]">
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/unicef.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/oxfam.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/bharti.svg" />
            </div>
          </div>
          <div ref={thirdText2} className="w-full top-0 left-[-100%] absolute grid grid-cols-5 items-center gap-[1.5vw] pr-[1.5vw]">
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/tnc-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/unicef.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/oxfam.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/wwf-black.svg" />
            </div>
            <div className=" h-[18vw] border border-[#a8a8a8] flex justify-center items-center p-[5vw] rounded-xl">
              <img src="/images/brands/bharti.svg" />
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default BrandsWhite;
