import React from "react";
import Comment from "./Comment";

class TweetContainer extends React.Component {
    
     constructor(props) {
        super(props);

        this.state = { 
            comment:"",
            commentsList: [],
            id:1
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
    handleChange (event) {
        this.setState({ comment: event.target.value })
      }
    
    handleSubmit (event) {
        event.preventDefault();
        // using event.target.value did not work. I dont know why. be good to try!!!
        if(this.state.comment === '' || this.state.comment == null){ return; }  
        var newComment = <Comment key={this.state.id} comment={this.state.comment}/>
        // why am I slicing here agian?
        var newComments = this.state.commentsList.slice();

        newComments.push(newComment)
        this.setState({
            comment:'',
            commentsList: newComments,
            id: this.state.id + 1
        });
    }
      
    render() { 

        const divStyle = {
            'display':'flex', 
            'flexDirection': 'column', 
            'margin': '.5rem', 
            'justifyCntent': 
            'center',
            'alignItems': 'center' 
        }

        return ( 
            <div style={divStyle}>
                <h1>{this.props.status}</h1>

                <form>
                    <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.comment} />
                    <button onClick={(e) => this.handleSubmit(e)} >Post</button>
                </form>
                {this.state.commentsList}                
            </div> 
        );
    }
}
 
export default TweetContainer;