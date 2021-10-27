# Hackschool Session 3: Introduction to React

**Date**: October 27, 2021

**Location**: Perloff Hall 1102

**Teachers**: [Alex Xia](https://github.com/khxia), [Jody Lin](https://github.com/jodymlin)

## Resources

- [Slides](https://docs.google.com/presentation/d/1cs4Ag73t4bCVXYthsXm1EifZQeJkE2H8T002myMCj9g/edit?usp=sharing)
- [ACM Membership Attendance Portal](https://members.uclaacm.com/login)
- [(Coming Soon) Recording](#TODO)

## What we'll be learning today

- [Arrays](#arrays)
  - [Array Syntax](#array-syntax)
  - [Array Indexing](#array-indexing)
  - [Useful Operations](#arrays-useful-operations)
  - [Array.map()](#advanced-array-stuff-arraymap)
- [Props](#props)
- [Layout](#layout)
  - [FlexBox](#flexbox)
  - [Demo](#applying-flex-box-to-netflix)

---

## Arrays

You've just watched Squid Game on Netflix for the first time. 
You can't stop thinking about the morality of the games
~~and the DILFs and hot girls~~ so you decide to make a
program about it.

<img width='400px' alt='Squid Game poster' src='./images/squid-game.jpg' />


Previously in our [Intro to JavaScript](https://github.com/uclaacm/hackschool-f21/tree/main/session-2-intro-to-javascript) 
workshop, we learned about creating variables with JavaScript.
You decide to start by putting your newfound JavaScript
knowledge to use by storing some important variables about
the show.

```js
let game = "Red Light, Green Light";
let player = "Gi-hun";
```

Perfect. We've got our first game and then our main protagonist.
Let's make some more variables to include more games and 
characters.

```js
let game1 = "Red Light, Green Light";
let game2 = "Dalgona Challenge";
let game3 = "Tug-of-war";

let player1 = "Gi-hun";
let player2 = "Sae-byeok";
let player3 = "Ali";
```

You're having a lot of fun until you realize there are actually
6 games and 456 players. You're going to have to define
456 more variables. Oh no.

_What if there was a way to store multiple values in a
single variable?_

Turns out, we can do that with JavaScript arrays!

### Array Syntax
The syntax looks something like this:
```js
let players = [ "Gi-hun", "Sae-byeok", "Ali" ];
```

Some notes about this syntax:
* it begins like a regular variable declaration
  * `let varName = ....` or `const varName = ....`
* we wrap our items with square brackets `[ ]`
* we separate each item with a comma `,`

Here are some array examples:
```js
let players = [ "Gi-hun", "Sae-byeok", "Ali" ]; // strings
let playerNumbers = [ 456, 67, 199 ]; // numbers
let playerAlive = [ true, true, true ]; // boolean
let winners = []; // empty (no items)
let anything = [ "yikes", 420, { yeet: "yote" } ]; // any type
```

Notice that we can put any type of value (strings, numbers,
booleans, even objects!) in an array.

### Array Indexing

To access each value in an array, we using something called
_array indexing_. Each item can be accessed through its
index. Arrays indexes start at 0 and increase from left
to right in an array. Think of this like numbering
the items from left to right, only the count starts at 0.

```js
let players = [ "Gi-hun", "Sae-byeok", "Ali" ]; 
    // index:      0          1          2
```

To access an individual element, we use the syntax:
```js
arrayName[index]
```

So in our previous example, we could print out specific
names from the `players` array by accessing them through
the corresponding array index.

```js
let players = ["Gi-hun", "Sae-byeok", "Ali"];
let players = ["Gi-hun", "Sae-byeok", "Ali"];

console.log(players[0]); // Gi-hun
console.log(players[2]); // Ali
console.log(players[3]); // undefined
```

Remember that indexing starts at 0, so if we try to access
any index outside of the array (in this example 3), we'll 
get an `undefined` value. Although accessing `players[3]`
won't throw an error, we can't do much with the `undefined`
value, which basically means "there is no value."

We can combine the convenience of arrays with objects
to create a rich data structure to hold our Squid Game
information.

```js
let players = ["Gi-hun", "Sae-byeok", "Ali"];
let playerNumbers = [ 456, 67, 199 ];
let playerAlive = [ true, true, true ];
```

Here all the corresponding indexes refer to a single
players index. For example `players[1]` gives us 
`Sae-byeok`. `playerNumbers[1]` gives us `67`, which is
Sae-byeok's player number in the show. `playerAlive[1]`
gives us `true`, which is Sae-byeok's current living status.

However, an even more convenient way to do this would be 
to store all information related to a player (name, number,
and alive) in an object and make an array of these objects.

This would look like this
```js
let playersInfo = [
  { name: "Gi-hun", number: 456, alive: true },
  { name: "Sae-byeok", number: 67, alive: true },
  { name: "Ali", number: 199, alive: true }
];
```

Notice I only need to index into a single array now to
find all the information I want about a single player.

```js
console.log(playersInfo[1].number); // OUTPUT: 67
```

By indexing, we get a JavaScript object. From there we
can access the object properties corresponding to that
player.

### Arrays: Useful Operations
Here are some useful operations you might use when
dealing with JavaScript arrays.

`arrName.length`: get the # of elements in the array \
`arrName.push(someValue)`: add an item to the end of the array \
`arrName.pop()`: remove last item from array \
`arrName.indexOf(someValue)`: get index of an element

### Looping through Arrays
Often times we want to go through an entire array and perform
some sort of operation on each item. To do this, we can
use a `for-loop`.

The syntax looks like this
```js
let arrayName = [ ... ];

for (let element of arrayName) {
  console.log(element);
  // ... statements using element
}
```

Let's break this down.

`let element` is a variable declaration. This will be the
variable we access the current item of the array during each
loop iteration. Note: you can name the variable anything.

`of arrayName` is the name of the array we looping through.

Everything inside of the curly brackets `{ }` is what
we call the _loop body_. This is code that will be executed
once on each item in the array (going from left to right)
in the array.

### Advanced Array Stuff: _array.map()_

Imagine you are given the following task: Given an array
of numbers, create a new array where each item is the 
corresponding item from the old array, but multiplied
by 5.

Knowing what we know, we'd say _"Easy peasy lemon squeezy."_

We'd then code something like this:
```js
let oldArray = [1, 2, 3, 4];
let newArray = [];

for (let oldItem in oldArray) {
  let newItem = oldItem * 5;
  newArray.push(newItem)
}
console.log(newArray); // [5, 10, 15, 20]
```

But there is a much shorter way to write this same thing
with a JavaScript-provided fucntion called the _map()_
function. 

It looks something like this:
```js
let oldArray = [1, 2, 3, 4];
let newArray = oldArray.map(
  (oldItem) => { return oldItem * 5 }
);
console.log(newArray); // [5, 10, 15, 20]
```

A few things about the map function before we break down the
syntax of it:
* it takes a function with a single parameter representing
the current array item (if you give 2 parameters, the second
one represents the index of the current item)
* It runs the function code on each element
* It returns a new array with the result of the function on
each element

Okay now let's break down the syntax:
```js
let oldArray = [1, 2, 3, 4];
let newArray = oldArray.map(
  (oldItem) => { return oldItem * 5 }
);
```

The code `(oldItem) => { return oldItem * 5 }` is an
arrow function. This is really just fancy syntax for
declaring a function without a name. This function
gets called on each array element. 

The parameter of the arrow function `oldItem` is a 
variable referring to the current item during each
iteration.

The result of the `return` statement will be the corresponding
array item in the new array. In this case, our new array
will have a number that is 5x the original number.


#### Why do we use _array.map()_?

As we saw earlier, we can live without _array.map()_ by simply
using for loops and the `arrayName.push(item)` operation.
However this syntax is much more concise and is very common
in React. In the next section, we'll see how the _map()_ 
function is used to make our React code much neater and
more maintainable.

## Props

## Layout

Our Netflix episode list has all the content of the actual
Netflix list, but is missing all the looks of the actual
one. 

To create our Netflix clone, we must use the magic of
CSS. However, the CSS we've learned so far doesn't cut
it. We're going to learn about some CSS properties that
help us determine how elements are positioned on a webpage
today.

### Layout: `display`

The CSS `display` property of an element will determine 
how that element will position itself relative to other
elements around it.

By default, items like `div` are given the property 
`display: block`. This means that the width and height of the
`div` are preserved and there is a newline automatically
inserted after the `div`.

<img width='400px' src='./images/display-block.gif'>

_GIF Source: [Medium article](https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35)_

The display also has a few other properties that vary
how elements position themselves relative to others around
them.

Here is a graphic showing some of the differences:

<img width='400px' src='./images/display-comparison.png' />

_Source: [Stack Overflow](https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block)_

We can see that `display: inline-block` is that same as
`display: block`, but there is no newline inserted after
an element. 

For `display: inline`, the top and bottom margins are 
ignored. The width and height of each element are also ignored,
and these elements sit side-by-side, spacing permitting.

> Each HTML element by default will have a default `display`
> property. `<p>` and `<div>` tags have a default 
> `display: block` property. Images have a default
> `display: inline` property, but its default width
> and height are intrinsic to the images values, so it
> behaves as if it had the style of `display: inline-block`.

### Limitations

Although it seems we have a lot of options, we are actually
very limited with what we have right now with `inline`,
`block`, and `inline-block`. 

Try thinking of how you could do the following things:

1. Create a row evenly spaced divs that adapts to any
screen size.
1. Create a column of divs evenly spaced apart.
1. Align all blocks in a row to the right side.

It is possible to mess with margins to get some of these,
but we run into trouble when we adjust the size of our
screen or window that our webpage is in.

So how do we solve this? We use something called _Flex Box_.


### Flexbox

Before we introduce flex box, we have to talk about a
very important relationship in CSS. The parent-child 
relationship. 

<img width='400px' src='./images/parent-child-stock.png' />

> Not this this one.

Let's say I'm trying to recreate the Squid Game card
in my code to look something like this:

<img width='400px' src='./images/squid-game-card.png' />

My code for this will look something like the following
```js
<div>
  // assume I have defined these react components somewhere else
  <Triangle />
  <Circle />
  <Square />
</div>
```

In this example, the parent element is the `div` and the
child elements are the `Triangle`, `Circle`, and `Square`. 

So what are parent and child elements then?

Parent elements are elements that contain elements inside
of them. Think of them like containers that wrap around
the inner elements.

Child elements are the elements inside any given parent
element. 

```js
<div> // parent
  <Triangle /> // child
  <Circle /> // child
  <Square /> // child
</div>
```

Now that we have learned what parent and child elements
are in HTML, we can use flexbox.

Flex box gives parent elements the ability to control
the positions of the child elements inside of them.

For example like the example above, if I want to 
get the `Triangle`, `Circle`, and `Square` to be
evenly spaced in a row, I can apply some CSS properties
to the parent `div`. These new properties will control
the positions of the shapes inside the `div`. 

To unlock this magical ability though, we first have
to give the parent element the property
```css
display: flex;
```

By using this property called `flex`, we have unlocked
a few other properties that we can use now to use
flexbox. 

### Alignment Axes

When we are position child elements, we typically are
concerned about the directions up/down and left/right.

But depending on how you tilt your head when you look 
at the screen, what exactly counts as up/down left/right?

To solve this problem, we'll instead use something called
the _main axis_ and _cross axis_.

<img width='400px' src='./images/main-cross-axis.png' />

_Source: [freecodecamp.org](https://www.freecodecamp.org/news/an-animated-guide-to-flexbox-d280cf6afc35/)_


The image above shows the _default_ orientation of the
main axis and the cross axis. By _default_ the main
axis is horizontal on the screen and cross axis is 
vertical, perpendicular to the main axis.

But this is just the default orientation. How do we determine
the direction of the main and cross axis?

The answer is another property called `flex-direction`. The
values this property can take are `row`, `column`,
`row-reverse`, and `column-reserve`. The value determines
the direction of the _main axis_. 

If we use
```css
flex-direction: row;
```
This matches our default main axis, with items being placed
in a row from left to right.

If we use
```css
flex-direction: row-reverse;
```
This will also form a row, but items will be placed in reversed
going from right to left.

If we use
```css
flex-direction: column;
```
This will put the items into a column. For `column-reverse`
we will get a column, but with the items in reverse order.

To get an idea of what this looks like, here is a GIF
of the property.

<img width='400px' src='./images/flex-direction-row-column.gif' />
<img width='400px' src='./images/flex-direction-column-reverse.gif' />

_Source: [freecodecamp.org](https://www.freecodecamp.org/news/an-animated-guide-to-flexbox-d280cf6afc35/)_


Now that we have defined our axis directions, we can define
the placement of child elements along these axes.

The `justify-content` property determines the placement
of child elements along the _main axis_. The following
values it can take are `flex-start`, `flex-end`, `center`, 
`space-around`, `space-between`, and `space-evenly`. 

These look like the following:

<img width='400px' src='./images/justify-content.gif' />

_Source: [freecodecamp.org](https://www.freecodecamp.org/news/an-animated-guide-to-flexbox-d280cf6afc35/)_


The `align-items` property determines the placement of
child elements along the _cross axis_. It can take the 
following values: `flex-start`, `flex-end`, `center`,
`stretch`, and `baseline`. 

These look like the following: 

<img width='400px' src='./images/align-items.gif' />

_Source: [freecodecamp.org](https://www.freecodecamp.org/news/an-animated-guide-to-flexbox-d280cf6afc35/)_

There is also an `align-self` property, that when applied
to a particular child element (not the parent), can override
the `align-items` property from the parent.

This looks something like this:

<img width='400px' src='./images/align-self.gif' />


### Practice

These new properties will start making a lot more sense
if you get some hands on practice.

I highly recommend using this website called
[flexboxfroggy.com](https://flexboxfroggy.com/). This is how
I (Jody) learned flexbox and its a really good resource
to practice it.

Before we move on, take 15 minutes to try it out for yourself.


### Applying Flex Box to Netflix

Now that we've learned flexbox, we can finally add flex
to our episode list.

<img src='./images/squid-game-episode.png' />

If we examine this component, we can see that the entire
episode container really contains 3 child containers.

<img src='./images/episode-big-div.png' />

We can see that the following properties are applied to the 
parent container: 

```css
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
```

<img src='./images/episode-description-div.png' />
Within the episode description itself we can also see
that the title line and description are also in a `column`
`flex-direction`. The CSS for this would look like this:

```css
display: flex;
flex-direction: column;
```

<img src='./images/episode-title-div.png' />

Within the title line, we can see that there must be following
flex properties on the title and time parent container as well:

```css
display: flex;
flex-direction: row;
justify-content: space-between;
```

If we add the following CSS classes
```css
// Episode.css
.episode-container {
  /* FLEXBOX */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.episode-information {
  /* FLEXBOX*/
  display: flex;
  flex-direction: column;

  /* other styling */
  width: 70%;
  text-align: left;
  padding: 8px;
}
```

Then in our `EpisodeList.js` file, we can import the
CSS file and apply the classes to the relevant html
tags.

```js
import React from 'react';

import SquidGame1 from '../images/squid-game-1.jpg';
import SquidGame2 from '../images/squid-game-2.jpg';
import SquidGame3 from '../images/squid-game-3.jpg';
import SquidGame4 from '../images/squid-game-4.jpg';

import './Episode.css';

function Episode(props) {
    return (
        <div className='episode-container'>
            <div className='episode-number'>
                <h3>{props.episodeNum}</h3>
            </div>
            <div>
                <img src={props.img} width='100px' />
            </div>
            <div className='episode-information'>
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

// .. the rest of the file
```

<img src='./images/demo-plain-flex.png' />

This looks a lot like the real netflix episode list, minus
some other styling.

After we touch that up with the full CSS file though 
it looks pretty good!

```css
.episode-container {
  /* FLEXBOX */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.episode-information {
  /* FLEXBOX*/
  display: flex;
  flex-direction: column;

  /* other styling */
  width: 70%;
  text-align: left;
  padding: 8px;
}


/* other styling */

.episode-number {
  padding: 8px;
}

body {
  background-color:rgb(14, 14, 14);
  color: white;
}

h3 {
  margin: 4px 0px;
}

img {
  padding: 8px;
}

p {
  margin: 4px 0px;
}
```

And here's the final product!

<img src='./images/demo-full-css.png' />