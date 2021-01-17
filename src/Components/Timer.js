import React from "react";
import Moment from "react-moment";

class Timer extends React.Component {

    render() { 
        return ( 
            <>
                <Moment format="hh:mm:ss" style={{margin: '15px'}}>
                    {Moment.moment }  
                </Moment>
            </>
         );
    }
}
 
export default Timer;