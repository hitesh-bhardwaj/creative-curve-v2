import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay, Parallax } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/parallax";

const PrevButton = () => {
    const swiper = useSwiper();
    return (
        <button 
            className="bg-gray-100 text-black/80 duration-300 transition-all hover:text-white hover:bg-textHead p-[1vw] h-[3.5vw] w-[3.5vw] rounded-full" 
            onClick={() => swiper.slidePrev()}>
            <svg className="rotate-180" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.5378C0.078006 6.54149 0.156012 6.54888 0.234018 6.54888C5.44482 6.54888 9.77189 6.54888 14.9827 6.54888C15.0568 6.54888 15.1309 6.54888 15.244 6.54888C13.3719 4.77592 11.5309 3.0325 9.70169 1.30387C10.1775 0.849544 10.6339 0.417385 11.0785 0C13.7151 2.49692 16.3634 5.00492 19 7.49815C16.3673 9.99138 13.7151 12.4994 11.0785 15C10.6378 14.5826 10.1853 14.1541 9.72119 13.7146C11.5465 11.986 13.3914 10.2389 15.2362 8.49544C15.2284 8.48067 15.2167 8.4622 15.2089 8.44743C15.1426 8.44743 15.0724 8.44743 15.0061 8.44743C9.7836 8.44743 5.44092 8.44743 0.218417 8.44743C0.148211 8.44743 0.0780059 8.45481 0.00780058 8.45851C-1.81066e-08 7.81581 0 7.1768 0 6.5378Z" fill="currentColor"/>
            </svg>
        </button>
    ) 
};

const NextButton = () => {
    const swiper = useSwiper();
    return (
        <button 
            className="bg-gray-100 text-black/80 duration-300 transition-all hover:text-white hover:bg-textHead p-[1vw] h-[3.5vw] w-[3.5vw] rounded-full" 
            onClick={() => swiper.slideNext()}>
            <svg viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.5378C0.078006 6.54149 0.156012 6.54888 0.234018 6.54888C5.44482 6.54888 9.77189 6.54888 14.9827 6.54888C15.0568 6.54888 15.1309 6.54888 15.244 6.54888C13.3719 4.77592 11.5309 3.0325 9.70169 1.30387C10.1775 0.849544 10.6339 0.417385 11.0785 0C13.7151 2.49692 16.3634 5.00492 19 7.49815C16.3673 9.99138 13.7151 12.4994 11.0785 15C10.6378 14.5826 10.1853 14.1541 9.72119 13.7146C11.5465 11.986 13.3914 10.2389 15.2362 8.49544C15.2284 8.48067 15.2167 8.4622 15.2089 8.44743C15.1426 8.44743 15.0724 8.44743 15.0061 8.44743C9.7836 8.44743 5.44092 8.44743 0.218417 8.44743C0.148211 8.44743 0.0780059 8.45481 0.00780058 8.45851C-1.81066e-08 7.81581 0 7.1768 0 6.5378Z" fill="currentColor"/>
            </svg>
        </button>
    ) 
};

const Testimonial = () => {

  return (
    <>
      <section id="testimonial">
        <div className="container relative pt-[5%] pb-[10%]">
          <Swiper
            speed={1000}
            pagination={{ type: "fraction" }}
            spaceBetween={30}
            draggable={true}
            loop={true}
            autoplay={{
                delay: 2000,
            }}
            parallax={true}
            modules={[Pagination, Autoplay, Parallax]}
            className="mySwiper"
          >
            <div className="absolute right-[20%] flex justify-center items-center gap-[4.2vw] top-[24%]">
                <PrevButton />
                <NextButton />
            </div>
            <SwiperSlide>
                <div className="p-[2vw] space-y-[2vw] text-textHead">
                    <div className="flex items-center gap-2" data-swiper-parallax="-100" data-swiper-parallax-duration="600">
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                    </div>
                    <p className="text-48" data-swiper-parallax="-200" data-swiper-parallax-duration="600">
                        When we approached Creative Curve to revamp our brand identity, we were blown away by their innovative designs and attention to detail. Their team transformed our vision into a visual masterpiece, setting us apart in our industry. Truly the best in the business!
                    </p>
                    <div data-swiper-parallax="-300" data-swiper-parallax-duration="600">
                        <p className="text-24 font-medium">Sophie Alex</p>
                        <p className="text-[1vw] text-textBody">Business Owner</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-[2vw] space-y-[2vw] text-textHead">
                    <div className="flex items-center gap-2" data-swiper-parallax="-100" data-swiper-parallax-duration="600">
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                    </div>
                    <p className="text-48" data-swiper-parallax="-200" data-swiper-parallax-duration="600">
                        When we approached Creative Curve to revamp our brand identity, we were blown away by their innovative designs and attention to detail. Their team transformed our vision into a visual masterpiece, setting us apart in our industry. Truly the best in the business!
                    </p>
                    <div data-swiper-parallax="-300" data-swiper-parallax-duration="600">
                        <p className="text-24 font-medium">Sophie Alex</p>
                        <p className="text-[1vw] text-textBody">Business Owner</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-[2vw] space-y-[2vw] text-textHead">
                    <div className="flex items-center gap-2" data-swiper-parallax="-100" data-swiper-parallax-duration="600">
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                    </div>
                    <p className="text-48" data-swiper-parallax="-200" data-swiper-parallax-duration="600">
                        When we approached Creative Curve to revamp our brand identity, we were blown away by their innovative designs and attention to detail. Their team transformed our vision into a visual masterpiece, setting us apart in our industry. Truly the best in the business!
                    </p>
                    <div data-swiper-parallax="-300" data-swiper-parallax-duration="600">
                        <p className="text-24 font-medium">Sophie Alex</p>
                        <p className="text-[1vw] text-textBody">Business Owner</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-[2vw] space-y-[2vw] text-textHead">
                    <div className="flex items-center gap-2" data-swiper-parallax="-100" data-swiper-parallax-duration="600">
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                    </div>
                    <p className="text-48" data-swiper-parallax="-200" data-swiper-parallax-duration="600">
                        When we approached Creative Curve to revamp our brand identity, we were blown away by their innovative designs and attention to detail. Their team transformed our vision into a visual masterpiece, setting us apart in our industry. Truly the best in the business!
                    </p>
                    <div data-swiper-parallax="-300" data-swiper-parallax-duration="600">
                        <p className="text-24 font-medium">Sophie Alex</p>
                        <p className="text-[1vw] text-textBody">Business Owner</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-[2vw] space-y-[2vw] text-textHead">
                    <div className="flex items-center gap-2" data-swiper-parallax="-100" data-swiper-parallax-duration="600">
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                        <Image className="h-auto w-[2vw]" width={25} height={30} loading="lazy" src="/images/icons/quote.svg" alt="quote icon"/>
                    </div>
                    <p className="text-48" data-swiper-parallax="-200" data-swiper-parallax-duration="600">
                        When we approached Creative Curve to revamp our brand identity, we were blown away by their innovative designs and attention to detail. Their team transformed our vision into a visual masterpiece, setting us apart in our industry. Truly the best in the business!
                    </p>
                    <div data-swiper-parallax="-300" data-swiper-parallax-duration="600">
                        <p className="text-24 font-medium">Sophie Alex</p>
                        <p className="text-[1vw] text-textBody">Business Owner</p>
                    </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
