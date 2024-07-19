<template>
  <a 
    class="logo block flex items-center p-4 px-4 text-xl h-2/3 mt-auto mb-auto items-center rounded-lg p-2 justify-start bg-white border-cyan-700 border-2 text-cyan-900"
    href="#">
    <AccessibleIcon
      icon="book" 
      :size="[48, 48]" />
    <span 
      class="ml-2 mt-1">
      {{ 'LP' }}
    </span>
  </a>
</template>

<script setup lang="ts">
import AccessibleIcon from '@/components/AccessibleIcon.vue'
</script>
