import React from 'react';

class VideoDetails extends React.Component{

    
    render(){
        console.log(this.props.selectedVideo);
        if(!this.props.selectedVideo){
            return <div>loading..</div>
        }

        return(
            <div>
                <div>
                <img src={this.props.selectedVideo.snippet.thumbnails.medium.url} alt=""/>
                </div>
                <div>
                {this.props.selectedVideo.snippet.title}
                </div>
            </div>
        )
    }
}

export default VideoDetails;