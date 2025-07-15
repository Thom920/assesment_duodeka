import React, { useState } from 'react';
import { GlobalState, useGlobalState } from '../state/GlobalState';

function AddToDoForm() {
    const [todoText, setTodoText] = useState('');
    const globalState = useGlobalState();
    const todos = globalState.todos || [];

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (todoText.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: todoText.trim(),
            completed: false
        };

        GlobalState.set({
            todos: [...todos, newTodo]
        });

        setTodoText("");
    };

    return ( 
        <div>
            <h1>Nieuwe Todo Toevoegen</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Voeg een nieuwe Todo toe"
                />
                <button type="submit">Toevoegen</button>
            </form>
        </div>
    );

}

export default AddToDoForm;