import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Portfolio() {

    const pinContainer = useRef(null);
    const pin = useRef(null);

    useGSAP(() => {
        const parallaxImgs = document.querySelectorAll(".parallaximg");
        parallaxImgs.forEach((parallaxImg) => {
            gsap.to(parallaxImg, {
                yPercent: 10,
                scrollTrigger: {
                    trigger: parallaxImg,
                    start: '20% bottom',
                    end: 'bottom top',
                    scrub: true,
                    // markers: true
                  },
            })
        })
    });

    useGSAP(() => {
        ScrollTrigger.create({
          trigger: pin.current,
          start: "top 18%",
          endTrigger: pinContainer.current,
          end: "bottom bottom",
          invalidateOnRefresh: true,
          pin: pin.current,
          markers: false,
        });
    }, []);

    useGSAP(() => {
        const headings = document.querySelectorAll('.heading-anim');
        headings.forEach((heading) => {
            const headingSplit = new SplitType(heading, {types: 'lines, words, chars'});
            let headingWord = heading.querySelectorAll('.word .char');
            gsap.from(headingWord, {
              scrollTrigger: {
                trigger: headingWord,
                start: 'top 85%',
              },
              duration: 0.6,
              yPercent: 110,
              rotate: "10deg",
              stagger: 0.04,
            });
          });
      }, []);

      useGSAP(() => {
        const paraAnimations = document.querySelectorAll('.para-animations');
        paraAnimations.forEach((paraAnimation) => {
            const paraSplit = new SplitType(paraAnimation, {types: 'words, chars'});
            let paraword = paraAnimation.querySelectorAll('.word .char');
            gsap.from(paraword, {
              scrollTrigger: {
                trigger: paraword,
                start: 'top 85%',
              },
              filter: "blur(10px)",
              opacity: 0,
              duration: 0.6,
              yPercent: 100,
              stagger: 0.005,
            });
          });
      }, []);

      useGSAP(() => {
        const fadeUps = document.querySelectorAll('.fadeUp');
          fadeUps.forEach((fadeUp) => {
            gsap.fromTo(
              fadeUp,
              {
                opacity: 0,
                y: 50,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'Power3.out',
                scrollTrigger: {
                  trigger: fadeUp,
                  start: 'top 85%',
                },
              }
            );
          });
      }, []);

    return (
        <>
            <section ref={pinContainer} className="py-[10%] bg-black relative" id="second-section">
                <div className="container grid grid-cols-11 items-center gap-y-[3vw]">
                    <div ref={pin} className="text-white absolute top-[10%] w-[45%]" >
                        <p className="text-24 mb-[1vw] fadeUp">Our Portfolio</p>
                        <div className="w-full h-fit overflow-hidden">
                        <h2 className="text-96 leading-[1] mb-[1vw] font-regular space-grotesk heading-anim">
                            Featured Works
                        </h2> 
                            </div>                   
                        <p className="text-22 w-[60%] mb-[2vw] para-animations">
                            Dive into a world where design meets strategy, only at Creative Curve. Our creative designing services are more than just aesthetics.
                        </p>
                        <Link href="#" className="border block w-fit border-[#4D4D4D] py-[1vw] text-24 px-[2.5vw] rounded-full bg-[#1D1D1D] fadeUp">
                            <span className="uppercase">
                                ALL WORKS
                            </span>
                        </Link>
                    </div>

                    <Link href="#" className="col-span-5 col-start-7">
                        <div data-parallax-img className="h-[45vw] overflow-hidden rounded-[50px] relative">
                            <Image 
                                className="w-full h-full object-cover scale-[110%] translate-y-[-5%] parallaximg1 parallaximg"
                                src="/images/home/wwf.png"
                                height={1000}
                                width={1000}
                                alt="Portfolio Image"
                            />
                            <h3 className="uppercase text-white absolute left-[10%] bottom-[5%] text-[2vw] drop-shadow para-animations">
                                World Wildlife Fund
                            </h3>
                        </div>
                    </Link>
                    <Link href="#" className="col-span-5">
                        <div data-parallax-img className="h-[45vw] overflow-hidden rounded-[50px] relative">
                            <Image 
                                className="w-full h-full object-cover scale-[110%] translate-y-[-5%] parallaximg2 parallaximg"
                                src="/images/home/bharti.png"
                                height={1000}
                                width={1000}
                                alt="Portfolio Image"
                            />
                            <h3 className="uppercase text-white absolute left-[10%] bottom-[5%] text-[2vw] drop-shadow para-animations">
                                Bharti Foundation
                            </h3>
                        </div>
                    </Link>
                    <Link href="#" className="col-span-5 col-start-7">
                        <div data-parallax-img className="h-[35vw] overflow-hidden rounded-[50px] relative">
                            <Image 
                                className="w-full h-full object-cover scale-[110%] translate-y-[-5%] parallaximg3 parallaximg"
                                src="/images/home/wfp.png"
                                height={1000}
                                width={1000}
                                alt="Portfolio Image"
                            />
                            <h3 className="uppercase text-white absolute left-[10%] bottom-[5%] text-[2vw] drop-shadow para-animations">
                                World Food Programme
                            </h3>
                        </div>
                    </Link>
                    <Link href="#" className="col-span-5">
                        <div data-parallax-img className="h-[35vw] overflow-hidden rounded-[50px] relative">
                            <Image 
                                className="w-full h-full object-cover scale-[110%] translate-y-[-5%] parallaximg4 parallaximg"
                                src="/images/home/unicef.png"
                                height={1000}
                                width={1000}
                                alt="Portfolio Image"
                            />
                            <h3 className="uppercase text-white absolute left-[10%] bottom-[5%] text-[2vw] drop-shadow para-animations">
                                Unicef
                            </h3>
                        </div>
                    </Link>
                    <Link href="#" className="col-span-5 col-start-7">
                        <div data-parallax-img className="h-[45vw] overflow-hidden rounded-[50px] relative">
                            <Image 
                                className="w-full h-full object-cover scale-[110%] translate-y-[-5%] parallaximg5 parallaximg"
                                src="/images/home/stc.png"
                                height={1000}
                                width={1000}
                                alt="Portfolio Image"
                            />
                            <h3 className="uppercase text-white absolute left-[10%] bottom-[5%] text-[2vw] drop-shadow para-animations">
                                Save The Children
                            </h3>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Portfolio;