<!-- omit in toc -->

# Hackschool Session 2: Introduction to JavaScript

**Date**: October 13, 2021

**Location**: Perloff Hall 1102

**Teachers**: [Alex Xia](https://github.com/khxia)

<!-- omit in toc -->
## Resources

- [Slides](https://docs.google.com/presentation/d/1b9-ydhwoD-22aNzxt6CaCn72tMC0JZQLP6WK-lNftMU/edit?usp=sharing)
- [ACM Membership Attendance Portal](https://members.uclaacm.com/login)
- [Workshop Recording](https://youtu.be/v30BzE09geE)

<!-- omit in toc -->
## What we'll be learning today

- [Hackschool Session 2: Introduction to JavaScript](#hackschool-session-2-introduction-to-javascript)
  - [Why JavaScript?](#why-javascript)
  - [JavaScript](#javascript)
    - [`console.log()`](#consolelog)
    - [A note about semicolons `;`](#a-note-about-semicolons-)
    - [Comments](#comments)
    - [Types and Values](#types-and-values)
      - [Numbers](#numbers)
      - [Booleans](#booleans)
      - [Strings](#strings)
      - [Practice](#practice)
    - [Variables](#variables)
      - [Creating Variables](#creating-variables)
      - [Using Variables](#using-variables)
      - [Constants](#constants)
      - [Practice](#practice-1)
    - [Functions](#functions)
      - [Motivation](#motivation)
      - [Function Basics](#function-basics)
      - [Example: `helloWorld`](#example-helloworld)
      - [Example: `helloName`](#example-helloname)
      - [Example: `triple`](#example-triple)
      - [Example: `helloNameWithReturn`](#example-hellonamewithreturn)
      - [Example: `loveAnime`](#example-loveanime)
      - [**Extra:** callbacks](#extra-callbacks)
      - [Practice](#practice-2)
      - [Problem: `animePlanner`](#problem-animeplanner)
    - [Conditionals](#conditionals)
      - [Simple `if` statement](#simple-if-statement)
      - [The `if-else` statement](#the-if-else-statement)
      - [The `if-elseif-else` ladder](#the-if-elseif-else-ladder)
      - [Practice](#practice-3)
      - [Problem: `checkMasks`](#problem-checkmasks)
    - [Objects](#objects)
      - [Object Properties](#object-properties)
      - [Object Values](#object-values)
      - [Accessing Object Properties](#accessing-object-properties)
      - [Modifying/Deleting Object Properties](#modifyingdeleting-object-properties)
      - [Object Methods](#object-methods)
      - [Practice](#practice-4)
      - [Problem: `playerComparison`](#problem-playercomparison)
      - [Extra Problem: `isLegal`](#extra-problem-islegal)
    - [Arrays](#arrays)
      - [What is an Array?](#what-is-an-array)
      - [Accessing Array Elements](#accessing-array-elements)
      - [Basic Array Operations](#basic-array-operations)
      - [Traversing Arrays](#traversing-arrays)
      - [The `for-of` loop](#the-for-of-loop)
      - [Practice](#practice-5)

## Why JavaScript?

Before we learn about JavaScript, let's talk about why we're learning it! Last
week we learned that websites are built with HTML, CSS, and JavaScript. JavaScript
is used to make interactive elements on a webpage.

## JavaScript

Today we'll be learning the foundations of JavaScript in preparation for future workshops!

To execute lines of JavaScript, we'll be using the Chrome Developer Tools:

1. Open a tab in Google Chrome
2. Right click and press Inspect
3. Select the "Console" tab (don't worry if you see some red warnings or output)

![](images/console.png)

To execute a line of code, type it into the console and press "Enter". 

Some important things about the console:
- When you type JavaScript into the console, it will show the result/value of your
  code before you press enter. For example:

  ![](images/console2.png)
- When you run lines of JavaScript in the console, the console "remembers" the
  previous lines you've run in the session.
- You can use your "up" arrow to find and run previous lines of code you've run.

<!-- omit in toc -->
### Before we get started...

We highly recommend **against** trying to code along in your own console, since
it might be hard to absorb what we're saying if you're trying to code at the
same time! Instead, we recommend you take some notes about any concepts that
are new to you, since you can always review the code we wrote at a later time.

This is a lot of material, especially if you're new to programming (the
concepts we're teaching this workshop would usually take multiple CS 31
lectures to cover). It's totally ok and normal if you feel lost or don't get
everything we teach during the workshop. Just try to get however much you can,
and know that learning how to code is a long process that you should take at
your own pace!

### `console.log()`

Throughout this workshop, we'll be using `console.log()` to print stuff out to
our console. This prints out whatever we put inside the parentheses. For example,
`console.log("Hello, world!")` will print `Hello, world!` to the console.

### A note about semicolons `;`

Usually we append a semicolon `;` at the end of every expression in JavaScript. An expression is any block of code that evaluates into something. Usually, this would be a single line of code, eg. `5 + 5;`. 

You can think of an expression as a sentence in English, and we always need to use a full stop (.) to finish our sentence. Similarly, we also need a semicolon `;` to end our expressions. 

Although using a semicolon is actually **optional** in JavaScript (most of the time), generally we recommend **always** adding a semicolon at the end of your expressions.

### Comments

In JavaScript, there are two ways to write comments:

```js
// This is a single line comment.

/*
This is a
multiline comment
*/
```

Comment don't affect how the code runs, but can be useful for "annotating"
your code.

### Types and Values

In JavaScript, there are several basic types of values we can use: numbers,
booleans, and strings. You can think of these types as different categories of values, and we call these **types**.

#### Numbers

Numbers consist of any sort of numbers that you see in daily life, these include whole numbers or integers, decimals, negative numbers, and even scientific notation too.

```js
420         // integers
3.14159263  // decimals
-273.15     // negative numbers
6.02e23     // we can use scientific notation, too!
```

We can also perform operations on values:

```js
/* arithmetic */
> 6 + 9   // addition
< 17

> 6 - 9   // subtraction
< -3

> 6 * 9   // multiplication
< 54

> 6 / 9   // division
< 0.6666666666666666
```

```js
/* comparision */
> 5 === 6   // equality
< false

> 5 !== 6   // inequality
< true

> 5 < 6     // less than
< true

> 5 > 6     // greater than
< false

> 5 <= 6    // less than or equal to
< true

> 5 >= 6    // greater than or equal to
< false
```

At first sight, the triple equals sign `===` and the exclamation mark followed by the triple equals sign `!==` might look super confusing, but all they do is to check if both sides are equal/not equal.

Note: If you're familiar with other programming languages (like C++, Python,
etc.), you might be wondering why we use `===` and `!==` in JavaScript instead
of `==` and `!=`. In JavaScript, `===` and `!==` are not the same as `==` and `!=`. We recommend you always use `===` and `!==` when writing JavaScript.

#### Booleans

Booleans can only have two values: `true` and `false`. We can use logical operators
with booleans: "NOT" (`!`), "AND" (`&&`), and "OR" (`||`). 

These logical operators work very much like English.
* `A AND B` is only `true` if A **AND** B is `true`
* `A OR B` is `true` if either A **OR** B is `true`
* If `A` is `false`, then `NOT A` is `true`. Because `true` is the only other value that is **NOT** `false`.

![](images/truth_table.png)

```js
/* NOT */
> !true
< false

> !false
< true

/* AND */
> true && true
< true

> true && false
< false

> false && false
< false

/* OR */
> true || true
< true

> true || false
< true

> false || false
< false
```

What does: 
```js
(!true && false) || ((!false || !true) && true);
``` 
evaluate to?

#### Strings

A string is just a sequence of characters inside of quotes. Either
single quotes or double quotes will work (in some other programming languages,
single quotes and double quotes mean different things).

```js
"1234"
"I love anime"
"Halloween is approaching!! ooOoOOo scary"
```

We can concatenate (join) strings together using the `+` operator:

```js
> "My favorite anime is " + "Naruto"
< "My favorite anime is Naruto"
```

We can also compare strings for equality/inequality (this comparison is
case-sensitive):

```js
> "Hello" === "Hello"
< true

> "HI" !== "hi"
< true
```

#### Practice

What will get printed in each of these questions? (Try to figure it out
without actually running the code.)

1. `console.log(1 + 11)`
2. `console.log("1" + "11")`
3. `console.log("hello" !== "HELLO")`
4. `console.log(5 === 8)`
5. `console.log(!true)`
6. `console.log((4 < 6) && (8 !== 10))`

<details>
   <summary>Solutions:</summary>
   <ol>
      <li><code>12</code></li>
      <li><code>111</code></li>
      <li><code>true</code></li>
      <li><code>false</code></li>
      <li><code>false</code></li>
      <li><code>true</code></li>
   </ol>
</details>

### Variables

Sometimes it can be convenient to store a value and reuse it without having to
type the same value over and over again. It can also be convenient to give
certain values names that describe what they are.

This is what variables are used for! Variables give us a way to refer to values
by a name.

#### Creating Variables

We can **declare** a variable using `let`:

```js
let name;
// note: in JavaScript, the semi-colon (;) is optional
// we will always use it in order to be consistent
```

We can then **assign** a value to the variable using `=`:

```js
name = "Alex";
```

We can also **change** a variable's value using `=` to re-assign the value:

```js
name = "Eric";
```

We can also declare a variable and assign it a value in a single line:

```js
let age = 19;
```

#### Using Variables

```js
let myName = "Alex";
console.log("Hello, " + myName);

let x = 2;
console.log(x * x);
```

#### Constants

If you don't want your variable's value to change, you can declare it using
the `const` keyword instead of `let`:

```js
const pi = 3.14;
```

If you later try to assign a new value to this constant, you'll get an error.

```js
> pi = 3.141592653;
< Uncaught TypeError: Assignment to constant variable.
```

#### Practice

What will be printed to the console in each of these questions?

1. ```js
   let width = 10;
   let height = 2;
   console.log(width * height);
   ```
2. ```js
   let iLoveAnime = true;
   let animeIsGood = true;
   console.log(iLoveAnime && animeIsGood);
   ```
3. ```js
   let today = "Wednesday";
   console.log("Today is " + today);
   ```
4. ```js
   let uclaScore = 100;
   let uscScore = 0;
   console.log(uclaScore > uscScore);
   ```

<details>
   <summary>Solutions:</summary>
   <ol>
      <li><code>20</code></li>
      <li><code>true</code></li>
      <li><code>Today is Wednesday</code></li>
      <li><code>true</code></li>
   </ol>
</details>

### Functions

#### Motivation

Imagine I want to write some code to print a bunch of different animes I like.
I might write something like this:

```js
console.log("I really like Naruto.");
console.log("I really like Demon Slayer.");
console.log("I really like Cross Game.");
console.log("I really like Promised Neverland.");
console.log("I really like Your Lie in April.");
// ... you get the idea
```

You can see there's a lot of repetition here! What if I wrote all this code and
then decided I wanted them all to say "I genuinely adore", instead of "I really like"? Then
I'd need to edit every single line to reflect those changes. That'd be a total
pain!!

#### Function Basics

That's where functions come in!

A function is something that performs an action (this sounds horribly vague,
but hopefully some examples help clear things up). A function can have inputs
(we call them **arguments**), and a function can have an output (we then say
that it **returns** a value).

Let's see what functions look like! There are two ways to write functions in
JavaScript:

```js
// first way
const myFunction = (arg1, arg2) => {
  // stuff the function does
};

// second way
function myFunction(arg1, arg2) {
  // stuff the function does
};
```

In this workshop we will be using first way! Let's take a closer look at each
part of the function:

```js
const myFunction = (arg1, arg2) => {
  // stuff the function does
};
```

- "`const myFunction =`": declares a constant named "myFunction", and assigns it
- "`(arg1, arg2)`": names the two arguments the function accepts
- "`=>`": I think of the arrow as saying "goes to"
- the function's body goes inside the braces: this is where the actual work happens
- remember the semi-colon at the end!

#### Example: `helloWorld`

Let's write a function named `helloWorld` that prints "Hello, world!":

```js
const helloWorld = () => {
  console.log("Hello, world!");
};
```

Note that this function does not take in any arguments, but we still include the
parentheses!

Let's try calling (using) the function. We do this by saying the function name
followed by parentheses:

```js
helloWorld();
```

#### Example: `helloName`

Let's write a function called `helloName` that says hello to a name that we pass in:

```js
const helloName = (name) => {
  console.log("Hello, " + name);
};
```

Now we'll call our function. Since the function needs an argument, we'll give
it an argument in the parentheses:

```js
helloName("Alex");
```

#### Example: `triple`

Let's write a function named `triple` that triples a numeric input:

```js
const triple = (x) => {
  x * 3;
};
```

Now let's call (use) the function to compute what triple 5 is:

```js
> triple(5);
< undefined
```

Uh oh, all we got back was undefined! What happened? We never returned the answer
in our function! Let's fix that:

```js
const tripleWithReturn = (x) => {
  return x * 3;
};
```

Now when we call the function, it returns a value!

```js
> tripleWithReturn(5);
< 15
```

However, we can't do much with the value, since we don't save it anywhere. Let's
make a variable that stores the answer so we can use it later:

```js
const tripleFive = tripleWithReturn(5);
console.log(tripleFive);
```

Remember to always return a value in your function if you want to use it later!

#### Example: `helloNameWithReturn`

Let's write another version of `helloName`, but instead of printing the message,
return it!

```js
const helloNameWithReturn = (name) => {
  return "Hello, " + name;
};
```

```js
const msg = helloNameWithReturn("Alex);
console.log(msg);
```

#### Example: `loveAnime`

Let's write a function to solve [our problem from earlier](#motivation):

```js
const loveAnime = (anime) => {
  console.log("I really like " + anime + ".");
};
```

Now I could proclaim my love for anime like this:

```js
loveAnime("Naruto");
loveAnime("Demon Slayer");
loveAnime("Cross Game");
loveAnime("Promised Neverland");
loveAnime("Your Lie in April");
```

If I decided I wanted it to say "I genuinely adore ..." instead, I would only
need to edit a single line in the function!

#### **Extra:** callbacks

Fun fact: you can actually pass a function as an argument into another function:

```js
const sayHello = () => {
  console.log("Hello");
}

const introduce = (ifGreet, greet) => {
  if (ifGreet) {
    greet();
  }
  console.log("My name is Alex");
}

introduce(true, sayHello);
// Hello
// My name is Alex

introduce(false, sayHello);
// My name is Alex
```

Passing a function to be called inside of another function is a common thing you'll see in JavaScript and web development in general. This is very useful, because often times in web development, you may write certain code that you want to be executed, but have no control over when it gets executed. 

> **Eg.** You write a function that does something when a button gets clicked, but you don't know when the user will click the button, hence, you need some way of telling the browser what to run when the user clicks this button. The common thing to do is to pass the  function that you wrote into another function that will ensure that your function gets called when the user clicks the button.

This type of function is called a **callback** function.
#### Practice

What will get printed when the code in each question is run?

1. ```js
   const foo = (n) => {
     return n + 2
   };

   const mystery = (n) => {
     return foo(n * 2) + foo(n)
   };
   console.log(mystery(10));
   ```
2. ```js
   const peep = (s) => {
     console.log(s + " peep");
     return "peep";
   };

   const baz = (s) => {
     console.log(peep(s));
   };

   baz("Alex");
   ```
3. ```js
   const yep = (n) => {
     return n + 2;
   };
   const oh = (n) => {
     return n * 3;
   };
   const pop = (n) => {
     return n - 7;
   };
   const yop = (y, o, p) => {
     return yep(y) + oh(o) + pop(p);
   };

   console.log(yop(5, 2, 3));
   ```
4. ```js
   const nah = (s) => {
     console.log(s + s);
   };
   const nope = (s) => {
     console.log(s + "!!!");
   };
   const no = (en, oh) => {
     nah(oh);
     nope(en);
   };
   no("jam", "bred");
   ```

<details>
   <summary>Solutions:</summary>

   1. `34`
   2. ```
      "Alex peep"
      "peep"
      ```
   3. `9`
   4. ```
      "bredbred"
      "jam!!!"
      ```

</details>

#### Problem: `animePlanner`

Let's write a function called `animePlanner` that has two arguments:
- `totalHours`: how many hours I can spend on watching anime today
- `currentMinutes`: the number of minutes I've already watched anime today

The function should print out how many episodes of anime I can still watch today. 
(Fractions of episodes is fine too). Each episode of anime is 20 minutes.

<details>
<summary>Solutions:</summary>

```js
const animePlanner = (totalHours, currentMinutes) => {
  const totalMinutes = totalHours * 60;                   // how many minutes do I have have total in a day
  const remainingMinutes = totalMinutes - currentMinutes; // how much time (in minutes) do I have left
  const canWatch = remainingMinutes / 20;                 // how many episodes I can watch
  console.log("You can watch " + canWatch + " more episodes.");
};
```
</details>

Note: 
- In our `console.log`, we added a number to strings! This works because JavaScript
  converts the number to a string and the joins the strings together.
- We can create variables inside of our functions! This can make it easier to
  read and understand what our function does. Try to give your variables and
  functions informative names to make them easier to understand.

Let's try calling our function:

```js
animePlanner(2, 30);
```

### Conditionals

In programming, conditionals are a tool used to define branching paths in the code. The path taken depends on the result of some condition.

In a more tangible sense, you can think of this as decision making based on dyanmic factors. For example, if you were considering whether or not to study for a class, one of the factors you might consider is whether you have an exam coming up soon. If you do have an exam soon, you will choose to study, otherwise you will go watch anime.

Let's take this concept and see how it is applied in the code!

#### Simple `if` statement

The most basic way to introduce a conditional is using the `if` statement. The syntax for this looks like:

```js
if (condition) {
	// actions if true
}
```

Here, the `condition` refers to some true/false value. So any expression that would evaluate to either true or false could act as a condition (ex: `false`, `1 < 2`, `"a" === "a"`, etc).

The `if` statement essentially says to run the following code if the `condition` evaluates to true.

#### The `if-else` statement

The `if-else` statement is very similar to the `if` statement, but it also supplies the code that should run if the `condition` evaluates to false.

Here's a look at the syntax:

```js
if (condition) {
	// actions if true
} else {
	// actions if false
}
```

This pattern is more in line with our analogy of studying vs watching anime. If the `condition` is whether an exam is coming up, we will choose to either study or watch anime based on the result of that `condition`.

#### The `if-elseif-else` ladder

Finally, if we have a lot of different conditions to test and a lot of different actions corresponding to each condition, then we want to use an `if-elseif-else` ladder.

As the name implies, this pattern often looks like a ladder in the code. As shown below:

```js
if (cond1) {
	// actions if cond1 is true
} else if (cond2) {
	// actions if cond2 is true
} else if (cond3) {
	// actions if cond3 is true
} else {
	// actions if none are true
}
```

The way this code executes is top-down. First, the `if` condition will be tested and if it evaluates to `true`, the corresponding code block will run. If it evaluates to `false`, we try the next `else-if` condition and run the corresponding code if `true`. This process repeats until either one of the conditions evaluates to `true` or we get to the `else` block. Getting to the `else` means that none of the previous conditions were true.

NOTE: Using an `if-elseif` ladder implies that all of the different paths are mutually exclusive. Only one of the code blocks will actually run, after that we move on past the conditional statements. This means that if any of the conditions evaluates to `true` we do not keep testing the next condition, we just move on with the rest of our program.

#### Practice 
What is the output of the following pieces of code?

1. ```js
   const greeting = "hi"
   if (greeting === "hi") {
     console.log("hello!");
   }
   ```
1. ```js
   let testScore = 50;
   if (testScore > 60) {
     console.log("You passed!");
   } else {
     console.log("You failed :(");
   }
   ```
1. ```js
   let testScore = 95;
   if (testScore >= 90) {
     console.log("You got an A!");
   }

   if (testScore >= 80) {
     console.log("You got a B!");
   }

   if (testScore >= 70) {
     console.log("You got a C");
   }

   if (testScore >= 60) {
     console.log("You got a D");
   }

   if (testScore < 60) {
     console.log("You failed :(");
   }
   ```

1. ```js
   let testScore = 80;
   if (testScore >= 90) {
     console.log("You got an A!");
   } else if (testScore >= 80) {
     console.log("You got a B!");
   } else if (testScore >= 70) {
     console.log("You got a C");
   } else if (testScore >= 60) {
     console.lof("You got a D");
   } else {
     console.log("You failed :(");
   }
   ```

<details>
  <summary>Solutions: </summary>
 
 1. `"hello"`
 2. `"You failed :("`
 3. ```
    "You got an A!"
    "You got a B!"
    "You got a C"
    "You got a D"
    ```
4. `"You got a B!"`

</details>

#### Problem: `checkMasks`
You work for the new gym at UCLA Bruin Gym (bgym for short). 
You are in charge of walking around the gym periodically and
checking to see if students are wearing their masks properly in the gym. 
At any time, if you observe that less than 80% of people are not wearing their masks, 
you are required to do an announcement on the PA system.

For this exercise, write a function called `checkMasks` that takes in three arguments:
1. `totalPeople`: How many people are in the gym currently
2. `maskCount`: How many people are currently wearing masks
3. `announcment`: Some message string telling people to wear their masks

If there are more than or equal to 80% of people wearing masks, you function should print nothing and return `false`.
If there are less than 80% of people wearing masks, your function should print the `announcment` string, and then return true. 

<details>
  <summary>Solutions: </summary>
 
```js
const checkMasks = (totalPeople, maskCount, announcment) => {
    if (maskCount / totalPeople >= 0.8) {
        return false;
    } else {
        console.log(announcment);
        return true;
    }
};

checkMasks(60, 53, "All Bruins, please mask up :).");
```

</details>

### Objects
So far, we've only dealt with individual values being stored in variables for later use. But sometimes it is useful for us to want to keep a lot of related data together. For example, if you were recruiting for your club, you might want to group all of an applicant's information together.

We can do this by creating an object in JavaScript, which looks like this:

```js
const applicant = {
	email: "exampleemail@example.com",
	gpa: 3.0,
};
```
First of all, we note that we can create an object by using these {} symbols. So whenever you see some code with this same form, you know it's an object.

Let's break down the parts of this object so we can better understand how it works.

#### Object Properties

Every object consists of a set of key-value pairs. We refer to these keys as properties.

For example, the following object has two properties, `email` and `gpa`.

```js
const applicant = {
	email: "exampleemail@example.com",
	gpa: 3.0,
};
```

Properties can have any name you want, but often act as an appropriate label for the data it corresponds to.

#### Object Values

Every property in an object is associated with a value. This is the actual data being stored in the object.

In the same example, the value corresponding to the `gpa` property is `3.0`:

```js
const applicant = {
	email: "exampleemail@example.com",
	gpa: 3.0,
};
```

Object values can be of any type: number, string, boolean, etc. We can even have another nested object inside!


#### Accessing Object Properties
Now that we have all this data inside of an object, how do we "get a hold of" it? For example if we now want to store an individual item in the object inside a variable.

There are two ways of accessing an object properties: dot notation and bracket notation. Let's take a look at the syntax of each one.

Dot Notation:
```js
// myobj.propertyName
let gpa = applicant.gpa;
console.log(gpa); // prints "3.0"
```

Bracket Notation:
```js
// myobj["propertyName"]
let gpa = applicant["gpa"];
console.log(gpa); // prints "3.0"
```

#### Modifying/Deleting Object Properties
We can also use the dot and bracket notations to modify or remove properties within an object.

Dot Notation:
```js
// change email property
applicant.email = "joebruin@ucla.edu";
console.log(applicant.email); // prints "joebruin@ucla.edu"

// remove gpa property
delete applicant.gpa;
console.log(applicant); // gpa property gone
```

Bracket Notation:
```js
// change email property
applicant["email"] = "joebruin@ucla.edu";
console.log(applicant["email"]); // prints "joebruin@ucla.edu"

// remove gpa property
delete applicant["gpa"];
console.log(applicant); // gpa property gone
```

#### Object Methods
In some cases, it also makes sense to associate certain actions with an object. This is where object methods come in. An object method is essentially just a function attached to a specific object.

To use our previous example of having an applicant object, we can define the following:
```js
const applicant = {
	email: "exampleemail@example.com",
	gpa: 3.0,
	accept: () => {
		console.log("Congrats on being accepted!");
	}
}
```

Now our applicant object has an associated `accept` method, likely representing a recruiter's choice to accept them for the applied position.

We can call this method using dot notation:
```js
// obj.methodName()
applicant.accept(); // prints "Congrats on being accepted!"
```

That's all the basics of objects, if you want to learn more you can visit the docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics).

#### Practice 
In all of the below questions, use the following object to determine the output:
```js
  const student = {
    name: "Joe Bruin",
    email: "joebruin@ucla.edu",
    UID: 123456789,
    isTrueBruin: true,
    favDiningHall: "BPlate"
  }
```

1. ```js
   console.log(student.name);
   console.log(student["UID"]);
   ```
2. ```js
   if (student.isTrueBruin) {
     console.log("Let's do an 8-clap for " + student.name + "!");
   } else {
     console.log("Check out our True Bruin traditions to become a True Bruin! Be True Be You!");
   }
   ```
3. ```js
   const goEatLunch = (diningHall) => {
     console.log("I love to eat at " + diningHall);
   }
   goEatLunch(student.favDiningHall);
   ```
4. ```js
   student.name = "Josie Bruin";
   student.UID = 987654321;
   console.log(student);
   ```

<details>
  <summary>Solutions:</summary>

  1. ```
     "Joe Bruin"
     "123456789"
     ```
  2. `"Let's do an 8-clap for Joe Bruin!"`
  3. `"I love to eat at BPlate"`
  4. ```js
     {
       name: "Josie Bruin",
       email: "joebruin@ucla.edu",
       UID: 987654321
     }
     ```

</details>

#### Problem: `playerComparison`
In a multiplayer video game, each player has an object like so:
```js
const playerTenz = {
    username: "TenZ",
    health: 100,
    armor: 50
}

const playerEugene = {
    username: "euglo", // what a scrub
    health: 2,
    armor: 0
}
```

At any point in time, our game wants to know who currently has the highest health and armor combined.
(Health + Armor) is a directly proportional to skill. Eg. since euglo has a combined health+armor of 2, he sucks lul.
As part of this, we want to write a function `playerComparison`, that takes in two arguments: 

1. `player1`: a player object
2. `player2`: another player object

The function will return the username of whoever has the most health and armor combined. 
In the event that the health and armor combined are the same, we want to return the string `"Equal"`.

<details>
  <summary>Solutions:</summary>

  ```js
  const playerComparison = (player1, player2) => {
      if (player1.health + player1.armor > player2.health + player2.armor) {
          return player1.username;
      } else if (player1.health + player1.armor < player2.health + player2.armor) {
          return player2.username;
      } else {
          return "Equal";
      }
  };

  const playerTenz = {
      username: "TenZ",
      health: 100,
      armor: 50
  }

  const playerEugene = {
      username: "euglo", // what a scrub
      health: 2,
      armor: 0
  }

  playerComparison(player1, player2);
  ```
</details>

#### Extra Problem: `isLegal`

You are working at a Ralph's in Westwood. At 1am, some sus UCLA students pull up wanting to buy some alchohol. 
You are not sure if they are legal
or not. 
You ask the students for their ID to check their age, 
but it turns out that these students are CS nerdz - they have their ID in digital format.
Worst of all, this ID is stored as a JavaScript Object (yuck~). 

But oh well, you gotta get your job done. 
So you will need to write a JavaScript function, `isLegal`, that takes in an `id` as an argument, and returns true if that student is over 21, 
or false if that student is below 21.

Examples of student IDs:

```js
let id1 = {
    name: "Eugene Lo",
    DOB: new Date(1990, 11, 17)
}

let id2 = {
    name: "Asha Kar",
    DOB: new Date(1990, 11, 17)
}
```

For this problem, you will want to take a look at the [MDN Documentation for a Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Have fun!

<details>
<summary>Solution:</summary>

```js
const isLegal = (id) => {
    const currentTime = new Date(); // gets the current time
    const birthDate = id.DOB.getDate();
    const birthMonth = id.DOB.getMonth();
    const birthYear = id.DOB.getFullYear();
    const currentDate = currentTime.getDate();
    const currentMonth = currentTime.getMonth();
    const currentYear = currentTime.getFullYear();

    if (birthYear + 21 < currentYear) {
        return true;
    } else if (birthYear + 21 === currentYear) {
        if (currentMonth > birthMonth) {
            return true;
        } else if (currentMonth === birthMonth) {
            return birthDate <= currentDate;
        } else {
            return false;
        }
    }
    return false;
};

let id1 = {
    name: "Eugene Lo",
    DOB: new Date(2000, 9, 11)
}

isLegal(id1);
```
</details>

### Arrays
So now with objects we have a way to group related data together in a meaningful way (using key-value pairs). But this does not always make sense to do. For example if we ran a restaurant and collected rating scores out of 5 stars, it wouldn't make as much sense to assign some label/key to each rating. That would look something like:
```js
const ratings = {
	rating1: 3,
	rating2: 5,
	rating3: 4
	// and so on
}
```

In these situations where we want to store a large amount of related data but don't necessarily need meaningful labels for each piece of data, we can use arrays.

#### What is an Array?
An array can be simply described as a collection of values stored in a sequential manner. Each item in an array is usually referred to as an **"element"**. 

Here are some examples of what arrays can look like:
```js
let arr = []; // empty array
let ratings = [3, 5, 4, 4];
let stores = ["Ralphs", "Target", "Trader Joe's"];
let randomItems = [42, "Lightning McQueen", false, 365.25];
```

#### Accessing Array Elements
Just like with objects, we can access the individual items within an array. However, since arrays do not have keys, we use indices to access array elements.

An array index is just a number which references the element being accessed. Indices start as zero, as shown below:

![](images/array_index.png)

So if I wanted to get the first element of some array, I would write something like this:
```js
let index = 0;
let arr = [1, 2, 3, 4];
let firstElement = arr[index];
console.log(firstElement); // prints "1"
```

#### Basic Array Operations
Here are some operations you can perform on JavaScript arrays. You can learn more about arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

- `arr.length`: gives the number of elements in the array
- `arr.push(someValue)`: add an item to the end of the array
- `arr.pop()`: remove the last item from the array
- `arr.indexOf(someValue)`: get the index of a specific element in the array

#### Traversing Arrays
Often times when we have data in arrays, we will need to go through each element and do something with each one. For example, if we have an array of test scores, we might want to sum up all the test scores so that we can calculate an average!

Therefore, we need to introduce a new tool to help us go through arrays element by element (traverse arrays).

#### The `for-of` loop
We can use a tool called a loop to accomplish the task of traversing an array. It is called a loop since the code inside of it will repeat for every element in an array. Let's see what that looks like!

```js
for (const element of myArray) {
	console.log(element); // prints a new element each iteration
	//other statements
}
```

Above is an example of how we would use a `for-of` loop on an array. Let's break this down.

The first part of the `for` statement creates a variable called `element`. This variable will be used to reference the different elements in the array as the loop runs.

![](images/for-of-1.png)

We then reference which array we want to loop through:

![](images/for-of-2.png)

Everything in the following code block is called the "loop body" and will run each time the loop repeats.

![](images/for-of-3.png)

To read this statement literally, you can say "for every element of myArray, perform the following actions".

To illustrate what this is doing, let's take a look at an example with our `testScores` array:
```js
let testScores = [89.9, 45.2, 68.4, 77.5];
for (const score in testScores) {
	console.log(score);
}
```

The loop shown is going to run once for every element in the `testScores` array (so 4 times). The first time the loop body runs, `score` will take the value of `89.9` (the first element in the array). We log the score to the console, outputting "89.9". 

The loop then repeats, this time `score` takes the value of the second element: `45.2`. We log again, and this process repeats.

In this way, we can go through our entire array element by element and perform the same actions on each one no matter how large our array is.

If you imagine our `testScores` array containing 1000 different test scores, then using this loop would be much easier than accessing each element individually using the `testScores[index]` method.

#### Practice
What is the output of the following code?

1. ```js
   const monthlyExpenses = ["150.30", "215.70", "170"];
   console.log(monthlyExpenses[1]);
   monthlyExpenses.push("240");
   console.log(monthlyExpenses.length);
   ```
2. ```js
   const ratings = [2, 5, 3, 4, 2];
   console.log(ratings[ratings.length - 3]);
   ```
3. ```js
   const greetings = ["hi", "yo", "what is up?", "what's gucci"];
   greetings.pop();
   for (greeting of greetings) {
     console.log(greeting);
   }
   ```

<details>
  <summary>Solutions: </summary>

  1. ```
     "215.70"
     "4"
     ```
  2. `"3"`
  3. ```
     "hi"
     "yo"
     "what is up?"
     ```

</details>

#### Problem: `calculateAverage`
You are the new CS professor at UCLA. Although you don't have as much teaching experiences compared to the likes of Smallberg, Nachenberg, or Eggert,
you still want to do a good job of teaching.
Hence, you devise a new method of rewarding your students:
If the average of all their midterm test scores is larger than 75, then you will give them all A's.
Else, you will dish out more homework.

Write a function, `calculateAverage`, that takes in an array of numbers (`scores`), and returns the average of all the numbers.

<details>
  <summary>Solutions: </summary>
  
  ```js
  // method 1
  const calculateAverage = (scores) => {
      let total = 0;
      for (const score of scores) {
          total = total + score;
      }
      return (total/scores.length);
  };

  // method 2: This is method does the exact same thing
  // but uses more complicated programming concepts.
  // If you don't understand this don't worry because
  // you won't need to! (unless you take CS 131)
  const calculateAverage = (scores) => {
      let total = scores.reduce((accumulator, current) => {
          return accumulator + current;
      }, 0);

      return (total/scores.length);
  };

  const midterm1Results = [80, 70, 90, 100, 40, 74, 88];

  calculateAverage(midterm1Results);
  ```
</details>
