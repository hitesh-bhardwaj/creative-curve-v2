import Image from "next/image";
import Link from "next/link";

const FeaturedArticle = () => {
    return (
        <>
            <section id="second-section" className="bg-black text-white">
                <div className="container py-[8%]">
                    <div className="w-[45%] relative">
                        <h2 className="text-140 leading-[1.1] space-grotesk mb-[1vw] heading-anim text-white">
                            Featured
                            <br />
                            Blog
                        </h2>
                        <p className="text-24 w-[50%] para-animations absolute right-0 bottom-2">
                            <span>
                                From global branding trends to the nuances of digital storytelling, explore the world through our lens.
                            </span>
                        </p>
                    </div>

                    <div className="flex justify-between items-start mt-[6vw]">
                        <div className="h-[80vh] w-[55%] relative rounded-[40px] overflow-hidden">
                            <Image 
                                src="/images/blogs/featured.png"
                                fill
                                className="cover"
                                alt="Featured Blog Image"
                                quality={100}
                            />
                        </div>

                        <div className="w-[40%] space-y-[2vw] pt-4">

                            <div className="flex justify-start gap-[2.5vw] items-center">
                                <div className="rounded-full bg-white text-textHead space-grotesk text-24 px-[2vw] py-[0.8vw]">
                                    <span>
                                        Branding
                                    </span>
                                </div>

                                <div className="rounded-full border border-white/70 space-grotesk text-24 px-[1.4vw] py-[0.8vw]">
                                    <span>
                                        19, June 2023
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-[2.5vw]">
                                <h3 className="text-[2.9vw] leading-[1.2]">
                                    Global Branding in a Digital Age: Insights from Creative Curve
                                </h3>
                                <p className="text-24">
                                    Digital branding allows companies to tap into new demographics, geos, and psychographics. With 4.66 billion active internet users worldwide.
                                </p>
                                <Link href="#" className="border block w-fit border-[#4D4D4D] py-[1vw] text-24 px-[2.5vw] rounded-full bg-[#1D1D1D] fadeUp">
                                    <span className="uppercase">
                                        ALL WORKS
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
