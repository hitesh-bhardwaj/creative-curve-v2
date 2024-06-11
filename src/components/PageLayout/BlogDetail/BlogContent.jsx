import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Article from "./Article";
import AuthorInfo from "./AuthorInfo";

gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";

const BlogContent = () => {
   
      

    if (globalThis.innerWidth>1024) {
        gsap.registerPlugin(ScrollTrigger,useGSAP);
        useGSAP(() => {
            const blogPin = document.getElementById("authorInfo");
            const container = document.getElementById("article");
            ScrollTrigger.create({
              trigger: blogPin,
              start: "top 18%",
              endTrigger: container,
              end: "bottom 80%",
              invalidateOnRefresh: true,
              pin: blogPin,
              markers: false,
            });
          });
      }

    return (
        <>
            <section id="second-section" className="bg-black text-white">
                <div className="container py-[8%]">
                    <div className="w-full h-full flex justify-between items-start mobile:flex-col">
                        <AuthorInfo />
                        <Article />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogContent;