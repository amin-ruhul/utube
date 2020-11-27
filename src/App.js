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

    this.setState({ videos: response.data.items})
  }

  onVideoSelect = (video) =>{
    this.setState({ selectedVideo: video })
  }

  render(){
    return (
      <div className="App">
        <Search onSubmit = {this.onSubmit}/>
        <div className='content-body'>
          <VideoDetails selectedVideo = {this.state.selectedVideo}/>
          <VideoItems videos = {this.state.videos} onVideoSelect = {this.onVideoSelect}/>
        </div>
      </div>
    );
  }
}

export default App;
