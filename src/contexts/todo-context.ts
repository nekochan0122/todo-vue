import { reactive, provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

type Todo = {
  id: string
  text: string
  done: boolean
}

type TodoContext = {
  todoList: Todo[]
  addTodo: (text: Todo['text']) => void
  removeTodo: (id: Todo['id']) => void
  toggleTodo: (id: Todo['id']) => void
}

const todoContextKey = Symbol('TodoContext') as InjectionKey<TodoContext>

export function useTodoContext() {
  const todoContext = inject(todoContextKey)

  if (!todoContext) throw new Error('useTodoContext must be used after initTodoContext')

  return todoContext
}

export function initTodoContext(defaultTodo?: Todo[]) {
  const todoList = reactive(defaultTodo ?? [])

  function addTodo(text: string) {
    todoList.push({
      id: crypto.getRandomValues(new Uint32Array(1))[0].toString(16),
      text,
      done: false,
    })
  }

  function removeTodo(id: string) {
    const index = todoList.findIndex((todo) => todo.id === id)
    if (index === -1) return
    todoList.splice(index, 1)
  }

  function toggleTodo(id: string) {
    const todo = todoList.find((todo) => todo.id === id)
    if (!todo) return
    todo.done = !todo.done
  }

  provide(todoContextKey, {
    todoList,
    addTodo,
    removeTodo,
    toggleTodo,
  })
}
