import { useState } from 'react';
import axios from 'axios';

function App() {
  
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async (e)=>{
    e.preventDefault();
    if (!newTodo.trim()) return; // Prevent adding empty tasks
    try {
      const response = await axios.post("/api/todos", { text: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo(""); // Clear input field after adding
       
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }
  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Task Manager</h1>
      <form onSubmit={addTodo} className="flex items-center gap-2 shadow-sm border border-gray-200 rounded-lg p-4">
        <input 
        className="flex-1 outline-none  px-3 py-2  text-gray-700 placeholder-gray-400"
        type="text" 
        value={newTodo} 
        onChange={(e)=>setNewTodo(e.target.value)}
        placeholder="What needs to be done?"
        required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer">Add task</button>
      </form>
    </div>
  </div>
  );
}

export default App
