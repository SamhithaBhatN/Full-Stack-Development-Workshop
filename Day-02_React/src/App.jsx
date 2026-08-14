import Profile from "./Profile"
import "./App.css"

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "React"
  ]

  return (
    <div className="app">
      <h1>My React Profile</h1>

      <Profile
        name="Samhitha Bhat"
        course="BCA Graduate | MCA Aspirant"
        skills={skills}
      />
    </div>
  )
}

export default App