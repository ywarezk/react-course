
const myNumberArray : Array<number> = [];

// myNumberArray.push('hello'); //this is error

myNumberArray.push(10);

const myNumberStringArray : Array<string | number> = []
myNumberStringArray.push(10);
myNumberStringArray.push('dgsdfg');

const myAnyArray : any[] = [];
const myStringArray2 : string[] = ['hello', 'sadf'];

let now : Date = new Date();
// now = 10;

for (const item of myStringArray2) {
    console.log(item);
}

