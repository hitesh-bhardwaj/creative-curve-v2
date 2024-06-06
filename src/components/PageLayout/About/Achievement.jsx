const Achievement = () => {
    return (
        <>
            <section id="achievement" className="pt-[10%] pb-[10%]">
                <div className="container">
                    
                    <div className="w-[55%] mobile:w-full">
                        <p className="text-20 mb-[1vw] fadeUp ">Our Achievements</p>
                        <h2 className="text-96 leading-[1.2] text-textHead mb-[1vw] heading-anim ">
                            Check Recent
                        <br />
                            Achievements
                        </h2>
                        <p className="text-22 w-[65%] mb-[2vw] para-animations mobile:w-[90%] mobile:mt-[2vh]">
                        <span>
                            We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                        </span>
                        </p>
                    </div>

                    <div className="w-full flex justify-end -mt-[2%] mobile:mt-[5vh]">
                        <div className="w-1/3 text-left mobile:w-[80%] mobile:text-right">
                            <p className="text-24">
                                We forge meaningful connections that translate into tangible results. Our marketing solutions are crafted with a deep understanding.
                            </p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 text-textHead grid-rows-5 gap-x-[3vw] gap-y-[4vw] mt-[5vw] mobile:flex mobile:flex-col mobile:gap-[2vh]">
                        
                        <div className="bg-[#F6FFE7] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-1 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px]">
                            <p className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw]">
                                1270
                                <span className="block leading-[0.6] text-[5vw] font-normal mobile:text-[10vw]">
                                +
                                </span>
                            </p>
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Project Delivered
                                </h5>
                            </div>
                        </div>

                        <div className="bg-[#F3F2FF] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-2 row-start-2 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px]">
                            <p className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw]">
                                130
                                <span className="block leading-[0.6] text-[5vw] font-normal  mobile:text-[10vw]">
                                +
                                </span>
                            </p>
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Clients Thrilled
                                </h5>
                            </div>
                        </div>
                        <div className="bg-[#E8F2FF] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 col-start-1 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px]">
                            <p className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw]">
                                8
                                <span className="block leading-[0.6] text-[5vw] font-normal mobile:text-[10vw]">
                                +
                                </span>
                            </p>
                            <div className="text-left w-[40%] text-[2.8vw] leading-[1.2] mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Nation Served
                                </h5>
                            </div>
                        </div>
                        <div className="bg-[#FFF3ED] p-[7%] border border-black/10 h-[25vw] col-span-1 row-span-2 rounded-[40px] flex justify-between flex-col items-end mobile:h-[60vw] mobile:rounded-[12px]">
                            <p className="text-[5.65vw] leading-[1] flex w-full font-medium mobile:text-[12vw]">
                                20
                                <span className="block leading-[0.6] text-[5vw] font-normal mobile:text-[10vw]">
                                +
                                </span>
                            </p>
                            <div className="text-left text-[2.8vw] leading-[1.2] w-1/2 mobile:text-[5vw]">
                                <h5 className="space-grotesk">
                                    Years of Unwavering Excellence
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Achievement