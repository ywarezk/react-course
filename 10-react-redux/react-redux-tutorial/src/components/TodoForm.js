import React, {Component} from 'react';
import {addTask} from '../redux/actions';
import {connect} from 'react-redux';

class TodoForm extends Component {
    state = {
        todoItem: ''
    }

    handleSubmit = (event) => {
        this.props.addTaskWrappedInDispatch(this.state.todoItem);
        event.preventDefault();
    }

    updateTodoItemState = (event) => {
        const item = event.target.value;
        this.setState({
            todoItem: item
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.todoItem} type="text" name="add-task" onChange={this.updateTodoItemState} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addTaskWrappedInDispatch: (item) => {
            return dispatch(addTask(item)) 
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TodoForm);