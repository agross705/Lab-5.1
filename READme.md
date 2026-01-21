# Module 412 | Mod 5 | Lab 5.1: Dynamic Content Creation

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Reflection Questions](#reflection-questions)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

In this lab, you will create a dynamic shopping cart application to practice and reinforce your DOM manipulation skills. The application will allow users to add, update, and remove items dynamically while keeping track of the total price. This lab focuses on modifying elements, creating and appending new elements, and updating content dynamically using JavaScript.

Workplace Context
Imagine you are tasked with building the shopping cart feature for an e-commerce website. Customers should be able to:

- Add items to their cart dynamically.
- View the items they have added, along with their prices and quantities.
- Update the quantity of items in the cart, reflecting real-time price changes.
- Remove items from the cart.

This lab will help you simulate and build core functionality used in modern e-commerce applications.

### The challenge

- Dynamically create and manipulate DOM elements to build interactive features.
- Update the DOM to reflect changes in user input, such as quantity updates and price calculations.
- Use event handling to implement interactivity for adding, updating, and removing items.
- Use efficient DOM manipulation techniques to minimize performance bottlenecks.

### Screenshot

### Links

- Assignment URL: https://ps-lms.vercel.app/curriculum/se/412/lab-1
- Live Site URL: https://github.com/agross705/Lab-5.1

## My process

I built a dynamic shopping cart application using HTML, CSS, and JavaScript, focusing on DOM manipulation and event handling. Users can add products, adjust item quantities, remove items, and see prices update in real time.

I used data-\* attributes to store item state (price, quantity, and totals), which helped keep calculations accurate and efficient. Along the way, I debugged state and variable issues, reinforcing the importance of consistency when working with dynamic data. The application was finished with clean, professional styling to improve usability while keeping the focus on core functionality.

### Reflection Questions

- How did you dynamically create and append new elements to the DOM?
  I used JavaScript methods such as document.createElement() to create list items, buttons, and spans for each product, then appended them to the cart using appendChild(). This allowed cart items to be added dynamically based on user input without reloading the page.

- What steps did you take to ensure accurate updates to the total price?
  I maintained a single totalPrice variable and updated it incrementally whenever items were added, quantities changed, or items were removed. Each cart item stored its price, quantity, and total using data-\* attributes, ensuring calculations stayed consistent and accurate.

- How did you handle invalid input for product name or price?
  I validated user input by checking for empty product names and ensuring the price was a valid number greater than zero. If the input was invalid, the application displayed an alert and prevented the item from being added to the cart.

- What challenges did you face when implementing the remove functionality?
  One challenge was ensuring the correct amount was removed from the total price when an item with multiple quantities was deleted. This was resolved by tracking each item’s total price separately and subtracting that value instead of just the base price.

### What I learned

Through this project, I learned how to dynamically create and update DOM elements using JavaScript instead of relying on static HTML. I gained hands-on experience managing application state with data-\* attributes, which helped keep track of prices, quantities, and totals efficiently.

I also learned the importance of updating values incrementally to keep calculations accurate and avoid unnecessary DOM re-renders. Debugging issues along the way reinforced how small mistakes in variable names or logic can break functionality, and how careful testing helps catch and fix those problems early.

### Continued development

- Prevent duplicate products by increasing the quantity of existing items instead of adding new rows
- Store cart data in localStorage to persist items across page refreshes
- Improve accessibility with better focus states and keyboard navigation
- Enhance mobile responsiveness for smaller screen sizes
- Add user-friendly feedback such as empty cart messages or confirmation prompts

### Useful resources

- MDN | https://developer.mozilla.org/en-US/
- W3Schools | https://www.w3schools.com/js/js_htmldom_document.asp
- Google | https://www.google.com/

## Author

agross705

## Acknowledgments
