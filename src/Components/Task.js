import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { complete_task } from '../Redux/Actions/taskActions'
import { edit_task } from '../Redux/Actions/taskActions'

const Task = ({task}) => {
  const dispatch = useDispatch()
  const [isEditing , setIsEditing] = useState(false)
  const [editvalue , setEditvalue] = useState(task.description)

  const handleEdit = (e) => {
    e.preventDefault();
    let editedTask = {
      id : task.id ,
      description : editvalue , 
      isDone : false
    }
    dispatch(edit_task(editedTask))
    setIsEditing(false)
  }
  return (
    <div>
      <div className={task.isDone ? "completed" : " "}>
        {isEditing ? (
          <form onSubmit={handleEdit}> 
            <input type='text' value={editvalue} onChange={(e) => {setEditvalue(e.target.value)}} />
            <button>save</button>
          </form>
        ) : (
          <div>
            <p onClick={() => dispatch(complete_task(task))}>{task.description}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        )} 
      </div>
    </div>
  )
}

export default Task