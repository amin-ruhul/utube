import React from 'react';

class VideoDetails extends React.Component{

    
    render(){
        console.log(this.props.selectedVideo);
        if(!this.props.selectedVideo){
            return <div></div>
        }
        const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
        return(
            <div>
                <div>
                    <iframe src={videoSrc} title='video player'/>
                </div>
                <div>
                    <h4>{this.props.selectedVideo.snippet.title}</h4>
                    <p>{this.props.selectedVideo.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoDetails;