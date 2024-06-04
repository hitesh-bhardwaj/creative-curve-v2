import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import lottie from 'lottie-web';

gsap.registerPlugin(ScrollTrigger);

export default function Test2() {
  useEffect(() => {
    const LottieScrollTrigger = (vars) => {
      let playhead = { frame: vars.startFrameOffset || 0 },
        target = gsap.utils.toArray(vars.target)[0],
        speeds = { slow: '+=2000', medium: '+=1000', fast: '+=500' },
        st = {
          trigger: target,
          pin: true,
          start: 'top top',
          end: speeds[vars.speed] || '+=1000',
          scrub: 1,
        },
        ctx = gsap.context && gsap.context(),
        animation = lottie.loadAnimation({
          container: target,
          renderer: vars.renderer || 'svg',
          loop: false,
          autoplay: false,
          path: vars.path,
          rendererSettings: vars.rendererSettings || {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }),
        frameAnimation;
      for (let p in vars) {
        // let users override the ScrollTrigger defaults
        st[p] = vars[p];
      }
      frameAnimation = vars.timeline || gsap.timeline({ scrollTrigger: st });
      if (vars.timeline && !vars.timeline.vars.scrollTrigger) {
        // if the user passed in a timeline that didn't have a ScrollTrigger attached, create one.
        st.animation = frameAnimation;
        ScrollTrigger.create(st);
      }
      animation.addEventListener('DOMLoaded', function () {
        let createTween = function () {
          animation.goToAndStop(playhead.frame, true);
          frameAnimation.to(
            playhead,
            {
              frame: animation.totalFrames - 1 - (vars.endFrameOffset || 0),
              ease: 'none',
              duration: frameAnimation.duration() || 1,
              onUpdate: () => {
                animation.goToAndStop(playhead.frame, true);
              },
            },
            0
          );
          return () => animation.destroy && animation.destroy();
        };
        ctx && ctx.add ? ctx.add(createTween) : createTween();
        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      });
      animation.frameAnimation = frameAnimation;
      return animation;
    };

    const lottieInstance = LottieScrollTrigger({
      target: '#animationWindow',
      path: '/lottie.json',
      speed: 'slow',
      scrub: 2,
      target: "#lottieContainer",
      pin: true
    });

    return () => {
      if (lottieInstance) {
        lottieInstance.destroy();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
    <div className="h-screen w-screen bg-white" id="lottieContainer">
      <div id="animationWindow"></div>
    </div>
    <div className='h-screen bg-gray-200 w-full'></div>
    </>
    
  );
}
