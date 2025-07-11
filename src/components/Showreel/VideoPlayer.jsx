import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const VideoPlayer = ({ isOpen, onClose, videoSrc }) => {
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      gsap.to(modalRef.current, {
        autoAlpha: 1,
        zIndex: 910,
        duration: 0.5,
      });
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      gsap.to(modalRef.current, {
        autoAlpha: 0,
        zIndex: -1,
        duration: 0.5,
      });
      videoRef.current.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((currentTime / duration) * 100);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  return (
    <div
      data-cursor-color="#fff"
      ref={modalRef}
      className="modal-fixed top-0 left-0 w-full h-full flex items-center justify-center opacity-0 z-[-1] "
      onClick={onClose}
    >
      <div className="relative w-full h-full bg-black" onClick={handleVideoClick}>
        <video
          data-cursor-exclusion={false}
          data-cursor-background-image="/images/icons/close-cursor.svg"
          data-cursor-size="100px"
          ref={videoRef}
          src={videoSrc}
          loop
          className="w-full h-full object-cover tablet:object-contain mobile:object-contain"
        />
        <div
          className="relative bottom-[10%] w-[70%] p-4 mx-auto tablet:w-[90%] mobile:w-full mobile:px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between w-full">
            <button onClick={handlePlayPause} className="text-white uppercase w-[7.5%] tablet:w-[14%] mobile:w-[20%] mobile:text-[16px]">
              {isPlaying ? "Pause" : "Play"}
            </button>
            <div
              className="h-[8px] rounded-[40px] overflow-hidden w-[85%] mobile:w-[60%] bg-slate-800 mt-[2px] cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-2 bg-white rounded-[40px]"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
            <button onClick={handleMuteUnmute} className="text-white uppercase w-[7.5%] tablet:w-[14%] mobile:w-[20%] mobile:text-[16px]">
              {isMuted ? "Mute" : "Unmute"}
            </button>
          </div>
        </div>
        <div className="w-[8vw] h-[8vw] mobile:w-[10vw] hidden tablet:block mobile:block absolute right-[7%] top-[5%] mobile:right-[5%] mobile:top-[5%]" onClick={onClose}><img src="/images/icons/close-cursor.svg" alt="close-cursor"/></div>

      </div>
    </div>
  );
};

export default VideoPlayer;
