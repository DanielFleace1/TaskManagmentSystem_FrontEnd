import React, { useEffect, useState } from 'react'
import AddTaskBar from './components/AddTaskBar'
import CompletedTask from './components/CompletedTask'
import ToDoTask from './components/ToDoTask'
import serverFunctions from './serverFunctions'
import './App.css'

function App() {
    // State
    const [taskArray, setTaskArray] = useState([])
    const [newTask, setNewTask] = useState('')
    // Random ID function
    const randId = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    // Handler Functions
    const handleInputChange = (e) => {
        e.preventDefault()
        setNewTask(e.target.value)
    }
    const handleAddTaskSubmit = async (e) => {
        e.preventDefault()
        if (newTask.length === 0) return
        const obj = {
            task: newTask,
            complete: false,
            taskId: randId(),
        }
        try {
            const returnObj = await serverFunctions.addTask(obj)
            const copyAry = [...taskArray]
            copyAry.push(returnObj)
            setTaskArray(copyAry)
            setNewTask('')
        } catch (err) {
            console.log(err)
        }
    }
    const handleCheckbox = (e) => {
        const { name } = e.target
        const index = taskArray.findIndex((x) => x.taskId === name)
        if (index === -1) return
        const copy = [...taskArray]
        copy[index].complete = !copy[index].complete
        setTaskArray(copy)
    }

    // Effects
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await serverFunctions.getTask()
                setTaskArray(data)
            } catch (err) {
                console.log('err:', err)
            }
        }
        getData()
    }, [])

    return (
        <div id="app">
            <div id="header">Inventora Task </div>
            <div id="appWrapper">
                <div id="toDoListWrapper">
                    <h1 id="title"> Add New Task</h1>
                    <AddTaskBar
                        handleInputChange={handleInputChange}
                        handleAddTaskSubmit={handleAddTaskSubmit}
                        newTask={newTask}
                    />
                    <ToDoTask taskArray={taskArray} handleCheckbox={handleCheckbox} />
                    <CompletedTask taskArray={taskArray} handleCheckbox={handleCheckbox} />
                </div>
            </div>
        </div>
    )
}

export default App
