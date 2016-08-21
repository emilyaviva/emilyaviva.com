---
path: /blog/atom-packages-i-could-not-do-without
date: 2016-06-27T00:00PT
title: Atom packages I could not do without
---
My editor of choice these days is [Atom](https://atom.io/). Part of what makes Atom so great is its package ecosystem. However, the sheer number of packages available can often be intimidating and confusing. I thought I'd share the highlights of what's currently in my Atom configuration and hopefully provide some package-navigation guidance people who may be thinking of giving Atom a try as well as Atom veterans.

### Code Linting
The most important Atom linting package, of course, is [`linter`](https://atom.io/packages/linter). This gives all the language-specific linters a framework to plug into inside Atom, letting them display linting messages on screen as you type.

I always use [`linter-js-standard`](https://atom.io/packages/linter-js-standard) for linting JavaScript projects of my own design. [Standard Stye JavaScript](http://standardjs.com), in my estimation, is the best standard out there for code styling. One caveat: make sure to go into its settings and verify that Atom won't use Standard to lint something with different linting rules, e.g. a project that has its own `.eslintrc` file.

As a full-stack JavaScript developer, I depend on the Atom packages [`linter-eslint`](https://atom.io/packages/linter-eslint), [`linter-stylelint`](https://atom.io/packages/linter-stylelint), and [`linter-jsonlint`](https://atom.io/packages/linter-jsonlint). Many other packages for `linter` exist, for all your different coding needs.

### Editing and Writing Code
I don't know how I lived without [`color-picker`](https://atom.io/packages/color-picker). Right-click and you can pull up a color picker that spits out the value you want in RGB, HSL, hex, etc.

Another must-have color package is [`pigments`](https://github.com/abe33/atom-pigments). This shows all instances of colors against a background of that color. So when you type `#2c64af`, it'll actually show you what color that is (it's a soft blue). This is particularly useful when you're working in something like Sass, where colors can take their values from variables.

Atom has a way to use [EditorConfig](http://editorconfig.org/) with the [`editorconfig`](https://atom.io/packages/editorconfig) package. This is a must-have for maintaining a consistent coding style when people in your project are working in different editors or IDEs. It reads its settings from the `.editorconfig` file in your project.

One of the most useful packages is [`emmet`](https://atom.io/packages/emmet), which lets you expand abbreviations so you can avoid typing the same repetitive sequences over and over. This is particularly important when you're writing HTML or CSS.

Another package you'll want for writing HTML is [`autoclose-html`](https://atom.io/packages/autoclose-html). When you type `<li>` it'll automatically add `</li>` for you. This also works when you're writing JSX

I use [`sort-lines`](https://github.com/atom/sort-lines) for assisting with some extremely tedious sorting (obviously).

Use the [`atom-pair`](https://atom.io/packages/atom-pair) package to do remote pair-programming sessions. There are even hooks for integrating this with Slack and HipChat.

### Development
If what you're doing touches the web, you'll most likely need the [`open-in-browser`](https://atom.io/packages/open-in-browser) package. If you are sticking with Sublime simply because that feature is built in, now might be the time to switch.

The [`minimap`](https://atom.io/packages/minimap) package is another must-have. It displays a small map of your code off to the side of your editor. There are plugins for `minimap`, such as [`minimap-git-diff`](https://atom.io/packages/minimap-git-diff) to talk to the [`git-diff`](https://atom.io/packages/git-diff) package.

Speaking of Git, here are a lot of packages to make Git work nicely inside Atom, without having to bring up the Git command line for many common tasks. My favorite is [`git-plus`](https://atom.io/packages/git-plus), though [`git-control`](https://atom.io/packages/git-control) and [`atomatigit`](https://atom.io/packages/atomatigit) have their devoted followers.

If you're working in React, check out [`nuclide`](http://nuclide.io). It's a pretty spiffy IDE for React projects. I'm excited to see it continue to develop.

### Miscellaneous

Now that I've switched to Atom completely, I find myself missing the old built-in Tetris game in emacs (`M-x tetris`). Thank goodness for the Atom package [`tetromino`](https://atom.io/packages/tetromino).

What did I miss? What are your favorite Atom packages? Let me know below!
