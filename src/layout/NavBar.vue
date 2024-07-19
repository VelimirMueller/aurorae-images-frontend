<template>
  <nav 
    role="navigation"
    class="flex w-full items-center bg-blue-400 h-24">
    <DefaultIcon v-if="props.hasDefaultIcon" />
    <ul class="w-full flex h-e items-center justify-center hover:text-bold">
      <template 
        v-for="link in props.navLinks"
        :key="link.text">
        <li class="mr-12 hover:text-cyan-900 hover:underline hover:-translate-y-px hover:translate-x-px transition-all duration-900 cubic-beziere delay-200">
          <a class="link mx-4 h-24" :href="link.href">
            {{ link.text ?? '' }}
          </a>
        </li>
      </template>
    </ul>
    <AccessibleButton class="hover:text-cyan-900" :is-animated="true" text="SIGN IN" type="button" />
  </nav>
</template>

<script setup lang="ts">
import AccessibleButton from '@/components/AccessbleButton.vue'
import DefaultIcon from '@/layout/DefaultIcon.vue'

const props = defineProps({
  navLinks: {
    type: Object,
    required: false,
    default: () => {}
  },

  hasDefaultIcon: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
