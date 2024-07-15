<template >
  <span class="w-32 h-32 bg-red-900" >
    <component
      :is="iconToRender?.icon"
      aria-hidden="true"/>
  </span>
</template>

<script setup lang="ts" >
import { PhBookOpenText } from "@phosphor-icons/vue"
import type { Component } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
    validate: (val: string) => ['horse', 'heart', 'cube'].includes(val)
  }
})

const iconToRender = computed(() => {
  return mapping.find(icon => icon.id === props.icon )
})

interface MappingObject {
  id: string
  icon: Component
}
const mapping: MappingObject[] = [
  { id: 'book', icon: PhBookOpenText },
  // Add more icons here
]
</script>
