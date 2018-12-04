import * as React from 'react';
import MessageService from '../services/message';

interface IProps {
    cb: (msg: string) => void
}

export default class Child1 extends React.Component<IProps> {
    public render() {
        return (
            <>
                <h1>Hello from child1</h1>
                <button onClick={this.handleClick}>pass to parent</button>
                <button onClick={this.passThroughService}>pass through Service</button>
            </>
        );
    }

    private handleClick = () => {
        this.props.cb('hello from child1');
    }

    private passThroughService = () => {
        MessageService.getInstance().send('hello from child 1 passed through service')
    }
}