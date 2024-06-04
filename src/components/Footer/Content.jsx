import Image from "next/image"
import Link from "next/link"

const Content = () => {
    return( 
        <>
            <div className="container pt-[4%] pb-[2%] footer-container">
                    <div className="grid grid-cols-12">
                        {/* CTA */}
                        <div className="col-span-12 border-b-[0.5px] mb-[5vw]">
                            <Link href="#" className="relative group flex py-[0.6vw] justify-between items-center w-full hover:px-5 transition-all duration-300 ease-out">
                                <h5 className="text-96 space-grotesk text-white relative z-20">
                                    Let's Talk
                                </h5>
                                <div className="rounded-full relative z-20 border border-white flex justify-center items-center h-[6vw] w-[6vw]">
                                    <span className="w-[2vw] h-[2vw] block overflow-hidden scale-[0.8]">
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
                                <span className="absolute z-10 top-0 left-0 h-full w-full block bg-accent ease-out scale-y-0 transition-all duration-300 group-hover:scale-y-100 origin-bottom" />
                            </Link>
                        </div>

                        <div className="lg:col-span-2 col-span-12">
                            <h6 className="text-gray-2 text-[1.1vw] mb-[1vw]">
                                Get In Touch
                            </h6>
                            <ul className="text-white space-y-[1.5vw] text-[1.25vw]">
                                <li className="">
                                    <Link href="tel:9810007195" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="+91 981 000 7195" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            +91 981 000 7195
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:info@creative-curve.co.in" className="leading-[1.4] whitespace-nowrap w-fit block group overflow-hidden">
                                        <span data-content="info@creative-curve.co.in" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            info@creative-curve.co.in
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 col-start-10">
                            <h6 className="text-gray-2 text-[1.1vw] mb-[1vw]">
                                Company
                            </h6>
                            <ul className="text-white space-y-[1vw] text-[1.25vw]">
                                <li className="">
                                    <Link href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="About Us" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            About Us
                                        </span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Contact" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Contact
                                        </span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Services" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Services
                                        </span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Blog" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Blog
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h6 className="text-gray-2 text-[1.1vw] mb-[1vw]">
                                Follow Us
                            </h6>
                            <ul className="text-white space-y-[1vw] text-[1.25vw]">
                                <li className="">
                                    <Link href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Facebook" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Facebook
                                        </span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Twitter" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Twitter
                                        </span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Linkedin" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Linkedin
                                        </span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="leading-[1.4] w-fit block group overflow-hidden">
                                        <span data-content="Instagram" className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                                            Instagram
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-12 flex justify-between items-center my-[4vw] text-gray-1">
                            <p>
                                © 2024 | Alrights reserved by Creative Curve
                            </p>
                            <p>
                                By: <Link href="https://weareenigma.com" className="ul-c">Enigma</Link>
                            </p>
                        </div>

                        <div className="col-span-12 w-[105%] -ml-[2.5%]">
                            <div className="space-grotesk text-[#A9ABB5] text-[13vw] tracking-[-5px] leading-[0.8] heading-anim">
                                Creative Curve
                            </div>
                        </div>
                    </div>
                </div>
        </>   
    )
}

export default Content