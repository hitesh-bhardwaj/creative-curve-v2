import Image from "next/image"

const Storyboard2 = ({ className, img1, img2, img3, img4, img5, img6 }) => {
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="container pt-[7%] pb-[10%]">
                    <div className="space-y-[1.5vw] mb-[6vw]">
                        <h3 className="text-140 space-grotesk text-center leading-[1.2]">
                            <span>
                                StoryBoard
                            </span>
                        </h3>
                        <p className="text-center text-24 w-[60%] mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                        </p>
                    </div>

                    <div className="w-full h-full gap-x-[3vw] gap-y-[5vw] grid grid-col-2">
                        <div className="col-span-2 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400">
                            <Image 
                                loading="lazy"
                                src={img1}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                        <div className="col-span-1 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400">
                            <Image 
                                loading="lazy"
                                src={img2}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                        <div className="col-span-1 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400">
                            <Image 
                                loading="lazy"
                                src={img3}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                        <div className="col-span-2 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400">
                            <Image 
                                loading="lazy"
                                src={img4}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                        <div className="col-span-2 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400">
                            <Image 
                                loading="lazy"
                                src={img5}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>
                        <div className="col-span-2 h-[90vh] relative rounded-[35px] overflow-hidden border-4 border-sky-400">
                            <Image 
                                loading="lazy"
                                src={img6}
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

export default Storyboard2