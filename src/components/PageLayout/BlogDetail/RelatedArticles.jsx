import Link from "next/link";
import blogData from "@/components/PageLayout/Blog/blogdata.json";
import ButtonWhite from "@/components/Button/ButtonWhite";

const RelatedArticles = () => {
  const filteredBlogs = blogData.blogs.slice(0, 3);

  const BlogCard = ({ title, category, img, link }) => {
    return (
      <div className="col-span-1 blog-card h-full">
        <Link href={link} className="w-full relative h-fit group/blog">
          <div
            className="h-[28vw] w-full rounded-[1vw] overflow-hidden mobile:h-[60vw] mobile:rounded-[10px] tablet:rounded-2xl tablet:h-[50vw]"
            data-cursor-color="#fff"
            data-cursor-size="100px"
            data-cursor-text="Read More"
          >
            <img
                data-cursor-text="Read More"
                data-cursor-color="#fff"
                data-cursor-size="100px"
              src={img}
              alt={title}
              className="w-full h-full group-hover/blog:scale-[1.05] object-cover transition-all duration-300 "
            />
          </div>
          <h5 className="text-30 leading-[1.2] aeonik text-textHead mt-[1.2vw] mobile:mt-[2vh] para-animations">
            {title}
          </h5>
          <p className="text-20 space-grotesk pointer-events-none text-white bg-textHead px-[1.2vw] py-[0.8vw] rounded-full absolute top-8 left-8 mobile:top-3 mobile:left-3 mobile:text-[3.5vw] mobile:px-[5vw] mobile:py-[2vw] tablet:px-[3vw] tablet:text-[3vw] tablet:left-[4%] tablet:top-[5%]">
            {category}
          </p>
          <p className="uppercase flex items-center group gap-[10px] mt-[1vw] mobile:mt-[2vh] tablet:mt-[1vh]">
            <span className="text-24 relative after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-textHead after:transition-all after:duration-300 after:ease-out hover:after:scale-x-0 mobile:text-[4vw]">
              Read More
            </span>
            <span className="relative w-fit overflow-hidden rotate-[-45deg]">
              <img
                className="w-[1.2vw] h-[1.2vw] -translate-x-[120%] scale-0 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out mobile:w-[4vw] mobile:h-[4vw] tablet:h-[3vw] tablet:w-[3vw]"
                alt="arrow-icon"
                src="/images/icons/arrow-right.svg"
              />
              <img
                className="w-[1.2vw] h-[1.2vw] absolute right-0 top-0 transition-all duration-300 ease-out group-hover:scale-0 group-hover:translate-x-[120%] mobile:w-[4vw] mobile:h-[4vw] tablet:h-[3vw] tablet:w-[3vw]"
                alt="arrow-icon"
                src="/images/icons/arrow-right.svg"
              />
            </span>
          </p>
        </Link>
      </div>
    );
  };

  return (
    <>
      <section>
        <div className="container py-[8%] mobile:py-[20%] tablet:py-[15%]">
          <div className="flex justify-between items-end mb-[5vw] tablet:flex-col tablet:items-start tablet:gap-[2vw] mobile:flex-col mobile:items-start mobile:gap-[5vw] mobile:mb-[10vw]">
            <h2 className="text-140 leading-[1] space-grotesk text-textHead w-[50%] mobile:text-[10vw] mobile:w-full heading-anim">
              <span>Related</span>{" "}
              <span>Articles</span>
            </h2>

            <div className="fadeUp tablet:flex tablet:justify-end tablet:w-full">
              <ButtonWhite link={"/blog"} btnText={"View All Blogs"}/>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[1vw] w-full tablet:grid-cols-1 tablet:gap-[6vw] mobile:grid-cols-1 mobile:gap-[10vw]">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                category={blog.category}
                img={blog.img}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedArticles;
