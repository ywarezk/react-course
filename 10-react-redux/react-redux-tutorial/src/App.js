import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {connect} from 'react-redux';
import {requestTasksFromServer} from './redux/actions';

class App extends Component {
    componentDidMount() {
        // activate the async action
        this.props.ourAsyncAction();
    }

    render() {
        return (
            <div className="App">
            <TodoList />
            <TodoForm />
            </div>
        );
    }
}



export default connect(
    null, 
    function mapDispatchToProps(dispatch) {
        return {
            ourAsyncAction: () => dispatch(requestTasksFromServer())
        }
    }
)(App);
