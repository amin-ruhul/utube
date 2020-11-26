import React from 'react';
import VideoCard from './VideoCard';

class VideoItems extends React.Component{

    render(){
        return(
            <div> 
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        )
    }
}

export default VideoItems;