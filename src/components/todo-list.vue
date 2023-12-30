<script setup lang="ts">
import { useTodoContext } from '~/contexts/todo-context'

const { todoList, toggleTodo, removeTodo } = useTodoContext()
</script>

<template>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      <input
        type="checkbox"
        :id="todo.id"
        :checked="todo.done"
        @click="() => toggleTodo(todo.id)"
      />
      <label :for="todo.id">{{ todo.text }}</label>
      <button @click="() => removeTodo(todo.id)">remove</button>
    </li>
  </ul>
</template>

<style scoped>
input:checked + label {
  text-decoration: line-through;
}
</style>
