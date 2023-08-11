import React from 'react'
import { FaEdit, FaRegTrashAlt, FaCheck } from 'react-icons/fa'

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <p className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FaEdit onClick={() => editTodo(task.id)} />
        <FaRegTrashAlt onClick={() => deleteTodo(task.id)} />
        <FaCheck onClick={() => toggleComplete(task.id)} />
      </div>
    </div>
  )
}

export default Todo
