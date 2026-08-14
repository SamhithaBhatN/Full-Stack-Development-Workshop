# 📅 Day 2 – React

## 📌 Overview

This folder contains my **Day 2** work from the **Full Stack Development Workshop**.

The workshop introduced the fundamentals of **React** and how modern frontend applications are structured using reusable components. I created a React project using **Vite**, explored the project structure, and practiced important React concepts through a simple profile application.

The final project is a **React Profile Application** that demonstrates **components, JSX, props, state, event handling, and array mapping**.

---

## 🎯 Learning Objectives

* Understand what React is and why it is used.
* Create a React project using Vite.
* Understand the basic structure of a React application.
* Understand how `index.html` connects with `main.jsx`.
* Understand the role of `createRoot()`.
* Create reusable React components.
* Understand and use JSX.
* Import and export React components.
* Pass data between components using props.
* Manage changing data using state.
* Use the `useState` Hook.
* Handle user interactions using events.
* Use `onClick` for button events.
* Display multiple items using JavaScript `.map()`.
* Understand `package.json` and npm scripts.
* Understand dependencies and devDependencies.

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* JSX
* Vite
* HTML5
* CSS3
* npm

---

## 📂 Folder Structure

```text
Day-02_React
│
├── public
│   ├── favicon.svg
│   └── icons.svg
│
├── src
│   ├── assets
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

---

## ✨ Project Features

The React Profile Application includes:

* Personal profile section
* Profile information
* Skills list
* Reusable React components
* Props for passing profile information
* State management using `useState`
* Interactive Likes counter
* Click event handling using `onClick`
* Dynamic skill list using `.map()`
* Separate component files
* CSS styling

---

## 📸 Project Preview

### React Profile Application and Interactive Likes Counter

![React Profile Application](../Assets/Day-02/react-profile_with_likes_counter.png)

> Screenshots will be added to the `Assets/Day-02` folder when available.

---

## 🚀 How to Create the Project

The React project was created using Vite.

```bash
npm create vite@latest Day-02_React -- --template react
```

During project creation:

* Project Name: `Day-02_React`
* Framework: React
* Template: React
* Linter: Oxlint

After creating the project, dependencies were installed using:

```bash
npm install
```

---

## 🚀 How to Run

1. Open the `Day-02_React` folder in Visual Studio Code.
2. Open the integrated terminal.
3. Install the dependencies if required.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

5. Open the local URL provided by Vite in your browser.

Usually:

```text
http://localhost:5173/
```

---

## 📚 Concepts Covered

### React

* React fundamentals
* React project structure
* Components
* JSX
* Props
* State
* `useState`
* Event handling
* `onClick`
* Array `.map()`

### React Application Structure

* `index.html`
* `main.jsx`
* `App.jsx`
* `Profile.jsx`
* `createRoot()`
* `StrictMode`
* CSS imports

### JavaScript

* Functions
* Arrow functions
* Arrays
* `.map()`
* Template literals
* Destructuring through component props

### npm and Vite

* Vite project creation
* `package.json`
* npm scripts
* Dependencies
* devDependencies
* Development server
* Production build
* Linting

---

## 🔄 React Application Flow

The basic flow of the application is:

```text
Browser
   ↓
index.html
   ↓
<div id="root"></div>
   ↓
main.jsx
   ↓
createRoot()
   ↓
<App />
   ↓
App.jsx
   ↓
Profile.jsx
   ↓
React UI
```

The browser first loads `index.html`.

The `root` element provides the location where React will render the application.

`main.jsx` creates the React root and renders the `App` component.

The `App` component then uses other components such as `Profile` to build the interface.

---

## ❤️ React State Example

The project demonstrates state using the `useState` Hook.

Example:

```jsx
const [count, setCount] = useState(0)
```

The Likes button updates the state:

```jsx
<button onClick={() => setCount(count + 1)}>
  Likes: {count}
</button>
```

The basic flow is:

```text
User clicks button
       ↓
onClick event runs
       ↓
setCount() updates state
       ↓
React re-renders the component
       ↓
Updated Likes value appears
```

---

## 📦 Props Example

Props are used to pass information to a component.

Example:

```jsx
<Profile
  name="Samhitha Bhat"
  course="BCA Graduate | MCA Aspirant"
/>
```

The `Profile` component can receive these values:

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

This allows the same component to display different information based on the props it receives.

---

## 📋 Array `.map()` Example

The project uses `.map()` to display skills from an array.

```jsx
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React"
]
```

The skills can be displayed using:

```jsx
<ul>
  {skills.map((skill) => (
    <li>{skill}</li>
  ))}
</ul>
```

This allows multiple UI elements to be generated from the array instead of writing each element separately.

---

## 🚀 Improvements and Practice

During Day 2, I practiced building the React application using a component-based structure.

The project was organized into separate files for:

* Main application
* Profile component
* Global styles
* Component styles

I also practiced passing information using props and managing interactive data using React state.

---

## 🎓 Learning Outcomes

After completing Day 2, I can:

* Create a React project using Vite.
* Understand the basic structure of a React application.
* Explain the purpose of `index.html` and `main.jsx`.
* Create reusable React components.
* Write JSX.
* Import and export components.
* Pass data using props.
* Manage changing data using `useState`.
* Handle button click events.
* Generate UI elements using `.map()`.
* Understand basic npm scripts.
* Understand dependencies and devDependencies.
* Build a simple interactive React application.

---

## 📖 Notes

Detailed explanations of the concepts covered on Day 2 are available in [Notes.md](Notes.md).

---

## 📊 Day 2 Summary

| Category              | Status       |
| --------------------- | ------------ |
| React Project Created | ✅ Completed  |
| Vite Setup            | ✅ Completed  |
| Project Structure     | ✅ Understood |
| JSX                   | ✅ Practiced  |
| Components            | ✅ Practiced  |
| Props                 | ✅ Practiced  |
| State                 | ✅ Practiced  |
| `useState`            | ✅ Practiced  |
| Event Handling        | ✅ Practiced  |
| `.map()`              | ✅ Practiced  |
| React Profile Project | ✅ Completed  |
| Notes                 | ✅ Completed  |
| Documentation         | ✅ Completed  |

---

## 📌 Next Steps

* Continue with the next day of the Full Stack Development Workshop.
* Practice building more React components.
* Build more interactive React applications.
* Continue learning React concepts as they are introduced in the workshop.

---

## ✅ Status

**Day 2 Completed Successfully** 🎉