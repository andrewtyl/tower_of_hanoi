import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tower from './Tower';

function App() {
  return (
    <div className="App">
      <div classname="intro">
        <h1>Tower Of Hanoi</h1>
        <h2>Created by Andrew Jessen-Tyler</h2>
        <p>Click on one ring on top of a stack to move it. It can be moved to one of the other two stacks as long as it is smaller than the ring it is going to be put on. The goal is to get all the rings from the far left stack to the far right stack. Give it a try!</p>
      </div>
      <Tower/>
    </div>
  );
}

export default App;
