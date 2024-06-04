import Image from "next/image"

const Storyboard = ({ className, img1, img2, img3, img4 }) => {
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="pt-[7%] pb-[9%]">
                    <div className="space-y-[1.5vw] mb-[6vw]">
                        <h3 className="text-140 space-grotesk text-center leading-[1.2]">
                            <span>
                                StoryBoard
                            </span>
                        </h3>
                        <p className="text-center text-24 w-[48%] mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                        </p>
                    </div>

                    <div className="w-full h-full space-y-[7vw]">
                        <div className="w-full h-[90vh] relative">
                            <Image 
                                loading="lazy"
                                src={img1}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative">
                            <Image 
                                loading="lazy"
                                src={img2}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative">
                            <Image 
                                loading="lazy"
                                src={img3}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                        <div className="w-full h-[90vh] relative">
                            <Image 
                                loading="lazy"
                                src={img4}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Storyboard