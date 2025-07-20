import React, { useState, useEffect } from 'react'
import Heading from './components/Heading'
import GoalsForm from './components/content/GoalsForm'
import GoalsDisplay from './components/content/GoalsDisplay'
import ProgressTrack from './components/content/ProgressTrack'
import Header from './components/Header'

const App = () => {
  const GoalApiUrl = "http://localhost:3000/goals"
  const [goals, setGoals] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch(GoalApiUrl)
      .then(r => r.json())
      .then(data => setGoals(data))
  }, [])

  const currentGoal = goals[currentIndex]

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % goals.length)
  }

  function handlePrevious() {
    setCurrentIndex((prev) => (prev - 1 + goals.length) % goals.length)
  }

  return (
    <div>
      {currentGoal && (
        <>
          <Header
            goals={goals}
            targetAmount={currentGoal.targetAmount}
            savedAmount={currentGoal.savedAmount}
          />
        </>
      )}

      <Heading />
      <GoalsForm url={GoalApiUrl} />

      {currentGoal && (
        <>
          <GoalsDisplay
            displayId={currentGoal.id}
            displayName={currentGoal.name}
            displayTargetAmount={currentGoal.targetAmount}
            displaySavedAmount={currentGoal.savedAmount}
            displayCategory={currentGoal.category}
            displayDeadline={currentGoal.deadline}
          />

          <ProgressTrack
            goalId={currentGoal.id}
            goalName={currentGoal.name}
            targetAmount={currentGoal.targetAmount}
            savedAmount={currentGoal.savedAmount}
            dateCreated={currentGoal.createdAt}
            deadlineDate={currentGoal.deadline}
          />

          <div >
            <button onClick={handlePrevious}>⬅️ Previous</button>
            <button onClick={handleNext}>Next ➡️</button>
            <button onClick={handleDelete}>Delete Goal</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App;
