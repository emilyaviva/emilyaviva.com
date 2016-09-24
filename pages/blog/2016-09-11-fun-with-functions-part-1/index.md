---
path: /blog/fun-with-functions-part-1
date: 2016-09-11T00:00PT
title: |
       Fun with functions, part 1: Function declarations and expressions
---
In my [previous post](http://emilyaviva.com/blog/immutable-stateless-react-components/), I briefly touched on one of the most useful features of the latest versions of JavaScript: functions written in the new [arrow syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). They're worth exploring in a little more depth, because they differ just enough from "standard" functions to warrant some explanation.

What is an arrow function? Before we get into that, let's do a quick review of what functions actually are in JavaScript. In the first post of this two-part series, we'll talk about the nature of functions, and in the [second post](http://emilyaviva.com/blog/fun-with-functions-part-2/), we'll talk about arrow functions specifically, and see how they can be leveraged in React to help write concise components.

Functions can be created in two ways: as a **function declaration**, or as a **function expression**. To really understand the difference, we need to back up yet one more step and review the difference between a *statement* and an *expression*.

### Expressions versus statements

Simply put, an *expression* produces a value, and is syntactically permissible whenever a value is expected. In JavaScript, `3.14519`, `myVariable`, `JSON.stringify({hello: 'world'})`, `true`, and `['a', 'b', 1, 2]` are all expressions. Note that `JSON.stringify` is actually a call to a function, which itself contains several expressions; the function call is itself also an expression.

A *statement* is an instruction or a sequence of instructions to perform an action. In JavaScript, `for`, `while`, and `if` are statements. Generally speaking, wherever JavaScript expects a statement, you can use an expression, but not vice versa.

On to functions. A function declaration is a *statement*. We use the word `function` as a keyword to create an object which is a function, assign the object a particular name, and associate some series of actions with that named object.

```javascript
// function declaration
function exampleOne (name) {
  console.log(`Hello, ${name}!`)
}
```

A function expression, on the other hand, is (obviously) an *expression*. What this means is that the function expression produces a value (specifically, a function object), and you can do things with this value that you can do with any value, such as assign it to a variable:

```javascript
// function expression
const exampleTwo = function (name) {
  console.log(`Hello, ${name}!`)
}
```

These may not look that different, but under the hood, they behave quite differently. The function declaration is a statement, and thus it performs an action—specifically, creating a variable (`myAwesomeFunction`) and assigning it a value. The function expression in the second example is simply a representation of a function with no name; we explicitly assign it to the variable `exampleTwo`. This has two practical effects:

1. The function declaration will be hoisted, while the function expression will not (however, the declaration variable `exampleTwo` will be hoisted, but its value will be `undefined` until the function is explicitly assigned to it).
2. We can immediately invoke the function expression to produce a value based on parameters we send to the function. This is called by the deplorable acronym *IIFE*, usually pronounced "if-fee", which stands for "immediately invoked function expression":

```javascript
const twoPlusThree = function (x, y) {
  return x + y
}(2, 3)
```

We immediately invoke the function with the values `2` and `3`, and `twoPlusThree` will be a variable with the value `5`.

### Prototypal inheritance and function scope

Variables and references in JavaScript are scoped to functions. The following code will produce an error, because the variable `result` is only available inside the function `addTwo`:

```javascript
function addTwo (x, y) {
  const result = x + y
}
console.log(result) // This will ReferenceError
```

Much ink has been spilt over what the word `this` means in JavaScript. Generally speaking, `this` refers to the function object under discussion. We see it used most often with prototypal inheritance: `this` refers to the object that inherits from the prototype, as we can see in this example:

```javascript
function Spaceship (name, registry, maxSpeed) {
  this.name = name
  this.registry = registry
  if (registry.substr(0, 2) === 'NCC') {
    this.affiliation = 'United Federation of Planets'
  } else {
    this.affiliation = 'unknown'
  }
  this.maxSpeed = maxSpeed
}
```

When the `Spaceship` function is called, e.g. with `new`, to create a new spaceship object, this prototype function will run with the arguments passed to it. In this type of function, then, `this` refers to the new object under construction.

Since React components are actually functions, In React, `this` (usually) means the current component. For example, `this.props` refers to the props passed to that specific instance of the component, and `this.state` refers to the component's state. We'll talk more about `this` in React in [part two](http://emilyaviva.com/blog/fun-with-functions-part-2/).
