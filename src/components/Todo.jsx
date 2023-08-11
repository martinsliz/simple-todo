import React from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'

const Todo = ({ task, toggleComplete }) => {
  return (
    <div className="todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ''}`}
      >
        {task.task}
      </p>
      <div>
        <FaEdit />
        <FaRegTrashAlt />
      </div>
    </div>
  )
}

export default Todo
