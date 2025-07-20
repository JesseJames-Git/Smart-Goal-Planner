import React from 'react'
import { useState, useEffect } from 'react'
import Heading from './components/Heading'
import GoalsForm from './components/content/GoalsForm'
import GoalsDisplay from './components/content/GoalsDisplay'
import ProgressTrack from './components/content/ProgressTrack'
import Footer from './components/Footer'

const App = () => {

      const GoalApiUrl = "http://localhost:3000/goals"
      const [goals, setGoals] = useState([])
     
      useEffect(() =>{
          fetch(GoalApiUrl)
          .then(r => r.json())
          .then(data => {
            setGoals(data)})
      },[])
  
  return (
    <div>
      <Heading />

      <GoalsForm />

      {goals.map((goal) => (
      <GoalsDisplay 
        key={goal.id}
        displayId={goal.id}
        displayName={goal.name}
        displayTargetAmount={goal.targetAmount}
        displaySavedAmount={goal.savedAmount}
        displayCategory={goal.category}
        displayDeadline={goal.deadline}
      />
      ))}   

      {goals.map((goal) => (
        <ProgressTrack
          key = {goal.id}
          goalId = {goal.id}
          goalName = {goal.name}
          targetAmount = {goal.targetAmount}
          savedAmount = {goal.savedAmount}
          dateCreated = {goal.createdAt}
          deadlineDate = {goal.deadline}
        />
      ))}

      <Footer />
    </div>
  )
}

export default App