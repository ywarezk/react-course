// @flow 

let myNumber: number = 10;
// myNumber = 'dfgsdfg';

let myString : string = 'asdf';

let myArray: Array<number> = [];
myArray.push(10);

let myStringArray: string[] = [];

type State = {
    isLoading: boolean
}

function stam(maybeString: mixed) {
    if (typeof maybeString === 'string') {
        console.log(maybeString.length);
    }
}

