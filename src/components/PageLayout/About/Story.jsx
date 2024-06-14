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

  return (
    <>
      <section ref={container} className="bg-black text-white">
        <div className="container min-h-[80vw]">
          <div className="story-main text-white">
            <div
              ref={accordion1}
              className="accordion space-y-[2vw] accordion-1"
            >
              <span className="w-full block border-b border-dashed border-white/50" />
              <div className="flex justify-start gap-[4%] px-[1vw] mobile:flex-col">
                <div className="w-[40%] flex flex-col justify-between space-y-[1.5vw] mobile:w-full">
                  <h3 className="text-44">
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
                  className="w-[20%] h-[14vw] overflow-hidden rounded-xl border border-white/50 mobile:w-full mobile:h-[60vw] mobile:flex mobile:justify-center mobile:mt-[5vh] "
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

            <div ref={accordion2} className="accordion space-y-[2vw] accordion-2">
              <span className="w-full block border-b border-dashed border-white/50" />
              <div className="flex justify-start gap-[4%] px-[1vw] mobile:flex-col">
                <div className="w-[40%] flex flex-col justify-between space-y-[1.5vw] mobile:w-full">
                  <h3 className="text-44">
                    <span>OUR MISSION</span>
                  </h3>
                  <p className="text-22 mobile:hidden fadeUp">
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
                <div ref={img2} 
                    className="w-[20%] h-[14vw] overflow-hidden rounded-xl border border-white/50 mobile:w-full mobile:h-[60vw]  mobile:justify-center mobile:mt-[5vh] mobile:hidden">
                  <Image
                    className="cover object-top h-full w-full"
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
