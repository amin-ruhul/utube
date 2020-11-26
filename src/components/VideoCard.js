import React from 'react';
import './videoCard.css';


class VideoCard extends React.Component{
    render(){
        return(
            <div className = 'video-card'>
            <img src={this.props.video.snippet.thumbnails.medium.url} alt=""/>
            {this.props.video.snippet.title}
            
            </div>
        )
    }
}

export default VideoCard;