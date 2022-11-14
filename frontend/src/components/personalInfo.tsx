import React from 'react'
import '../App.css'

function PersonalInfo() {
   let about_me = {
    name: "Leevi Mikael Luukkonen",
    personality: "Placeholder",
    experience: "Placeholder",
    hobbies: "Placeholder"
  }

  return (
    <div className="me">
      <img src="src/assets/cvkuva2.jpg" alt="" />
    </div>
  )
}

export default PersonalInfo
