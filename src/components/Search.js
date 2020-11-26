import React from 'react';

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
            <div>
                <form action="" onSubmit={this.handelSubmit}>
                    <input 
                    onChange = {this.handelChange}
                    type="text"/>
                </form>
            </div>
        )
    }
}

export default Search;