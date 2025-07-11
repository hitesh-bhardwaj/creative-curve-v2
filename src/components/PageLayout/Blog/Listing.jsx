import React, { useRef, useState } from 'react';
import BlogCard from './BlogCard';
import blogData from "./blogdata.json"; 

const Listing = () => {
    const btnContainer = useRef(null);
    const blogContainer = useRef(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ["All", "Branding", "UI Design", "UX Design", "Insights"];

    const filteredBlogs = activeCategory === 'All' 
        ? blogData.blogs 
        : blogData.blogs .filter(blog => blog.category === activeCategory);

    return (
        <>
            <section id="listing">
                <div className="container pt-[8%] pb-[10%] tablet:py-[15%] mobile:pt-[20%] mobile:pb-[25%]">
                    <div className='mb-[5vw] mobile:mb-[8vw]'>
                        <h4 className="text-140 space-grotesk leading-[1.2] text-textHead heading-anim overflow-hidden">
                            <span className='block'>
                                Latest Blogs
                            </span>
                        </h4>
                    </div>

                    <div ref={btnContainer} className="flex justify-start items-start gap-[2.5vw] mb-[5vw] mobile:flex-wrap mobile:mb-[10vw]">
                        {categories.map((category, index) => (
                            <button 
                                key={index} 
                                className={`cat-button text-textHead hover:text-white overflow-hidden border border-textHead px-[1.5vw] py-[0.8vw] min-w-[7vw] mobile:px-[5vw] mobile:py-[1vw] rounded-full hover:animate-scale-up transition-all duration-500 ease-out relative group ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                <span className="text-24 space-grotesk mobile:text-[4vw]">
                                    {category}
                                </span>
                                <span className="w-full h-full block absolute z-[-1] right-0 scale-y-0 group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out left-0 bg-textBody top-0 bottom-0" />
                            </button>
                        ))}
                    </div>

                    {filteredBlogs.length > 0 ? (
                        <div id='blogContainer' ref={blogContainer} className="grid grid-cols-2 gap-x-[4vw] gap-y-[6vw] mobile:flex mobile:flex-col mobile:gap-[10vw]">
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
                    ) : (
                        <div className="w-full text-center pt-[5vw]">
                            <p className="text-24 text-textBody">There are no blogs for the selected category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Listing;
