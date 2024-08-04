<template>
  <component
    :is="iconToRender?.icon"
    :width="`${props.size[0]}px`"
    :height="`${props.size[1]}px`"
    :alt="props.altText ? props.altText : ''"
    :focusable="props.focusable"
    :aria-label="props.ariaLabel"
    :aria-hidden="props.ariaHidden" />
</template>

<script setup lang="ts">
import { PhBookOpenText } from "@phosphor-icons/vue"
import { computed } from 'vue'
import type { IconMap } from '@/utils'
import { IconVariants } from '@/utils'

const props = defineProps({
  altText: {
    type: String,
    required: false,
    default: ''
  },

  ariaLabel: {
    type: String,
    required: false,
    default: ''
  },

  ariaHidden: {
    type: Boolean,
    required: false,
    default: true
  },

  focusable: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Browse https://phosphoricons.com/ for all available icons.
   */
  icon: {
    type: String,
    required: true,
    validate: (val: IconVariants) => Object.values(IconVariants).includes(val)
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


const mapping: IconMap[] = [
  { id: IconVariants.Book, icon: PhBookOpenText, type: 'iconComponent' }
  // Add more phosphoricons here
]
</script>
