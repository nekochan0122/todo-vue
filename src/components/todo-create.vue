<script setup lang="ts">
import { ref } from 'vue'
import { useTodoContext } from '~/contexts/todo-context'

const { addTodo } = useTodoContext()

const input = ref('')

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
