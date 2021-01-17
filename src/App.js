import React from "react";
import TweetContainer from'./Components/TweetContainer';
import './App.css';

function App() {
  const divstyle = {
      'display': 'flex',
      'flexDirection': 'column',
      'justifyContent': 'center',
      'alignItems': 'center'
  };

  return (

    <div style={divstyle}>
      <TweetContainer status="My tweets" />
    </div>
  );
}

export default App;
