import React from 'react'
import { FaEdit, FaRegTrashAlt, FaCheck } from 'react-icons/fa'

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <p className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <button>
          <FaEdit onClick={() => editTodo(task.id)} />
        </button>
        <button className="fa-trash">
          <FaRegTrashAlt onClick={() => deleteTodo(task.id)} />
        </button>
        <button className="fa-check">
          <FaCheck onClick={() => toggleComplete(task.id)} />
        </button>
      </div>
    </div>
  )
}

export default Todo
