import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import TodoListPage from "./pages/TodoListPage"
import NewTodoPage from "./pages/NewTodoPage"
import EditTodoPage from "./pages/EditTodoPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
      </Routes>
    </Router>
  )
}
