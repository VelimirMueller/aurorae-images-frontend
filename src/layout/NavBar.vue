<template>
  <nav 
    role="navigation"
    class="flex w-full items-center bg-blue-400 h-24">
    <a 
      v-if="props.icon"
      class="sign-in w-full flex items-center p-4 px-8 text-2xl font-bold w-1/3 bg-white h-2/3 ml-2 rounded-lg p-2 mr-auto border-2 border-cyan-600 justify-center"
      href="#">
      <AccessibleIcon
        :icon="props.icon" 
        :size="props.iconSize" />
      <span class="ml-2 mt-1">
        {{ 'LEARNING APP' }}
      </span>
    </a>
    <ul class="w-full flex h-full items-center justify-center hover:text-bold">
      <temlate 
        v-for="link in props.navLinks"
        :key="link.text">
        <li class="mr-12">
          <a class="link mx-4" :href="link.href">
            {{ link.text ?? '' }}
          </a>
        </li>
      </temlate>
    </ul>
    <AccessibleButton :is-animated="true" text="SIGN IN" />
  </nav>
</template>

<script setup lang="ts">
import AccessibleIcon from '@/components/AccessibleIcon.vue'
import AccessibleButton from '@/components/AccessbleButton.vue'

const props = defineProps({
  navLinks: {
    type: Object,
    required: false,
    default: () => {}
  },

  icon: {
    type: String,
    required: false,
    default: ''
  },

  iconSize: {
    type: Array,
    required: false,
    default: () => [16, 16]
  }
})
</script>
