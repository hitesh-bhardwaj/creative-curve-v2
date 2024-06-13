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
            <div className="fixed top-0 left-0 my-[2%] px-[3%] w-full z-[998] mobile:top-[5%] tablet:top-[5%]">
                <div className="w-[4.5vw] h-[3.5vw] flex items-center mobile:w-[8vh] tablet:w-[8vh]">
                    <Link href="/">
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

            <header className="fixed top-0 bottom-0 right-0 left-0 w-full z-[999] mix-blend-exclusion pointer-events-none">
                <div className="w-[100%] px-[3%] my-[2%] mobile:px-[5%] mobile:my-[5%] justify-end items-center flex tablet:my-[5%]">
                        <div className="w-[3.5vw] h-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] relative tablet:w-[10vw] tablet:h-[10vw] ">
                            <button
                                data-cursor-size="60px"
                                aria-label="Open Menu"
                                className={`menu-btn cursor-pointer pointer-events-auto overflow-hidden h-[3.5vw] fixed z-[999] w-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] tablet:w-[10vw] tablet:h-[10vw] ${menuOpen ? "open" : ""}`}
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