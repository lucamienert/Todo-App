import { useNavigate } from "react-router-dom"
import TodoForm from "../components/TodoForm"
import { createTodo } from "../lib/api"

export default function NewTodoPage() {
  const navigate = useNavigate()

  const handleCreate = async (title: string) => {
    await createTodo(title)
    navigate("/")
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Neue Aufgabe</h2>
      <TodoForm onSubmit={handleCreate} />
    </div>
  )
}
