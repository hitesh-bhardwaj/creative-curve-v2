import Image from "next/image"
import Link from "next/link"

const Content = ({children}) => {
   
    return( 
        <>
            <div className="container pt-[4%] pb-[2%] tablet:pt-[10%] tablet:pb-[5%] footer-container h-full">
                    <div className="grid grid-cols-12 mobile:flex mobile:flex-col">
                        {/* CTA */}
                        <div className="col-span-12 mb-[5vw] tablet:mb-[10vw]">
                            <Link href="/contact" className="relative group flex py-[0.6vw] justify-between items-center w-full hover:px-5 transition-all duration-300 ease-out">
                                <h5 className="text-96 space-grotesk text-white group-hover:invert transition-all duration-300 ease-out relative z-20 mobile:text-[8vw] tablet:text-[10vw]">
                                    Let's Talk!
                                </h5>
                                <div className="rounded-full relative z-20 border border-white group-hover:invert flex justify-center items-center h-[6vw] w-[6vw] mobile:h-[10vw] mobile:w-[10vw] tablet:h-[10vw] tablet:w-[10vw] mobile:border-[0.1vw]">
                                    <span className="w-[2vw] h-[2vw] block overflow-hidden scale-[0.8] mobile:w-[5vw] mobile:h-[5vw] tablet:w-[4vw] tablet:h-[4vw]">
                                        <div className="w-[100%] flex -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                            <Image
                                                className="w-full h-full group-hover:scale-100 scale-0 transition-all duration-300 ease-out"
                                                src="/images/icons/arrow-top-right.svg"
                                                alt="arrow-right"
                                                width={40}
                                                height={40}
                                            />
                                            <Image
                                                className="w-full h-full -translate-y-full group-hover:scale-0 scale-100 transition-all duration-300 ease-out"
                                                src="/images/icons/arrow-top-right.svg"
                                                alt="arrow-right"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </span>
                                </div>
                                <span className="absolute z-10 top-0 left-0 h-full w-full block scale-y-[0.005] bg-white group-hover:rounded-full ease-out transition-all duration-300 group-hover:scale-y-100 origin-bottom" />
                            </Link>
                        </div>

                        <div className="col-span-2 tablet:col-span-6 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[2vh] mobile:mt-[4vh]">
                            <h6 className="text-gray-2 text-[1.1vw] mb-[1vw] mobile:text-[6vw] tablet:text-[3vw] tablet:mb-[4vw]">
                                Get In Touch
                            </h6>
                            <ul className="text-white space-y-[1.5vw] text-[1.25vw] mobile:text-[5vw] mobile:w-full mobile:items-center mobile:flex mobile:flex-col mobile:gap-[2vh] tablet:text-[3.2vw] tablet:space-y-[2vw]">
                                <li className="">
                                    <Link data-cursor-size="60px" href="tel:9810007195" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="+91 981 000 7195" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            +91 981 000 7195
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link data-cursor-size="60px" href="mailto:info@creative-curve.co.in" className="leading-[1.4] whitespace-nowrap w-fit block group overflow-hidden">
                                        <span data-content="info@creative-curve.co.in" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            info@creative-curve.co.in
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 col-start-10 tablet:col-span-3 tablet:col-start-8 mobile:flex mobile:flex-col mobile:w-full mobile:items-center mobile:mt-[4vh]">
                            <h6 className="text-gray-2 text-[1.1vw] mb-[1vw] mobile:text-[6vw] tablet:text-[3vw] tablet:mb-[4vw]">
                                Company
                            </h6>
                            <ul className="text-white space-y-[1vw] text-[1.25vw] mobile:text-[5vw] mobile:mt-[1.5vh] mobile:flex mobile:flex-col mobile:gap-[1.2vh] tablet:text-[3.2vw] tablet:space-y-[2vw">
                                <li className="mobile:flex mobile:justify-center">
                                    <Link scroll={false} data-cursor-size="60px" href="/about" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="About" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            About
                                        </span>
                                    </Link>
                                </li>
                                <li className=" mobile:flex mobile:justify-center">
                                    <Link scroll={false} data-cursor-size="60px" href="/contact" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Contact" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Contact
                                        </span>
                                    </Link>
                                </li>
                                <li className=" mobile:flex mobile:justify-center">
                                    <Link scroll={false} data-cursor-size="60px" href="/services" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Services" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Services
                                        </span>
                                    </Link>
                                </li>
                                <li className=" mobile:flex mobile:justify-center">
                                    <Link scroll={false} data-cursor-size="60px" href="/blog" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Blog" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Blog
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 mobile:flex mobile:flex-col tablet:col-span-2 mobile:w-full mobile:items-center mobile:mt-[5vh]">
                            <h6 className="text-gray-2 text-[1.1vw] mb-[1vw] mobile:text-[6vw] tablet:text-[3vw] tablet:mb-[4vw]">
                                Follow Us
                            </h6>
                            <ul className="text-white space-y-[1vw] text-[1.25vw] mobile:text-[5vw] mobile:mt-[1.5vh] mobile:flex mobile:flex-col mobile:gap-[1.2vh] tablet:text-[3.2vw] tablet:space-y-[2vw">
                                <li className="mobile:flex mobile:justify-center">
                                    <Link data-cursor-size="60px" href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Facebook" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Facebook
                                        </span>
                                    </Link>
                                </li>
                                <li className="mobile:flex mobile:justify-center">
                                    <Link data-cursor-size="60px" href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Twitter" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Twitter
                                        </span>
                                    </Link>
                                </li>
                                <li className="mobile:flex mobile:justify-center">
                                    <Link data-cursor-size="60px" href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Linkedin" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Linkedin
                                        </span>
                                    </Link>
                                </li>
                                <li className="mobile:flex mobile:justify-center">
                                    <Link data-cursor-size="60px" href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Instagram" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Instagram
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-12 flex justify-between items-center my-[4vw] tablet:my-[15%] text-gray-1 mobile:mt-[5vh] ">
                            <p className="mobile:text-[3vw] tablet:text-2xl">
                                © 2024 | Alrights reserved by Creative Curve
                            </p>
                            <p className="mobile:text-[3vw] tablet:text-2xl">
                                By: <Link data-cursor-size="60px" href="https://weareenigma.com" className="relative after:absolute after:block after:bottom-[-20%] after:left-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300">Enigma</Link>
                            </p>
                        </div>

                        <div className="col-span-12 w-[105%] -ml-[2.5%]">
                            {children}
                        </div>
                    </div>
                </div>
        </>   
    )
}

export default Content