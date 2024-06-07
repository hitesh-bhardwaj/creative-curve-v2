const VideoPlayer = ({src, poster}) => {
    return (
        <>
            <video 
                className="w-full h-full" 
                loop 
                playsInline
                poster={poster}
                loading="lazy"
            >
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </>
    )
}

export default VideoPlayer;