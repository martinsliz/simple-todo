import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault()
    // edit todo
    editTodo(value, task.id)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="update task"
      />
      <button type="submit" className="todo-btn">
        Save
      </button>
    </form>
  )
}

export default EditTodoForm
