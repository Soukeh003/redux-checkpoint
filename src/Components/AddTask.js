import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/Actions/taskActions'

const AddTask = () => {
  const [task,setTask] = useState=("")
  const dispatch= useDispatch

  const handleSubmit = () =>{
    if(task){
      dispatch(addTask(task))
      setTask("")
    }else{
      alert("Please Enter Task")
    }
  }
  return (
    <div>
      <input type='text' value={task} on onChange={(e) => setTask(e.target.val)} />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default AddTask