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
    return (
    <div>
        <h1>Todo's</h1>

        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    done={done}
                />
            ))}
        </ul>
    </div>
)
}



export default ToDoList;