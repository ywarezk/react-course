import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {
    render() {
        const todos = this.props.todosFromServer;
        // this.props.addTaskWrappedInDispatch('buy saten');
        return (
            <ul>
                {
                    todos.map((todoItem) => {
                        return <li key={todoItem.id}>{todoItem.title}</li>
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        todosArray: state.todo.todos,
        todosFromServer: state.todo.todosFromServer
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addTaskWrappedInDispatch: (item) => {
//             return dispatch(addTask(item)) 
//         }
//     }
// }

export default connect(
    mapStateToProps,
    null
    // mapDispatchToProps
    // mapStateToProps - take a part of the state that the component cares about
    // mapDispatchToProps - to give us the store.dispatch                 addTask() => dispatch(addTask())
)(TodoList)