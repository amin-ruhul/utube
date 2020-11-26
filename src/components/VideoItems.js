import React from 'react';
import VideoCard from './VideoCard';

class VideoItems extends React.Component{

    render(){
    const listOfVideo = this.props.videos.map(video=>{
            return <VideoCard video = {video}/>
        })

        return <div>{listOfVideo}</div>
    }
}

export default VideoItems;