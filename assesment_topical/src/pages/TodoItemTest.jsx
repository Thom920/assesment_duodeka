import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';

function TodoItemTest() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Eerste test todo",
      completed: false,
      editing: false
    },
    {
      id: 2,
      text: "Tweede test todo",
      completed: true,
      editing: false
    },
    {
      id: 3,
      text: "Derde test todo die wat langer is om te zien hoe het eruit ziet",
      completed: false,
      editing: false
    }
  ]);

  // Mock functies voor testing
  const handleUpdateText = (id, newText) => {
    console.log(`Update todo ${id} with text: "${newText}"`);
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    alert(`Todo ${id} updated to: "${newText}"`);
  };

  const handleDelete = (id) => {
    console.log(`Delete todo ${id}`);
    setTodos(prev => prev.filter(todo => todo.id !== id));
    alert(`Todo ${id} deleted!`);
  };

  const addNewTodo = () => {
    const newId = Math.max(...todos.map(t => t.id), 0) + 1;
    const newTodo = {
      id: newId,
      text: `Nieuwe test todo ${newId}`,
      completed: false,
      editing: false
    };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>TodoItem Component Test</h1>
      <p>Hier kun je de TodoItem component testen:</p>
      
      <button 
        onClick={addNewTodo}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Voeg Test Todo Toe
      </button>

      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
        <h3>Test Todo Items:</h3>
        {todos.length === 0 ? (
          <p>Geen todos om te testen. Klik op "Voeg Test Todo Toe"</p>
        ) : (
          todos.map(todo => (
            <div key={todo.id} style={{ 
              marginBottom: '10px', 
              padding: '10px', 
              border: '1px solid #eee',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9'
            }}>
              <TodoItem
                todo={todo}
                onUpdateText={handleUpdateText}
                onDelete={handleDelete}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoItemTest;
