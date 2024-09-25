import React from 'react';
import video from '/videoplayback.mp4'
import * as style1 from './VideoPlayer.css'
const VideoPlayer = () => {
    return (
        <div className="video-wrapper">
        <video 
            controls 
            className="video-player" // Добавьте CSS-класс
            src={video} // Замените на ваш URL
            type="video/mp4"
        >
            Ваш браузер не поддерживает видео.
        </video>
    </div>
    );
};

export default VideoPlayer;