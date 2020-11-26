import React from 'react'
import Search from './components/Search';


class App extends React.Component {

  onSubmit = (term) =>{
    console.log(term);
  }
  render(){
    return (
      <div className="App">
        <Search onSubmit = {this.onSubmit}/>
      </div>
    );
  }
}

export default App;
