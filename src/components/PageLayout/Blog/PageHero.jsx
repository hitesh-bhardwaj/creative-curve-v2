const PageHero = () => {
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh]">
                    <div className="flex flex-col justify-center h-full w-full items-start">
                        <h1 className="text-140 tracking-[1px] leading-[1.1] space-grotesk text-textHead">
                            <span className="text-76">A Curated</span>
                            <br/>
                            <span className="uppercase">Collection Of <br/> Insights</span>
                        </h1>

                        <div className="flex justify-between w-full mt-[6%]">
                            <div className="uppercase text-24 text-textBody">
                                <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">Scroll Down</span>
                            </div>

                            <p className="text-24 text-textBody text-right w-[21vw]">
                                <span>
                                    From global branding trends to the nuances of digital storytelling, explore the world through our lens.
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
