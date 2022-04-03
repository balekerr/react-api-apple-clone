import React, { useState, useEffect } from "react";
 import "./YoutubeVideos.css"
function YoutubeVideos() {
const [YouTubeVideos, setVideo] = useState([]);

useEffect(() => {
    fetch(
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBMwBFPQp2ZLPswkrDS443b_6iMACElEH8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
        .then((response) => response.json())
        .then((data) => {
        const YouTubeVideosData = data.items;
        setVideo(YouTubeVideosData)
    });
    }, []);
    console.log(YouTubeVideos);

return (
<div className="allVideosWrapper">
    <div className="container">
        <div className="row  justify-content-center text-center">
        <div className="col-12">
            <div className="title-wraper ">
                Latest Videos <br />
                <br />
            </div>
        </div>
            {YouTubeVideos.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
            <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                </div>
                <div className="videoInfoWrapper">
                    <div className="videoTitle">
                    <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                    </a>
                    </div>
                    <div className="videoDesc">
                    {singleVideo.snippet.description}
                    </div>
                </div>
                </div>
            </div>
            );
            return videoWrapper;
        })}
        </div>
    </div>
</div>
);
}

export default YoutubeVideos;
