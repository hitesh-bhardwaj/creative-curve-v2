import {
    LinkedinShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from 'next-share';

const AuthorInfo = () => {
    return (
        <>
            <div id='authorInfo' className="w-[20%] space-y-[2.5vw]">
                <div className="space-y-[1vw]">
                    <p className="text-30">Author</p>
                    <div className="flex items-center gap-[10px]">
                        <img src="/images/blogs/avatar.png" alt="Author Image" className="rounded-full w-[3vw] h-[3vw]"/>
                        <p className="text-24">Jasdeep Singh</p>
                    </div>
                </div>

                <div className="space-y-[0.5vw]">
                    <p className="text-30">Posted On</p>
                    <div className="flex items-center gap-[10px]">
                        <p className="text-24">19, June 2023</p>
                    </div>
                </div>

                <div className="space-y-[0.8vw]">
                    <p className="text-30">Share Article</p>
                    <div className="flex items-center justify-start gap-[1vw]">
                        <FacebookShareButton
                          url="https://creative-curve.co.in"
                          quote={"Read more articles like this on our website - https://creative-curve.co.in"}
                          hashtag={"#CreativeCurve"}
                        >
                          <img
                            className="w-[1.6vw] h-[1.6vw]"
                            src="/images/blogs/social/fb.svg"
                            alt="social icon"
                          />
                        </FacebookShareButton>

                        <LinkedinShareButton
                          url="https://creative-curve.co.in"
                          hashtag={"#CreativeCurve"}
                        >
                          <img
                            className="w-[1.6vw] h-[1.6vw]"
                            src="/images/blogs/social/linkedin.svg"
                            alt="social icon"
                          />
                        </LinkedinShareButton>

                        <TwitterShareButton
                          url="https://creative-curve.co.in"
                          hashtag={"#CreativeCurve"}
                        >
                          <img
                            className="w-[1.4vw] h-[1.4vw]"
                            src="/images/blogs/social/twitter.svg"
                            alt="social icon"
                          />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url="https://creative-curve.co.in"
                          hashtag={"#CreativeCurve"}
                        >
                          <img
                            className="w-[1.6vw] h-[1.6vw]"
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