---
path: /blog/fun-with-functions-part-2
date: 2016-09-12T00:00PT
title: |
       Fun with functions, part 2: Arrow functions
---
In my [last post](https://www.emilyaviva.com/blog/fun-with-functions-part-1/), I talked about function expressions and how `this` is used in regular JavaScript functions. In this post, I want to talk about arrow function syntax, easily one of my favorite enhancements to JavaScript, and how they can be used within React to help write efficient code.

A preliminary note: Arrow functions are part of the ES2015 version of the JavaScript language ([somewhat incorrectly](https://medium.com/@jayphelps/please-stop-referring-to-proposed-javascript-features-as-es7-cad29f9dcc4b) known as "ES6"), but you can still use them natively in [many, but not all, modern browsers](http://caniuse.com/#search=arrow%20functions). However, to maximize portability, it's still necessary to use a transpiler like [Babel](https://babeljs.io) (which, if you're writing JSX for React, you're most likely using anyway).

### Arrow function syntax

Arrow functions are a shorthand so you don't have to write `function` over and over. You write the arguments inside a pair of parentheses (which can be omitted if the function has exactly one argument), then the arrow `=>`, then a block describing what you want the function to do.

```javascript
const myFunction = () => {
  if (someVariable > 20) {
    console.log('Your guess is too high!')
  }
  return someVariable / 3
}
```

If the arrow function has exactly one expression after the arrow, it will implicitly *return* the value that the right-hand side of the function produces. This way, you don't need to write an explicit `return` statement.

```javascript
const addTwo = (x, y) => x + y
// The following will work, but is more verbose
const addTwoVerbose = (x, y) => {
  return x + y
}
```

One of the problems with JavaScript is that oftentimes functions get nested inside functions and it becomes hard to tell which blocks terminate where, the coder becomes confused, and the code becomes progressively less maintainable. Arrow functions can help this by reducing the number of times the word `function` is used, along with `{}` blocks spanning multiple lines.

### Use cases

One of the simplest uses of arrow functions is as a callback function. Take, for example, the case of mapping over an array:

```javascript
const myArray = [1, 2, 3, 4]
// Without arrow functions
myArray.map(function(x) => {
  return x * 2
})
// With arrow functions
myArray.map(x => x * 2)
```

Using the arrow function notation reduces 43 characters across three lines to 29 across a single line.

A typical application of this is a function that generates DOM elements in React. Here's an example that builds up list items from an array of objects, and then sorts them, inside a [stateless component](https://emilyaviva.com/blog/immutable-stateless-react-components/):

```javascript
import React from 'react'
import _ from 'lodash'

const books = [
  { title: 'Harry Potter', authorLast: 'Rowling', authorFirst: 'J. K.' },
  { title: 'The Lord of the Rings', authorLast: 'Tolkein', authorFirst: 'J. R. R.' },
  { title: 'A Wrinkle in Time', authorLast: 'L\'Engle', authorFirst: 'Madeline' }
]

const sortedBooks = _.sortBy(books, b => b.authorLast)

const booksDetails = sortedBooks.map((book, i) => (
  <ul key={i}>
    <li>Title: {book.title}</li>
    <li>Author: {`${book.authorFirst} ${book.authorLast}`}</li>
  </ul>
))

const BooksComponent = () =>
  <div>
    {booksDetails.map((entry, i) => (
      <div key={i}>
        {entry}
      </div>
    ))}
  </div>

export default BooksComponent
```

Notice how in this example, we don't need to use any explicit `return` statements; we simply enclose our multiline JSX within `()` and the parser treats it as a single expression, so the arrow functions implicitly return it.

### Caution with binding

The major difference between arrow syntax and standard function syntax is how `this` works. Remember how we said in Part 1 that every function creates its own scope, where `this` refers to the current function object? It's not that way in arrow function syntax: the arrow function captures the value of `this` from its context.

The difference is obvious in React. Here's an example of how we have to `bind(this)` in a callback passed to a component's props. Consider an image we want to replace with a different image when the mouse hovers over it. (We could—and probably should—accomplish this with CSS, but for the sake of the example, we'll do it in pure React.)

```javascript
class ImageWithHover extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
    hoverSrc: React.PropTypes.string,
    alt: React.PropTypes.string
  }
  constructor (props) {
    super(props)
    this.state = { hover: false }
  }
  mouseOver () {
    this.setState({ hover: true })
  }
  mouseOut () {
    this.setState({ hover: false })
  }
  render () {
    const { src, hoverSrc, alt } = this.props
    return (
      <img
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
        src={this.state.hover ? hoverSrc : src}
        alt={alt}
      />
    )
  }
}
```

We have to `bind(this)` in the `onMouseOver` and `onMouseOut` callbacks, because if we didn't, the `this` would try to `setState` on the `mouseOver` and `mouseOut` functions, not on the `ImageWithHover` component (remember, classes are just syntactic sugar for function objects).

### Caveats

Arrow functions are always *anonymous*. That is, they don't have any intrinsic "name". (It's a little more complicated than this, but this is sufficient for a high-level overview). Arrow functions don't hoist to the top of the scope, as function statements do.

It's important to note that arrow functions are only *function expressions*. As we discussed in the previous post, a function expression can be used to represent the function, but it cannot be used to declare the function in a way that has any persistence unless it's assigned to a variable.

For these reasons, it's a common pattern to see arrow functions either be used on their own (as bare expressions) or immediately assigned to a variable with `const`. If you need recursion, you're probably better off with a named function.
