# Day 2 Notes

## What is React?

React is a JavaScript library used for building user interfaces.

React allows us to build user interfaces using reusable components.

Instead of creating the entire webpage as one large HTML file, React allows the interface to be divided into smaller components.

Example:

```jsx
function App() {
  return (
    <h1>Hello React</h1>
  )
}
```

Here, `App` is a React component that returns a user interface.

---

# Creating a React Project with Vite

The Day 2 project was created using Vite.

Vite is a frontend development tool that provides a fast development environment and production build tools.

The command used to create the React project was:

```bash
npm create vite@latest Day-02_React -- --template react
```

During project creation:

* Project name: `Day-02_React`
* Framework: React
* Template: React
* Linter: Oxlint

After creating the project, the dependencies were installed using:

```bash
npm install
```

---

# Starting the Development Server

The React development server can be started using:

```bash
npm run dev
```

Vite starts the development server and provides a local address such as:

```text
http://localhost:5173/
```

The application can then be opened in a web browser.

---

# React Project Structure

The important structure of the Day 2 project is:

```text
Day-02_React
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── Profile.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── Notes.md
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### Important Files and Folders

| File / Folder       | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `public/`           | Contains publicly accessible static files      |
| `src/`              | Contains the main React source code            |
| `App.jsx`           | Main application component                     |
| `Profile.jsx`       | Profile component                              |
| `main.jsx`          | Entry point of the React application           |
| `App.css`           | Styles for the App component                   |
| `index.css`         | Global styles                                  |
| `index.html`        | Main HTML document                             |
| `package.json`      | Project information, scripts, and dependencies |
| `package-lock.json` | Records the exact installed package versions   |
| `vite.config.js`    | Vite configuration                             |
| `README.md`         | Project documentation                          |
| `Notes.md`          | Learning notes                                 |

The `node_modules/` folder is created when dependencies are installed, but it is normally excluded from Git using `.gitignore`.

---

# index.html

`index.html` is the main HTML file of the Vite application.

It contains the basic HTML structure and the element where React will render the application.

The important element is:

```html
<div id="root"></div>
```

The ID of this element is:

```text
root
```

The file also loads `main.jsx`:

```html
<script type="module" src="/src/main.jsx"></script>
```

The `type="module"` attribute tells the browser to load the JavaScript file as an ES module.

---

# How index.html and main.jsx Work Together

The basic flow is:

```text
Browser
   ↓
index.html
   ↓
<div id="root"></div>
   ↓
main.jsx
   ↓
React creates a root
   ↓
App component
   ↓
React UI appears inside #root
```

In `index.html`:

```html
<div id="root"></div>
```

In `main.jsx`:

```javascript
document.getElementById('root')
```

`document.getElementById('root')` finds the HTML element whose ID is `root`.

React then uses this element as the container for the application.

---

# main.jsx

`main.jsx` is the entry point of the React application.

A typical Vite React `main.jsx` contains:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

This file performs several important tasks:

* Imports `StrictMode`.
* Imports `createRoot`.
* Imports the global CSS file.
* Imports the `App` component.
* Finds the `root` HTML element.
* Creates the React root.
* Renders the `App` component.

---

# StrictMode

`StrictMode` is a React feature used during development.

It helps identify potential problems and unsafe patterns in a React application.

It is imported using:

```javascript
import { StrictMode } from 'react'
```

The application can then be wrapped with:

```jsx
<StrictMode>
  <App />
</StrictMode>
```

`StrictMode` is mainly useful during development and does not create a visible user-interface element.

---

# createRoot()

`createRoot()` is imported from:

```javascript
import { createRoot } from 'react-dom/client'
```

It creates a React root connected to the browser DOM.

Example:

```jsx
createRoot(document.getElementById('root')).render(
  <App />
)
```

The process is:

```text
document.getElementById('root')
        ↓
Find the root HTML element
        ↓
createRoot()
        ↓
Create React root
        ↓
render(<App />)
        ↓
Display React application
```

---

# Importing CSS

The global CSS file is imported in `main.jsx`:

```javascript
import './index.css'
```

This allows the styles defined in `index.css` to be applied to the application.

CSS can also be imported into a component.

For example:

```javascript
import './App.css'
```

---

# React Components

A component is a reusable part of a React user interface.

A component can be created using a JavaScript function.

Example:

```jsx
function App() {
  return (
    <h1>Hello React</h1>
  )
}
```

Here, `App` is a React component.

The Day 2 project contains components such as:

```text
App.jsx
Profile.jsx
```

The `App` component acts as the main component of the application.

The `Profile` component is used for the profile section.

---

# JSX

JSX is a syntax used with React that allows us to write HTML-like elements inside JavaScript.

Example:

```jsx
<h1>My React Profile</h1>

<p>Learning React</p>
```

A component can return JSX:

```jsx
function App() {
  return (
    <div>
      <h1>My React Profile</h1>
      <p>Learning React</p>
    </div>
  )
}
```

JSX makes it easier to describe the structure of a React user interface.

---

# JSX and JavaScript

JSX is written inside JavaScript files such as:

```text
App.jsx
Profile.jsx
```

The `.jsx` extension indicates that the file contains JavaScript with JSX syntax.

JSX is not exactly HTML. It is a syntax that is transformed into JavaScript during the build process.

For example:

```jsx
<h1>Hello React</h1>
```

is JSX that React can use to describe the user interface.

---

# App.jsx

`App.jsx` contains the main application component.

A React component can be written as a JavaScript function:

```jsx
function App() {
  return (
    <div>
      <h1>My React Profile</h1>
    </div>
  )
}
```

The component can be exported using:

```javascript
export default App
```

This allows another file to import it.

For example, `main.jsx` imports it using:

```javascript
import App from './App.jsx'
```

---

# Profile.jsx

`Profile.jsx` contains the profile component used in the Day 2 project.

A component can be created as:

```jsx
function Profile() {
  return (
    <div>
      <h2>My Profile</h2>
      <p>Learning React</p>
    </div>
  )
}

export default Profile
```

The component can then be imported into another component:

```javascript
import Profile from './Profile.jsx'
```

This allows the application to be divided into smaller and more manageable components.

---

# Import and Export

React applications commonly divide components into multiple files.

A component can be exported using:

```javascript
export default Profile
```

It can then be imported using:

```javascript
import Profile from './Profile.jsx'
```

This makes components reusable and keeps the project organized.

Basic flow:

```text
Profile.jsx
    ↓
export default Profile
    ↓
App.jsx
    ↓
import Profile from './Profile.jsx'
    ↓
<Profile />
```

---

# Props

Props are used to pass data from one component to another.

For example:

```jsx
<Profile
  name="Samhitha Bhat"
  course="BCA Graduate | MCA Aspirant"
/>
```

The `Profile` component can receive these values.

Example:

```jsx
function Profile({ name, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
    </div>
  )
}
```

Here:

* `name` is a prop.
* `course` is a prop.

Props allow a component to display different information without changing the component itself.

Props are normally passed from a parent component to a child component.

---

# State

State is data that can change while the application is running.

React provides the `useState` Hook to manage state.

Example:

```javascript
import { useState } from 'react'
```

Then:

```javascript
const [count, setCount] = useState(0)
```

Here:

* `count` stores the current value.
* `setCount` is used to update the value.
* `0` is the initial value.

---

# useState

The basic structure of `useState` is:

```javascript
const [state, setState] = useState(initialValue)
```

For example:

```javascript
const [count, setCount] = useState(0)
```

Initially:

```text
count = 0
```

When the state is updated:

```javascript
setCount(count + 1)
```

React updates the state and re-renders the component.

The updated value can then appear in the user interface.

---

# Event Handling

React can respond to user actions such as:

* Clicking a button
* Typing into an input
* Moving the mouse
* Submitting a form

The Day 2 project practiced event handling using `onClick`.

Example:

```jsx
<button onClick={() => setCount(count + 1)}>
  Likes: {count}
</button>
```

When the button is clicked:

```text
User clicks button
       ↓
onClick runs
       ↓
setCount() updates state
       ↓
React re-renders the component
       ↓
Updated value appears
```

---

# onClick

`onClick` is a React event handler used when an element is clicked.

Example:

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

It can also contain an arrow function:

```jsx
<button onClick={() => setCount(count + 1)}>
  Likes: {count}
</button>
```

The function runs when the button is clicked.

---

# Array .map()

The JavaScript `.map()` method can be used in React to display multiple items from an array.

Example:

```javascript
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React"
]
```

The array can be displayed using:

```jsx
skills.map((skill) => (
  <li>{skill}</li>
))
```

This avoids writing the same element repeatedly.

Instead of:

```jsx
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Python</li>
<li>React</li>
```

we can generate the elements from the array.

---

# Why .map() is Useful in React

Using `.map()` makes it easier to display dynamic lists.

Example:

```jsx
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React"
]

<ul>
  {skills.map((skill) => (
    <li key={skill}>{skill}</li>
  ))}
</ul>
```

If another skill is added to the array, the UI can display it without manually creating another `<li>` element.

The `key` helps React identify individual elements in a list.

---

# React vs Normal JavaScript DOM Manipulation

In normal JavaScript, we can directly access HTML elements using methods such as:

```javascript
document.getElementById("heading")
```

For example:

```javascript
document.getElementById("heading").textContent = "Hello"
```

This directly manipulates the DOM.

React uses a component-based and declarative approach.

Instead of manually updating individual DOM elements, we describe what the UI should look like based on the current state and props.

When state changes, React updates the necessary parts of the interface.

### Normal JavaScript

```text
Find DOM element
       ↓
Modify DOM manually
```

### React

```text
State / Props change
       ↓
React re-renders
       ↓
UI updates
```

---

# package.json

`package.json` contains important information about the project.

It tells npm about:

* Project name
* Project version
* Available scripts
* Application dependencies
* Development dependencies

A simplified example is:

```json
{
  "name": "day-02-react",
  "private": true,
  "version": "0.0.0"
}
```

The actual `package.json` contains additional project configuration.

---

# Project Scripts

The project contains scripts such as:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "oxlint",
  "preview": "vite preview"
}
```

## Development Server

```bash
npm run dev
```

Starts the Vite development server.

## Build

```bash
npm run build
```

Creates a production build of the application.

## Lint

```bash
npm run lint
```

Runs the project's linter.

## Preview

```bash
npm run preview
```

Previews the production build locally.

---

# Dependencies

The React project uses packages such as:

```json
"dependencies": {
  "react": "...",
  "react-dom": "..."
}
```

## React

`react` provides the React library and its core functionality.

## React DOM

`react-dom` provides React's integration with the browser DOM.

---

# dependencies vs devDependencies

## Dependencies

These are packages required by the application.

Examples:

```text
react
react-dom
```

## devDependencies

These are packages mainly used during development, building, and project tooling.

Examples from the project include:

```text
vite
oxlint
@vitejs/plugin-react
```

### Simple difference

```text
dependencies
       ↓
Packages required by the application

devDependencies
       ↓
Packages mainly required for development and build tools
```

---

# Vite

Vite is a modern frontend development tool used to create and run the React project.

It provides:

* Project scaffolding
* Development server
* Fast development workflow
* Production build tools

The Day 2 React project was created using Vite:

```bash
npm create vite@latest Day-02_React -- --template react
```

The development server was started using:

```bash
npm run dev
```

---

# What I Built

For Day 2, I created a simple **React Profile Application**.

The application demonstrates the React concepts learned during the workshop.

It includes:

* A personal profile section
* Profile information
* Skills
* React components
* Props
* State
* A clickable Likes counter
* Event handling
* Array `.map()`

---

# React Profile Project

The profile component contains information such as:

```text
Samhitha Bhat
BCA Graduate | MCA Aspirant
```

The application also displays skills such as:

```text
HTML
CSS
JavaScript
Python
React
```

The Likes button demonstrates React state.

For example:

```text
👍 Likes: 0
```

After clicking the button:

```text
👍 Likes: 1
```

After clicking again:

```text
👍 Likes: 2
```

The value changes because the React state is updated using `setCount()`.

---

# Important React Flow

The overall flow of this project can be understood as:

```text
index.html
     ↓
<div id="root"></div>
     ↓
main.jsx
     ↓
createRoot()
     ↓
<StrictMode>
     ↓
<App />
     ↓
App.jsx
     ↓
Profile.jsx
     ↓
React UI
```

This shows how the HTML document connects to the React application.

---

# Complete Application Flow

A more detailed flow is:

```text
Browser
   ↓
Loads index.html
   ↓
Finds <div id="root"></div>
   ↓
Loads /src/main.jsx
   ↓
main.jsx imports App.jsx
   ↓
createRoot() creates React root
   ↓
<App /> is rendered
   ↓
App component renders its UI
   ↓
Profile component is rendered
   ↓
Props provide profile information
   ↓
State manages changing values
   ↓
Events update state
   ↓
React updates the UI
```

---

# What I Learned

Through Day 2, I learned that React applications are built using components rather than putting the entire interface into one HTML file.

I learned how to:

* Create a React project using Vite.
* Start a React development server.
* Understand the React project structure.
* Understand the role of `index.html`.
* Understand how `main.jsx` starts the React application.
* Create React components.
* Use JSX.
* Import and export components.
* Pass data using props.
* Manage changing data using state.
* Use the `useState` Hook.
* Handle user events using `onClick`.
* Generate UI elements using `.map()`.
* Understand `package.json`.
* Understand dependencies and devDependencies.
* Understand the basic difference between React and traditional DOM manipulation.
* Build a simple React Profile Application.

---

# Key Takeaways

## React

A JavaScript library for building user interfaces.

## JSX

A syntax that allows us to write HTML-like UI structures inside JavaScript.

## Component

A reusable part of a React user interface.

## Props

Data passed from one component to another.

## State

Data that can change during the execution of an application.

## useState

A React Hook used to create and manage state.

## onClick

A React event handler used to respond to click events.

## .map()

A JavaScript array method commonly used to generate multiple UI elements from an array.

## createRoot()

A React DOM API used to create a React root for rendering the application.

## Vite

A frontend development tool used to create, run, and build the React application.

---

# Day 2 Status

* React project created using Vite
* React development server configured
* `index.html` understood
* `main.jsx` understood
* `StrictMode` understood
* `createRoot()` understood
* `App.jsx` understood
* `Profile.jsx` created and used
* React components practiced
* JSX practiced
* Import and export practiced
* Props practiced
* `useState` practiced
* State updates practiced
* Event handling practiced
* `onClick` practiced
* Array `.map()` practiced
* `package.json` understood
* Dependencies and devDependencies understood
* Vite understood
* React Profile Application completed

---

## Day 2 Completed

Day 2 provided the foundation for understanding how React applications are structured and how components, JSX, props, state, events, and array mapping work together to create interactive user interfaces.

---

# Scope of Day 2

This `Notes.md` focuses only on the React concepts covered during Day 2.

Advanced React topics such as:

* React Router
* `useEffect`
* API calls
* Forms
* Context API
* Advanced Hooks

are not included because they were not part of the Day 2 work.

These topics can be documented separately when they are actually covered in later lessons.