import Image from "next/image"

const Storyboard = ({ className, img1, img2, img3, img4 }) => {
  
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="pt-[7%] pb-[9%] mobile:pt-[25%] mobile:pb-[25%] tablet:pt-[15%] tablet:pb-[15%]">
                    <div className="space-y-[1.5vw] mb-[6vw] mobile:mb-[10vw] tablet:mb-[8vw]">
                        <h3 className="text-140 space-grotesk text-center leading-[1.2] overflow-hidden heading-anim">
                            <span>
                                Story Board
                            </span>
                        </h3>
                        <p className="text-center text-24 w-[48%] mx-auto mobile:w-[90%] mobile:pt-[2vh] mobile:text-[4vw] para-animations tablet:w-[80%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                        </p>
                    </div>

                    <div className="w-full h-full space-y-[7vw] mobile:space-y-[10vw] tablet:sapce-y-[10vw]">
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] fadeUp tablet:h-[35vh] ">
                            <Image 
                                loading="lazy"
                                src={img1}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-left"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] tablet:h-[35vh] fadeUp">
                            <Image 
                                loading="lazy"
                                src={img2}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-left"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh]  tablet:h-[35vh] fadeUp">
                            <Image 
                                loading="lazy"
                                src={img3}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-center"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] tablet:h-[35vh] fadeUp">
                            <Image 
                                loading="lazy"
                                src={img4}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-right "
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Storyboard