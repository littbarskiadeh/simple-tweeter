import React from "react";
import LikeButton from "./LikeButton"
import Timer from "./Timer";


class Comment extends React.Component {
    
    render() { 
        const divStyle = {
            // padding:'5px', 
            margin: '0.5rem',
        }

        return ( 
            <p style={divStyle}>
                <Timer />
                <strong>{this.props.comment}</strong>
                <LikeButton/>
            </p>
         );
    }
}
 
export default Comment;