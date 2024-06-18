import useWindowSize from "@/components/useWindowSize";
import ServiceDesktop from "./ServiceDesktop";
import ServiceMobile from "./ServiceMobile";

export default function Services() {
  const { width } = useWindowSize();

  return (
    <>
      <section id="services" className="bg-black" data-cursor-color="#fff">
        <div className="container pt-[10%] pb-[5%] mobile:pt-[20%] mobile:pb-[15%] tablet:pt-[10%] tablet:pb-[10%]">
          <div className="text-white mb-[4vw] mobile:mb-[15vw] tablet:mb-[10vw]">
            <p className="text-24 mb-[1vw] fadeUp mobile:mb-[5vw] tablet:mb-[3vw]">
              Our Services
            </p>
            <div className="relative w-[65%] mobile:w-full tablet:w-full">
              <h2 className="text-140 leading-[1] space-grotesk heading-anim service-head mobile:flex mobile:flex-col mobile:text-[10vw] mobile:mb-[5vw] tablet:mb-[3vw] tablet:flex tablet:flex-col">
                <span className="overflow-hidden block mobile:leading-[1.1] tablet:leading-[1.1]">
                  Marketing
                </span>{" "}
                <span className="overflow-hidden whitespace-nowrap ml-[40%] tablet:ml-0 mobile:ml-0 block mobile:leading-[0.8] tablet:leading-[0.9]">
                  Solutions
                </span>
              </h2>
              <p className="text-22 w-[40%] absolute top-[62%] para-animations mobile:static mobile:text-[4vw] mobile:w-[90%] tablet:static tablet:text-[2.5vw] tablet:w-[70%] mobile:mb-[6vw] tablet:mb-[4vw]">
                <span>
                  Dive into a world where design meets strategy, only at
                  Creative Curve.
                </span>
              </p>
            </div>
          </div>
          {width >= 1023 ? (
            <ServiceDesktop />
          ) : (
            <ServiceMobile />
          )}
        </div>
      </section>
    </>
  );
}
