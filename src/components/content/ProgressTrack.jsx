import React from 'react'
import ProgressBar from '../content/ProgressBar'
import "../../stlying/progressTrack.css"

const ProgressTrack = ({
  goalId, 
  goalName, 
  targetAmount, 
  savedAmount,
  dateCreated,
  deadlineDate 
}) => {

  const remainingAmount = targetAmount - savedAmount

  const created = new Date(dateCreated)
  const deadline = new Date(deadlineDate)
  const timeDiff = deadline - created
  const dateDifferenceInDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

  const deadlineStatus = () => {
    const today = new Date()
    const deadline = new Date(deadlineDate)

    const diffInMs = deadline - today
    const daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))

    if (daysLeft < 0) {
      return <p><em style={{ color: 'red' }}>Goal Overdue</em></p>
    } else if (daysLeft < 30) {
      return <p><em style={{ color: 'orange' }}>Warning! Deadline is in {daysLeft} days</em></p>
    } else {
      return null
    }
  }


  return (
    <div key={goalId} id='trackerContainer'>
      <h2>{goalName}</h2>
      <p>Saved Amount: {savedAmount}</p>
      <p>Remaining Amount: {remainingAmount}</p>
      <p>Deadline Date: {new Date(deadlineDate).toDateString()}</p>

      <ProgressBar 
        goalAmount={targetAmount}
        savedAmount={savedAmount}
      />

      {deadlineStatus()}
    </div>
  )
}

export default ProgressTrack
