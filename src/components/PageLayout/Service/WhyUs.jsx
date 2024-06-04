import Image from "next/image"
import imageSrc from "../../../../public/images/service/why-us.png"

const WhyUs = () => {
    return (
        <>
            <section className="why-us">
                <div className="container py-[10%]">
                    <div className="mb-[4vw]">
                        <h2 className="text-140 space-grotesk">
                            <span>
                                Why Choose Us
                            </span>
                        </h2>
                    </div>

                    <div className="flex justify-between items-start w-full h-full">
                        <div className="flex flex-col gap-[12vw] items-start w-[40%] py-[1vw]">
                            <div className="space-y-[2vw]">
                                <p className="text-24">
                                    We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                                </p>
                                <p className="text-24">
                                    We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                                </p>
                            </div>

                            <div className="w-full space-y-[2vw]">
                                <div className="">
                                    <div className="px-[1vw] flex justify-between items-center w-full">
                                        <h4 className="text-96 font-medium overflow-hidden relative after:absolute after:block after:content-['+'] after:top-[10%] after:right-[0] pr-[2.5vw] after:h-[3vw] after:w-[3vw] after:leading-[0.4] after:font-normal">
                                            <span>5</span>
                                            <span>0</span>
                                            <span>0</span>
                                            <span>0</span>
                                        </h4>
                                        <p className="text-24 w-[7vw]">Customer <br /> Reviews</p>
                                    </div>
                                    <span className="block w-full h-[1px] bg-black/20" />
                                </div>

                                <div className="">
                                    <div className="px-[1vw] flex justify-between items-center w-full">
                                    <h4 className="text-96 font-medium overflow-hidden relative after:absolute after:block after:content-['%'] after:top-[20%] after:right-[0] pr-[2.5vw] after:h-[3vw] after:w-[3vw] after:leading-[0.4] after:text-[3vw] after:font-normal">
                                            <span>9</span>
                                            <span>9</span>
                                        </h4>
                                        <p className="text-24 w-[7vw]">Satisfied <br /> Customers</p>
                                    </div>
                                    <span className="block w-full h-[1px] bg-black/20" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[48%] h-[45vw] relative overflow-hidden rounded-[20px]">
                            <Image
                                src={imageSrc}
                                alt="Service Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs