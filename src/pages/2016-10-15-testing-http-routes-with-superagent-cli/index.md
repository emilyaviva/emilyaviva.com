---
date: 2016-10-15
title: Testing HTTP routes with SuperAgent-CLI
---
Often I find myself needing to do a quick, *ad hoc* test of an HTTP route from the terminal, perhaps to check that a server I'm writing is actually live, or an API will return what I expect in response to an Ajax request. One of the indispensible tools in my arsenal is [cURL](https://curl.haxx.se/), but cURL is often overkill and overcomplicated for what I want to do, when all it involves is simple HTTP, maybe a header or two, and some JSON data.

My preferred tool for this kind of testing is [SuperAgent-CLI](https://github.com/toastynerd/superagent-cli). This is a command-line tool with a dead-simple syntax that runs the [SuperAgent](http://visionmedia.github.io/superAgent/) library under the hood in Node. Installation is easy with `npm install -g superagent-cli`. You then get access to the `superagent` command in your terminal (I alias mine to `sup` because I use it so much), which takes the arguments of the URL, the HTTP verb, optional headers, and JSON data if applicable. The server's response is written to the console.

This means I can simply write `superagent localhost:8000` to test if the `/` route on my local Express server running on port 8000 is alive, or `superagent localhost:8000/foodtrucks post '{"name":"Test Food Truck"}'` to send a test object into a database (it might return the JSON of the new food truck database object, or the string `ok`, or whatever I've programmed the API to do).

SuperAgent-CLI is great for use when you want to do lightweight, fast, *ad hoc* testing. I don't have to remember cURL's syntax and parameters most of the time anymore, which saves so much time and frustration when all I want to do is a very simple task.
