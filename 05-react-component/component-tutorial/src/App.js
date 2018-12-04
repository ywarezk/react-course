import React, { Component } from 'react';
import './App.css';
import Child from './components/Child';
import IlyaForm from './components/IlyaForm';

class App extends Component {
  childRef: createRef<Child>;

  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  componentDidMount() {
    // because our ref is not initialized
    // i want to redraw the component
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <Child 
          ref={this.childRef}
          message="hello from parent" 
          obj={ {hello: 'world'} } />
        <IlyaForm />

        <br/>
        <br/>
        <h1>{this.childRef.current ? this.childRef.current.sayHello() : null}</h1>
      </div>
    );
  }
}

export default App;
