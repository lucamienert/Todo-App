import { useState } from "react"
import { Todo } from "../types/todo"

export default function TodoForm({
  initial,
  onSubmit,
}: {
  initial?: Todo
  onSubmit: (title: string, isDone: boolean) => void
}) {
  const [title, setTitle] = useState(initial?.title || "")
  const [isDone, setIsDone] = useState(initial?.isDone || false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(title, isDone)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border px-3 py-2 rounded w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titel"
      />
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={isDone} onChange={() => setIsDone(!isDone)} />
        Erledigt?
      </label>
      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        Speichern
      </button>
    </form>
  )
}
