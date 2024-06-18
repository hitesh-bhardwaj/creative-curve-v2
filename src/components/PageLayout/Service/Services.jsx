import ServiceCarousel from "./ServiceCarousel"
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

import SplitType from "split-type";

const Services = () => {
    
    return (
        <>
            <section id="second-section" className="w-full h-full bg-black text-white" data-cursor-exclusion>
                <div className="container py-[10%] tablet:py-[15%] mobile:py-[20%]">
                    <div className="w-[70%] mobile:w-full tablet:w-full">
                        <p className="text-48 space-grotesk mobile:leading-[1] mobile:text-[5vw] para-animations tablet:text-[4vw]">
                            We're crafting brand narratives that resonate globally, driving engagement and elevating your business to new heights.
                        </p>
                    </div>
                    <ServiceCarousel />
                </div>
            </section>
        </>
    )
}

export default Services