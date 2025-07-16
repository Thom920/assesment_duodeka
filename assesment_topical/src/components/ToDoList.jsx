import React, { useState } from "react";
import TodoItem from './TodoItem';
import { GlobalState, useGlobalState } from '../state/GlobalState';

function ToDoList() {
    const { todos = []} = useGlobalState();

    const done = (id) => {
        GlobalState.set({
            todos: todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        });   
    }
    const edit = (id) => {
        GlobalState.set({
            todos: todos.map(todo => todo.id === id ? { ...todo, editing: !todo.editing } : todo)
        });
    }

    const updateText = (id, newText) => {
        GlobalState.set({
            todos: todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText, editing: false } : todo,
            ),
        });
    }

    const deleteToDo = (id) => {
        GlobalState.set({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    return (
    <div>
        <h2>Todo's</h2>
        {todos.length === 0 ? (
                <p>
                    No more to-dos. Add a new one!
                </p>
            ) : (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    done={done}
                    edit={edit}
                    deleteToDo={deleteToDo}
                    updateText={updateText}
                />
            ))}
        </ul>
        )}
    </div>
)
}



export default ToDoList;