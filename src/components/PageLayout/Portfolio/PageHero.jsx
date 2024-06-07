import ScrollButton from "../About/ScrollButton"

const PageHero = () => {
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh] mobile:relative">
                    <div className="flex flex-col justify-center h-full w-full items-start mobile:justify-start mobile:mt-[60%]">
                        <h1 className="text-140 tracking-[1px] leading-[1.1] space-grotesk text-textHead">
                            <span className="text-76">Our</span>
                            <br/>
                            <span className="uppercase">Creative Odyssey</span>
                        </h1>

                        <div className="flex justify-between w-full mt-[6%]">
                            <ScrollButton />

                            <p className="text-24 text-textBody text-right w-[20vw] mobile:w-[80%] mobile:text-start mobile:order-1">
                                <span>
                                    Dive into a curated collection of our most impactful and innovative projects, where vision meets execution.
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