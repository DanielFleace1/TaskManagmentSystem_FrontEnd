/* eslint-disable react/prop-types */
import React from 'react'

export default function AddTaskBar({ handleInputChange, handleAddTaskSubmit, newTask }) {
    return (
        <div>
            <form onSubmit={handleAddTaskSubmit} id="addTaskForm">
                <input
                    onChange={handleInputChange}
                    id="addTaskInput"
                    placeholder="Enter Task Description..."
                    value={newTask}
                />
                <button id="addTaskButton" type="submit">
                    + Add Task
                </button>
            </form>
        </div>
    )
}
