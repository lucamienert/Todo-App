import axios from 'axios'
import { Todo } from '../types/todo'

const API_URL = 'http://localhost:8080/api/todo'

export const fetchTodos = () => axios.get<Todo[]>(API_URL).then(res => res.data)

export const fetchTodo = (id: number) => axios.get<Todo>(`${API_URL}/${id}`).then(res => res.data)

export const createTodo = (title: string) => axios.post(API_URL, { title, isDone: false })

export const updateTodo = (todo: Todo) => axios.put(`${API_URL}/${todo.id}`, todo)

export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`)
