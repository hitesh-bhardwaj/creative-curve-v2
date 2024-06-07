import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollButton = () => {

    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {y: "#second-section", offsetY: 50},
            ease: "power3.inOut",
        });
    };

    return (
        <>
            <div onClick={handleSmoothScroll} className="uppercase cursor-pointer text-24 text-textBody mobile:order-2 mobile:absolute mobile:bottom-[20%] mobile:left-[30%]">
                <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">Scroll Down</span>
            </div>
        </>
    )
}

export default ScrollButton