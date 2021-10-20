# Hackschool Session 3: Introduction to React

**Date**: October 20, 2021

**Location**: Perloff Hall 1102

**Teachers**: [Nareh Agazaryan](https://github.com/nareha), [Eric Yang](https://github.com/eric8yang)

## Resources

- [Slides](https://docs.google.com/presentation/d/1HBMlVmoG8n3r0LJ3KwD9QJYiteT4U2pdHxQ32yRy1Qc/edit?usp=sharing)
- [ACM Membership Attendance Portal](https://members.uclaacm.com/login)

## What we'll be learning today
- [What is React?](#what-is-react?)
    - [Why React?](#why-react?)
- [Setting up a React Project](#setting-up-a-react-project)
- [How to Work in React](#how-to-work-in-react)
    - [Introducing Import](#introducing-import)
- [Components](#components)

---
## What is React?
So far in this series, we've covered HTML, CSS, and JavaScript. While these tools are sufficient for certain websites and web apps (the difference between the two is that apps are interactive, while websites don't have user interactivity), some projects benefit from using a "library" (a set of "tools" that will add some benefits to your coding experience for certain tasks). One of these libraries is **React**. 

ReactJS is a JavaScript library for building user interfaces. User interfaces, usually shortened to UI, are things that a user can interact with on the webpage. This is why often times we'll refer to React projects as React apps. The React website can be found [here](https://reactjs.org). It contains documentation for beginner and advanced topics, some of which we'll touch upon in this series, as well as some tutorials and other useful information.

React is created by Facebook, and Facebook actually uses React in their websites and applications! This means that Facebook is directly invested in improved React, which is great for us non-Facebook developers as well using React!

React could be considered decently new, as opposed to some other libraries such as AngularJS and jQuery. Even though it is newer than some other libraries, it's extremely popular, and only growing in popularity! Some other companies that user React are Airbnb, Uber, Netflix, Skype, and more! The general number of websites that use React are around 10 million. This article [here](https://codeburst.io/top-javascript-frameworks-and-web-development-trends-in-2021-313194c0cd92) also demonstrates that JavaScript developers overwhelmingly have been using React recently, compared to its competitors. All this is to show that React is an extremely popular library, and something viable for usage whether you're just starting your web development journey, or are learning for the first time!

### Why React?
Popularity is definitely a selling factor, but why do we use React specifically? This is something we'll come to realize throughout the series. The basic concepts of React that make it so great to use is **reusability** and **efficiency**. Let's consider Facebook, for example. Facebook is comprised of a bunch of posts, each of which have a *user*, *text*, *an image*, and *reactions*. This is true for all posts, if we were to simplify them down, ignoring events and selling and whatnot. We could copy paste the code for a post multiple times, but in HTML, this would include a LOT of repeated and lengthy code. We won't dive into what React can do to fix this specifically at this moment, but React in short can simplify this greatly, and reduce the need for repeating such large pieces of code (see this workshop's section on [Components](#components) for more information)!

## Setting up a React Project

## How to Work in React
### Introducing Import

## Components
### What is a component?
Components represent a way to reuse elements on your web application. Imagine a Twitter feed where each post has the format but is filled slightly differently. In this case, it would be insane to have to go through and change each and every HTML element if we wanted to edit the format of a post. For example, if we wanted to make all of the usernames unbolded instead of bolded, we may have to go through each and every post element and delete a tag. The solution to this madness is components. 

### How do we create components?
To begin working with components, we usually create a new folder called `components` for them in the `src` folder. After this is done, we can create a `.js` file to store our component (`Post.js` for example). Setting up the component will look something like the following:
```js
import React from 'react';

function Post(){
    return <h1>hello</h1>;
}

export default Post;
```

What's shown here from the top:
1. React is imported so we can use parts of it in our file.
2. A function is defined where
    1. The name matches the name of the file
    2. A single JSX element is returned from the function
3. The component is exported so we can later import it into another file

### How do we use the component?
After our component is well defined and exported, we can use the component by importing it into another file.

#### How do we import files?
Importing is done in React using the import keyword (what a shocker) followed by a path to the file as a string. For example, if we wanted to import the `Post` component into the `App.js` file, we could simply write the line:
```js
import Post from './components/Post.js'
```

A few things to note here:
1. The word before `from` has to exactly match whatever the name from the export (which should also match the name of your file)
2. The path to the file is surrounded by quotation marks (either is fine, but try to be consistent)
3. The path begins with `.`, which simply refers to the folder this file is currently in (in `App.js`, this refers to `src`)

Once we have our component imported, we can create elements similar to how we used HTML tags in the past. If I wanted to render a Post component, I could simply return `<Post />` from `App()`.
