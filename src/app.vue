<script setup lang="ts">
import { initTodoContext } from '~/contexts/todo-context'
import TodoCreate from './components/todo-create.vue'
import TodoList from '~/components/todo-list.vue'

const defaultTodo = [
  { id: 'default-1', text: 'Buy milk', done: true },
  { id: 'default-2', text: 'Buy a unicorn', done: false },
]

initTodoContext(defaultTodo)
</script>

<template>
  <TodoCreate />
  <TodoList />
</template>
