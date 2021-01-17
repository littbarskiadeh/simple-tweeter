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
      <TweetContainer status="Stop COVID-19, Take-out Only!" />
      <TweetContainer status="At home watching Youtube"/>
      <TweetContainer status="I need sleep now" />
    </div>
  );
}

export default App;
