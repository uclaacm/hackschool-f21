# Hackschool Session 1: Introduction to HTML/CSS

**Date**: October 6, 2021

**Location**: Perloff Hall 1102

**Teachers**: [Eric Yang](https://github.com/eric8yang), [Nareh Agazaryan](https://github.com/nareha)

## Resources

- [Slides](https://docs.google.com/presentation/d/10WVk3ZjcXkYrOL-PSdeAYcVhKK7VcZScHgwuxXsqTMM/edit?usp=sharing)
- [ACM Membership Attendance Portal](https://members.uclaacm.com/login)
- [W3Schools (Quick reference to HTML and CSS properties)](https://www.w3schools.com/html/default.asp)

## What we'll be learning today
- [CSS](#css)

---

## CSS

While HTML allows us to put content on the page, it doesn't look that great by default! It's very rare that you will see web pages without any styling at all. To accomplish this styling and to make our websites look prettier, we use CSS.

### What is CSS?

**Cascading Style Sheets**, commonly abbreviated as **CSS**, is a style sheet language that lets you customize the presentation of a web page.

**Style sheets** simply means a group of style rules that change how the web page is presented, which we can add to the HTML tags we learned about. We will visit what cascading in this context means later on.

### CSS Rules

A CSS rule is the code that will tell your webpage how to look. Each rule has three parts to it: a **selector**, **properties**, and **values** for those properties. Let's take some sample code below. Don't worry about what we've specifically put for the properties and values, we'll analyze those soon.

```css
body {
  color: blue;
}
```

Let's dissect each portion of this rule.

#### Selector

The selector of a CSS rule is what defines which HTML tag we are styling. The "selected" tags will have those specific rules applied. In the code above, anything within the body tags will be styled with those rules. Any HTML tags that we have covered can be using here, such as `<p>`, header tags like `<h1>`, and even links with the `<a>` tag.

#### Properties

Properties are certain characteristics about that HTML element that can be modified to your desired style. In the example above, we're modifying the color of the text within the body tag. Properties are put first on the line, then followed with a colon to signify where the value will be specified. Make sure to end each line in a semicolon (;) to separate multiple properties.

> There are *many* different CSS properties that can be modified. It is **not** advised to attempt to memorize the CSS rules. Here are a few very frequently used ones. We'll explore some of these in examples, but feel free to get familiar with the different ways in which elements can be modified.
> - Properties that modify text: `text-align`, `font-size`, `font-family`, `color`
> - Properties that modify sizing: `width`, `height`, `padding`, `margin`
 
[Here's a full list of CSS properties](https://www.w3schools.com/cssref/), with examples for each. 

#### Values

Properties cannot be modified without specifying how they will be changed! Values are numbers or other options that can be chosen and given to a certain property, which will be then applied to a selected HTML tag. Each property has specific values that can be given, which can be found within the reference pages as well (and do not have to be memorized either!).

In our above example, all the text in the **body** tag will be given the **color blue**!


### CSS Classes and IDs

We've covered the basics of CSS, and you're already on your way to being a CSS pro! However, what if you didn't want to edit the entirety of the body? What if you wanted to style different parts of the body a certain way, or even different sentences of a paragraph? As you may have expected, this is possible! You aren't only restricted to the containers of the HTML tags, you can give certain parts of your page their own stylings as well! This is where **classes** and **IDs** come in, and where we'll finally understand the concept of cascading!

#### CSS Classes

Classes are groups of elements that can be given the same style rules! This is particularly convenient because you aren't bound to a single element type and can use the same style rules on many different types of elements. There is no limit to how many elements can have a class, and a single element can have many classes as well. This lets two bodys have completely different stylings, as opposed to all bodys having the same styling rules, similar to what we defined in the previous example.

As an example, you give an HTML element a class in this manner:

```html
<div class="sample-class">...</div>
```

Note that this is done within the *HTML* file. Within your CSS file, you define all the rules of the class itself. A class could look like the following, for example:

```css
.sample-class {
  color: purple;
  text-align: center;
}
```

It looks very similar to how we defined style rules for HTML elements, except the class name is prefixed with a period.

Note that just as shown with some of the properties, in CSS we typically write things in all lowercase, and for names, we separate multiple words with dashes. You can technically name your classes anything you want, but it's highly recommended to name them something that will help you recognize what that class is being used for, so that you can use them more easily!

#### CSS IDs

IDs act similarly to classes. An ID will allow you to give a specific element stylings within the ID. However, while classes can be applied to *many* different elements, IDs can only be given to *one* element.

As an example, you give an HTML element a class in this manner:

```html
<div id="sample-id">...</div>
```

Note that this is done within the *HTML* file. Within your CSS file, you could define this ID in the following way:

```css
#sample-id {
  color: green;
  font-size: 36px;
}
```

An ID is defined by a # in front of the ID name. Note that just like with classes, it's highly recommended to name them something that will help you recognize what that ID is for.

Now, let's revisit and understand what cascading refers to. What would happen if body was defined multiple times within the same file? For example,

```css
body {
  color: pink;
}
body {
  color: green;
}
```

Well, due to CSS's **cascading**, the rules will be applied in the order that they are written, meaning the body will have the green value, not pink! It "cascades" down to the last definition of the body, and uses that value instead.

In a related note, it's important to talk about specificity as well, another feature of CSS. What would happen in the following code block, assuming both the `<p>` tag, as well as the class and ID have been given CSS rules?

```html
<p class="chicken" id="turkey">...<p>
```
In this case, the rules for the ID will be used!

**Specificity** refers to the way which CSS determines which rules to follow. It flows from the most general rules to the most specific rules, and uses the most specific style rules applied to that element. The hierarchy is defined by the following:

1) IDs are given highest priority. These rules will be followed first.
2) Classes are second. These will be followed if there are no IDs for that specific element.
3) Any general stylings, i.e. a styling applied to `<body>`, will be followed last.

Be aware of these when assigning IDs, classes, or even general rules to your HTML elements! It's easy to get stuck because the specific thing you're trying to change does not have precedence over some other styling rules (i.e., you may be trying to edit a class while there is an ID preventing one of the elements from being updated by that change to the class)!

### Combining Selectors

To get even more specific groups of elements for styling, you can combine different selectors! While there are multiple ways to do so, there are a few notable and frequently used ways to do so. For these examples, the way to combine them is by simply writing the names next to each other.

#### Element tag + Class

One way to combine selectors is to put an HTML element tag and a class together!

```css
p.largetext {
  font-size: 60px;
  color: purple;
}
```

Any element within our HTML file that had a `<p>` tag and that class name given to that element would take on these specific rules!

#### Class + Class

Very similarly, we can combine classes! Just as with elements and classes, any element with both of these class names given to that element will have these rules applied.

```css
.superlargetext.yellingtext {
  font-size: 100px;
  text-transform: uppercase;
}
```
To apply two classes to an HTML tag, you would write it as the following.

```html
<div class="superlargetext yellingtext">...</div>
```

## Conclusion

Here are all the main things to get you started on CSS! Go out and create your own site, whatever you would want, and customize it by giving some flair with CSS! Have some fun!
