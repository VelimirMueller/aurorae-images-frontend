<template>
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
</template>

<script setup lang="ts">
const props = defineProps({
  navLinks: {
    type: Object,
    required: true
  }
})
</script>
