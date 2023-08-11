import { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    editTodo(value, task.id)
    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Update task"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">
          Save
        </button>
      </form>
    </div>
  )
}

export default EditTodoForm
