import { useEffect } from "react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ButtonDark from "@/components/Button/ButtonDark";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Flip, ScrollTrigger, useGSAP);

var gridItemClickListeners = [];
function repositionItems(clickedItem) {
  const currentState = Flip.getState(".ser-grid-item");
  const slot1 = document.querySelector('[ser-slot="1"]');
  const slot2 = document.querySelector('[ser-slot="2"]');
  const slot3 = document.querySelector('[ser-slot="3"]');
  const slot4 = document.querySelector('[ser-slot="4"]');
  const currSlot1Item = slot1.querySelector(".ser-grid-item");
  const currSlot2Item = slot2.querySelector(".ser-grid-item");
  const currSlot3Item = slot3.querySelector(".ser-grid-item");
  const currSlot4Item = slot4.querySelector(".ser-grid-item");
  if (clickedItem === currSlot1Item) {
    return;
  }
  slot1.appendChild(clickedItem);
  clickedItem.classList.add("is--active");
  if (currSlot1Item) {
    slot4.appendChild(currSlot1Item);
  }
  if (currSlot4Item && clickedItem !== currSlot4Item) {
    slot3.appendChild(currSlot4Item);
  } else if (currSlot3Item && clickedItem !== currSlot3Item) {
    slot3.appendChild(currSlot3Item);
  }
  if (
    currSlot3Item &&
    clickedItem !== currSlot3Item &&
    clickedItem !== currSlot4Item
  ) {
    slot2.appendChild(currSlot3Item);
  } else if (currSlot2Item && clickedItem !== currSlot2Item) {
    slot2.appendChild(currSlot2Item);
  }
  Flip.from(currentState, {
    duration: 0.6,
    ease: "power1.inOut",
  });
  document.querySelectorAll(".ser-grid-item").forEach((item) => {
    if (item !== slot1.querySelector(".ser-grid-item")) {
      item.classList.remove("is--active");
      gsap.to(item.querySelector(".is-ser-title"), {
        scale: 1,
        duration: 0.6,
        ease: "power1.out",
      });
      gsap.to(item.querySelector(".ser-cross"), {
        rotate: "0deg",
        duration: 0.4,
        ease: "power1.out",
      });
      gsap.to(item.querySelector(".ser-info-w"), {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.4,
        ease: "power1.out",
      });
    }
  });
  gsap.to(clickedItem.querySelector(".is-ser-title"), {
    scale: 0.9,
    duration: 0.6,
    ease: "power1.in",
  });
  gsap.to(clickedItem.querySelector(".ser-cross"), {
    rotate: "45deg",
    duration: 0.4,
    ease: "power1.in",
  });
  gsap.to(clickedItem.querySelector(".ser-info-w"), {
    delay: 0.2,
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 0.6,
    ease: "power1.in",
    overwrite: "auto",
  });
}
function initServGrid() {
  gsap.set(".ser-grid-item.is--active .is-ser-title", {
    scale: 0.9,
  });
  gsap.set(".ser-grid-item.is--active .ser-info-w", {
    clipPath: "inset(0% 0% 0% 0%)",
  });
  gsap.set(".ser-grid-item:not(.is--active) .ser-info-w", {
    clipPath: "inset(0% 0% 100% 0%)",
  });
  gsap.set(".ser-grid-item.is--active .ser-cross", {
    rotate: "45deg",
  });
  const gridItems = document.querySelectorAll(".ser-grid-item");
  gridItems.forEach((item) => {
    const clickListener = function () {
      repositionItems(item);
    };
    item.addEventListener("click", clickListener);
    gridItemClickListeners.push(clickListener);
  });
}
function destroyServGrid() {
  const gridItems = document.querySelectorAll(".ser-grid-item");
  gridItems.forEach((item, index) => {
    item.removeEventListener("click", gridItemClickListeners[index]);
  });
  gridItemClickListeners = [];
}
function initServices() {
  initServGrid();
}
function destroyServices() {
  destroyServGrid();
}

const ServiceDesktop = () => {

      useGSAP(() => {
        if(globalThis.innerWidth<541){
        }else{
          initServices();
          const fadeUps = document.querySelectorAll(".serviceFadeUp");
          fadeUps.forEach((fadeUp) => {
          gsap.fromTo(
            fadeUp,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "Power3.out",
              scrollTrigger: {
                trigger: fadeUp,
                start: "top 85%",
              },
            }
          );
        });
        return () => {
          destroyServices();
        }
      };
      }, []);

    return (
        <>
        <div className="grid grid-cols-2 grid-rows-3 gap-[1.5vw] mobile:flex-col mobile:hidden tablet:hidden min-h-[46vw]">
            <div
              ser-slot="1"
              className="relative pointer-events-auto z-[99] serviceFadeUp ser-grid-slot is--active col-span-1 col-start-1 row-span-3 row-start-1"
            >
              <div className="ser-grid-item is--active">
                <div className="ser-grid-item-div mobile:border-[0.1vh] mobile:border-white mobile:p-[5%] mobile:h-full mobile:rounded-[10px]">
                  <div className="ser-content-w">
                    <div className="ser-titles-w">
                      <div className="ser-titles">
                        <h3 className="text-[2.3vw] is-ser-title text-white mobile:text-[6vw]">
                          Creative Design
                        </h3>
                      </div>
                      <div className="ser-cross-w">
                        <div className="ser-cross w-embed mobile:w-[7%] mobile:absolute mobile:right-[6%] mobile:top-[5%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path
                              className="ser-cross-svg"
                              d="M32 16.3069C31.8549 16.579 31.7279 16.8693 31.5284 17.1052C31.1837 17.5043 30.7121 17.595 30.2042 17.595C26.1591 17.595 22.0959 17.595 18.0509 17.595C17.9239 17.595 17.7788 17.595 17.5974 17.595C17.5974 17.7583 17.5974 17.8853 17.5974 18.0123C17.5974 22.0036 17.5792 25.9949 17.6155 29.9862C17.6155 30.984 17.289 31.6734 16.3095 32C16.11 32 15.8923 32 15.6927 32C15.6746 31.9819 15.6565 31.9637 15.6383 31.9637C14.7495 31.6553 14.3867 31.1473 14.3867 30.2039C14.3867 26.1582 14.3867 22.0943 14.3867 18.0486C14.3867 17.9216 14.3867 17.7764 14.3867 17.595C14.2416 17.595 14.0965 17.595 13.9695 17.595C9.9063 17.595 5.82495 17.595 1.76174 17.595C0.836639 17.595 0.219902 17.1233 0.0385091 16.325C-0.161024 15.4542 0.437574 14.5652 1.30826 14.4201C1.48966 14.3838 1.68919 14.3838 1.87058 14.3838C5.89751 14.3838 9.92444 14.3838 13.9514 14.3838C14.0783 14.3838 14.2235 14.3838 14.3867 14.3838C14.3867 14.2205 14.3867 14.0754 14.3867 13.9484C14.3867 9.88452 14.3867 5.82064 14.3867 1.7749C14.3867 0.849645 14.8583 0.214664 15.6746 0.0332404C16.5272 -0.148183 17.416 0.432371 17.5611 1.3032C17.6155 1.50277 17.6155 1.70233 17.6155 1.88376C17.6155 5.91135 17.6155 9.9208 17.6155 13.9484C17.6155 14.0754 17.6155 14.2205 17.6155 14.402C17.7788 14.402 17.9057 14.402 18.0327 14.402C22.0234 14.402 26.014 14.4201 29.9865 14.3838C30.9842 14.3838 31.6735 14.7104 32 15.6901C32 15.8896 32 16.1073 32 16.3069Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="ser-info-100 mobile:px-[5%] mobile:mt-[2vh]">
                      <div className="ser-info-w">
                        <div className="ser-info-abs">
                          <div className="ser-info-group">
                            <p className="text-24 mobile:text-white">
                              Dive into a world where design meets strategy,
                              only at Creative Curve. Our creative designing
                              services are more than just aesthetics; they're
                              about telling a compelling story. We understand
                              the power of design in shaping perceptions and
                              influencing decisions. Our offerings span both
                              offline and online mediums.
                            </p>
                          </div>
                          <div className="ser-info-group mobile:text-white mobile:mt-[2vh]">
                            <ul className="service-item-list">
                              <li className="text-22 mobile:py-[0.5vw]">
                                Brand & Visual Identity
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Creative Advertisement
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Periodicals & Annual Reports
                              </li> 
                              <li className="text-22 mobile:py-[0.5vw]">
                                Digital Design
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Print & Collateral Design
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Illustrations & Artwork
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Packaging & Label Design
                              </li>
                            </ul>
                          </div>
                          <div className="ser-info-group mt-[2vw] mobile:mt-[2vh]">
                            <ButtonDark link="/services" btnText="Details" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ser-slot="2"
              className="relative pointer-events-auto z-[99] serviceFadeUp ser-grid-slot col-span-1 col-start-2 row-span-1 row-start-1 mobile:mt-[2vh]"
            >
              <div className="ser-grid-item">
                <div className="ser-grid-item-div mobile:border-[0.1vh] mobile:border-white mobile:p-[5%] mobile:h-full mobile:rounded-[10px]">
                  <div className="ser-content-w">
                    <div className="ser-titles-w">
                      <div className="ser-titles">
                        <h3 className="text-[2.3vw] is-ser-title text-white mobile:text-[6vw]">
                          Public Relations
                        </h3>
                      </div>
                      <div className="ser-cross-w">
                        <div className="ser-cross w-embed mobile:w-[7%] mobile:absolute mobile:right-[6%] mobile:top-[5%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path
                              className="ser-cross-svg"
                              d="M32 16.3069C31.8549 16.579 31.7279 16.8693 31.5284 17.1052C31.1837 17.5043 30.7121 17.595 30.2042 17.595C26.1591 17.595 22.0959 17.595 18.0509 17.595C17.9239 17.595 17.7788 17.595 17.5974 17.595C17.5974 17.7583 17.5974 17.8853 17.5974 18.0123C17.5974 22.0036 17.5792 25.9949 17.6155 29.9862C17.6155 30.984 17.289 31.6734 16.3095 32C16.11 32 15.8923 32 15.6927 32C15.6746 31.9819 15.6565 31.9637 15.6383 31.9637C14.7495 31.6553 14.3867 31.1473 14.3867 30.2039C14.3867 26.1582 14.3867 22.0943 14.3867 18.0486C14.3867 17.9216 14.3867 17.7764 14.3867 17.595C14.2416 17.595 14.0965 17.595 13.9695 17.595C9.9063 17.595 5.82495 17.595 1.76174 17.595C0.836639 17.595 0.219902 17.1233 0.0385091 16.325C-0.161024 15.4542 0.437574 14.5652 1.30826 14.4201C1.48966 14.3838 1.68919 14.3838 1.87058 14.3838C5.89751 14.3838 9.92444 14.3838 13.9514 14.3838C14.0783 14.3838 14.2235 14.3838 14.3867 14.3838C14.3867 14.2205 14.3867 14.0754 14.3867 13.9484C14.3867 9.88452 14.3867 5.82064 14.3867 1.7749C14.3867 0.849645 14.8583 0.214664 15.6746 0.0332404C16.5272 -0.148183 17.416 0.432371 17.5611 1.3032C17.6155 1.50277 17.6155 1.70233 17.6155 1.88376C17.6155 5.91135 17.6155 9.9208 17.6155 13.9484C17.6155 14.0754 17.6155 14.2205 17.6155 14.402C17.7788 14.402 17.9057 14.402 18.0327 14.402C22.0234 14.402 26.014 14.4201 29.9865 14.3838C30.9842 14.3838 31.6735 14.7104 32 15.6901C32 15.8896 32 16.1073 32 16.3069Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="ser-info-100  mobile:px-[5%] mobile:mt-[2vh]">
                      <div className="ser-info-w">
                        <div className="ser-info-abs">
                          <div className="ser-info-group">
                            <p className="text-large text-white">
                              Our Public Relations services are not just about
                              getting your brand in the news; they're about
                              crafting the right narrative and building enduring
                              relationships. We recognize the importance of a
                              brand's reputation and work diligently to enhance
                              and protect it. Our seasoned PR professionals
                              bridge the gap between your brand and the world,
                              ensuring your story is told the way it should be.
                              Navigate the intricate maze of media relations
                              with Creative Curve's tailored solutions.
                            </p>
                          </div>
                          <div className="ser-info-group mobile:text-white mobile:mt-[2vh]">
                            <ul className="service-item-list">
                              <li className="text-22 mobile:py-[0.5vw]">
                                Media Relations & Outreach
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Crisis Communication & Management
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">Event PR & Launches</li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Influencer Collaborations
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Reputation Building & Management
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Press Release Crafting & Distribution
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Media Training & Workshops
                              </li>
                            </ul>
                          </div>
                          <div className="ser-info-group mt-[2vw] mobile:mt-[2vh]">
                            <ButtonDark link="/services" btnText="Details" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ser-slot="3"
              className="relative pointer-events-auto z-[99] serviceFadeUp ser-grid-slot col-span-1 col-start-2 row-span-1 row-start-2 mobile:mt-[2vh]"
            >
              <div className="ser-grid-item">
                <div className="ser-grid-item-div mobile:border-[0.1vh] mobile:border-white mobile:p-[5%] mobile:h-full mobile:rounded-[10px]">
                  <div className="ser-content-w">
                    <div className="ser-titles-w">
                      <div className="ser-titles">
                        <h3 className="text-[2.3vw] is-ser-title text-white mobile:text-[6vw]">
                          Audio Visual
                        </h3>
                      </div>
                      <div className="ser-cross-w">
                        <div className="ser-cross w-embed mobile:w-[7%] mobile:absolute mobile:right-[6%] mobile:top-[5%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path
                              className="ser-cross-svg"
                              d="M32 16.3069C31.8549 16.579 31.7279 16.8693 31.5284 17.1052C31.1837 17.5043 30.7121 17.595 30.2042 17.595C26.1591 17.595 22.0959 17.595 18.0509 17.595C17.9239 17.595 17.7788 17.595 17.5974 17.595C17.5974 17.7583 17.5974 17.8853 17.5974 18.0123C17.5974 22.0036 17.5792 25.9949 17.6155 29.9862C17.6155 30.984 17.289 31.6734 16.3095 32C16.11 32 15.8923 32 15.6927 32C15.6746 31.9819 15.6565 31.9637 15.6383 31.9637C14.7495 31.6553 14.3867 31.1473 14.3867 30.2039C14.3867 26.1582 14.3867 22.0943 14.3867 18.0486C14.3867 17.9216 14.3867 17.7764 14.3867 17.595C14.2416 17.595 14.0965 17.595 13.9695 17.595C9.9063 17.595 5.82495 17.595 1.76174 17.595C0.836639 17.595 0.219902 17.1233 0.0385091 16.325C-0.161024 15.4542 0.437574 14.5652 1.30826 14.4201C1.48966 14.3838 1.68919 14.3838 1.87058 14.3838C5.89751 14.3838 9.92444 14.3838 13.9514 14.3838C14.0783 14.3838 14.2235 14.3838 14.3867 14.3838C14.3867 14.2205 14.3867 14.0754 14.3867 13.9484C14.3867 9.88452 14.3867 5.82064 14.3867 1.7749C14.3867 0.849645 14.8583 0.214664 15.6746 0.0332404C16.5272 -0.148183 17.416 0.432371 17.5611 1.3032C17.6155 1.50277 17.6155 1.70233 17.6155 1.88376C17.6155 5.91135 17.6155 9.9208 17.6155 13.9484C17.6155 14.0754 17.6155 14.2205 17.6155 14.402C17.7788 14.402 17.9057 14.402 18.0327 14.402C22.0234 14.402 26.014 14.4201 29.9865 14.3838C30.9842 14.3838 31.6735 14.7104 32 15.6901C32 15.8896 32 16.1073 32 16.3069Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="ser-info-100 mobile:px-[5%] mobile:mt-[2vh]">
                      <div className="ser-info-w">
                        <div className="ser-info-abs">
                          <div className="ser-info-group">
                            <p className="text-large text-white">
                              Step into the realm of compelling storytelling. We
                              believe in the power of sight and sound to evoke
                              emotions and drive actions. Our team & partner
                              network of skilled videographers, sound engineers,
                              and editors craft content that resonates, whether
                              it's a brand film or a corporate documentary.
                              Experience the magic of audio-visual like never
                              before.
                            </p>
                          </div>
                          <div className="ser-info-group mobile:text-white mobile:mt-[2vh]">
                            <ul className="service-item-list">
                              <li className="text-22 mobile:py-[0.5vw]">
                                Brand & Corporate Films
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Product Explainer Videos
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Podcasts & Audio Content
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Event Coverage & Live Streaming
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Animation & Motion Graphics
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Sound Design & Voiceovers
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Interactive Video Content
                              </li>
                            </ul>
                          </div>
                          <div className="ser-info-group mt-[2vw] mobile:mt-[2vh]">
                            <ButtonDark link="/services" btnText="Details" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ser-slot="4"
              className="relative pointer-events-auto z-[99] serviceFadeUp ser-grid-slot col-span-1 col-start-2 row-span-1 row-start-3 mobile:mt-[2vh]"
            >
              <div className="ser-grid-item">
                <div className="ser-grid-item-div mobile:border-[0.1vh] mobile:border-white mobile:p-[5%] mobile:h-full mobile:rounded-[10px]">
                  <div className="ser-content-w">
                    <div className="ser-titles-w">
                      <div className="ser-titles">
                        <h3 className="text-[2.3vw] is-ser-title text-white mobile:text-[6vw]">
                          Digital Marketing
                        </h3>
                      </div>
                      <div className="ser-cross-w">
                        <div className="ser-cross w-embed  mobile:w-[7%] mobile:absolute mobile:right-[6%] mobile:top-[5%]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path
                              className="ser-cross-svg"
                              d="M32 16.3069C31.8549 16.579 31.7279 16.8693 31.5284 17.1052C31.1837 17.5043 30.7121 17.595 30.2042 17.595C26.1591 17.595 22.0959 17.595 18.0509 17.595C17.9239 17.595 17.7788 17.595 17.5974 17.595C17.5974 17.7583 17.5974 17.8853 17.5974 18.0123C17.5974 22.0036 17.5792 25.9949 17.6155 29.9862C17.6155 30.984 17.289 31.6734 16.3095 32C16.11 32 15.8923 32 15.6927 32C15.6746 31.9819 15.6565 31.9637 15.6383 31.9637C14.7495 31.6553 14.3867 31.1473 14.3867 30.2039C14.3867 26.1582 14.3867 22.0943 14.3867 18.0486C14.3867 17.9216 14.3867 17.7764 14.3867 17.595C14.2416 17.595 14.0965 17.595 13.9695 17.595C9.9063 17.595 5.82495 17.595 1.76174 17.595C0.836639 17.595 0.219902 17.1233 0.0385091 16.325C-0.161024 15.4542 0.437574 14.5652 1.30826 14.4201C1.48966 14.3838 1.68919 14.3838 1.87058 14.3838C5.89751 14.3838 9.92444 14.3838 13.9514 14.3838C14.0783 14.3838 14.2235 14.3838 14.3867 14.3838C14.3867 14.2205 14.3867 14.0754 14.3867 13.9484C14.3867 9.88452 14.3867 5.82064 14.3867 1.7749C14.3867 0.849645 14.8583 0.214664 15.6746 0.0332404C16.5272 -0.148183 17.416 0.432371 17.5611 1.3032C17.6155 1.50277 17.6155 1.70233 17.6155 1.88376C17.6155 5.91135 17.6155 9.9208 17.6155 13.9484C17.6155 14.0754 17.6155 14.2205 17.6155 14.402C17.7788 14.402 17.9057 14.402 18.0327 14.402C22.0234 14.402 26.014 14.4201 29.9865 14.3838C30.9842 14.3838 31.6735 14.7104 32 15.6901C32 15.8896 32 16.1073 32 16.3069Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="ser-info-100 mobile:px-[5%] mobile:mt-[2vh]">
                      <div className="ser-info-w">
                        <div className="ser-info-abs">
                          <div className="ser-info-group">
                            <p className="text-large text-white">
                              Embark on a digital journey where innovation meets
                              impact. Our Digital Marketing services are
                              tailored to navigate the ever-evolving online
                              landscape. We harness the latest tools and trends
                              to ensure your brand not only has a robust online
                              presence but also engages and converts its
                              audience. Dive deep into the digital realm with
                              us.
                            </p>
                          </div>
                          <div className="ser-info-group mobile:text-white mobile:mt-[2vh]">
                            <ul className="service-item-list">
                              <li className="text-22 mobile:py-[0.5vw]">
                                Search Engine Optimization (SEO)
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Paid Media & PPC Campaigns
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Social Media Management & Strategy
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Content Marketing & Blogging
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Email Marketing Campaigns
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Affiliate & Influencer Marketing
                              </li>
                              <li className="text-22 mobile:py-[0.5vw]">
                                Analytics & Performance Tracking
                              </li>
                            </ul>
                          </div>
                          <div className="ser-info-group mt-[2vw] mobile:mt-[2vh]">
                            <ButtonDark link="/services" btnText="Details" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default ServiceDesktop