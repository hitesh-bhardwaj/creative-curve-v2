const PageHero = () => {
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh] relative">
                    <div className="flex flex-col justify-center h-full w-full items-center">
                        <h1 className="text-76 tracking-[1px] w-4/5 text-center leading-[1.1] space-grotesk text-textHead">
                            Global Branding in a Digital Age: Insights from Creative Curve
                        </h1>

                        <div className="flex justify-center w-full mt-[5%] items-center gap-[2vw]">
                            <p className="space-grotesk text-white text-24 rounded-full py-[0.8vw] bg-textHead text-center min-w-[11vw]">Branding</p>
                            <p className="space-grotesk text-textHead text-24 rounded-full py-[0.8vw] border border-textHead text-center min-w-[11vw]">19, June 2023</p>
                        </div>

                        <div className="w-full flex items-center justify-center absolute bottom-[10%]">
                            <div className="uppercase text-24 text-textBody">
                                <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">Scroll Down</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageHero
