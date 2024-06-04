const Overview = ({ videoSrc, videoPoster, content1, content2 }) => {
    return (
        <>
            <section id="second-section" className="bg-black text-white">
                <div className="container pt-[8%] pb-[8%]">
                    <div className="flex justify-between items-start">
                        <h2 className="overview text-76 space-grotesk uppercase leading-[1.2]">
                            <span>
                                Overview
                            </span>
                        </h2>
                        <div className="w-[55%] space-y-[2vw]">
                            <p className="text-[2.08vw] leading-[1.3]">
                                {content1}
                            </p>
                            {content2 && (
                                <p className="text-[2.08vw] leading-[1.3]">
                                    {content2}
                                </p>
                            )}
                        </div>
                    </div>

                    {videoSrc && (
                        <div className="w-full mt-[8%] rounded-[40px] overflow-hidden">
                            <video className="w-full h-full cover" loading="lazy" loop poster={videoPoster}>
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Overview