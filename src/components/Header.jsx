import React from 'react'

const Header = ({ goals }) => {
  const numberOfGoals = goals.length

  const totalSavedAmount = goals.reduce((acc, goal) => acc + goal.savedAmount, 0)

  const totalTargetAmount = goals.reduce((acc, goal) => acc + goal.targetAmount, 0)

  const goalsCompleted = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length

  const totalProgressPercentage = totalTargetAmount
    ? Math.floor((totalSavedAmount / totalTargetAmount) * 100)
    : 0

  return (
    <div style={{
      padding: '16px',
      borderBottom: '2px solid #ccc',
      marginBottom: '20px'
    }}>
      <h1>Goal Tracker Summary</h1>
      <p><strong>Total Number of Goals:</strong> {numberOfGoals}</p>
      <p><strong>Total Amount Saved:</strong> ${totalSavedAmount.toLocaleString()}</p>
      <p><strong>Goals Completed:</strong> {goalsCompleted} / {numberOfGoals}</p>
      <p><strong>Overall Progress:</strong> {totalProgressPercentage}%</p>
    </div>
  )
}

export default Header
