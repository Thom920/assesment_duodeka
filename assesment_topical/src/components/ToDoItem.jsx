import React, { useState } from "react";

function TodoItem({ todo,done , edit , deleteToDo }) {
    const [edit_Text, setEditText] = useState(todo.text);

    const handleUpdate = () => {
        edit(todo.id);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleUpdate();
        }
    }

    const handleDelete = () => {
        deleteToDo(todo.id);
    }

    return (
        <li>
            {todo.editing ? (
                <div>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} onBlur={handleUpdate} onKeyDown={handleKeyDown}/>
                    <div>
                        <button onClick={handleUpdate}> Opslaan </button>
                        <button onClick={() => edit(todo.id)}> Annuleren </button>
                    </div>
                </div>
            ) : (
                <div>
                    <span>
                        {todo.text}
                    </span>
                    <div>
                        <button onClick={() => done(todo.id)}> {todo.completed ? 'Ongedaan' : 'Voltooi'} </button>
                        <button onClick={() => edit(todo.id)}> Bewerk </button>
                        <button onClick={handleDelete}> Verwijder </button>
                    </div>
                </div>
            )}
        </li>
    );
}

export default TodoItem;