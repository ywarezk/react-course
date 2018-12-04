import * as React from 'react';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

interface IState {
  messageFromChild1: string;
}

class App extends React.Component<any, IState> {
  public state = {
    messageFromChild1: ''
  }

  /**
   * we want to pass the message from child1 to child2
   */
  public passMessage = (messageFromChild1: string) => {
    this.setState({
      // messageFromChild1: messageFromChild1
      messageFromChild1
    })
  }

  public render() {
    return (
      <div className="App">
        <Child1 cb={this.passMessage} />
        <Child2 message={this.state.messageFromChild1} />
      </div>
    );
  }
}

export default App;
