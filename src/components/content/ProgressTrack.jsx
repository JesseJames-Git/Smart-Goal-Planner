import React from 'react'
import ProgressBar from '../content/ProgressBar'

const ProgressTrack = (goalId, goalName, targetAmount, savedAmount) => {

  const remaindingAmount = (targetAmount - savedAmount)
  return (
      <div key={goalId}>
      <h2>{goalName}</h2>
      <p>Saved Amount(Deposit) : {savedAmount}</p>
      <p>Remaining amount : {remaindingAmount}</p>

      <ProgressBar />
    </div>
  )
}

export default ProgressTrack