<template>
  <form
    class="flex flex-row text-gray-900 w-full h-full justify-center items-center"
    @submit.prevent="checkIfSubmit">
    <label 
      for="query"
      class="text-gray-900 flex justify-center items-center hidden">
      SUCHE
    </label>
    <input 
      id="query"
      v-model="searchTerm"
      class="w-4/5 h-full rounded-bl-md rounded-tl-md p-2 text-lg focus:outline-none focus:border-t focus:border-b focus:border-l focus:border-sky-500 focus:ring-2 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      name="query" 
      type="text" />
    <button 
      class="text-white bg-gray-900 hover:bg-gray-700 hover:text-gray-100 text-gray-50 rounded-r-md w-1/5 h-full border-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"  
      type="submit">
      Suche
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

const emit = defineEmits(['submit'])
const searchTerm: Ref<string> = ref('')
const checkIfSubmit = (): void => {
  if (searchTerm.value !== '') { emit('submit', searchTerm.value) }
}
</script>
