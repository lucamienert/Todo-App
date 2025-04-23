import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Todo } from "../types/todo"
import TodoForm from "../components/TodoForm"
import { fetchTodo, updateTodo } from "../lib/api"

export default function EditTodoPage() {
  const { id } = useParams<{ id: string }>()
  const [todo, setTodo] = useState<Todo | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetchTodo(Number(id)).then(setTodo)
    }
  }, [id])

  const handleUpdate = async (title: string, isDone: boolean) => {
    if (todo) {
      await updateTodo({ ...todo, title, isDone })
      navigate("/")
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Aufgabe bearbeiten</h2>
      {todo && <TodoForm initial={todo} onSubmit={handleUpdate} />}
    </div>
  )
}
