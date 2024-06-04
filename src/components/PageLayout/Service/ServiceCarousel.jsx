import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  indexInParent,
  splitLines,
} from "@/components/PageLayout/Service/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ServiceCarousel = () => {
  const carouselRef = useRef(null);

  useGSAP(()=>{
      const carousel = carouselRef.current;
  let nbCartes = carousel.querySelectorAll('.leCarou .innerImg').length;
      let numeroSlide = 0;
      let onUpdateLesPuces = true;
      let animEnCours = false;

      carousel.querySelector('.toSlide').classList.add('passe')

      document.querySelectorAll('.entree h3').forEach(el => {
          splitLines(el, '<span><span>', '</span></span>')
      });

      gsap.to(document.querySelectorAll('.entree')[0].querySelectorAll('h3 span span'), {
          duration:0.8,y:'0%',delay:0.3,stagger:0.07,ease:'easeSpe',
          scrollTrigger:{
              trigger: document.querySelectorAll('.entree')[0],
              start: 'top bottom'
          }
      })
      gsap.fromTo(document.querySelectorAll('.entree')[0].querySelector('p'), {
          opacity:0
      },{
          duration:0.4,opacity:1,delay:0.6,ease:'easeSpe',
          scrollTrigger:{
              trigger: document.querySelectorAll('.entree')[0],
              start: 'top bottom'
          }
      })
      gsap.fromTo(document.querySelectorAll('.entree')[0].querySelectorAll('ul'), {
        opacity:0, y:20
    },{
        duration:0.4,opacity:1,y:0,delay:0.9,stagger:0.07,ease:'easeSpe',
        scrollTrigger:{
            trigger: document.querySelectorAll('.entree')[0],
            start: 'top bottom'
        }
    })

  	ScrollTrigger.create({
          trigger: carousel.querySelector('.pushCarousel'),
          start: "top top+=" + 80,
          end:'+=' + ((nbCartes - 1) * window.innerHeight),
          pin: true,
          scrub: true,
      });

  	let incr = -136;
  	let elmts = [];
  	let first = 0;

      carousel.querySelectorAll('.leCarou .innerImg').forEach(el => {
      	if(first == 0){
      		first++;
      	}else{
      		elmts.push(el);
      	}
      });

      elmts.forEach(el => {

          ScrollTrigger.create({
              trigger : carousel.querySelector('.innerCarou'),
              start:'top top-=' + (incr + (window.innerHeight/2)) + "px",
              end:'+=' + window.innerHeight + "px",
              onEnter: () => {

                  numeroSlide++;

                  if(onUpdateLesPuces){
                      gsap.to(carousel.querySelector('.bubble'), {
                          x: numeroSlide * 100 + '%',
                          duration:0.5,
                          ease:"easeSpe"
                      })

                      gsap.to(carousel.querySelectorAll('.lesImgs img'), {
                          x: -1 * numeroSlide * 100 + '%',
                          ease:'easeSpe',
                          duration:0.5,
                      })
                  }

                  gsap.killTweensOf(carousel.querySelectorAll('.entree'));
                  gsap.to(carousel.querySelectorAll('.entree'), {
                      duration:0.2,
                      opacity:0,
                      ease:'none'
                  })
                  gsap.to(carousel.querySelectorAll('.entree')[indexInParent(el)], {
                      duration:0.2,
                      opacity:1,
                      delay:0.2,
                      ease:'none',
                      onComplete:() => {
                          updatePuces();
                      }
                  })

                  gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el)].querySelectorAll('h3 span span'), {
                      y:'100%'
                  },{
                      duration:0.8,y:'0%',delay:0.2,stagger:0.07,ease:'easeSpe'
                  })

                  gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el)].querySelector('p'), {
                      opacity:0
                  },{
                      duration:0.4,opacity:1,delay:0.4,ease:'easeSpe'
                  })

                  gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el)].querySelector('ul'), {
                    opacity:0, y: 20
                  },{
                      duration:0.4,opacity:1,y:0,stagger:0.07,delay:0.6,ease:'easeSpe'
                  })
              },
              onLeaveBack: () => {

                  numeroSlide--;

                  if(onUpdateLesPuces){
                      gsap.to(carousel.querySelector('.bubble'), {
                          x: numeroSlide * 100 + '%',
                          duration:0.5,
                          ease:"easeSpe"
                      })

                      gsap.to(carousel.querySelectorAll('.lesImgs img'), {
                          x: -1 * numeroSlide * 100 + '%',
                          ease:'easeSpe',
                          duration:0.5
                      })
                  }

                  gsap.killTweensOf(carousel.querySelectorAll('.entree'));
                  gsap.to(carousel.querySelectorAll('.entree'), {
                      duration:0.2,
                      opacity:0,
                      ease:'none'
                  })
                  gsap.to(carousel.querySelectorAll('.entree')[indexInParent(el) - 1], {
                      duration:0.2,
                      opacity:1,
                      delay:0.2,
                      ease:'none'
                  })
                  gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el) - 1].querySelectorAll('h3 span span'), {
                      y:'100%'
                  },{
                      duration:0.8,y:'0%',delay:0.3,stagger:0.07,ease:'easeSpe'
                  })

                  gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el) - 1].querySelector('p'), {
                      opacity:0
                  },{
                      duration:0.4,opacity:1,delay:0.6,ease:'easeSpe'
                  })

                  gsap.fromTo(carousel.querySelectorAll('.entree')[indexInParent(el)].querySelector('ul'), {
                    opacity:0, y: 20
                  },{
                      duration:0.4,opacity:1,y:0,stagger:0.07,delay:0.9,ease:'easeSpe'
                  })

                  updatePuces();
              }
          })

          gsap.to(el, {
      		y:'0%',
      		ease:"none",
      		scrollTrigger: {
      			trigger	: carousel.querySelector('.innerCarou'),
      			start:'top top-=' + incr + "px",
      			end:'+=' + window.innerHeight + "px",
      			scrub: true,
      		}
      	})
      	gsap.to(el.querySelector('.img'), {
      		y:'0%',
      		ease:"none",
      		scrollTrigger: {
      			trigger	: carousel.querySelector('.innerCarou'),
      			start:'top top-=' + incr + "px",
      			end:'+=' + window.innerHeight + "px",
      			scrub: true
      		}
      	})
          gsap.to(el.querySelector('.img'), {
              y:'0%',
              ease:"none",
              scrollTrigger: {
                  trigger : carousel.querySelector('.innerCarou'),
                  start:'top top-=' + incr + "px",
                  end:'+=' + window.innerHeight + "px",
                  scrub: true
              }
          })
          gsap.from(el.querySelector('img'), {
              scale:'1.15',
              ease:"none",
              scrollTrigger: {
                  trigger : carousel.querySelector('.innerCarou'),
                  start:'top top-=' + incr + "px",
                  end:'+=' + window.innerHeight*3 + "px",
                  scrub: true
              }
          })

      	incr+= window.innerHeight;
      });

      // cas premiere image
      gsap.from(carousel.querySelector('.img img'), {
          scale:'1.15',
          ease:"none",
          scrollTrigger: {
              trigger : carousel.querySelector('.innerCarou'),
              start:'top bottom',
              end:'+=' + window.innerHeight*3 + "px",
              scrub: true
          }
      });

  	carousel.querySelectorAll('.toSlide').forEach(el => {
  		el.addEventListener('click', () => {
              animEnCours = true;
  			let debutSection = carousel.getBoundingClientRect().top + window.pageYOffset;

              onUpdateLesPuces = false;

  		let progress = {}
  		progress.scroll = window.pageYOffset
  		gsap.to(progress, {
  			scroll: carousel.getBoundingClientRect().top + window.pageYOffset + indexInParent(el) * window.innerHeight - 135, // 136 - 1 // 1 = pixel supplémentaire pour arrondir
  			ease:"power4.inOut",
  			duration:1.4,
  			onUpdate: () => {
  				window.scrollTo(0, progress.scroll);
  			},
                  onComplete: () => {
                      onUpdateLesPuces = true
                      animEnCours = false;
                  }
  		})

  		})

          el.addEventListener('mouseenter', () => {
              console.log(indexInParent(el))
              gsap.to(carousel.querySelector('.bubble'), {
                  x: '100' * indexInParent(el) + "%",
                  ease:'easeSpe',
                  duration:0.5
              })
              gsap.to(carousel.querySelectorAll('.lesImgs img'), {
                  x: -1 * indexInParent(el) * 100 + '%',
                  ease:'easeSpe',
                  duration:0.5
              })

              carousel.querySelector('.bubble').classList.add('gros');
          })
          el.addEventListener('mouseleave', () => {
              if(!animEnCours){
                  gsap.to(carousel.querySelector('.bubble'), {
                      x: '100' * numeroSlide + "%",
                      ease:'easeSpe',
                      duration:0.5
                  })
                  gsap.to(carousel.querySelectorAll('.lesImgs img'), {
                      x: -1 * numeroSlide * 100 + '%',
                      ease:'easeSpe',
                      duration:0.5
                  })
              }
              carousel.querySelector('.bubble').classList.remove('gros');
          })
  	});

      const updatePuces = () => {
          carousel.querySelectorAll('.toSlide').forEach(el => {
              el.classList.remove('passe')
          })
          for(let i = 0; i <= numeroSlide; i++){
              carousel.querySelectorAll('.toSlide')[i].classList.add('passe');
          }
      }

  }, [carouselRef]);

  return (
    <>
      <div ref={carouselRef} className="parentCarou mt-[8vw]">
        <div className="pushCarousel">
          <div className="flex justify-between innerCarou">
            <div className="w-[40%] pt-[5vw] flex justify-between relative">
              <div className="relative parentEntree">
                <div className="entree current space-y-[2vw]">
                  <h3 className="h3 text-76 space-grotesk leading-[1.2] w-[60%]">
                    Creative <br /> Design
                  </h3>
                  <p className="text-24">
                    Dive into a world where design meets strategy, only at
                    Creative Curve. Our creative designing services are more
                    than just aesthetics; they're about telling a compelling
                    story.
                  </p>
                  <ul className="service-list space-y-[0.5vw]">
                    <li>Brand & Visual Identity</li>
                    <li>Creative Advertisement</li>
                    <li>Periodicals & Annual Reports</li>
                    <li>Digital Design</li>
                    <li>Print & Collateral Design</li>
                    <li>Illustrations & Artwork</li>
                    <li>Packaging & Label Design</li>
                  </ul>
                </div>
                <div className="entree space-y-[2vw]">
                  <h3 className="h3 text-76 space-grotesk leading-[1.2] w-[60%]">Public <br /> Relations</h3>
                  <p className="text-22">
                    Our Public Relations services are not just about getting
                    your brand in the news; they're about crafting the right
                    narrative and building enduring relationships.
                  </p>
                  <ul className="service-list space-y-[0.5vw]">
                    <li>Media Relations & Outreach</li>
                    <li>Crisis Communication & Management</li>
                    <li>Event PR & Launches</li>
                    <li>Influencer Collaborations</li>
                    <li>Reputation Building & Management</li>
                    <li>Press Release Crafting & Distribution</li>
                    <li>Media Training & Workshops</li>
                  </ul>
                </div>
                <div className="entree space-y-[2vw]">
                  <h3 className="h3 text-76 space-grotesk leading-[1.2] w-[60%]">Audio <br /> Visual</h3>
                  <p className="text-22">
                    Step into the realm of compelling storytelling. We believe
                    in the power of sight and sound to evoke emotions and drive
                    actions.
                  </p>
                  <ul className="service-list space-y-[0.5vw]">
                    <li>Brand & Corporate Films</li>
                    <li>Product Explainer Videos</li>
                    <li>Podcasts & Audio Content</li>
                    <li>Event Coverage & Live Streaming</li>
                    <li>Animation & Motion Graphics</li>
                    <li>Sound Design & Voiceovers</li>
                    <li>Interactive Video Content</li>
                  </ul>
                </div>
                <div className="entree space-y-[2vw]">
                  <h3 className="h3 text-76 space-grotesk leading-[1.2] w-[60%]">Digital <br /> Marketing</h3>
                  <p className="text-22">
                    Embark on a digital journey where innovation meets impact.
                    Our Digital Marketing services are tailored to navigate the
                    ever-evolving online landscape.
                  </p>
                  <ul className="service-list space-y-[0.5vw]">
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Paid Media & PPC Campaigns</li>
                    <li>Social Media Management & Strategy</li>
                    <li>Content Marketing & Blogging</li>
                    <li>Email Marketing Campaigns</li>
                    <li>Affiliate & Influencer Marketing</li>
                    <li>Analytics & Performance Tracking</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="imgs w-[45%] relative">
              <div className="puces flex items-center">
                <ul className="flex items-center">
                  <li className="toSlide relative">
                    <div></div>
                  </li>
                  <li className="toSlide relative">
                    <div></div>
                  </li>
                  <li className="toSlide relative">
                    <div></div>
                  </li>
                  <li className="toSlide relative">
                    <div></div>
                  </li>
                </ul>
                <div className="bubble relative">
                  <div className="cercle flex items-center">
                    <div className="lesImgs flex">
                      <img
                        className="cover"
                        src="/images/service/s-1-small.png"
                        alt="Service Image"
                      />
                      <img
                        className="cover"
                        src="/images/service/s-2-small.png"
                        alt="Service Image"
                      />
                      <img
                        className="cover"
                        src="/images/service/s-3-small.png"
                        alt="Service Image"
                      />
                      <img
                        className="cover"
                        src="/images/service/s-4-small.png"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="leCarou">
                <div className="innerImg">
                  <div className="img">
                    <img
                      className="cover"
                      src="/images/service/s-1.png"
                      alt="Service Image"
                    />
                  </div>
                </div>
                <div className="innerImg">
                  <div className="img">
                    <img
                      className="cover"
                      src="/images/service/s-2.png"
                      alt="Service Image"
                    />
                  </div>
                </div>
                <div className="innerImg">
                  <div className="img">
                    <img
                      className="cover"
                      src="/images/service/s-3.png"
                      alt="Service Image"
                    />
                  </div>
                </div>
                <div className="innerImg">
                  <div className="img">
                    <img
                      className="cover"
                      src="/images/service/s-4.png"
                      alt="Service Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCarousel;
