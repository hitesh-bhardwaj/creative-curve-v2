import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

function Hero() {

    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {y: "#second-section", offsetY: 50},
            ease: "power3.inOut",
        });
    };

  const we = useRef(null);
  const transform = useRef(null);
  const brands = useRef(null);
  const worldwide = useRef(null);
  const small = useRef(null);

  useGSAP(() => {
      const text = new SplitType('.para-anim', { types: 'words, chars' });
      const para = document.querySelectorAll(".para-anim .word .char")
      const tl = gsap.timeline();

      tl.from(we.current, {
          duration: 1,
          xPercent: -150,
          delay: 1,
          ease: "power3.out"
      })
      .from(transform.current, {
          duration: 1,
          xPercent: 110,
          delay: -0.8,
          ease: "power3.out"
      })
      .from(brands.current, {
          duration: 1,
          xPercent: 100,
          delay:-0.8,
          ease: "power3.out"
      })
      .from(worldwide.current, {
          duration: 1,
          xPercent: -100,
          delay: -0.8,
          ease: "power3.out"
      })
      .from(para, {
          filter: "blur(10px)",
          opacity: 0,
          duration: 0.6,
          yPercent: 100,
          stagger: 0.01,
          delay: -1.5,
          ease: "power3.out"
      })
      .from(small.current, {
          duration: 1,
          yPercent: -100,
          delay: -0.8,
          ease: "power3.out"
      })
  }, []);

  useGSAP(()=> {
      gsap.to(".hero-container", {
          scrollTrigger: {
              trigger: "#hero",
              scrub: true,
              start: "top top",
              end: "bottom top",
          },
          yPercent: 50,
      })
  })

  return (
    <>
      <section className="" id="hero">
        <div className="container h-dvh flex justify-center items-center hero-container mobile:items-center mobile:max-w-full">
          <div className="text-center w-full mobile:flex mobile:flex-col">
            <h1 className="title-h1">
              <div className="text-24 aeonik text-left ml-[5vw]  text-anim overflow-hidden mobile:text-center mobile:ml-0">
                <span
                  ref={small}
                  className="w-[110%] relative leading-10 mobile:after:hidden after:absolute after:top-1/2 after:ml-2 after:-translate-y-1/2 after:bg-current after:h-[1.5px] after:w-[1.5vw] block mobile:w-full"
                >
                  We Creative Curve
                </span>
              </div>
              <div className="overflow-hidden text-anim flex justify-center gap-x-[2vw] mobile:flex-col mobile:mt-[4vh]">
                <span ref={we}> We</span>
                <span ref={transform}> Transform</span>
              </div>
              <div className="w-full text-right pr-[5vw] text-anim overflow-hidden mobile:text-center">
                <span ref={brands} className="block">
                  {" "}
                  Brands
                </span>
              </div>
              <div className="text-anim overflow-hidden">
                <span ref={worldwide} className="block">
                  {" "}
                  Worldwide
                </span>
              </div>
            </h1>
            <div className="mobile:flex mobile:justify-center">
              <p className="text-20 uppercase absolute top-1/2 -translate-y-[30%] w-[34vw] hero-content text-right ml-[3vw] para-anim mobile:w-[90%] mobile:ml-0 mobile:text-center mobile:-translate-y-0 mobile:static mobile:mt-[5vh] mobile:tracking-tight">
                Fueled by a relentless passion for excellence, we work with
                Fortune 500s, visionary founders, governments, and investment
                funds across industries and continents.
              </p>
            </div>
            <div onClick={handleSmoothScroll} className="uppercase text-24 cursor-pointer text-textBody absolute mt-[5vw] left-1/2 -translate-x-1/2 mobile:static mobile:translate-x-0 mobile:mt-[9vh]">
              <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out after:left-0">
                Scroll Down
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
