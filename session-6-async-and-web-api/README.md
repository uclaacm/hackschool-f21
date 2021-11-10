# Hacksprint Session 6: Asynchronous Programming and Web API's

**Date**: November 10, 2021

**Location**: Zoom

**Teachers**: [Einar Balan](https://github.com/EinarBalan)

## Resources

- [Slides](http://links.uclaacm.com/hackschool21-s6-slides)
- [ACM Membership Attendance Portal](https://members.uclaacm.com/login)

## What we'll be learning today
- [What is Asynchronous Programming?](#what-is-asynchronous-programming)
- [Promises](#promises)
- [Async/Await](#asyncawait)
- [JSON](#json)
- [API's and fetch()](#apis-and-fetch)

## What is Asynchronous Programming?

### Motivation for Async
You may not have realized it, but up until this point, you've been writing something called **synchronous** code. In synchronous code, each function or expression within your program is executed one at a time and in sequential order. 

A more digestible way to think about it: all of the expressions in your code are waiting in line, but they have to wait their turn to be executed! The result: each task in your program (no matter how long it takes) is executed one by one.

<img src="./img/expression-line.png">

And this is fine for a simple program where each task is completed super quickly! But what happens when a task is super resource intensive and takes a long time to complete? Well, if written synchronously, all the tasks that come after the resource hog will be stuck waiting for it to wrap up. This could potentially lead to a terrible UX, which we definitely don't want! How can we avoid that?

### Async in Practice
Enter async programming. Essentially what async programming allows us to do is add more "lines" so that more than one expression can be executed at a time. 

Imagine you're at the grocery store and you see this: 

Two lines: to your left there are 3 carts filled with tons of stuff and to your right nobody is in line.
<img src="./img/grocery-lines.png">

Which line are you more likely to take? Obviously the empty one, right? On the left the shopper has all this garbage loaded into their carts and you have no idea how long it's going to take to scan each thing. If you get in line behind them, you could be waiting for hours. By taking the empty line, you save a lot of time! 

Now imagine instead of shoppers waiting in line, we have tasks in our program waiting to be executed. We want each task to get going as quickly as possible, and we don't want to keep them waiting.

Async solves this problem! If there is ever some task that could take a long time, but you're not sure how long (such as loading an image) you don't want to freeze up your application while waiting for it to complete! Async allows us to execute more than one expression at a time, so we no longer have to wait for the intensive task to complete before moving onto other things. 

## Promises
Alright, so now that you know what asynchronous programming is, let's get into how you might actually use it in the context of Javascript. 

### Motivation for Promises

Let's say we have a function `simulateIntensiveTask()` that takes some amount of time to complete. When the task is completed, we should see a message in the console. The return value of the function is how long the task took to complete. Let's add the following to `handleClick()` to demonstrate a common problem:

```javascript
const handleClick = () => {
    simulateIntensiveTask();
}
```

When we click the button, we are unable to perform any other actions within the app! . This is terrible UX, and it's all happening because `simulateIntensiveTask()` is a synchronous function. As I explained before, in synchronous code each expression is executed one at a time so all expressions after our intensive task have to wait until they can get started! To emphasize that this is the case,

```javascript
const handleClick = () => {
        const seconds = simulateIntensiveTask();
        console.log("No more tasks left!");
        console.log("Total milliseconds: " + 1000 * seconds);
}
```

As expected, the task takes a couple seconds to complete and the logs are only shown after the task is completed. Let's instead use an async function.

```javascript
const handleClick = () => {
    simulateIntensiveAsyncTask();
}
```

Now our app doesn't freeze while waiting for the task to get completed, awesome! Let's make absolutely sure that our function is asynchronous.

```javascript
const handleClick = () => {
        const seconds = simulateIntensiveAsyncTask();
        console.log("No more tasks left!");
        console.log("Total milliseconds: " + 1000 * seconds);
}
```

But this results in something unexpected: why is the number of milliseconds NaN? And also, why is "The task took 3.32 seconds to complete. That was intense!" logged after the milliseconds log? Didn't we call `simulateIntensiveAsyncTask()` first? What is going on?

Since `simulateIntensiveTask()` is asynchronous, our code is running out of order! The function doesn't freeze our program and allows for all of the expressions that come after it to be executed before the task is completed. This leads to a problem, though: we don't yet know our seconds value when we log the number of milliseconds! To try to get to the bottom of this, let's take a couple steps back and just log our seconds value.

```javascript
const handleClick = () => {
    const seconds = simulateIntensiveTask();
    console.log(seconds);
}
```

This results in some scary looking think being output to the console: 

```
Promise {
  "_U": 0,
  "_V": 0,
  "_W": null,
  "_X": null,
}
```

Now we know why our example before output NaN, because that is *definitely* not a number. In fact, it's a promise!

### What is a Promise?
A promise is essentially just a wrapper for a value that might be unknown when the promise is created. In the previous example, when we log the number of seconds, we don't yet know how long the task took to complete, so the `seconds` variable must be a promise! That's why when we log `seconds` it prints out what we saw before, rather than a number.

That's great and all, but how can we actually get the value that we want (this is called resolving the promise)? We have a couple ways we can approach it. One is to use `.then()` which can be called on a promise.

> Note: Promises can be rejected.

Going back to our `simulateIntensiveTask()` example, since (as I mentioned before) the function returns a promise we can use `.then()` as follows:

```javascript
const handleClick = () => {
    simulateIntensiveAsyncTask().then(seconds => {
        console.log(seconds);
    })
}
```
What we pass into `.then()` is just a function that takes the resolved value of the promise (i.e. the value after we figure out what it is) as a parameter and then does whatever we want to do with it (in our case logging it to the console).

Alright, awesome! Now everything works as expected. 

## Async/Await
`.then()` is great, but it can get out of hand *really* quickly if you have a couple nested asynchronous actions. Lets instead explore a way of resolving the promise that is a little easier on the eyes, the glorious async/await: 

```javascript
const handleClick = async () => {
    const seconds = await simulateIntensiveAsyncTask();
    console.log(seconds);
}
```

Much cleaner right! Async/await lets you resolve promises while still writing your code in a way that looks similar to synchronous code. It's important to realize that under the hood we are still using promises when using async/await, but our syntax is just a lot nicer! I'll be using async/await for the rest of this workshop. 

Another important thing to note: the `await` keyword can only be used within functions that are declared asynchronous!

Alright, up to this point I've just been simulating intensive tasks, but how might we use async in the real world? Let's take a look.

## JSON
But first, let's do some review of an important Javascript concept: objects!

### Objects

Say we want an object that represents a joke. Each joke has a category, setup, and a delivery. To do so we could write the following: 

```javascript
joke = {
    category: "Pun",
    setup: "Thank you student loans for getting me through college.",
    delivery: "I don't think I'll ever be able to repay you."
};
```

To get each value within our object we can write the following:

```javascript
const category = joke.category; // equals "Pun"
const setup = joke.setup; // equals "Thank you student loans for getting me through college.""
const delivery = joke.delivery; // equals "I don't think I'll ever be able to repay you."
```

OR


```javascript
const category = joke["category"]; // equals "Pun"
const setup = joke["setup"]; // equals "Thank you student loans for getting me through college.""
const delivery = joke["delivery"]; // equals "I don't think I'll ever be able to repay you."
```

> Note: We can also have objects within objects! 

### Object Notation
Very often, it's useful to store these objects as string representations. This string representation of a javascript object is known as JSON, or JavaScript Object Notation. Converting from a JSON value to an object is really easy! To demonstrate here's what our `joke` object would look like as JSON.

```JSON
{
    "category": "Pun",
    "setup": "Thank you student loans for getting me through college.",
    "delivery": "I don't think I'll ever be able to repay you."
}
```

Pretty similar, right? That's what makes JSON so convenient. 

Alright, now that we know what async programming is, how to use it in Javascript with Promises and async/await, and what JSON is, let's put it all together!

## API's and fetch()
An example of an intensive task in the real world would be a network request. A **network request** is a way to get data that isn't stored locally over the internet (i.e. from a server). Very often, we use something called a **Web API** to interface with these servers! Web API's are very powerful in that they let use access data in an easy way! Using a Web API, we don't have to worry about all the details of how that data was produced, all we need to worry about is how we want to use it. In order to trigger a network request in Javascript, we use the `fetch()` function.

That was a lot. Let's break it all down.

### Network Requests
You've probably heard the term being thrown around, but what exactly is a network request? Essentially, it's just a request from an application on your device to get data from some far off computer (typically called a server). Let's take a look at network requests in action on YouTube!

Alright, next up..

### Web APIs
Before we talk about what a Web API is, we should probably discuss APIs in general. Once again, you've probably heard this term thrown around but may not have truly understood what it means. An API (which stands for Application Programming Interface if you care) is simply a predefined way for developers to interact with code that someone else wrote. APIs are very useful because they allow us to use code without having to actually understand how they work. All the details are *abstracted* away.

Think about how you interact with a car while driving: no matter what kind of car it is (assuming its meant for the same country) the controls function the same way. The steering wheel is always used to change direction, the shift stick is used to change gears, the dashboard shows essential information, etc. You don't have to actually know how the car works, you only have to know how to use the predefined interface (and then you'll be able to drive any car). This is exactly how APIs work!

Okay, this is great... but what is a *Web* API? Along the same lines, a Web API also allows you to interact with someone else's code without having to know the details, but it differs in that it typically is accessed through a network request (through a URL).

In order to "talk" with Web APIs, we use something called an HTTP request (essentially a network request that adheres to certain standards set by some nerds a long time ago). An HTTP request of a URL, the method (GET or POST or otherwise), and a header (meta information, such as content type JSON).

Let's take a look at a couple Web API's!
- https://any-api.com
- https://public-apis.xyz
- https://apilist.fun

That was a lot, let's try to keep it simple today `:)`

### `fetch` Function

In order to trigger a network request in Javascript, we use the `fetch()` function. `fetch()` takes an API "endpoint" URL as a parameter and returns a promise (since we don't know how long it's going to take to get the data that we requested!). Since it returns a promise, we're going to have to resolve that promise in order to access the data we want! I'm going to use async/ await.

```javascript
// within an async function
const result = await fetch('https://someurl.com/the-location-of-your-data');
```

After the promise is resolved, there is still one last step! We need to convert the returned object to a Javascript object using `.json()`, another asynchronous function.

```javascript
// within an async function
const result = await fetch('https://someurl.com/the-location-of-your-data');
const object = await result.json();
```

Now, we can access our requested data. Let's show how you might do this in a real project.

### Demo
I want to make an app that gives me a random joke when I click a button.

I took the liberty of setting up some starter code so we can focus on just the async stuff. Feel free to download it and mess around!

Let's make it so that when we press the "Get Joke" button, the joke text is updated with some random joke! We can do this using the fetch function. In order to fetch the joke, we're going to use a free joke API.

It can be accessed through the following link (aka endpoint): [https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit]('https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')

If you open this URL in the browser, you will get something that looks like this:

```json
{
    "error": false,
    "category": "Pun",
    "type": "twopart",
    "setup": "Why shouldn't you visit an expensive wig shop?",
    "delivery": "It's too high a price \"toupee.\"",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "safe": true,
    "id": 268,
    "lang": "en"
}
```

```javascript
const endpoint = "https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

function App() {
  const [joke, setJoke] = useState("Generate a new joke!");

  const getJoke = async () => {
    const result = await fetch(endpoint);
    const json = await result.json();
    setJoke(`${json.setup}\n${json.delivery}`);
  }

  return (
    <div className="App">
      <button onClick={getJoke}>Get Joke</button> <br/>
      {joke}
    </div>
  );
}
```

Alright, this is working pretty nicely! Now I'm going to pass it off to you.

## Your turn
Find an API you like (can be literally anything, check the links above if you need ideas), use fetch and your promise handling method of choice, and display the information from the JSON somewhere. Basically, implement what I just did in the demo except give it your own spin with your own API!



