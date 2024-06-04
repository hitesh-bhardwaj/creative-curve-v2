import Image from "next/image"

const Branding = ({ className, videoSrc, videoPoster, img1, img2, img3 }) => {
    return (
        <>
            <section id="second-section" className={`${className}`}>
                <div className="container pt-[7%] pb-[9%]">
                    <div className="space-y-[1.5vw] mb-[7vw] relative w-2/3">
                        <h3 className="text-140 space-grotesk leading-[1.2]">
                            <span className="ml-[10%] w-full block">
                                Branding
                            </span>
                            <span className="block">
                                Overview
                            </span>
                        </h3>
                        <p className="right-0 bottom-0 pb-[1.5vw] absolute text-24 w-[40%] mx-auto">
                            From global branding trends to the nuances of digital storytelling, explore the world through our lens.
                        </p>
                    </div>

                    <div className="w-full h-full grid grid-cols-2 gap-[3vw]">
                        {img1 && (
                            <div className="col-span-2 h-[90vh] relative rounded-[40px] overflow-hidden">
                                <Image 
                                    loading="lazy"
                                    src={img1}
                                    alt="StoryBoard Image"
                                    fill
                                    className="cover"
                                />
                            </div>
                        )}
                        {videoSrc && (
                            <div className="col-span-2 rounded-[40px] overflow-hidden">
                                <video className="w-full h-full cover" loading="lazy" loop poster={videoPoster}>
                                    <source src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                        {img2 && (
                            <div className="col-span-1 h-[55vh] relative rounded-[40px] overflow-hidden">
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
                            <div className="col-span-1 h-[55vh] relative rounded-[40px] overflow-hidden">
                                <Image 
                                    loading="lazy"
                                    src={img3}
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

export default Branding