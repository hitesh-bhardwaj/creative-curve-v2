import ServiceCarousel from "./ServiceCarousel"

const Services = () => {
    return (
        <>
            <section id="second-section" className="w-full h-full bg-black text-white" data-cursor-exclusion>
                <div className="container py-[10%]">
                    <div className="w-[70%] mobile:w-full">
                        <p className="text-48 space-grotesk mobile:leading-[1] mobile:text-[5vw] para-animations">
                            <span>
                                We're crafting brand narratives that resonate globally, driving engagement and elevating your business to new heights.
                            </span>
                        </p>
                    </div>
                    <ServiceCarousel />
                </div>
            </section>
        </>
    )
}

export default Services