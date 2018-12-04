import React, { Component } from 'react';
import './App.css';
import Child from './components/Child';
import IlyaForm from './components/IlyaForm';

type Prop = {

}

type State = {

}

class App extends Component<Prop, State> {
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

  shouldComponentUpdate(nextProps: Prop, nextState: State): boolean {
    // return true // 
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    
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
