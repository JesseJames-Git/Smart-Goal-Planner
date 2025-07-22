import React from 'react'
import "../../stlying/goalForm.css"

const GoalsForm = ({url}) => {

function handleSubmit(event) {
  event.preventDefault()
  const formData = new FormData(event.target)

  const goalData = {
    name: formData.get("name"),
    targetAmount: Number(formData.get("targetAmount")),
    savedAmount: Number(formData.get("savedAmount")),
    category: formData.get("category"),
    deadline: formData.get("deadline"),
    createdAt: new Date()
  }

  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(goalData)
  })
  .then((res) => {res.json()})
  .then((data) => {
    console.log("New goal created:", data)
    event.target.reset()
  })
  .catch((err) => {
    console.error(" Fetch error:", err.message)
  });
}


  return (
    <div id='goalForm'>
      <h2>Goal Form</h2>
      <form onSubmit={handleSubmit}>

        <label> Name:</label>
        <br />
        <input type="text" name='name' />

        <br />

        <label>Target Amount:</label>
        <br />
        <input type="text" name='targetAmount'/>

        <br />

        <label>Deposit:</label>
        <br />
        <input type="text" name='savedAmount' />

        <br />

        <label>Category:</label>
        <br />
        <input type="text" name='category'/>

        <br />

        <label>Deadline:</label>
        <br />
        <input type="date" name='deadline'/>

        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default GoalsForm