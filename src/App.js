import React from 'react'
import './app.css';
import Search from './components/Search';
import VideoItems from './components/VideoItems';
import VideoDetails from './components/VideoDetails';
import youtube from './apis/youtube';


class App extends React.Component {

  state = { videos:[] ,selectedVideo : null }

  onSubmit = async (term) =>{
   const response =  await youtube.get('/search',{
      params:{
        q:term 
      }
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo:response.data.items[0]
    })
  }

  onVideoSelect = (video) =>{
    this.setState({ selectedVideo: video })
  }

  render(){
    return (
      <div className="App">
        <Search onSubmit = {this.onSubmit}/>
        <div className='content-body'>
          <div className='video-det'>
            <VideoDetails selectedVideo = {this.state.selectedVideo}/>
          </div> 
          <div className='video-item'>
              <VideoItems videos = {this.state.videos} onVideoSelect = {this.onVideoSelect}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
