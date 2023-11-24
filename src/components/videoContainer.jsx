import { useState, useRef } from "react"
import React from "react"

export function VideoContainer() {

    const [videoSrc, setVideoSrc] = useState("front-vid/1.mp4");
    const [activeVideo, setActiveVideo] = useState(1);
    const videoRef = useRef(null);

    function changeVideoSrc(value) {
        setVideoSrc(`front-vid/${value}.mp4`)
        setActiveVideo(value);
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }

    return (
        <section className="videoContainer">
            <div className="content">
                <h3>旅游是一种信仰</h3>
                <p>和我们一起去远方,寻找诗和梦想</p>
                <a href="#packages" className="btn">查看路线</a>
                <a href="#book" className="btn">私人订制</a>
            </div>
        
            <div className="controls">
                <span 
                    className={`vid-btn ${activeVideo === 1 ? 'active' : ''}`} 
                    onClick={() => changeVideoSrc(1)}>
                </span>
                <span 
                    className={`vid-btn ${activeVideo === 2 ? 'active' : ''}`} 
                    onClick={() => changeVideoSrc(2)}>
                </span>
                <span 
                    className={`vid-btn ${activeVideo === 3 ? 'active' : ''}`} 
                    onClick={() => changeVideoSrc(3)}>
                </span>
                <span 
                    className={`vid-btn ${activeVideo === 4 ? 'active' : ''}`} 
                    onClick={() => changeVideoSrc(4)}>
                </span>
            </div>
        
            <div className="video">                
                <video ref={videoRef} autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}