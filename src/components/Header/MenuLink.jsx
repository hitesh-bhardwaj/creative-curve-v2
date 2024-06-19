import Image from "next/image"
import Link from "next/link"

export default function MenuLink({ linkText, link }) {
    return (
        <>
            <Link href={link} className="leading-[2] flex group overflow-hidden relative items-center justify-between uppercase">
                <span data-content={linkText} className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0">
                    {linkText}
                </span>
                <div className="w-[1vw] h-fit text-black overflow-hidden mobile:w-[5vw] mobile:h-[5vw] tablet:w-[3vw] tablet:h-[3vw]">
                    <div className="w-[200%] gap-[5%] flex items-center translate-x-[-55%] group-hover:translate-x-[0] transition-all duration-500 ease-out tablet:gap-0">
                        <Image 
                            className="w-[1vw] mobile:w-[5vw] mobile:h-[5vw] tablet:w-[3vw] tablet:h-[3vw]"
                            src="/images/icons/arrow-right.svg"
                            alt="Arrow Right"
                            width={30}
                            height={30}
                        />
                        <Image 
                            className="w-[1vw] mobile:w-[5vw] mobile:h-[5vw] tablet:w-[3vw] tablet:h-[3vw]"
                            src="/images/icons/arrow-right.svg"
                            alt="Arrow Right"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                <span className="absolute bottom-0 left-0 bg-[#A8A8A8] w-full block h-[1px] after:absolute after:block after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:scale-x-0 group-hover:after:scale-x-100 after:origin-right after:duration-500 after:transition-all after:ease-out" />
            </Link>
        </>
    )
}