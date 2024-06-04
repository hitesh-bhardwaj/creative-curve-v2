import ServiceCarousel from "./ServiceCarousel"

const Services = () => {
    return (
        <>
            <section className="w-full h-full bg-black text-white">
                <div className="container py-[10%]">
                    <div className="w-[70%]">
                        <p className="text-48 space-grotesk">
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