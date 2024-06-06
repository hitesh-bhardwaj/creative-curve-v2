const PageHero = () => {
    return (
        <>
            <section id="hero">
                <div className="container h-[85vh] mobile:relative">
                    <div className="flex flex-col justify-center h-full w-full items-start">
                        <h1 className="text-140 tracking-[1px] leading-[1.1] space-grotesk text-textHead">
                            <span className="text-76">Let's Start</span>
                            <br/>
                            <span className="uppercase">The Productive  <br/> Work</span>
                        </h1>

                        <div className="flex justify-between w-full mt-[6%] mobile:flex-col">
                            <div className="uppercase text-24 text-textBody mobile:order-2 mobile:absolute mobile:bottom-[10%] mobile:left-[30%]">
                                <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">Scroll Down</span>
                            </div>

                            <p className="text-24 text-textBody text-right w-[21vw] mobile:w-[80%] mobile:text-start mobile:order-1">
                                <span>
                                    Ready to elevate your vision? Our passion lies in crafting masterpieces. Let's build together!
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
