import Link from "next/link";
import Image from "next/image";

const Projects = () => {
    return (
        <>
            <section id="second-section" className="bg-black text-white">
                <div className="container py-[9%]">
                    <div className="text-center mx-auto w-3/4">
                        <p className="space-grotesk text-48">
                            <span>
                                Explore our case studies and see how Creative Curve evolves brands for a changing world, ensuring cultural relevance and future readiness
                            </span>
                        </p>
                    </div>
                    <div className="mt-[8vw]">
                        <div className="grid grid-cols-10 gap-[40px]">
                            <div className="col-span-5">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden">
                                        <Image 
                                            className="cover scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-out"
                                            src="/images/projects/project-bharti-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw]">Bharti Foundation</h3>
                                </Link>
                            </div>
                            <div className="col-span-5">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden">
                                        <Image 
                                            className="cover scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-out"
                                            src="/images/projects/project-wfp-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw]">World Food Programme</h3>
                                </Link>
                            </div>
                            <div className="col-span-6">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[85vh] relative rounded-[40px] overflow-hidden">
                                        <Image 
                                            className="cover scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-out"
                                            src="/images/projects/project-wwf-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw]">World Wildlife Fund</h3>
                                </Link>
                            </div>
                            <div className="col-span-4">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[85vh] relative rounded-[40px] overflow-hidden">
                                        <Image 
                                            className="cover scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-out"
                                            src="/images/projects/project-stc-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw]">Save the children</h3>
                                </Link>
                            </div>
                            <div className="col-span-4">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden">
                                        <Image 
                                            className="cover scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-out"
                                            src="/images/projects/project-unicef-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw]">Unicef</h3>
                                </Link>
                            </div>
                            <div className="col-span-6">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[75vh] relative rounded-[40px] overflow-hidden">
                                        <Image
                                            className="cover scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-out"
                                            src="/images/projects/project-oxfam-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw]">Oxfam</h3>
                                </Link>
                            </div>
                            <div className="col-span-6">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[70vh] relative rounded-[40px] overflow-hidden">
                                        <Image 
                                            className="cover scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-out"
                                            src="/images/projects/project-ap-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw]">Asian Paints</h3>
                                </Link>
                            </div>
                            <div className="col-span-4">
                                <Link href="#" className="space-y-[1vw] group">
                                    <div className="w-full h-[70vh] relative rounded-[40px] overflow-hidden">
                                        <Image 
                                            className="cover scale-[1.05] group-hover:scale-100 transition-all duration-500 ease-out"
                                            src="/images/projects/project-canon-lg.png"
                                            alt="Portfolio Image"
                                            fill
                                        />
                                    </div>
                                    <h3 className="space-grotesk text-[2.2vw]">Canon</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
    
export default Projects