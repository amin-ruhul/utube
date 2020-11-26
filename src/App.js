import React from 'react'
import './app.css';
import Search from './components/Search';
import VideoItems from './components/VideoItems';
import VideoDetails from './components/VideoDetails';


class App extends React.Component {

  onSubmit = (term) =>{
    console.log(term);
  }
  render(){
    return (
      <div className="App">
        <Search onSubmit = {this.onSubmit}/>
        <div className='content-body'>
          <VideoDetails/>
          <VideoItems/>
        </div>
      </div>
    );
  }
}

export default App;
