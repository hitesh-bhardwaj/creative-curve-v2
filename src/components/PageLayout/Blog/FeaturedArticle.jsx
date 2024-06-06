import Image from "next/image";
import Link from "next/link";

const FeaturedArticle = () => {
    return (
        <>
            <section id="second-section" className="bg-black text-white">
                <div className="container py-[8%]">
                    <div className="w-[45%] relative mobile:w-full">
                        <h2 className="text-140 leading-[1.1] space-grotesk mb-[1vw] heading-anim text-white">
                            Featured
                            
                            Blog
                        </h2>
                        <p className="text-24 w-[50%] para-animations absolute right-0 bottom-2 mobile:static mobile:w-[80%] mobile:pt-[10%]">
                            <span>
                                From global branding trends to the nuances of digital storytelling, explore the world through our lens.
                            </span>
                        </p>
                    </div>

                    <div className="flex justify-between items-start mt-[6vw] mobile:flex-col">
                        <div className="h-[80vh] w-[55%] relative rounded-[40px] overflow-hidden mobile:w-full mobile:h-[40vh] mobile:rounded-[20px]">
                            <Image 
                                src="/images/blogs/featured.png"
                                fill
                                className="cover"
                                alt="Featured Blog Image"
                                quality={100}
                            />
                        </div>

                        <div className="w-[40%] space-y-[2vw] pt-4 mobile:w-full mobile:mt-[3vh]">

                            <div className="flex justify-start gap-[2.5vw] items-center">
                                <div className="rounded-full bg-white text-textHead space-grotesk text-24 px-[2vw] py-[0.8vw] mobile:px-[5vw] mobile:py-[2.5vw] mobile:text-[4vw]">
                                    <span>
                                        Branding
                                    </span>
                                </div>

                                <div className="rounded-full border border-white/70 space-grotesk text-24 px-[1.4vw] py-[0.8vw] mobile:px-[3vw] mobile:py-[3vw] mobile:text-[3.5vw]">
                                    <span>
                                        19, June 2023
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-[2.5vw] mobile:pt-[2vh]">
                                <h3 className="text-[2.9vw] leading-[1.2] mobile:text-[5.5vw]">
                                    Global Branding in a Digital Age: Insights from Creative Curve
                                </h3>
                                <p className="text-24 mobile:text-[4vw] mobile:pt-[1.5vh] mobile:pb-[4vh]">
                                    Digital branding allows companies to tap into new demographics, geos, and psychographics. With 4.66 billion active internet users worldwide.
                                </p>
                                <Link href="#" className="border block w-fit border-[#4D4D4D] py-[1vw] text-24 px-[2.5vw] rounded-full bg-[#1D1D1D] fadeUp mobile:px-[5vw] mobile:text-[3.5vw] mobile:py-[3vw]">
                                    <span className="uppercase">
                                        Read More
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedArticle;
