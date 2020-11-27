import React from 'react';
import './videoDetail.css';

class VideoDetails extends React.Component{

    
    render(){
        console.log(this.props.selectedVideo);
        if(!this.props.selectedVideo){
            return <div></div>
        }
        const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
        return(
            <div className='container'>
                <div className='video-player'>
                    <iframe src={videoSrc} title='video player'/>
                </div>
                <div className='video-detail'>
                    <h4>{this.props.selectedVideo.snippet.title}</h4>
                    <p>{this.props.selectedVideo.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoDetails;