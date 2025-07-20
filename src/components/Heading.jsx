import React from 'react'

const Heading = () => {
  return (
    <div>
      <h1>SMART GOAL PLANNER</h1>
      <p>The Smart Goal Planner is a tool that allows users to manage multiple saving goals, allocate deposits across them, and track progress toward each goal.</p>
      <br />
      <p>Choose what you would like to use:</p>
      <button><a href="/content/goals.jsx">Goals Form</a></button>
      <button><a href="/content/progressTrack.jsx">Progress Track</a></button>

    </div>
  )
}

export default Heading