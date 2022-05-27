/* eslint-disable react/prop-types */
import React from 'react'

export default function CompletedTask({ taskArray, handleCheckbox }) {
    return (
        <div>
            <h2> Completed </h2>
            <div>
                {taskArray
                    .filter((obj) => obj.complete === true)
                    .map((obj) => {
                        return (
                            <div className="checkBoxContainer" key={obj.id}>
                                <input
                                    checked
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
