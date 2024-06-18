import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Article from "./Article";
import AuthorInfo from "./AuthorInfo";

gsap.registerPlugin(ScrollTrigger);

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
            <section id="second-section" className="bg-black text-white" data-cursor-exclusion>
                <div className="container py-[8%] tablet:py-[15%] mobile:py-[20%]">
                    <div className="w-full h-full flex justify-between items-start mobile:flex-col tablet:flex-col tablet:gap-[8vw] mobile:gap-[10vw]">
                        <AuthorInfo />
                        <Article />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogContent;