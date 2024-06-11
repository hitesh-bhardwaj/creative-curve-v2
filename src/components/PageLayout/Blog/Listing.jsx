import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";


const Listing = () => {
    const [blogs, setBlogs] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ["All", "Branding", "UI Design", "UX Design", "Insights"];
   
  

    useEffect(() => {
        fetch('/images/blogs/blogdata.json')
            .then(response => response.json())
            .then(data => setBlogs(data.blogs))
            .catch(error => console.error('Error fetching blog data:', error));
    }, []);

    const filteredBlogs = activeCategory === 'All' 
        ? blogs 
        : blogs.filter(blog => blog.category === activeCategory);

    return (
        <>
            <section id="listing">
                <div className="container pt-[8%] pb-[10%] mobile:pt-[20%] mobile:pb-[30%]">
                    <div className='mb-[5vw]'>
                        <h4 className="text-140 space-grotesk leading-[1.2] text-textHead heading-anim overflow-hidden">
                            <span className='block'>
                                Latest Blogs
                            </span>
                        </h4>
                    </div>

                    <div className="flex justify-start items-start gap-[2.5vw] mb-[5vw] mobile:justify-between">
                        {categories.map((category, index) => (
                            <button 
                                key={index} 
                                className={`cat-button text-textHead hover:text-white overflow-hidden border border-textHead px-[1.5vw] py-[0.8vw] min-w-[7vw] mobile:px-[2vw] mobile:pt-[0.01vw] mobile:pb-[0.4vw] rounded-full hover:animate-scale-up transition-all duration-500 ease-out relative group ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                <span className="text-24 space-grotesk mobile:text-[2.5vw]">
                                    {category}
                                </span>
                                <span className="w-full h-full block absolute z-[-1] right-0 scale-y-0 group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out left-0 bg-textBody top-0 bottom-0" />
                            </button>
                        ))}
                    </div>

                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-2 gap-x-[4vw] gap-y-[6vw] mt-8 mobile:flex mobile:flex-col">
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
