# **SE 319: DAY SIX - JAVASCRIPT CONTINUED AND TYPESCRIPT | 2/2/22 |**
* Strictly typed languages are useful for embedded systems, and extremely large code bases.
* TypeScript is a static type superset of JavaScript.

## **DATA TYPES AND OPERATIONS:**
* Every variable can be considered as an object.
* ```+``` - concatenates strings.
* ```parseInt()``` - parses the argument to an int.
* ```var arr = new Array();```
    * ```arr.push()``` - add an item to the end of the array.
    * ```arr.pop()``` - remove an item from the end of the array.
    * ```arr.length``` - returns the length of the array.
* ```var``` vs. ```let```
    * The scope varies. ```let``` only exists within the block, statement, or expression on which it is instantiated. ```var``` defines a variable globally, or locally to an entire function regardless of block scope.
* ```switch``` statements.
* ```++x``` - first increment the value, then use it in the expression.
* ```x++``` - first use the value in the expression, then increment it.
* ```do while loops```
```
do 
{
    statement;
} while (condition);
```
* ```break``` and ```continue``` in loops.
* ```alert```, ```confirm```, ```prompt```.
    * ```alert``` - displays the message in a dialog box.
    * ```confirm``` - contains text, and an 'OK' button and 'Cancel' button.
    * ```prompt``` - contains text, and an input field with a specified default value.

---
## **STATIC AND DYNAMIC BINDING:**
* Static binding - variable types are declared during the compilation, and remains unchaged throughout the program execution.
    * Pros: 
        * Less error-prone.
    * Cons:
        * Less flexible.
* Dynamic binding - variable types are declared during execution, or can change throughout the program's execution.
    * Pros:
        * Flexibility.
    * Cons: 
        * High cost (dynamic type checking, interpretation, and dynamic storage allocation).
        * Type error detection by the compiler is difficult (less reliable).
        * Usually implemented using pure interpretation.