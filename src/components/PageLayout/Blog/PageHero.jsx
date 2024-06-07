import ScrollButton from "../About/ScrollButton"

const PageHero = () => {
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh] mobile:relative">
                    <div className="flex flex-col justify-center h-full w-full items-start mobile:justify-start mobile:mt-[50%]">
                        <h1 className="text-140 tracking-[1px] leading-[1.1] space-grotesk text-textHead">
                            <span className="text-76 mobile:text-[7vw]">A Curated</span>
                            <br/>
                            <span className="uppercase">Collection<br/> Insights</span>
                        </h1>

                        <div className="flex justify-between w-full mt-[6%]">
                            <ScrollButton />

                            <p className="text-24 text-textBody text-right w-[21vw] mobile:w-[80%] mobile:text-start mobile:order-1">
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
