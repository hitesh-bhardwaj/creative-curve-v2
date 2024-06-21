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
            scrollTo: {y: "#second-section", offsetY: 0},
            ease: "power3.inOut",
        });
    };

  const we = useRef(null);
  const transform = useRef(null);
  const brands = useRef(null);
  const worldwide = useRef(null);
  const small = useRef(null);

  useGSAP(() => {
      const text = new SplitType('.para-anim', { types: 'words' });
      const para = document.querySelectorAll(".para-anim .word")
      const tl = gsap.timeline();

      tl.from(we.current, {
          duration: 1,
          xPercent: -150,
          delay: 4.3,
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
          duration: 1,
          yPercent: 100,
          stagger: 0.01,
          delay: -1,
          ease: "power3.out"
      })
      .from(small.current, {
          duration: 1,
          yPercent: -100,
          delay: -0.8,
          ease: "power3.out"
      }).from(".scroll-btn", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out",
        delay: -0.6
      })
  }, []);

    useGSAP(()=> {
    if(globalThis.innerWidth>540) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom 40%",
          scrub: true,
        }
      });
  
      tl.to(worldwide.current, {
        yPercent: 100,
        duration: 0.8,
        ease: "power2.in",
      }).to(brands.current, {
        yPercent: 100,
        duration: 0.8,
        delay: -0.7,ease: "power2.in",
      }).to(".para-anim", {
        yPercent: 100,
        duration: 0.8,
        delay: -0.7,ease: "power2.in",
      }).to(transform.current, {
        yPercent: 100,
        duration: 0.8,
        delay: -0.7,ease: "power2.in",
      }).to(we.current, {
        yPercent: 100,
        duration: 0.8,
        delay: -0.7,ease: "power2.in",
      }).to(small.current, {
        yPercent: 100,
        duration: 0.8,
        delay: -0.7,ease: "power2.in",
      })
    }
    });

  return (
    <>
      <section className="h-screen" style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}} id="hero">
        <div className="fixed top-0 right-0 left-0 bottom-0">
        <div className="container h-screen flex justify-center items-center hero-container mobile:items-center mobile:max-w-full">
          <div className="text-center w-full mobile:flex mobile:flex-col tablet:flex tablet:flex-col">
            <h1 className="title-h1">
              <div className="text-24 aeonik text-left ml-[5vw]  text-anim overflow-hidden mobile:text-center mobile:ml-0 tablet:text-center tablet:ml-0">
                <span
                  ref={small}
                  className="w-[110%] relative leading-10 mobile:after:hidden after:absolute after:top-1/2 after:ml-2 after:-translate-y-1/2 after:bg-current after:h-[1.5px] after:w-[1.5vw] block mobile:w-full tablet:w-full tablet:after:hidden"
                >
                  We Creative Curve
                </span>
              </div>
              <div className="overflow-hidden text-anim flex justify-center gap-x-[2vw] mobile:flex-col mobile:mt-[4vh] tablet:flex-col tablet:mt-[2vh]">
                <span ref={we} className="mobile:overflow-hidden"> We</span>
                <span ref={transform} className="mobile:overflow-hidden"> Transform</span>
              </div>
              <div className="w-full text-right pr-[5vw] text-anim overflow-hidden mobile:text-center tablet:text-center">
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
            <div className="mobile:flex mobile:justify-center tablet:flex tablet:justify-center">
              <p className="text-20 uppercase absolute top-1/2 -translate-y-[30%] w-[34vw] hero-content text-right ml-[3vw] para-anim mobile:w-[90%] mobile:ml-0 mobile:text-center mobile:-translate-y-0 mobile:static mobile:mt-[5vh] mobile:tracking-tight tablet:w-[70%] tablet:ml-0 tablet:text-center tablet:-translate-y-0 tablet:static tablet:mt-[5vh] tablet:tracking-tight">
                Fueled by a relentless passion for excellence, we work with
                Fortune 500s, visionary founders, governments, and investment
                funds across industries and continents.
              </p>
            </div>
            <div onClick={handleSmoothScroll} className="scroll-btn uppercase text-24 cursor-pointer text-textBody absolute mt-[5vw] left-1/2 -translate-x-1/2 mobile:static mobile:translate-x-0 mobile:mt-[9vh] tablet:static tablet:translate-x-0 tablet:mt-[9vh]">
              <span data-cursor-size="60px" data-cursor-exclusion className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out after:left-0">
                Scroll Down
              </span>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
