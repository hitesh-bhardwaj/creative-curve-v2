import Link from "next/link"

const Info = () => {
    return (
        <>
            <section id="second-section" className="bg-black text-white">
                <div className="container py-[6%] space-y-[7vw]">
                    <div className="w-[90%] mx-auto mobile:w-full">
                        <h2 className="text-76 space-grotesk text-center leading-[1.2] mobile:text-[6vw]">
                            Ready for a Game-Changing Partnership? Let's Shape the Future, Side by Side.
                        </h2>
                    </div>

                    <div className="border-y-[0.5px] border-[#999999] flex w-full justify-center items-center mobile:flex-col mobile:border-y-0">
                        <div className="text-center w-1/2 border-r-[0.5px] border-[#999] py-[3vw] mobile:w-full mobile:border-r-[0px] mobile:border-b-[0.5px] mobile:border-t-0 mobile:py-[7vw]">
                            <h3 className="text-20 text-[#888888]">Phone</h3>
                            <Link href="tel:+91 9810007195" className="text-44 block group overflow-hidden">
                                <span data-content="+91 9810007195" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                    +91 9810007195
                                </span>
                            </Link>
                        </div>

                        <div className="text-center w-1/2 border-l-[0.5px] border-[#999] ml-[-0.5px] py-[3vw] mobile:w-full mobile:border-l-[0px] mobile:border-b-[0.5px] mobile:border-t-0 mobile:py-[7vw]">
                            <h3 className="text-20 text-[#888888]">Email</h3>
                            <Link href="mailto:info@creative-curve.co.in" className="text-44 block group overflow-hidden">
                                <span data-content="info@creative-curve.co.in" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                    info@creative-curve.co.in
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div data-scroll-prevent className="h-[50vh] w-full mobile:h-[70vh]">
                        <iframe data-scroll-prevent className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.079754562661!2d77.37042431488638!3d28.627371691065694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550a3a6d601%3A0x690d8b3ffd0857e1!2sCreative+Curve+Communication+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1516274485667" 
                        frameBorder="0" />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Info