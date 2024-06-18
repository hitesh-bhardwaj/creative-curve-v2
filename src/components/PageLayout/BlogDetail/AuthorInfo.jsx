import {
    LinkedinShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from 'next-share';

const AuthorInfo = () => {
    return (
        <>
            <div id='authorInfo' className="w-[20%] space-y-[2.5vw] tablet:w-1/2 tablet:space-y-[4vw] mobile:w-full mobile:space-y-[5vw]">
                
                <div className="space-y-[1vw] fadeUp">
                    <p className="text-30">Author</p>
                    <div className="flex items-center gap-[10px]">
                        <img src="/images/blogs/avatar.png" alt="Author Image" className="rounded-full w-[3vw] h-[3vw] mobile:h-[8vw] mobile:w-[8vw] tablet:w-[8vw] tablet:h-[8vw]"/>
                        <p className="text-24 tablet:text-[3.5vw] mobile:text-[4vw]">Jasdeep Singh</p>
                    </div>
                </div>

                <div className="space-y-[0.5vw] mobile:space-y-[1vw] fadeUp">
                    <p className="text-30">Posted On</p>
                    <div className="flex items-center gap-[10px]">
                        <p className="text-24 tablet:text-[3.5vw]">19, June 2023</p>
                    </div>
                </div>

                <div className="space-y-[0.8vw] tablet:space-y-[2vw] mobile:space-y-[2vw] fadeUp">
                    <p className="text-30">Share Article</p>
                    <div className="flex items-center justify-start gap-[1vw] tablet:gap-[5vw] mobile:gap-[4vw] ">
                        <FacebookShareButton
                          url="https://creative-curve.co.in"
                          quote={"Read more articles like this on our website - https://creative-curve.co.in"}
                          hashtag={"#CreativeCurve"}
                        >
                          <img
                            className="w-[1.6vw] h-[1.6vw] tablet:w-[4vw] tablet:h-[4vw] mobile:w-[5vw] mobile:h-[5vw]"
                            src="/images/blogs/social/fb.svg"
                            alt="social icon"
                          />
                        </FacebookShareButton>

                        <LinkedinShareButton
                          url="https://creative-curve.co.in"
                          hashtag={"#CreativeCurve"}
                        >
                         <img
                            className="w-[1.6vw] h-[1.6vw] tablet:w-[4vw] tablet:h-[4vw] mobile:w-[5vw] mobile:h-[5vw]"
                            src="/images/blogs/social/linkedin.svg"
                            alt="social icon"
                          />
                        </LinkedinShareButton>

                        <TwitterShareButton
                          url="https://creative-curve.co.in"
                          hashtag={"#CreativeCurve"}
                        >
                         <img
                            className="w-[1.4vw] h-[1.4vw] tablet:w-[3.8vw] tablet:h-[3.8vw] mobile:w-[4.5vw] mobile:h-[4.5vw]"
                            src="/images/blogs/social/twitter.svg"
                            alt="social icon"
                          />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url="https://creative-curve.co.in"
                          hashtag={"#CreativeCurve"}
                        >
                         <img
                            className="w-[1.6vw] h-[1.6vw] tablet:w-[4vw] tablet:h-[4vw] mobile:w-[5vw] mobile:h-[5vw]"
                            src="/images/blogs/social/whatsapp.svg"
                            alt="social icon"
                          />
                        </WhatsappShareButton>
                      </div>
                </div>
            </div>
        </>
    )
}

export default AuthorInfo;