import ContactForm from "./ContactForm"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FormContainer = () => {
    
    return (
        <>
            <section id="contact-form" data-cursor-exclusion>
                <div className="container py-[8%] mobile:py-[20%] tablet:py-[15%]"> 
                    <div className="flex justify-between items-start mobile:flex-col">
                        <div className="w-1/2 space-y-[1.5vw] mobile:w-[80%] mobile:space-y-[3vw]">
                            <h4 className="text-96 space-grotesk text-textHead leading-[1.1] heading-anim overflow-hidden">
                                <span className="block heading-anim">
                                    Let's Get In 
                                </span>{" "}
                                <span className="block heading-anim">
                                    Touch
                                </span>
                            </h4>
                            <p className="w-[45%] text-22 mobile:w-full para-animations tablet:w-[80%]">
                                Ready to elevate your vision? Our passion lies in crafting masterpieces. Let's build together!
                            </p>
                        </div>

                        <div className="w-1/2 mobile:w-full mobile:mt-[6vh] tablet:w-[65%]">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormContainer