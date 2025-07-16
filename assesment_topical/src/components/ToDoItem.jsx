import React, { useState, useEffect } from "react";

function TodoItem({ todo,done , edit , deleteToDo , updateText }) {
    const [editText, setEditText] = useState(todo.text);

    // Reset editText wanneer edit mode wordt geopend/gesloten
    useEffect(() => {
        setEditText(todo.text);
    }, [todo.editing, todo.text]);

    const handleUpdate = () => {
        if (editText.trim() === "") {
            alert("The task cannot be empty");
            return;
        };
        updateText(todo.id, editText);
    }

    const handleCancel = () => {
        setEditText(todo.text); // Reset naar originele tekst
        edit(todo.id); // Sluit edit mode
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleUpdate();
        }
        if (e.key === "Escape") {
            handleCancel();
        }
    }


    const handleDelete = () => {
        deleteToDo(todo.id);
    }

    return (
        <li>
            {todo.editing ? (
                <div>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} onKeyDown={handleKeyDown} autoFocus/>
                    <div>
                        <button onClick={handleUpdate}> save </button>
                        <button onClick={handleCancel}> cancel </button>
                    </div>
                </div>
            ) : (
                <div>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    <div>
                        <button onClick={() => done(todo.id)}> {todo.completed ? 'undone' : 'complete'} </button>
                        <button onClick={() => edit(todo.id)}> Edit </button>
                        <button onClick={handleDelete}> Delete </button>
                    </div>
                </div>
            )}
        </li>
    );
}

export default TodoItem;