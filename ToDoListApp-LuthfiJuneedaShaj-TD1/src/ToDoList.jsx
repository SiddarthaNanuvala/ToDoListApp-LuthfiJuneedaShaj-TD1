import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([
        { text: "Eat Food", completed: false },
        { text: "Go to Work", completed: false },
        { text: "Go to Gym", completed: false },
        { text: "Sleep", completed: false }
    ]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { text: newTask, completed: false }]);
            setNewTask("");
        }
    }

    function completeTask(index) {
        const updatedTasks = [...tasks];
        const [completedTask] = updatedTasks.splice(index, 1);
        completedTask.completed = true; // Mark the task as completed
        setTasks([completedTask, ...updatedTasks]); // Move to the top
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <>
            <div className="to-do-list">
                <h1>TO DO LIST</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter A Task" 
                        value={newTask} 
                        onChange={handleInputChange} />
                    <button
                        className="add-button"
                        onClick={addTask}>Add</button>
                </div>
                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task.text}</span>
                            <button 
                                className="complete-button" 
                                onClick={() => completeTask(index)}
                                disabled={task.completed}>
                                {task.completed ? "Completed" : "Complete"}
                            </button>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                            {!task.completed && (
                                <>
                                    <button className="move-button" onClick={() => moveTaskUp(index)}>⬆️</button>
                                    <button className="move-button" onClick={() => moveTaskDown(index)}>⬇️</button>
                                </>
                            )}
                        </li>
                    )}
                </ol>
            </div>
        </>
    );
}

export default ToDoList;