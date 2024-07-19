<template>
  <button 
    :class="`${props.isAnimated ? 'sign-in' : ''} w-48 rounded-md text-cyan-900 h-1/2 mr-4 border-2 border-cyan-600 bg-white`">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  isAnimated: {
    type: Boolean,
    required: false,
    default: false
  },

  text: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: false,
    default: 'button',
    validator(value: string) {
      // The value must match one of these strings
      return ['button', 'submit', 'reset'].includes(value)
    }
  }
})
</script>
