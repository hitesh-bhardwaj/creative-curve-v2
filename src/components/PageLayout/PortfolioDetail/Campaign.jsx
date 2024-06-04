import Image from "next/image"

const Campaign = ({ className, secSubHead, title, img1, img2, img3, content1, content2 }) => {
    return (
        <>
            <section id="campaign" className={`${className}`}>
                <div className="container py-[7%]">
                    <div className="flex justify-start items-center gap-[5vw]">
                        <h3 className="text-140 space-grotesk text-textHead leading-[1.2]">
                            <span>
                                Campaign
                            </span>
                        </h3>
                        <p className="w-[20vw] text-24 pt-[1.5vw]">
                            {secSubHead}
                        </p>
                    </div>
                    <div className="mt-[5vw]">
                        <h4 className="text-76 uppercase space-grotesk text-right mb-[1vw]">{title}</h4>
                        <div className="grid grid-cols-6 gap-y-[6vw]">
                            <div className="col-span-6 relative h-[46.5vw] border-4 border-black rounded-[40px] overflow-hidden">
                                <Image className="cover" src={img1} alt="Unicef Campaign Image" fill loading="lazy"/>
                            </div>
                            <div className="col-span-4 relative h-[35vw] border-4 border-black rounded-[40px] overflow-hidden">
                                <Image className="cover" src={img2} alt="Unicef Campaign Image" fill loading="lazy"/>
                            </div>
                            <div className="col-span-2 flex items-center pl-[22%]">
                                <p className="text-24">
                                    {content1}
                                </p>
                            </div>
                            <div className="col-span-2 flex items-center pr-[20%] space-grotesk capitalize">
                                <p className="text-[3.4vw]">
                                    {content2}
                                </p>
                            </div>
                            <div className="col-span-4 relative h-[35vw] border-4 border-black rounded-[40px] overflow-hidden">
                                <Image className="cover" src={img3} alt="Unicef Campaign Image" fill loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Campaign