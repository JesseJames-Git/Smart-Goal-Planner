import React from 'react'
import "../stlying/heading.css"

const Heading = () => {
  return (
    <div id='heading'>
      <section>
      <h1>SMART GOAL PLANNER</h1>
      <p id='description'>The Smart Goal Planner is a tool that allows users to manage multiple saving goals, allocate deposits across them, and track progress toward each goal.</p>
      </section>
      
      <br />

      <p id='choice'>Choose what you would like to use:</p>
      <button><a href="#goalForm">Goals Form</a></button>
      <button><a href="#trackerContainer">Progress Track</a></button>

    </div>
  )
}

export default Heading