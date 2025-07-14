import React, { useState } from "react";

function TodoItem({ todo, onDelete, onUpdateText }) {
    const [edit_Text, setEditText] = useState(todo.text);

    const handleUpdate = () => {
        onUpdateText(todo.id, edit_Text.trim());
    }

    const handelKeyDown = (e) => {
        if (e.key === "Enter") {
            handleUpdate();
        }
    }

    const handleDelete = () => {
        onDelete(todo.id);
    }

    return (
        <div className="todo-item">
            <input
                type="text"
                value={edit_Text}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={handelKeyDown}
            />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TodoItem;