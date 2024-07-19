<template>
  <a 
    class="logo block w-48 bg-white flex items-center p-4 px-8 text-xl font-bold w-1/3 h-2/3 ml-2 rounded-lg p-2 mr-auto border-2 border-cyan-600 justify-center"
    href="#">
    <AccessibleIcon
      icon="book" 
      :size="[55, 55]" />
    <span 
      class="ml-2 mt-1">
      {{ 'LEARNING APP' }}
    </span>
  </a>
</template>

<script setup lang="ts">
import AccessibleIcon from '@/components/AccessibleIcon.vue'
</script>
