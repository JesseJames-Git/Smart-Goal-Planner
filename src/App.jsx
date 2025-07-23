import React, { useState, useEffect } from 'react'
import Heading from './components/Heading'
import GoalsForm from './components/content/GoalsForm'
import GoalsDisplay from './components/content/GoalsDisplay'
import ProgressTrack from './components/content/ProgressTrack'
import Header from './components/Header'
import GoalEditor from './components/content/GoalEditer'
import "./stlying/App.css"

const App = () => {
  const GoalApiUrl = "http://localhost:3000/goals"
  const [goals, setGoals] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [goalBeingEdited, setGoalBeingEdited] = useState(null)

  useEffect(() => {
    fetch(GoalApiUrl)
      .then(r => r.json())
      .then(data => setGoals(data))
  }, [])

  const currentGoal = goals[currentIndex]

  function handleNext() {
    if (currentIndex < goals.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function handleDelete() {
    if (!currentGoal) return
    fetch(`${GoalApiUrl}/${currentGoal.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedGoals = goals.filter(g => g.id !== currentGoal.id)
        setGoals(updatedGoals)
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))
      })
      .catch(err => console.error("Delete error:", err))
  }

  return (
    <div id ="app">
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

      
      {goalBeingEdited ? (
        <GoalEditor
          goal={goalBeingEdited}
          url={GoalApiUrl}
          onEditComplete={(updatedGoal) => {
            setGoals((prevGoals) =>
              prevGoals.map(g => g.id === updatedGoal.id ? updatedGoal : g)
            )
            setGoalBeingEdited(null)
          }}
        />
      ) : (
        currentGoal && (
          <>
            <GoalsDisplay
              displayId={currentGoal.id}
              displayName={currentGoal.name}
              displayTargetAmount={currentGoal.targetAmount}
              displaySavedAmount={currentGoal.savedAmount}
              displayCategory={currentGoal.category}
              displayDeadline={currentGoal.deadline}
            />

            <div id='buttonSection'>
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
              <button onClick={handleDelete}>Delete Goal</button>
              <button onClick={() => setGoalBeingEdited(currentGoal)}>Edit Goal</button>
            </div>

            <ProgressTrack
              goalId={currentGoal.id}
              goalName={currentGoal.name}
              targetAmount={currentGoal.targetAmount}
              savedAmount={currentGoal.savedAmount}
              dateCreated={currentGoal.createdAt}
              deadlineDate={currentGoal.deadline}
            />
          </>
        )
      )}
    </div>
  )
}

export default App
