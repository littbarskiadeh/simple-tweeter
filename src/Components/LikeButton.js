import React from "react";

class LikeButton extends React.Component {
    state = { 
        counter: 0
     }
    

    handleClick = (e)=>{
        e.preventDefault();
        let counter=this.state.counter;
        counter = counter + 1;
        this.setState({counter: counter})
    }
    render() { 
        return ( 
            <>
            {` `}<button onClick={this.handleClick}>Like</button> {this.state.counter} Likes
            </>
         );
    }
}
 
export default LikeButton;