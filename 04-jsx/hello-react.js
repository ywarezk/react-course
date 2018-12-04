
// JSX

// import React, {Fragment} from 'react';

// for => htmlFor
// aria-label => aria-label

const rand = Math.random();

function myAlert(msg) {
    alert(msg);
}

const divHelloWorld = ( // React.createElement
<>
    <div id="stam" className="class-this" data-stam="hello" >
        <h1>
            hello world {rand}
        </h1>
    </div>
    <div>
        <h1>hello world2 { [<span key="1">span1</span>, <span key="2">span2</span>] }</h1>

        {
            rand > 0.5 ? <h2>second message</h2> : null
        }

        {
            // for(let item of [1,2,3]) {

            // }

            // Array.prototype.filter, map

            [1,2,3].filter((item) => item % 2 === 0)
        }

        {
            [1,2,3].map((item) => <h1>{item}</h1>)
        }

        {
            (function() {
                const todoList = ['buy tofu', 'buy soya', 'walk piglet'];
                const todoJsx = [];
                for (let item of todoList) {
                    todoJsx.push(<h1>{item}</h1>);
                }
                return todoJsx;
            })()
        }

        <button onClick={() => myAlert('hello from click me with params')}>
            Click me
        </button>
    </div>
</>
);

// when using JSX we have to have React


function Hello(props) {
    return (
        <div>
            <h1>hello from function</h1>
            <h2>
                {props.message}
            </h2>
            <h2>
                {props.obj.foo}
            </h2>
        </div>
    )
}

class Hello2 extends React.Component {
    render() {
        return (
            <h1>
                hello from class
            </h1>
        )
    }
}

// ReactDOM.render(<Hello message="hello world" obj={ {foo: 'bar'} } />, document.getElementById('container'));
ReactDOM.render(<Hello2 />, document.getElementById('container'));