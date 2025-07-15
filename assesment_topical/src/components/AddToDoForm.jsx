import React, { useState } from 'react';
import { GlobalState, useGlobalState } from '../state/GlobalState';

function AddToDoForm() {
    const [todoText, setTodoText] = useState('');
    const {todos} = useGlobalState();

    const handleAddTodo = () => {
        e.preventDefault();
        if (todotext.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: todotext.trim(),
            completed: false
        };

        GlobalState.set({
            todos: [...todos, newTodo]
        });

        setTodoText("");
    };
    
    return (
        <div className="add-todo-container">
        <h2>Nieuwe Todo Toevoegen</h2>
        <form onSubmit={handleAddTodo} className="todo-form">
            <div className="input-group">
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Wat moet je doen?"
                className="todo-input"
                maxLength={100} // Beperkt de lengte tot 100 karakters
            />
            <button 
                type="submit" 
                className="add-button"
                disabled={todoText.trim() === ''} // Knop uitgeschakeld als er geen tekst is
            >
                Toevoegen
            </button>
            </div>
        </form>
        </div>
    );
}

export default AddToDoForm;