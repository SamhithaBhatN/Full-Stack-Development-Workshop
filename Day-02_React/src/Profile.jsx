import { useState } from "react"

function Profile({ name, course, skills }) {
  const [likes, setLikes] = useState(0)

  return (
    <div className="profile-card">
      <h2>{name}</h2>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <h3>Skills</h3>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <button onClick={() => setLikes(likes + 1)}>
        👍 Likes: {likes}
      </button>
    </div>
  )
}

export default Profile