import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ title, category, img, link }) => {
    
     
      
      
    return (
        <div className="col-span-1 blog-card h-full mobile:mt-[4vh]">
            <Link href={link} className="w-full relative h-fit group/blog">
                <div className="h-[40vw] w-full rounded-[1.5vw] overflow-hidden mobile:h-[80vw] mobile:rounded-[3vw]">
                    <img src={img} alt={title} className="w-full h-full group-hover/blog:scale-[1.1] object-cover transition-all duration-300 scale-[110%] translate-y-[-5%] parallaximg mobile:scale-[120%] mobile:translate-y-[-10%]"/>
                </div>
                <h5 className="text-48 leading-[1.2] aeonik text-textHead mt-[1.2vw] mobile:mt-[2vh] para-animations">{title}</h5>
                <p className="text-[1.4vw] space-grotesk text-white bg-textHead px-[1.2vw] py-[0.8vw] rounded-full absolute top-10 left-10 mobile:text-[3.5vw] mobile:px-[3vw] mobile:top-3 mobile:left-3 mobile:py-[1.2vw]">{category}</p>
                <p className="uppercase flex items-center group gap-[10px] mt-[2vw] mobile:mt-[2vh]">
                    <span className="text-[1.55vw] relative after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-textHead after:transition-all after:duration-300 after:ease-out hover:after:scale-x-0 mobile:text-[4vw]">
                        Read More
                    </span>
                    <span className="relative w-fit overflow-hidden rotate-[-45deg]">
                        <img className="w-[1.5vw] h-[1.5vw] -translate-x-[120%] scale-0 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out mobile:w-[4vw] mobile:h-[4vw]" alt="arrow-icon" src="/images/icons/arrow-right.svg"/>
                        <img className="w-[1.5vw] h-[1.5vw] absolute right-0 top-0 transition-all duration-300 ease-out group-hover:scale-0 group-hover:translate-x-[120%] mobile:w-[4vw] mobile:h-[4vw]" alt="arrow-icon" src="/images/icons/arrow-right.svg"/>
                    </span>
                </p>
            </Link>
            
        </div>
    );
};

export default BlogCard;
