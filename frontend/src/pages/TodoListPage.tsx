import { useEffect, useState } from "react"
import { Todo } from "../types/todo"
import TodoItem from "../components/TodoItem"
import { useNavigate } from "react-router-dom"
import { fetchTodos } from "../lib/api"

export default function TodoListPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const navigate = useNavigate()

  const load = async () => setTodos(await fetchTodos())

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">ToDo App</h1>
      <button
        onClick={() => navigate("/new")}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Neue Aufgabe
      </button>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} refresh={load} />
        ))}
      </ul>
    </div>
  )
}
