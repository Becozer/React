import React, { Component } from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/Function Click'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

class App extends Component {
  render() {
    return (
    <div className="App">
      <UserGreeting />
    {/* <ParentComponent />*/}
      {/*<EventBind />*/}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/*<Counter /> */}
      {/*<Message /> */}
      { /*<Greet name="bruce" heroname="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="clark" heroname="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="diana" heroname="Wonder woman">
  </Greet> */}
      {/*<Greet name="bruce" heroname="Batman" />
      <Welcome name="clark" heroname="Superman" />*/}
      {/*<Welcome name="diana" heroname="Wonder woman" /> */}
      {/* <Hello /> */}
    </div>
  );
}
}

export default App;
