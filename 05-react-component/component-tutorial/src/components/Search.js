import React, {Component} from 'react';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.userInputDataStream = new Subject();
    }

    componentDidMount() {
        this.userInputDataStream.pipe(
            debounceTime(1000),
            distinctUntilChanged()
        )
        .subscribe((searchString) => {
            fetch(`https://nztodo.herokuapp.com/api/task/?search=${searchString}&format=json`);
        })
    }

    sendSearch = (event) => {
        const searchString = event.target.value;
        this.userInputDataStream.next(searchString);
    }

    render() {
        return (<form>
            <label>search</label>
            <input type="search" onChange={this.sendSearch} />
        </form>);
    }
}