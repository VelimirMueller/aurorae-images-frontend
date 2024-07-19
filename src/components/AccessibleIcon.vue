<template>
  <component
    :is="iconToRender?.icon"
    :width="`${size[0]}px`"
    :height="`${size[1]}px`"
    aria-hidden="true" />
</template>

<script setup lang="ts">
import { PhBookOpenText } from "@phosphor-icons/vue"
import type { Component } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
    validate: (val: string) => ['book'].includes(val)
  },

  size: {
    type: Array,
    required: false,
    default: () => [16, 16]
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
