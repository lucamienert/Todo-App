import { Todo } from "../types/todo"
import { deleteTodo, updateTodo } from "../lib/api"
import { useNavigate } from "react-router-dom"

export default function TodoItem({ todo, refresh }: { todo: Todo; refresh: () => void }) {
  const navigate = useNavigate()

  const toggle = async () => {
    await updateTodo({ ...todo, isDone: !todo.isDone })
    refresh()
  }

  const handleDelete = async () => {
    await deleteTodo(todo.id)
    refresh()
  }

  return (
    <li className="flex justify-between items-center border-b pb-1">
      <span
        onClick={toggle}
        className={`cursor-pointer ${todo.isDone ? "line-through text-gray-500" : ""}`}
      >
        {todo.title}
      </span>
      <div className="flex gap-2">
        <button onClick={() => navigate(`/edit/${todo.id}`)} className="text-blue-500">✏️</button>
        <button onClick={handleDelete} className="text-red-500">❌</button>
      </div>
    </li>
  )
}
