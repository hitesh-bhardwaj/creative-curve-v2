import ContactForm from "./ContactForm"

const FormContainer = () => {
    return (
        <>
            <section id="contact-form">
                <div className="container py-[8%] mobile:py-[20%]"> 
                    <div className="flex justify-between items-start mobile:flex-col">
                        <div className="w-1/2 space-y-[1.5vw] mobile:w-full">
                            <h4 className="text-96 space-grotesk text-textHead leading-[1.1]">
                                <span>
                                    Let's Get In 
                                </span>
                                <br />
                                <span>
                                    Touch
                                </span>
                            </h4>
                            <p className="w-[45%] text-22 mobile:w-[80%] mobile:pt-[2.5vh]">
                                Ready to elevate your vision? Our passion lies in crafting masterpieces. Let's build together!
                            </p>
                        </div>

                        <div className="w-1/2 mobile:w-full mobile:mt-[6vh]">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormContainer