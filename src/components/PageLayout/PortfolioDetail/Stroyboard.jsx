import Image from "next/image"

const Storyboard = ({ className, img1, img2, img3, img4 }) => {
  
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="pt-[7%] pb-[9%] mobile:pt-[12%] mobile:pb-[20%]">
                    <div className="space-y-[1.5vw] mb-[6vw]">
                        <h3 className="text-140 space-grotesk text-center leading-[1.2] overflow-hidden heading-anim">
                            <span>
                                Story Board
                            </span>
                        </h3>
                        <p className="text-center text-24 w-[48%] mx-auto mobile:w-[90%] mobile:pt-[2vh] mobile:text-[4vw] para-animations">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                        </p>
                    </div>

                    <div className="w-full h-full space-y-[7vw]">
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] fadeUp ">
                            <Image 
                                loading="lazy"
                                src={img1}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-left"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] mobile:pt-[3vh] fadeUp">
                            <Image 
                                loading="lazy"
                                src={img2}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-left"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] mobile:pt-[3vh] fadeUp">
                            <Image 
                                loading="lazy"
                                src={img3}
                                alt="StoryBoard Image"
                                fill
                                className="cover mobile:object-center"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative mobile:h-[22vh] mobile:pt-[3vh] fadeUp">
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