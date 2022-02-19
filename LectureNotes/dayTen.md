# **SE 319 - DAY TEN: | 02/18/2022 |**

## **IN-CLASS QUIZ REVIEW:**
* How is memory allocated by your program?
    * Stack - temporary data; function parameters, return addresses, local variables.
    * Heap - dynamically allocated memory.
    * Data - global variables.
    * Text - program code.
* What does it mean when we say Node.js uses asychronous programming?
    * Runs single-threaded, non-blocking.
* What is the difference between an interpreter and a compiler?
    * The interpreter needs less amount of time to analyze the source code, but the overall execution time is slower.
* A socket contains connection information between two computers. What information does the socket actually store?
    * The IP address and port.
* What is the correct method of obtaining the value from an element in JavaScript?
    * document.getElementById("id_name").value
* What is a callback in JavaScript?
    * A callback is an asynchronous equivalent for a function.
    * A callback is a technique in which a method calls back the caller method.
* In the Model-View-Controller architecture, where can we expect Server-side Node.js programs to reside?
    * The Controller.
* Which of the following is / are true for Virtual DOM (Document Object Model) in React?
    * It re-renders the virtual tree (view / model) only when the state changes, and only the components that have changed.
    * It is more efficient than original DOM.

---
## **JSX**
* JSX is a syntax extension to JS.
    * JSX allows you to write HTML structure in the same file that contains JS code.
    * JSX helps in making the code easier to understand and debug as it avoids using the JS DOM structures, which are rather complex.
* EX)
``` javascript
const para = <p1> This is a paragraph. </p>;
```
---
## **VIRTUAL DOM OF REACT:**
* A virtual DOM has more efficient re-rendering of the DOM.
* React aims to only re-render the virtual tree of the DOM only when the state changes, and only the components that have changed.

---
## **COMPONENTS:**
* Function components.
* Ex)
``` js
// Does not need to extend React.Component, and does not need to contain the 'render()' function.
function Title()
{
    return (
        <div>
            <h1>This is function component.</h1>
        </div>
    );
}
```
* Class components.
* Ex)
```js
// The class must extend React.Component, and contain the 'render()' function. Class components allow for the possibility of creating more complex components.
class Title extends React.Component {
    render() {
        return (
            <div>
                <h1> This is a class component.</h1>
            </div>
        )
    }
}
```

---

## **STATE:**
* State of a component is an object that holds some data.
* This data influences the output of the component.
* Ex)
```js
class App extends React.Component {
    constructor(){
        // This is how we store some data in state.
        this.state= {
            car: "Toyota", bicycle: "Trek"
        }
    }
    render() {
        return(
        // This is how we access the state properties.
            <div>
                <h1>{this.state.car}</h1>
                <h1>{this.bicycle.bike}</h1>
            </div>
        )
    }
}
```

---
## **PROPS:**
* Props, shorthand for 'properties', allow us to pass arguments or data to components.
* Props are passed to components in the way similar to that of HTML tag attributes.
* React Props are like function arguments in JS and attributes in HTML.
* Ex)
```main.js```
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render (
    // This is how we pass the properties to a component.
    <App carProp="Toyota" bikeProp="Trek"/>, document.getElementById("app")
);
```

```app.js```
```js
class App extends React.Component {
    render() {
        return (
    // This is how we access the properties passed to the component.
            <div>
                <h1>{this.props.carProp}</h1>
                <h1>{this.props.bikeProp}</h1>
            </div>
        );
    }
}
```

---

## **BEYOND REACT.JS:**
* React goes beyond simple UI and has many extensions for complete application support.
* It provides a server-side rendering.
* Supports mobile abb development.
* React Native lets you build mobile apps using only JS.
* Extended with Flux and Redux.
    * Flux is the application architecture that Facebook uses for building web applications.
    * Redux is a popular JS library for managing the state of your application.

---