import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Parallax() {

    useGSAP(() => {
          const sectionBreakAnimations = document.querySelectorAll('.section-break');
            sectionBreakAnimations.forEach((sectionBreakAnimation) => {
              const sectionBreakAnim = new SplitType(sectionBreakAnimation, {types: 'words, chars'});
              let sectionBreakAnimWord = sectionBreakAnimation.querySelectorAll('.char');
    
            gsap.from(sectionBreakAnimWord, {
              scrollTrigger: {
                trigger: sectionBreakAnimation,
                start: 'top 80%',
                scrub: 1,
                end: 'bottom 30%',
                markers: false
              },

              duration: 0.8,
              opacity: 0.1,
              stagger: 0.02,
            });
          });
      }, []);

      useGSAP(() => {
        const parallaxDowns = document.querySelectorAll("[data-parallax-down] img");
        parallaxDowns.forEach((parallaxDown) => {
            gsap.from(parallaxDown, {
                yPercent: -30,
                scrollTrigger: {
                    trigger: parallaxDown,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    markers: false
                  },
            })
        })
    }, []);

    useGSAP(() => {
        const parallaxUps = document.querySelectorAll("[data-parallax-up] img");
        parallaxUps.forEach((parallaxUp) => {
            gsap.from(parallaxUp, {
                yPercent: 30,
                scrollTrigger: {
                    trigger: parallaxUp,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    markers: false
                  },
            })
        })
    }, []);

    return (
        <>
            <section id="parallax">
                <div className="container py-[10%] relative mobile:py-[40%]">
                    <h3 className="text-120 aeonik leading-[1.2] w-[81.5%] section-break text-textHead mobile:leading-[1] mobile:w-full">
                        <span>
                            Creative Curve has grown into a global powerhouse, recognized for its unique blend of innovation and expertise. Our diverse team, hailing from various corners of the world
                        </span>
                    </h3>
                    <div data-parallax-down className="absolute h-[22vw] top-[10%] right-[20%] -z-[1] mobile:h-[60vw] mobile:right-0 mobile:top-[7%]">
                        <Image
                            className="w-full h-full object-cover"
                            src="/images/home/parallax-1.png"
                            width={1000}
                            height={1000}
                            alt="Image"
                        />
                    </div>
                    <div data-parallax-up className="absolute h-[35vw] top-[40%] right-[-10%] -z-[1] mobile:h-[60vw]">
                        <Image
                            className="w-full h-full object-cover"
                            src="/images/home/parallax-2.png"
                            width={1000}
                            height={1000}
                            alt="Image"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Parallax