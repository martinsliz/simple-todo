import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(value)
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
          placeholder="What is the task today?"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">
          ADD NEW
        </button>
      </form>
    </div>
  )
}

export default TodoForm
