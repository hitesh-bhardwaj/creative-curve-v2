import { useRef, useState } from "react";

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

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
      <div
        className="flex justify-center items-center relative"
        onClick={toggle}
      >
        <video
          className="w-full h-full"
          loop
          ref={videoRef}
          playsInline
          poster={poster}
          loading="lazy"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {isPlaying ? 
        (
          <button
          className={`absolute rounded-full border bg-black/10 backdrop-blur-lg w-[10vw] h-[10vw] buttonanim mobile:w-[20vw] mobile:h-[20vw] tablet:w-[15vw] tablet:h-[15vw]`}
        >
          <div
            className="flex w-full h-full justify-center items-center gap-[0.5vw] mobile:gap-[1.5vw] tablet:gap-[1vw]"
          >
            <span className="w-[2vw] mobile:w-[4vw] tablet:w-[3vw]">
              <img src="/images/icons/play.svg" alt="play-icon" />
            </span>
            <p className="text-24 text-white uppercase mobile:text-[3.5vw]">Play</p>
          </div>
        </button>
        ) : (
            <button className={`absolute rounded-full border bg-black/10 backdrop-blur-lg w-[10vw] h-[10vw] buttonanim opacity-0 hover:opacity-100 transition-all duration-1000 mobile:w-[20vw] mobile:h-[20vw] tablet:w-[15vw] tablet:h-[15vw]`}>
            <div
                className="flex w-full h-full justify-center items-center gap-[0.5vw] mobile:gap-[1.5vw] tablet:gap-[1vw]">
              <span className="w-[2vw] mobile:w-[4vw] tablet:w-[3vw]">
                <img src="/images/icons/pause-icon.svg" alt="pause-icon" />
              </span>
              <p className="text-24 text-white uppercase mobile:text-[3.5vw]">Pause</p>
            </div>
          </button>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
