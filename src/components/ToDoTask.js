/* eslint-disable react/prop-types */
import React from 'react'

export default function ToDoTask({ taskArray, handleCheckbox }) {
    return (
        <div>
            <h2> To-Do </h2>
            <div>
                {taskArray
                    .filter((obj) => obj.complete === false)
                    .map((obj) => {
                        return (
                            <div className="checkBoxContainer" key={obj.taskId}>
                                <input
                                    type="checkbox"
                                    name={obj.taskId}
                                    onChange={handleCheckbox}
                                />
                                {obj.task}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
