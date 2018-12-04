// @flow

import React, {Component} from 'react';

type Props = {
    //message?: string
    message: string,
    obj: {[key: string]: string}
};

type State = {
    isMessageShow: boolean
};

export default class Child extends Component<Props, State> {
    state = {
        isMessageShow: false
    }

    // constructor(props: Props) {
    //     super(props);

    //     // this.toggleMessage = this.toggleMessage.bind(this);
    // }

    // toggleMessage: () => void
    toggleMessage = () => {
        // console.log(this);
        // this.setState({
        //     isMessageShow: true // !this.state.isMessageShow // Not Good
        // });

        this.setState((currentState) => {
            return {
                isMessageShow: !currentState.isMessageShow
            }
        })
    }

    sayHello = (): string => {
        return 'hello parent ref';
    }

    render() {
        const {obj} = this.props // {message: 'dfgsdfg'}
        const message = this.props.message;
        return (
            <>
                <h1>Hello from child {message}</h1>
                <h1>Hello from child {this.props.message}</h1>
                <h1>Hello from child {obj.hello}</h1>
                {
                    this.state.isMessageShow ? <h1>This will show when state allows</h1> : null
                }
                <button onClick={this.toggleMessage} >Show message</button>            
            </>
        )
    }
}