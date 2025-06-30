import { useState, useEffect } from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { MdModeEditOutline } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa6';
import { IoClipboardOutline } from 'react-icons/io5';
import axios from 'axios';


function App() {
  
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

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
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api/todos");
      console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const startEditing = (todo) => {
    setEditingTodo(todo._id);
    setEditedText(todo.text);
  };
  

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Task Manager</h1>
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
      <div className="mt-4">
        {todos.length === 0 ? (
          <div></div>
        ) : (
          <div className="flex flex-col gap-4">
            {todos.map((todo) => (
              <div key={todo._id}>
               {editingTodo === todo._id ? (
                <div className=" flex items-center gap-x-3">
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className=" flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 shadow-inner border-gray-200"
                   
                  />
                  <div className=" flex gap-x-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer">
                  <MdOutlineDone />
                 </button>
                 <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={()=> setEditingTodo(null)}>
                  <IoClose />
                 </button>
                 </div>
                </div>
               ) : (
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <button className={`h-6 w-6 border rounded-full flex items-center justify-center ${todo.completed ? "bg-green-500 border-green-500" : " border-gray-300 hover:border-blue-400"}`}>
                        {todo.completed && <MdOutlineDone /> }
                      
                    </button>
                    <span className=" text-gray-800 font-medium">{todo.text}</span>
                    </div>
                    <div className=" flex gap-x-2">
                      <button className=" p-2 text-blue-500 hover:text-blue-700 rounded-lg hover:bg-blue-50 duration-200"
                      onClick={() => startEditing(todo)}>
                      <MdModeEditOutline />
                    </button>
                    <button className=" p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 duration-200">
                      <FaTrash />
                    </button>
                    </div>
                  </div>
                </div>
               )}
              </div>
            ))}
          </div>
            
        )}
      </div>
    </div>
  </div>
  );
}

export default App
