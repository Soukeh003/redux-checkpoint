import { ADD_TASK, COMPLETE_TASK, EDIT_TASK } from "../ActionsTypes/actionType"

export const addTask = (task) => {
    return {
        type : ADD_TASK,
        payload : task 
    }
} 

export const complete_task = (task) => {
    return {
        type : COMPLETE_TASK,
        payload : task 
    }
} 

export const edit_task =(task) => {
    return {
        type : EDIT_TASK,
        payload : task
    }
}