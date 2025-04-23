import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = "http://localhost:8080/api/todo"

interface Todo {
  id: number,
  title: string,
  isDone: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const res = await axios.get(API_URL)
    setTodos(res.data)
  }

  const addTodo = async () => {
    if (!newTodo.trim()) return
    await axios.post(API_URL, { title: newTodo, isDone: false })
    setNewTodo("")
    fetchTodos()
  }

  const toggleTodo = async (todo: Todo) => {
    const current: any = todos.find((t: Todo) => t.id === todo.id)
    await axios.put(`${API_URL}/${current.id}`, { ...todo, isDone: !current.isDone })
    fetchTodos()
  }

  const deleteTodo = async (todo: Todo) => {
    await axios.delete(`${API_URL}/${todo.id}`)
    fetchTodos()
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">📝 ToDo App</h1>
      <div className="flex gap-2">
        <input
          className="border px-2 py-1 flex-1 rounded"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Neue Aufgabe..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={addTodo}
        >
          Hinzufügen
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b pb-1"
          >
            <span
              onClick={() => toggleTodo(todo)}
              className={`cursor-pointer ${todo.isDone ? 'line-through text-gray-500' : ''}`}
            >
              {todo.title}
            </span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteTodo(todo)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
