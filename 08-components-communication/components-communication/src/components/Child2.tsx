import * as React from 'react';
import MessageService from '../services/message';

interface IProps {
    message: string
}

interface IState {
    messageFromService: string;
}

export default class Child2 extends React.Component<IProps, IState> {
    public state = {
        messageFromService: ''
    }

    public componentDidMount() {
        MessageService.getInstance().listen((msg: string) => {
            this.setState({
                messageFromService: msg
            })
        })
    }

    public render() {
        return (
            <div>
                <h1>Hello from child2 {this.props.message}</h1>
                <h1>{this.state.messageFromService}</h1>
            </div>
            
        );
    }
}