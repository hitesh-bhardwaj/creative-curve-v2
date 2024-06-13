import Image from "next/image"
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Hero = ({ heading, subheading, imgSrc }) => {
    
    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {y: "#second-section", offsetY: 50},
            ease: "power3.inOut",
        });
    };

    return (
        <>
            <section id="hero" data-cursor-exclusion>
                <div className="h-[85vh] relative">
                    <div className="w-full h-full absolute top-0 left-0">
                        <Image className="cover" src={imgSrc} alt={`${heading} Background Image`} fill priority={true}/>
                    </div>
                    <div className="container relative z-[1] flex text-center items-center flex-col justify-center h-full w-full mobile:justify-start mobile:pt-[40%] tablet:justify-start tablet:pt-[30%]">
                        <h1 className="text-190 tracking-[1px] leading-[1.1] space-grotesk text-white overflow-hidden">
                            <span className="uppercase drop-shadow-2xl heading-anim block">{heading}</span>
                        </h1>

                        <div className="flex justify-between w-full absolute bottom-[15%] mobile:flex-col mobile:static tablet:flex-col tablet:static tablet:gap-[50vw]">
                            <div onClick={handleSmoothScroll} data-cursor-size="60px" className="uppercase cursor-pointer text-24 text-white mobile:order-2 mobile:absolute mobile:bottom-[10%] mobile:left-[30%] tablet:order-2 tablet:absolute tablet:bottom-[10%] tablet:left-0 ">
                                <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">Scroll Down</span>
                            </div>

                            <p className="text-24 text-white text-right w-[25vw] mobile:order-1 mobile:w-full mobile:text-center mobile:mt-[4vh] para-animations tablet:order-1 tablet:w-full tablet:text-center tablet:mt-[4vh]">
                                <span className="drop-shadow-2xl">
                                    {subheading}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero