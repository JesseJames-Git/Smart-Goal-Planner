import React from 'react'
import "../../stlying/progressBar.css"

const ProgressBar = ({ goalAmount, savedAmount }) => {
  const percentage = Math.min((savedAmount / goalAmount) * 100, 100)

  return (
    <div className="outerBox">
      <div
        className="colourBox"
        style={{ width: `${percentage}%` }}
      >
        <span className="percentageLabel">{Math.floor(percentage)}%</span>
      </div>
    </div>
  )
}

export default ProgressBar
