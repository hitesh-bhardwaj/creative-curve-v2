
import Content from "./Content";
 import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
export default function Footer() {
    
 

    return (
        <>
            <footer 
                id="footer" 
                className="relative h-[49vw] mobile:h-[130vh] bg-black"
                style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
            >
                <div className='fixed bottom-0 h-[50vw] w-full mobile:static mobile:py-[10%]'>
                    <Content />
                </div>
            </footer>
        </>
    )
}