import React from 'react'
import "../../stlying/goalsDisplay.css"

const GoalsDisplay = ({
  displayId, 
  displayName, 
  displayTargetAmount, 
  displaySavedAmount, 
  displayCategory, 
  displayDeadline, 
}) => {

        return (
            <div key = {displayId} id='displayer'>
                <h2>{displayName}</h2>
                <p>Target Amount: {displayTargetAmount}</p>
                <p>Saved Amount: {displaySavedAmount}</p>
                <p>Category: {displayCategory}</p>
                <p>Deadline: {displayDeadline}</p>
            </div>
        )
}

export default GoalsDisplay