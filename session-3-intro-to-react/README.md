# Hackschool Session 3: Introduction to React

**Date**: October 20, 2021

**Location**: Perloff Hall 1102

**Teachers**: [Nareh Agazaryan](https://github.com/nareha), [Eric Yang](https://github.com/eric8yang)

## Resources

- [Slides](https://docs.google.com/presentation/d/1HBMlVmoG8n3r0LJ3KwD9QJYiteT4U2pdHxQ32yRy1Qc/edit?usp=sharing)
- [ACM Membership Attendance Portal](https://members.uclaacm.com/login)

## What we'll be learning today
- [Components](#components)

---
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
