import React from 'react'
import ProgressBar from '../content/ProgressBar'

const ProgressTrack = ({
  goalId, 
  goalName, 
  targetAmount, 
  savedAmount,
  dateCreated,
  deadlineDate 
}) => {

  const remainingAmount = targetAmount - savedAmount
  const dateDifferenceinMs = deadlineDate - dateCreated
  const dateDifferenceInDays = dateDifferenceinMs / (1000 * 60 *60 * 24)

  function DeadlineStatus(){
    if(dateDifferenceInDays < 30 ){
      return(
        <p>
          <em>Warning! Deadline is in {dateDifferenceInDays} days</em>
        </p>
      )
    } else if (dateDifferenceInDays < 0){          
      return(
        <p>
          <em>Goal OverDue</em>
        </p>
      )
    }
  }

  return (
      <div key={goalId}>
      <h2>{goalName}</h2>
      <p>Saved Amount(Deposit) : {savedAmount}</p>
      <p>Remaining amount : {remainingAmount}</p>
      <p>Deadline Date : {deadlineDate}</p>

      <ProgressBar />

       <DeadlineStatus />
    
    </div>
  )
}

export default ProgressTrack