import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleMenuButtonClick = () => {
        // Disable the button
        setButtonDisabled(true);
    
        // Toggle the menu
        setMenuOpen((prevState) => !prevState);
    
        // Re-enable the button after 1 second
        setTimeout(() => {
          setButtonDisabled(false);
        }, 700);
      };

    return (
        <>  
            <div className="fixed top-0 left-0 my-[2%] px-[3%] w-full z-[200] pointer-events-none mobile:px-[5%] mobile:my-[4%] tablet:my-[3%] tablet:px-[6%]">
                <div className="w-[4.5vw] h-[3.5vw] flex items-center mobile:w-[14vw] tablet:w-[10vw] tablet:h-[10vw] mobile:h-[12vw]">
                    <Link href="/" className="pointer-events-auto">
                        <img
                            src="/logo.png"
                            alt="Creative Curve Logo"
                            width={100}
                            height={100}
                            className="w-full h-auto"
                        />
                    </Link>
                </div>
                <Menu menuOpen={menuOpen}/>
            </div>

            <header className="fixed top-0 bottom-0 right-0 left-0 w-full z-[201] mix-blend-exclusion pointer-events-none">
                <div className="w-full px-[3%] my-[2%] mobile:px-[5%] mobile:my-[4%] justify-end items-center flex tablet:my-[3%] tablet:px-[6%]">
                        <div className="w-[3.5vw] h-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] relative tablet:w-[8vw] tablet:h-[10vw] ">
                            <button
                                data-cursor-exclusion
                                data-cursor-size="60px"
                                aria-label="Open Menu"
                                className={`menu-btn cursor-pointer pointer-events-auto overflow-hidden h-[3.5vw] fixed z-[999] w-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] tablet:w-[8vw] tablet:h-[10vw] ${menuOpen ? "open" : ""}`}
                                disabled={buttonDisabled}
                                onClick={handleMenuButtonClick}
                            >
                                <svg className="overflow-hidden w-full h-full" viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg">
                                    <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                                    <path className="line--2" d="M0 50h99" />
                                    <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
                                </svg>
                            </button>
                        </div>
                </div>
            </header>
        </>
    )
}