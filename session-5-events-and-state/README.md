# Hackschool Session 5: Event Handling & State

**Date**: November 3, 2021

**Location**: Perloff Hall 1102

**Teacher(s)**: [Miles Wu](https://linkedin.com/in/milesswu)

## Resources

-   [Slides](http://links.uclaacm.com/hackschool21-s5-slides)
-   [ACM Membership Attendance Portal](https://members.uclaacm.com/login)
-   Recording (Coming Soon)

## What We'll be Learning Today

-   [Events & Event Handling](#events-and-event-handling)
    -   What Are Events and Event Handlers?
    -   How Are They Used In React?
    -   Event Handlers with Arguments
-   [State](#state)
    -   What is State?
    -   Creating State Variables
    -   Updating State Variables
    -   Using State Variables
    -   Updating State with Previous State
-   [State Arrays](#state-arrays)
    -   Why State Arrays?
    -   How to Update a State Array
    -   How to Render Items in State Array

<hr/>

## Events and Event Handling

### What are Events?

An event usually refers to anything that is triggered by some user action. For example, when the user clicks their mouse or hovers over a certain component.

Here are some examples of events in React that we can use

-   `onClick`: when a mouse clicks on an element
-   `onMouseOver`: when the mouse goes over an element
-   `onChange`: when input value changes

A full list can be found [here](https://reactjs.org/docs/events.html).

### So what are event handlers?

At a very basic level, event handlers are essentially the action you want to perform in response to an event occurring. Thus, whenever said event happens, the event handler will do whatever you specified it to do.

### How are these used in React?

Now that we have a high level understanding of what these things are, let's see how they are actually used! Here's an example below:

```jsx
function App() {
	const handleClick = () => {
		console.log("Clicked!");
	};

	return (
        <button onClick={handleClick}>
            Click Me!
        </button>
    );
}
```
There's a lot going on here so let's break it down step by step so we understand all the pieces involved. 

First, let's take a look at the `handleClick` function. 
```jsx
const handleClick = () => {
    console.log("Clicked!");
}
```
This is actually the event handler in our example. Yes, event handlers are just functions! This makes sense if you think about functions as just being ways for us to define a block of code to be run whenever we want (an action to be performed when an event occurs).

Next, let's take a look at the `<button>` element.
```html
<button onClick={handleClick}>
    Click Me!
</button>
```
Notice first, the `onClick` event that has been attached to this element. This looks pretty similar to how we specify props for React components and you can definitely think of it that way, where we assign the name some value. In this example, the `onClick` event is being given the `handleClick` function. In essence, this specifies to have `handleClick` react to whenever `onClick` events occur. Sometimes this is called "binding" the event handler to the event.

### Event Handlers with Arguments
At this point, we can create basic event handlers for each of our events and bind them accordingly. However, if you're thinking about how event handlers are just functions then the thought "What if my event handler function had arguments?" has probably crossed your mind. 

If we take a look back at the previous example, it doesn't really look like there's any opportunity to specify an argument. So how do we do this? Well, let's take the following approach, keeping in mind that an event handler is just a function that we define:
```jsx
function App() {
	const handleClick = (arg) => {
		console.log(arg);
	};

	return (
        <button onClick={
            () => {
                handleClick("Hello!");
            }
        }>
            Click Me!
        </button>
    );
}
```
So what is going on here? Well, if we take a look at the `onClick` we are still specifying a function (an arrow function). This function just happens to call our `handleClick` function though. And since this is a function call, it is perfectly fine for us to pass an argument at this point!


## State

### What is State?
Put simply, state is data local to a component that can be modified over time. This sounds an awful lot like a normal variable, but there's one key difference: whenever state data is updated, it triggers a "re-render" of the screen. You can think of a "re-render" as like a refresh of the screen's content.

### Creating a State Variable
First things first, if we want to use state in any component, we will need to add the following line to the top of the file:
```js
import React, { useState } from "react";
```
The key thing here is the `useState`, which is what we'll be using to create our state variables. How do we do this? Well, it goes a little like this:
```jsx
function App() {
    const [text, setText] = useState("Hello, World!");

	return (...);
}
```
In the example code above, notice that we are using `useState` as a function here. Additionally, we give `useState` one argument. This argument can be any value you want and it will represent the `initialState` of the state variable. This just means it specifies what the state variable will start out as.

Also notice that `useState` gives us access to an array with two things inside. The first is `text`, which is just the name I've given to this particular state variable. Whatever you name it, this will be the way we store and access the data stored in our state.

### Updating a State Variable
Lastly, the second item in the array given by `useState`, which I've named `setText`, is what we use to properly update the state variable. Let's see how:
```jsx
function App() {
    const [text, setText] = useState("Hello, World!");

    const changeText = (update) => {
        setText(update);
    }

	return (...);
}
```
Alright, hopefullly you notice that `setText` is actually a function here and it takes one argument. This is going to represent the new value to overwrite the old state with. So whenever you want to change what is stored in our `text` state variable, we need to use the corresponding `setText` function, passing in some new value like `setText("Goodbye")`.

### Using a State Variable
Lastly, now that we have our state variable, let's see how we can utilize it and its special properties.
```jsx
function App() {
    const [text, setText] = useState("Hello, World!");

    const changeText = (update) => {
        setText(update);
    }

	return (
        <button onClick={handleClick}>
            {text}
        </button>
    );
}
```
As you can see above, we use the state variable `text` pretty much llike how we use regular variables. The difference again is that when `text` updates, it will re-render the screen. Since `text` has updated this means that those changes will be reflected after the re-render. This is something that does not happen with a regular variable, so in that case no update appears on the screen.

### Updating State with Previous State
So I might have been holding back earlier when I told you how we can update our state variable using something like `setText("new value")`. This method is a bit limiting and in practice, there are often times where you want the new state to be based off whatever the old state was. 

In these scenarios, we update state in a very specific way, shown below:
```jsx
function App() {
  const [text, setText] = useState("Hello!");
  
  const toggleMessage = () => {
    setText((prev) => {
      if (prev === "Click Me!") {
        return "Unclick Me!";
      } else {
        return "Click Me!";
      }
    });
  }
  
  return (...);
}
```
There's a lot in that snippet, so let's look at the meat of what's going on:
```jsx
setText((prev) => {
    if (prev === "Click Me!") {
        return "Unclick Me!";
    } else {
        return "Click Me!";
    }
});
```
You'll notice here that `setText` is not just taking a new value but it actually takes a function as an argument. This function also takes an argument, which I've arbitrarily called `prev`. This argument represents the *previous value* of the state variable being updated. Thus, we use it to determine what the new state should be. In the example, I do this using an `if` statement. The returned value becomes the new state value so we can see that depending on what `prev` is, I choose to update the state to be either `"Unclick Me!"` or `"Click Me!"`.

## State Arrays
### Why State Arrays?
So it's great that we can put arrays in our state, but why would this be something we care about enough to mention here? As it turns out, a common application of state is to store and maintain an array of items, which can then be easily rendered on the screen.

Some of you might still be thinking "Well why do we have to go over it tho? Isn't it just like using state as normal?" and you'd be right for the most part. To use arrays in our state, we still have the same tools available to us as with a normal state variable.
```js
const [items, setItems] = useState([]);
```


However, there are two questions we have to consider where the answer is not readily apparent just from what's been covered. Therefore, we decide to explicitly go over them for your benefit. These questions are
1. How do we properly update a state array?
2. How do we use a state array to render items on the screen?

### Updating a State Array
When we update a state array, we need to make sure we preserve the old array while adding our new item to the array. We can do this as follows:
```js
setItems((prev) => {
    let newArr = prev.slice(); // creates a copy of previous array

    newArr.push("new item"); // add new item to array

    return newArr; // return the new updated array to replaced old state
});
```

### Rendering Items in a State Array
To render the items in a state array, we can use the `map` function just like we did in the previous workshop! This way, we can place whatever raw data is in the array into components to be shown on the screen. Doing so might look something like this:
```jsx
function App() {
  const [items, setItems] = useState([]);
  
  // map each raw pieece of data to an element 
  const renderItems = items.map((item) => {
      <p>{item}</p>
  });
  
  // we can use the array of elements directly and it will render on the screen
  return (
      <div>
        {renderItems}
      </div>
  );
}
```
In a very straightforward way now, whenever `items` is updated, a re-render of the screen will be triggered. And since `renderItems` will have been updated with a new item, that change will be reflected on the screen instantly.
