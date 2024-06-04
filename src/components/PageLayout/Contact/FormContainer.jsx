import ContactForm from "./ContactForm"

const FormContainer = () => {
    return (
        <>
            <section id="contact-form">
                <div className="container py-[8%]">
                    <div className="flex justify-between items-start">
                        <div className="w-1/2 space-y-[1.5vw]">
                            <h4 className="text-96 space-grotesk text-textHead leading-[1.1]">
                                <span>
                                    Let's Get In 
                                </span>
                                <br />
                                <span>
                                    Touch
                                </span>
                            </h4>
                            <p className="w-[45%] text-22">
                                Ready to elevate your vision? Our passion lies in crafting masterpieces. Let's build together!
                            </p>
                        </div>

                        <div className="w-1/2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormContainer