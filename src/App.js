import React from 'react'
import './app.css';
import Search from './components/Search';
import VideoItems from './components/VideoItems';
import VideoDetails from './components/VideoDetails';
import youtube from './apis/youtube';


class App extends React.Component {

  state = { videos:[] }

  onSubmit = async (term) =>{
   const response =  await youtube.get('/search',{
      params:{
        q:term 
      }
    });

    //console.log(response.data.items);
    this.setState({ videos: response.data.items})
  }
  render(){
    return (
      <div className="App">
        <Search onSubmit = {this.onSubmit}/>
        <div className='content-body'>
          <VideoDetails/>
          <VideoItems videos = {this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
