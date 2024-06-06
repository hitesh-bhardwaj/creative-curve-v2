const PageHero = () => {
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh] mobile:relative">
                    <div className="flex flex-col justify-center h-full w-full items-start">
                        <h1 className="text-140 tracking-[1px] leading-[1.1] space-grotesk text-textHead">
                            <span className="text-76 relative after:absolute after:w-[3vw] after:bg-current after:block after:h-[3px] after:right-0 after:top-[55%] after:translate-x-[140%] mobile:text-[6vw] mobile:after:w-[20vw] mobile:after:translate-x-[120%]">We Are</span>
                            <br/>
                            <span className="uppercase">Creative Curve</span>
                        </h1>

                        <div className="flex justify-between w-full mt-[10%] mobile:flex-col">
                            <div className="uppercase text-24 text-textBody mobile:order-2 mobile:absolute mobile:bottom-0 mobile:left-[30%]">
                                <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">Scroll Down</span>
                            </div>

                            <p className="text-24 text-textBody text-right w-[20vw] mobile:w-[80%] mobile:text-start mobile:order-1">
                                <span>
                                    Born from a fervent desire to challenge the norms, our essence is rooted in innovation.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageHero
