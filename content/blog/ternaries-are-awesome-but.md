+++
date = 2016-12-16
title = "Ternaries are awesome, but…"
sort_by = "date"
weight = 0
template = "blog_post.html"
+++

Those who know me know that I am [a big fan](https://docs.google.com/presentation/d/15dZNCA-F8L-yk1vIcpNLpe-LvHoPmp_GRxo49VLzC30/edit#slide=id.p) of the JavaScript ternary operator, because, simply put, it allows us to treat "if-else" control flow as an _expression_ rather than a _statement_. This means that we can use "if-else" logic anywhere we can use a syntactic expression by using the ternary operator, which can save an awful lot of code.

One of the most useful applications of this property of the ternary operator is in writing [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) for React. In JSX, expressions are wrapped in curly braces, and their evaluation is inserted into the markup. This means that we can write conditional expressions to create context-dependent markup, for example:

```javascript
<p>Food will {foodIsProvided ? null : 'not'} be provided.</p>
```

We can even do more complicated examples, such as:

```javascript
<ul>
  {tags.length ? (
    tags.map((tag, i) => <li key={i}>{tag}</li>)
  ) : (
    <li>Untagged</li>
  )}
</ul>
```

Theoretically, there is no limit to the complexity of the "if-else" control flow one can accomplish here, with the very important caveat that one has to be willing to write nested ternary expressions (and later parse them out again, when errors inevitably crop up). While I've written an example or two of this in actual production code, I don't actually recommend writing nested ternaries because of the cognitive difficulties of keeping track of all that code. If I wanted headaches with keeping track of nested single-character code, I'd write Perl.

How would I do this differently if JavaScript were mine to have designed? In Ruby, you can write this kind of logic as an expression rather than a statement with the words `if`, `then`, and `else`:

```ruby
a = if b then c else d end
```

I wish you could do the same in JavaScript; it'd make "if-else" control flow so much more readable (and powerful, when used as an expression). ES2018, anyone…?
