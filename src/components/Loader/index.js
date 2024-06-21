import gsap from "gsap";
import styles from './styles.module.css';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Loader() {

    useGSAP(() => {
            const tl = gsap.timeline();

            if(globalThis.innerWidth>1023){
                tl.to('.preloader', {
                    duration: 1,
                    delay: 0,
                    boxShadow: `inset 0 0 0 49.5vw rgb(0, 0, 0)`,
                    onComplete: () => {
                         gsap.set(".bar", {
                            opacity: 1,
                            visibility: 'visible'
                        }), gsap.set(".dot", {
                            opacity: 1,
                            visibility: 'visible'
                        }), gsap.set('.icon', {
                            opacity: 1,
                            visibility: 'visible'
                        }), gsap.set('.overlay', {
                            backgroundColor: '#000'
                        }), gsap.set('.preloader', {
                            boxShadow: `inset 0 0 0 0px rgb(0, 0, 0)`
                        });
                    }
                });
            } else {
                tl.to('.preloader', {
                    duration: 1,
                    delay: 0,
                    boxShadow: `inset 0 0 0 49.5vh rgb(0, 0, 0)`,
                    onComplete: () => {
                         gsap.set(".bar", {
                            opacity: 1,
                            visibility: 'visible'
                        }), gsap.set(".dot", {
                            opacity: 1,
                            visibility: 'visible'
                        }), gsap.set('.icon', {
                            opacity: 1,
                            visibility: 'visible'
                        }), gsap.set('.overlay', {
                            backgroundColor: '#000'
                        }), gsap.set('.preloader', {
                            boxShadow: `inset 0 0 0 0px rgb(0, 0, 0)`
                        });
                    }
                });
            }
            
             tl.fromTo('.icon', {
                x: "100%"
            }, {
                duration: 1,
                x: "50%",
                ease: "power2.inOut"
            }); tl.fromTo(".bar", {
                x: "100%"
            }, {
                duration: 1,
                x: "150%",
                ease: "power2.inOut"
            }, "-=1");
            if(globalThis.innerWidth>1023){
                tl.to(".dot", {
                    duration: 1,
                    x: "19vw",
                    ease: "power2.inOut"
                }, "-=1");
            } else {
                tl.to(".dot", {
                    duration: 1,
                    x: "40vw",
                    ease: "power2.inOut"
                }, "-=1");
            }
            tl.to(".dot", {
                duration: 1,
                scaleX: 1.14,
                scaleY: 7.6,
                y: 0,
                x: 0,
                ease: "power2.inOut"
            });
            tl.to(".bar", {
                duration: 1,
                x: "100%",
                ease: "power2.inOut"
            }, "-=1");
            tl.to('.icon', {
                duration: 1,
                x: "100%",
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.to('.bar, .icon',{
                        opacity: 0,
                        visibility: 'hidden',
                    });
                }
            }, "-=1");
            tl.to(".dot", {
                duration: 1,
                scaleX: 140,
                scaleY: 140,
                y: '70vh',
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.set(".overlay", {
                        backgroundColor: '#fff',
                    });
                }
            });
            tl.to('.overlay', {
                onComplete: () => {
                    gsap.to('.overlay',{
                        display: 'none',
                        opacity: 0,
                        visibility: 'hidden',
                    });
                }
            }, "-=0");
    });

    return(
        <>
         <div className={`${styles.overlay} overlay`}>
            <div className={`${styles.preloader} preloader`}>
                <div className={`${styles.logo} logo`}>
                    <div className={`${styles.bar} bar`} />
                    <p className={`${styles.icon} icon`}>
                        Creative Curve
                    </p>
                    <div className={`${styles.dot} dot`}/>
                </div>
            </div>
        </div>   
        </>
    )
}