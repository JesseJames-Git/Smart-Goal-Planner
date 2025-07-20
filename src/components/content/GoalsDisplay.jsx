import React from 'react'

const GoalsDisplay = ({
  displayId, 
  displayName, 
  displayTargetAmount, 
  displaySavedAmount, 
  displayCategory, 
  displayDeadline, 
}) => {

        return (
            <div key = {displayId}>
                <h2>{displayName}</h2>
                <p>Target Amount: {displayTargetAmount}</p>
                <p>Saved Amount: {displaySavedAmount}</p>
                <p>Category: {displayCategory}</p>
                <p>Deadline: {displayDeadline}</p>
            </div>
        )
}

export default GoalsDisplay