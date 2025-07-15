import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';
import AddToDoForm from '../components/AddToDoForm';
import { useGlobalState } from '../state/GlobalState';

function TodoItemTest() {
  // Local test state voor TodoItem testing
  const [localTodos, setLocalTodos] = useState([
    {
      id: 1,
      text: "Eerste test todo (lokaal)",
      completed: false
    },
    {
      id: 2,
      text: "Tweede test todo (lokaal)",
      completed: true
    },
    {
      id: 3,
      text: "Derde test todo die wat langer is om te zien hoe het eruit ziet",
      completed: false
    }
  ]);

  // Global state voor AddToDoForm testing
  const globalState = useGlobalState();
  const globalTodos = globalState.todos || [];

  // Mock functies voor TodoItem testing
  const handleUpdateText = (id, newText) => {
    console.log(`Update local todo ${id} with text: "${newText}"`);
    setLocalTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    alert(`Local Todo ${id} updated to: "${newText}"`);
  };

  const handleDelete = (id) => {
    console.log(`Delete local todo ${id}`);
    setLocalTodos(prev => prev.filter(todo => todo.id !== id));
    alert(`Local Todo ${id} deleted!`);
  };

  const addNewLocalTodo = () => {
    const newId = Math.max(...localTodos.map(t => t.id), 0) + 1;
    const newTodo = {
      id: newId,
      text: `Nieuwe lokale test todo ${newId}`,
      completed: false
    };
    setLocalTodos(prev => [...prev, newTodo]);
  };

  // Functies voor global todos (voor AddToDoForm testing)
  const handleGlobalUpdateText = (id, newText) => {
    console.log(`Update global todo ${id} with text: "${newText}"`);
    const updatedTodos = globalTodos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    );
    window.GlobalState.set({ todos: updatedTodos });
    alert(`Global Todo ${id} updated to: "${newText}"`);
  };

  const handleGlobalDelete = (id) => {
    console.log(`Delete global todo ${id}`);
    const filteredTodos = globalTodos.filter(todo => todo.id !== id);
    window.GlobalState.set({ todos: filteredTodos });
    alert(`Global Todo ${id} deleted!`);
  };

  const clearAllGlobalTodos = () => {
    window.GlobalState.set({ todos: [] });
    alert('Alle global todos verwijderd!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Todo Components Test Pagina</h1>
      <p>Hier kun je zowel AddToDoForm als TodoItem componenten testen:</p>
      
      {/* AddToDoForm Testing Sectie */}
      <div style={{ 
        border: '2px solid #28a745', 
        borderRadius: '8px', 
        padding: '20px', 
        marginBottom: '30px',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{ color: '#28a745', marginTop: 0 }}>🎯 AddToDoForm Component Test</h2>
        <p><strong>Test scenario:</strong> Voeg nieuwe todos toe via het formulier. Deze worden opgeslagen in de Global State.</p>
        
        <AddToDoForm />
        
        <div style={{ marginTop: '20px' }}>
          <button 
            onClick={clearAllGlobalTodos}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            🗑️ Wis Alle Global Todos
          </button>
          <span style={{ fontSize: '14px', color: '#666' }}>
            Global Todos: {globalTodos.length}
          </span>
        </div>

        {/* Global Todos weergave */}
        <div style={{ marginTop: '15px' }}>
          <h4>Global Todos (van AddToDoForm):</h4>
          {globalTodos.length === 0 ? (
            <p style={{ color: '#666', fontStyle: 'italic' }}>
              Geen global todos. Voeg er een toe met het formulier hierboven!
            </p>
          ) : (
            globalTodos.map(todo => (
              <div key={todo.id} style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                border: '1px solid #28a745',
                borderRadius: '4px',
                backgroundColor: 'white'
              }}>
                <TodoItem
                  todo={todo}
                  onUpdateText={handleGlobalUpdateText}
                  onDelete={handleGlobalDelete}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* TodoItem Testing Sectie */}
      <div style={{ 
        border: '2px solid #007bff', 
        borderRadius: '8px', 
        padding: '20px',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{ color: '#007bff', marginTop: 0 }}>📝 TodoItem Component Test</h2>
        <p><strong>Test scenario:</strong> Test de TodoItem functionaliteit met lokale test data.</p>
        
        <button 
          onClick={addNewLocalTodo}
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
          ➕ Voeg Lokale Test Todo Toe
        </button>

        <div>
          <h4>Lokale Test Todos:</h4>
          {localTodos.length === 0 ? (
            <p style={{ color: '#666', fontStyle: 'italic' }}>
              Geen lokale todos om te testen. Klik op "Voeg Lokale Test Todo Toe"
            </p>
          ) : (
            localTodos.map(todo => (
              <div key={todo.id} style={{ 
                marginBottom: '10px', 
                padding: '10px', 
                border: '1px solid #007bff',
                borderRadius: '4px',
                backgroundColor: 'white'
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

      {/* Test Instructies */}
      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#fff3cd', 
        border: '1px solid #ffeaa7',
        borderRadius: '8px'
      }}>
        <h3>🧪 Test Instructies:</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>AddToDoForm testen:</strong> Typ iets in het formulier en druk Enter of klik de knop</li>
          <li><strong>TodoItem testen:</strong> Verander tekst in de input velden en druk Enter of klik Update</li>
          <li><strong>Delete testen:</strong> Klik Delete om todos te verwijderen</li>
          <li><strong>Global vs Lokaal:</strong> Global todos (groen) komen van AddToDoForm, lokale todos (blauw) zijn test data</li>
          <li><strong>Console:</strong> Open de browser console (F12) om alle acties te zien</li>
        </ul>
      </div>
    </div>
  );
}

export default TodoItemTest;