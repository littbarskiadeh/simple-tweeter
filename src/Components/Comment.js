import React from "react";
import LikeButton from "./LikeButton"
import Timer from "./Timer";

const Comment = (props) => {
    const divStyle = { margin: '0.5rem' }

    return ( 
        <p style={divStyle}>
            <Timer />     
            <strong>{props.comment}</strong>    
            <LikeButton/>
        </p>
    );
}

export default Comment;