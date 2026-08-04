# Day 1 Notes

## What is Full Stack Development?

Full Stack Development involves building both the frontend and backend of a web application.

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express

Database:
- MongoDB

---

# HTML

HTML provides the structure of a webpage.

Important tags:

- <!DOCTYPE html>
- html
- head
- body
- input
- button
- p

---

## id Attribute

The id uniquely identifies an HTML element.

Example:

<input id="username">

JavaScript accesses it using:

document.getElementById("username")

---

## Placeholder

Placeholder displays a hint inside an input field.

Example:

placeholder="Enter Username"

---

# JavaScript DOM

document

Represents the complete HTML document.

Example:

document.getElementById()

Returns the HTML element.

Example:

let username = document.getElementById("username");

.value

Returns the value entered by the user.

Example:

username.value

---

## textContent

Updates plain text inside an HTML element.

Example:

result.textContent = "Accepted";

---

## addEventListener()

Used to attach an event to an element.

Example:

button.addEventListener("click", login);

---

## Interview Questions

Q. What is the difference between innerHTML and textContent?

Q. What is the difference between an HTML element and its value?

Q. Why is addEventListener() preferred over onclick?

Q. What is DOM?