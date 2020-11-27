import React from 'react';
import './search.css';

class Search extends React.Component{

    state ={ term: null }


    handelChange = (event) =>{
        this.setState({ term: event.target.value });
    }

    handelSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className='search'>
                <form action="" onSubmit={this.handelSubmit}>
                    <input 
                    placeholder="Enter term to find video"
                    onChange = {this.handelChange}
                    type="text"/>
                </form>
            </div>
        )
    }
}

export default Search;