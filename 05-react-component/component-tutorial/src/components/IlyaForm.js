// @flow

import React, {Component} from 'react';
import type {createRef} from 'react';

type State = {
    helloIlya: string
};

export default class IlyaForm extends Component<{}, State> {
    idElementRef: createRef<any>;
    state = {
        helloIlya: 'hello ilya'
    }

    constructor(props: any) {
        super(props);

        this.idElementRef = React.createRef();
    }

    handleInputChange = (event: any) => {
        const helloText = event.target.value;
        this.setState({
            helloIlya: helloText.toUpperCase()
        })
    }

    handleSubmit = (event: any) => {
        const idValue = this.idElementRef.current.value;
        console.log(idValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input                     
                    value={this.state.helloIlya} 
                    onChange={this.handleInputChange} 
                    type="text" name="hello-ilya" />

                <input
                    ref={this.idElementRef}
                    type="number"
                    name="id"
                    />
                <button type="submit">Submit</button>
            </form>

        )
    }
}