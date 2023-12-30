<script setup lang="ts">
import { useTodoContext } from '~/contexts/todo-context'

const { addTodo } = useTodoContext()

const input = defineModel<string>()

function onSubmit() {
  if (!input.value) return alert('Please enter a todo')

  addTodo(input.value)
  input.value = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="input" />
    <button type="submit">add</button>
  </form>
</template>
