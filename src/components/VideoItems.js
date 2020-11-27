import React from 'react';
import VideoCard from './VideoCard';

class VideoItems extends React.Component{

    render(){
    const listOfVideo = this.props.videos.map(video=>{
            return <VideoCard key={video.id.videoId} video = {video} onVideoSelect = {this.props.onVideoSelect}/>
        })

        return <div>{listOfVideo}</div>
    }
}

export default VideoItems;