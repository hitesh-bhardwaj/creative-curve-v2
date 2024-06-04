import Image from "next/image"

const Pr = ({ className, img1, img2, img3, img4, img5 }) => {
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="container pt-[7%] pb-[9%]">
                    <div className="space-y-[1.5vw] mb-[6vw] flex justify-between items-end">
                        <div className="w-1/2">
                            <h3 className="text-140 space-grotesk leading-[1.1]">
                                <span className="">
                                    Public
                                </span>
                                <span className="block">
                                    Relation
                                </span>
                            </h3>
                            <p className="text-24 w-[70%]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div className="relative h-[45vh] border-2 rounded-[35px] overflow-hidden border-black/50 w-[41%]">
                            <Image 
                                src={img1}
                                alt="pr-image"
                                fill
                                className="cover"
                            />
                        </div>
                    </div>

                    <div className="w-full h-full gap-x-[3vw] gap-y-[5vw] grid grid-col-4">
                        <div className="col-span-4 h-[85vh] relative border-2 rounded-[35px] overflow-hidden border-black/50">
                            <Image 
                                loading="lazy"
                                src={img2}
                                alt="StoryBoard Image"
                                fill
                                className="cover"
                            />
                        </div>

                        {img3 && (
                            <div className="col-span-4 h-[45vh] relative border-2 rounded-[35px] overflow-hidden border-black/50">
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
                            <div className="col-span-1 h-[65vh] relative border-2 rounded-[35px] overflow-hidden border-black/50">
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
                            <div className="col-span-3 h-[65vh] relative border-2 rounded-[35px] overflow-hidden border-black/50">
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

export default Pr