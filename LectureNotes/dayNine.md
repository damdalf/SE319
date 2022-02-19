# **SE 319 - Day Nine: REACT Framework | 02/18/2022 |**

## **FINISHING UP NODE.JS**
* setInterval(event, repetitionCountInMS);
* clearInterval (var intervalObject);
### **An example of how Node.js runs asynchronously:**
```js
var count = 0;
console.log("Count from 1 to 10:");
var intervalObject = setInterval(function ()
{
    count++;
    console.log(count, "seconds passed.");

    if (count == 10)
    {
        console.log("Exiting...");
        clearInterval(intervalObject);
    }
}, 1000);

console.log("Finished counting...");

// While you would expect an output along the lines of this:

/*
Count from 1 to 10:
1 seconds passed.
2 seconds passed.
3 seconds passed.
4 seconds passed.
5 seconds passed.
6 seconds passed.
7 seconds passed.
8 seconds passed.
9 seconds passed.
10 seconds passed.
Finished counting...
/*

// That's not what you'll get. Remember that Node.js runs asynchronously. Thus, this is the output that you would get.

/*
Count from 1 to 10:
Finished counting...
1 seconds passed.
2 seconds passed.
3 seconds passed.
4 seconds passed.
5 seconds passed.
6 seconds passed.
7 seconds passed.
8 seconds passed.
9 seconds passed.
10 seconds passed.
*/
```

## **INTRODUCTION TO REACT FRAMEWORK:**
* Useful libraries and frameworks:
    * Chrome DevTools:
        * Debugging JavaScript.
        * Performance analysis.
        * Chromium project: open-source projects behind Google Chrome browser and Google Chrome OS.
    * NPM - node packet manager:
        * A package manager for JavaScript / Node.js packages and modules.
        * World's largest software registry.
    * React.js
        * JS library for building user interfaces (made by Facebook).
        * Fast and interactive user interfaces for the web.
        * Component-based front-end library.
        * Unlike traditional JS, React only renders the parts of the DOM that has been changed.
        * In a model-view-controller architecture, React is the 'view', which is responsible for how the app looks.
    * Angular / Angular.js
        * TypeScript-based / JS framework (made by Google).
    * Vue.js
        * Rapidly growing JS framework.

---
## **MODEL-VIEW-CONTROLLER:**
* Model View Controller (MVC):
    * View: Browser presentation (HTML).
    * Model: Data (Backend Database or (simple) embedded).
    * Controller:
        * Client scripts / programs, e.g. JavaScript.
        * Server scripts / programs, e.g. Node.js.
* What are the advantages of MVC?
    * More modular, better organization.
    * Model with different views.
    * Controller decides when and how to update the model and or view.
    * Model can change the view.

---
## **History of REACT:**
* First created by Jordan Walke at Facebook.
* First deployed on Facebook's newsfeed in 2011 and was made open-source in 2013 under the MIT license.
* REACT Native for mobile was introduced in 2015.

---
## **Why should you use REACT?**
* Easy to rad and understand views.
* Components are the future of web development.
* If your page uses a lot of fast updating data or real time data - REACT is the way to go.
* Once you are over REACT's learning curve, developing an app will become a lot faster.

---
## **The fundamentals of REACT:**
* Components
* Props
* State
* JSX
* Virtual DOM

---
### **"Hello World!" in REACT:**

```index.js```
``` js
// Create a component called 'Test'.
import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component{
    render() {
        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render(<Test />), document.getElementById('root');
```

```index.html```
```html
<!--Now, let's render the 'Test' component in a container called 'root'.-->
<!DOCTYPE html>
<html lang = en>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width-device-width, initial-scale-1"/>
        <title>React App</title>
        </head>
        <body>

            <div id="root"></div>

        </body>
    </html>
```
