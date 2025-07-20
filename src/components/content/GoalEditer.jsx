import React, { useState } from 'react';

const GoalEditor = ({ goal, url, onEditComplete }) => {
  const [formData, setFormData] = useState({
    name: goal.name,
    targetAmount: goal.targetAmount,
    savedAmount: goal.savedAmount,
    category: goal.category,
    deadline: goal.deadline
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "targetAmount" || name === "savedAmount" ? Number(value) : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${url}/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to update goal`);
      return res.json();
    })
    .then((updatedGoal) => {
      console.log("✅ Goal updated:", updatedGoal);
      if (onEditComplete) onEditComplete(updatedGoal);
    })
    .catch((err) => {
      console.error("💥 Update error:", err.message);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Goal: {goal.name}</h3>

      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Target Amount:</label>
      <input type="number" name="targetAmount" value={formData.targetAmount} onChange={handleChange} />

      <label>Saved Amount:</label>
      <input type="number" name="savedAmount" value={formData.savedAmount} onChange={handleChange} />

      <label>Category:</label>
      <input type="text" name="category" value={formData.category} onChange={handleChange} />

      <label>Deadline:</label>
      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />

      <button type="submit">Update Goal</button>
    </form>
  );
};

export default GoalEditor;
