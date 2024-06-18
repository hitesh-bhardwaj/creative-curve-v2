import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const VideoPlayer = ({ src, poster }) => {

  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useGSAP(()=>{
    if(isPlaying){
      gsap.from(".buttonanim",{
        scale:1,
        opacity:0,
        duration:0.5
      })

    }else{
      gsap.to(".buttonanim",{
        scale:0,
        opacity:0,
        duration:0.5
      })

    }
  })
  const toggle = () => {
    if (isPlaying) {
      videoRef.current.play();
      
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying); 
  };

  
  

  
 

  return (
   
    <>
      <div className="flex justify-center items-center relative " onClick={toggle}>
        <video
          className="w-full h-full group"
          loop
          ref={videoRef}
          playsInline
          poster={poster}
          loading="lazy"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className={`absolute rounded-full border backdrop-blur-lg w-[10vw] h-[10vw] buttonanim`}
          
          
        >
          <div className={`flex w-full h-full justify-center items-center gap-[0.5vw] ${isPlaying ? "block" : "hidden"}`}>
            <span className="w-[2vw]">
              <img src="/images/icons/play.svg" alt="play-icon" />
            </span>
            <p className="text-24 text-white uppercase">Play</p>
          </div>
          <div className={`flex w-full h-full justify-center items-center gap-[0.5vw] ${isPlaying ? "hidden" : "block"}`}>
            <span className="w-[2vw]">
              <img src="/images/icons/pause-icon.svg" alt="pause-icon" />
            </span>
            <p className="text-24 text-white uppercase">Pause</p>
          </div>
        </button>
      </div>
    </>
  );
};

export default VideoPlayer;
