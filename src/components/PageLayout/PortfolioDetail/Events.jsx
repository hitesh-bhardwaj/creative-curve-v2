import Image from "next/image"

const Events = ({ className, img1, img2, img3, img4, img5 }) => {
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="container pt-[7%] pb-[9%]">
                    <div className="space-y-[1.5vw] mb-[6vw] relative w-full">
                        <div className="w-full flex justify-between items-start">
                            <h3 className="text-140 space-grotesk leading-[1.2]">
                                <span className="w-full block">
                                    Events
                                </span>
                            </h3>
                            <p className="pt-[2vw] text-24 w-[25%]">
                                From global branding trends to the nuances of digital storytelling, explore the world through our lens.
                            </p>
                        </div>
                        <p className="text-24 w-[35%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="w-full h-full grid grid-cols-8 gap-[3vw] items-end">
                        {img1 && (
                            <div className="col-span-5 h-[60vh] relative rounded-[40px] overflow-hidden">
                                <Image 
                                    loading="lazy"
                                    src={img1}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover"
                                />
                            </div>
                        )}
                        {img2 && (
                            <div className="col-span-3 -mt-[25%] h-[80vh] relative rounded-[40px] overflow-hidden">
                                <Image 
                                    loading="lazy"
                                    src={img2}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover"
                                />
                            </div>
                        )}
                        {img3 && (
                            <div className="col-span-8 h-[85vh] relative rounded-[40px] overflow-hidden">
                                <Image 
                                    loading="lazy"
                                    src={img3}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover"
                                />
                            </div>
                        )}
                        {img4 && (
                            <div className="col-span-4 h-[55vh] relative rounded-[40px] overflow-hidden">
                                <Image 
                                    loading="lazy"
                                    src={img4}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover"
                                />
                            </div>
                        )}
                        {img5 && (
                            <div className="col-span-4 h-[55vh] relative rounded-[40px] overflow-hidden">
                                <Image 
                                    loading="lazy"
                                    src={img5}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events