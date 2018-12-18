/**
 * /todo/:pk
 * display the pk on the component
 */

import React, {Component} from 'react';

export default class Todo extends Component {
    render() {
        return <h1>this should contain the pk {this.props.match.params.pk}</h1>
    }
}