import Link from "next/link";
import MenuLink from "./MenuLink";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Menu({ menuOpen }) {
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const emailRef = useRef(null);

  useGSAP(() => {
    const social = document.querySelectorAll(".social-links")

    if (menuOpen) {
      gsap.timeline()
        .to(menuRef.current, { 
            duration: 0.5, 
            clipPath: "inset(0% 0% 0% 0% round 20px)",
            ease: "power3.out" 
        })
        .fromTo(
          linksRef.current, { 
            x: -50, 
            opacity: 0 
        },{ 
            x: 0, 
            opacity: 1, 
            stagger: 0.1, 
            ease: "power3.out" 
        })
        .fromTo(
            emailRef.current, { 
              x: -50, 
              opacity: 0 
          },{ 
              x: 0, 
              opacity: 1, 
              stagger: 0.1, 
              delay: -0.5,
              ease: "power3.out" 
          })
          .fromTo(
            social, { 
              y: 20, 
              opacity: 0 
          },{ 
              y: 0, 
              opacity: 1, 
              stagger: 0.05, 
              delay: -0.5,
              ease: "power3.out" 
          });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        clipPath: "inset(6% 8% 94% 89% round 50px)",
        ease: "power3.out",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={menuRef}
        className={`w-[20vw] border border-[#989898] rounded-[20px] bg-white nav-clip-path mobile:w-[80vw] ${menuOpen ? "open" : ""}`}>
        <div className="px-[3vw] pb-[3vw] pt-[4vw] mobile:px-[8vw] mobile:pt-[12vw] mobile:pb-[10vw]">
          <ul className="flex flex-col justify-center items-start h-full gap-[0.5vw] pb-[2vw]">
            {["HOME", "ABOUT", "SERVICES", "PORTFOLIO", "Blog", "Contact"].map(
              (text, index) => (
                <li
                  key={index}
                  className="text-[1.35vw] w-full text-black mobile:text-[7vw]"
                  ref={(el) => (linksRef.current[index] = el)}
                >
                  <MenuLink link={`/${text.toLowerCase()}`} linkText={text} />
                </li>
              )
            )}
          </ul>

          <div className="text-[1vw] mobile:text-[4vw]">
            <Link
              ref={emailRef}
              href="mailto:info@creative-curve.co.in"
              className="leading-[2] text-black flex group overflow-hidden relative items-center justify-between"
            >
              <span
                data-content="info@creative-curve.co.in"
                className="relative block link-transition group-hover:-translate-y-[105%] after:absolute after:content-[attr(data-content)] after:top-full after:block after:h-full after:w-full after:left-0"
              >
                info@creative-curve.co.in
              </span>
              <div className="w-[1vw] h-fit text-black overflow-hidden mobile:w-[5vw] mobile:h-[5vw]">
                <div className="w-[200%] gap-[10%] flex items-center translate-x-[-50%] group-hover:translate-x-[0] transition-all duration-500 ease-out mobile:gap-0">
                  <Image
                    className="w-[0.8vw] mobile:w-[5vw] mobile:h-[5vw]"
                    src="/images/icons/arrow-right.svg"
                    alt="Arrow Right"
                    width={30}
                    height={30}
                  />
                  <Image
                    className="w-[0.8vw] mobile:w-[5vw] mobile:h-[5vw]"
                    src="/images/icons/arrow-right.svg"
                    alt="Arrow Right"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <span className="absolute bottom-0 left-0 bg-[#A8A8A8] w-full block h-[1px] after:absolute after:block after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:scale-x-0 group-hover:after:scale-x-100 after:origin-right after:duration-500 after:transition-all after:ease-out" />
            </Link>
          </div>

          <div className="flex w-[90%] justify-between items-center mt-[1.8vw] mobile:mt-[5vw]">
            {[
              {
                href: "https://facebook.com",
                src: "/images/icons/facebook.svg",
                alt: "Facebook",
              },
              {
                href: "https://twitter.com",
                src: "/images/icons/x.svg",
                alt: "Twitter",
              },
              {
                href: "https://instagram.com",
                src: "/images/icons/insta.svg",
                alt: "Instagram",
              },
              {
                href: "https://linkedin.com",
                src: "/images/icons/linkedin.svg",
                alt: "LinkedIn",
              },
            ].map((icon, index) => (
              <Link
                key={index}
                href={icon.href}
                className="w-[1.8vw] hover:opacity-75 transition-all duration-300 ease-out social-links mobile:w-[7vw]"
              >
                <Image
                  src={icon.src}
                  width={30}
                  height={30}
                  alt={icon.alt}
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
