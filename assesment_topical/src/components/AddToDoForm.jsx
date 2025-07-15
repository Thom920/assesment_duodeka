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
            <h1>Add new todo</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );

}

export default AddToDoForm;