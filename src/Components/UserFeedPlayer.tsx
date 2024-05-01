import { useEffect, useRef } from "react";

const UserFeedPlayer : React.FC<{stream?: MediaStream}> = ({stream}) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if(videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    return (
        <video
            ref={videoRef}
            style={{ width: '300px', height: '200px'}}
            muted={true}
            autoPlay
        />
    )
}

export default UserFeedPlayer;