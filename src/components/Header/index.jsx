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
            <header className="fixed top-0 left-0 w-full z-[999]">
                <div className="w-[100%] px-[3%] my-[2%] mobile:px-[5%] mobile:my-[5%]">
                    <div className="flex justify-between items-center">
                        <div className="w-[4.5vw] mobile:w-[8vh]">
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

                        <div className="w-[3.5vw] h-[3.5vw]  mobile:w-[12vw] mobile:h-[12vw] relative ">
                            
                            <button
                                aria-label="Open Menu"
                                className={`menu-btn cursor-pointer overflow-hidden h-[3.5vw] fixed z-[999] w-[3.5vw] mobile:w-[12vw] mobile:h-[12vw] ${menuOpen ? "open" : ""}`}
                                disabled={buttonDisabled}
                                onClick={handleMenuButtonClick}
                            >
                                <svg className="overflow-hidden w-full h-full" viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg">
                                    <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                                    <path className="line--2" d="M0 50h99" />
                                    <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
                                </svg>
                            </button>

                            <Menu menuOpen={menuOpen}/>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}