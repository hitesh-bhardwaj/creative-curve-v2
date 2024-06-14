import ServiceDesktop from "./ServiceDesktop";
import ServiceMobile from "./ServiceMobile";

export default function Services() {

  return (
    <>
      <section id="services" className="bg-black" data-cursor-color="#fff">
        <div className="container pt-[10%] pb-[5%] mobile:pt-[20%] mobile:pb-[15%] tablet:pt-[15%] tablet:pb-[10%]">
          <div className="text-white mb-[4vw] mobile:mb-[15vw]">
            <p className="text-24 mb-[1vw] fadeUp mobile:mb-[4vw]">
              Our Services
            </p>
            <div className="relative w-[65%] mobile:w-full tablet:w-full">
              <h2 className="text-140 leading-[1] space-grotesk heading-anim service-head mobile:flex mobile:flex-col mobile:text-[10vw] mobile:mb-[4vw] tablet:mt-[1.2vh] tablet:flex tablet:flex-col">
                <span className="overflow-hidden block mobile:leading-[1.1] tablet:leading-[1.1]">
                  Marketing
                </span>{" "}
                <span className="overflow-hidden block mobile:leading-[0.8] tablet:leading-[0.9]">
                  Solutions
                </span>
              </h2>
              <p className="text-22 w-[40%] absolute top-[62%] para-animations mobile:static mobile:text-[4vw] mobile:w-[90%] mobile:mt-[2vh] tablet:static tablet:text-[2.5vw] tablet:w-[70%] tablet:mt-[2vh] ">
                <span>
                  Dive into a world where design meets strategy, only at
                  Creative Curve.
                </span>
              </p>
            </div>
          </div>

          <ServiceDesktop />
          <ServiceMobile />

        </div>
      </section>
    </>
  );
}
