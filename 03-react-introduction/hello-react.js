
const helloWorld = React.createElement('h1', null, 
    React.createElement('span', null, 'hello world with span'));

const div = React.createElement('div', null, helloWorld)

// JSX

const divHelloWorld = <div id="stam"><h1><span>hello jsx from div</span></h1></div>

ReactDOM.render(divHelloWorld, document.getElementById('container'));