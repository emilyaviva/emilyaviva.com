---
date: 2016-09-05
title: Immutable, stateless React components
---
There are several different ways to declare stateless components in React: using `React.createClass()`, ES2015 classes, and my favorite, pure functions. In functional programming-speak, a "pure" function is one that does nothing other than return a value: it does not emit any side effects. In other words, a pure function won't assign values to variables, alter an object's value, or even perform tasks like `console.log()`.

Since all a pure function does is return a value, we can take advantage of the implicit return of [arrow syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). What this basically means is that in ES2015 we can write a function simply like `(x, y) => x + y`, which is shorthand for `function (x, y) { return x + y }`. Writing a stateless React component in this way looks something like this:

```javascript
import React from 'react'

const MyComponent = () =>
  <div>
    <h2>My Component!</h2>
    <p>Stuff goes here.</p>
  </div>

export default MyComponent
```

The convention (inasmuch as there are well-established conventions in the constantly changing React world at this time) seems to be to indent the returned JSX block; the indentation is not actually syntactically significant.

We can use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to access the props passed to the component:

```javascript
const MyComponent = ({ name, id }) =>
  <div>
    <h2>Hello, {name.first}</h2>
    <p>Account number: {id}</p>
  </div>
```

### Immutability and propTypes validation

One of the advantages of functional programming styles is that objects are often **immutable**. This means that the object itself cannot be changed; if you want to make a change to the object you have to construct an entirely new object with a different value. In JavaScript, this task is often accomplished with `Object.assign()` or with utilities like [Lodash](https://lodash.com/).

Since functions are objects, we can apply the principles of immutability, even though JavaScript objects are, by default, mutable. We can use a package like [Immutable](https://facebook.github.io/immutable-js/) to enforce using immutable data structures in our code.

Let me switch gears for a moment to talk about props validation in React. In development environments, it can be beneficial to make sure that the right type of prop is being passed to our component. If the `propTypes` property is defined on the component object (remember, JavaScript functions and classes are really just objects), and there's an error with the type of a prop that is passed to the component, a warning will be printed to the console.

In a stateless component declared as an ES2015 class (as opposed to using `React.createClass()`), often the `propTypes` property is declared like so:

```javascript
class MyComponent extends React.Component {
  render () {
    // etc.
  }
}

MyComponent.propTypes = {
  name: React.PropTypes.object,
  id: React.PropTypes.string
}
```

However, this is not an immutable pattern, because we are altering the `MyComponent` object after we declare it. The immutable equivalent of this, which is a better pattern to use even when we don't care about mutability/immutability, is to add a `static` property to the class:

```javascript
class MyComponent extends React.Component {
  static propTypes = {
    name: React.PropTypes.object,
    id: React.PropTypes.string
  }
  render () {
    // etc.
  }
}
```

Circling back to my original point about declaring stateless components as pure functions, props validation is an odd situation because we have to declare the static `propTypes` property on the function object, which cannot be done except by mutating the object:

```javascript
const MyComponent = ({ name, id }) =>
  // etc.

MyComponent.propTypes = {
  // etc.
}
```

If we want to declare a functional, stateless component, *and* have that component be declared in an immutable style, doing so by means of declaring the component as a pure function requires us to use some method to return a copy of the component function with the props validation set on it. One way of doing so would be something like this:

```javascript
const MyComponent = ({ name, id }) =>
  // etc.

const MyComponentProps = {
  name: React.PropTypes.object,
  id: React.PropTypes.string
}

export default Object.assign(MyComponent, MyComponentProps)
```

There does not seem (yet…) to be a good way to do this in a single step, but there are several different ways to accomplish it nonetheless, with a minimum of added lines of code. It would be really neat to see an addition to the ECMAScript spec that would allow the setting of a property on a function at declaration time.
