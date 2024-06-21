import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Story = () => {
    const accordion1 = useRef(null);
    const img1 = useRef(null);
    const accordion2 = useRef(null);
    const img2 = useRef(null);
    const container = useRef(null);

    if(globalThis.innerWidth>=1024) {
      useGSAP(()=> {
        gsap.to(img1.current, {
            scrollTrigger: {
                trigger: accordion1.current,
                start: "10% bottom",
                end: "90% top",
                scrub: 0.25,
            },
            width: "55%",
            height: "30vw",
        })
      });
      useGSAP(()=> {
        gsap.to(img2.current, {
            scrollTrigger: {
                trigger: accordion2.current,
                start: "10% bottom",
                end: "bottom top",
                scrub: 0.25,
            },
            width: "55%",
            height: "30vw",
        })
      });
    } else if (globalThis.innerWidth>540) {
      useGSAP(()=> {
        gsap.to(img1.current, {
            scrollTrigger: {
                trigger: accordion1.current,
                start: "10% bottom",
                end: "90% top",
                scrub: 0.25,
            },
            width: "100%",
            height: "35vh",
        })
      });
      useGSAP(()=> {
        gsap.to(img2.current, {
            scrollTrigger: {
                trigger: accordion2.current,
                start: "10% bottom",
                end: "bottom top",
                scrub: 0.25,
            },
            width: "100%",
            height: "35vh",
        })
      });
    } else {
      useGSAP(()=> {
        gsap.to(img1.current, {
            scrollTrigger: {
                trigger: accordion1.current,
                start: "top 70%",
                end: "bottom 50%",
                scrub: 0.25,
            },
            width: "100%",
            height: "28vh",
        })
      });
      useGSAP(()=> {
        gsap.to(img2.current, {
            scrollTrigger: {
                trigger: accordion2.current,
                start: "top 70%",
                end: "bottom 50%",
                scrub: 0.25,
            },
            width: "100%",
            height: "28vh",
        })
      });
    }
    

    

  return (
    <>
      <section data-cursor-exclusion ref={container} className="bg-black text-white">
        <div className="container min-h-[80vw] tablet:min-h-[190vw] mobile:min-h-[135vh] pb-[15%]">
          <div className="story-main text-white">
            <div
              ref={accordion1}
              className="accordion space-y-[2vw] accordion-1 tablet:space-y-[4vw] mobile:space-y-[6vw]"
            >
              <span className="w-full block border-b border-dashed border-white/50" />
              <div className="flex justify-start gap-[4%] px-[1vw] mobile:block tablet:block tablet:space-y-[4vw] mobile:space-y-[6vw]">
                <div className="w-[40%] flex flex-col justify-between space-y-[1.5vw] tablet:w-full mobile:w-full mobile:space-y-[3vw]">
                  <h3 className="text-44 tablet:text-[4vw]">
                    <span>OUR STORY</span>
                  </h3>
                  <p className="text-22 fadeUp">
                    <span>
                      At the heart of our agency lies a passion for excellence,
                      spanning continents and industries. We work with Fortune
                      500 companies, innovative startups, visionary founders,
                      and even governments and investment funds. But what truly
                      defines Creative Curve is our unwavering commitment to
                      bringing visions to life, no matter how big or small.
                    </span>
                  </p>
                </div>
                <div
                  ref={img1}
                  className="w-[20%] h-[14vw] overflow-hidden rounded-xl border border-white/50 mobile:w-[30%] mobile:h-[20%] mobile:flex mobile:justify-center mobile:mt-[5vh] "
                >
                  <Image
                    className="cover object-top h-full w-full mobile:w-full"
                    src="/images/about/story.webp"
                    alt="Our Story Image"
                    width={500}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="w-full block border-b border-dashed border-white/50" />
            </div>

            <div ref={accordion2} className="accordion space-y-[2vw] accordion-2 tablet:space-y-[4vw] mobile:space-y-[6vw]">
              <span className="w-full block border-b border-dashed border-white/50" />
              <div className="flex justify-start gap-[4%] px-[1vw] mobile:block tablet:block tablet:space-y-[4vw] mobile:space-y-[6vw]">
                <div className="w-[40%] flex flex-col justify-between space-y-[1.5vw] tablet:w-full mobile:w-full mobile:space-y-[3vw]">
                  <h3 className="text-44 tablet:text-[4vw]">
                    <span>OUR MISSION</span>
                  </h3>
                  <p className="text-22 fadeUp">
                    <span>
                    At the heart of our agency lies a passion for excellence,
                      spanning continents and industries. We work with Fortune
                      500 companies, innovative startups, visionary founders,
                      and even governments and investment funds. But what truly
                      defines Creative Curve is our unwavering commitment to
                      bringing visions to life, no matter how big or small.
                    </span>
                  </p>
                </div>
                <div
                  ref={img2}
                 className="w-[20%] h-[14vw] overflow-hidden rounded-xl border border-white/50 mobile:w-[30%] mobile:h-[20%] mobile:flex mobile:justify-center mobile:mt-[5vh] "
                >
                  <Image
                    className="cover object-top h-full w-full mobile:w-full"
                    src="/images/about/story.webp"
                    alt="Our Story Image"
                    width={500}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="w-full block border-b border-dashed border-white/50" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
