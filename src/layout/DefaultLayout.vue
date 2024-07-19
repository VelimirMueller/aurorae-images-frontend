<template>
  <div class="flex flex-col h-screen max-h-screen">
    <NavBar 
      :nav-links="navLinks" 
      :has-default-icon="true" />
    <div class="h-full overflow-y-scroll">
      <slot />
    </div>
    <div class="h-12 p-4 bg-blue-400">
      FOOTER
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/layout/NavBar.vue'

interface NavLinks {
  href: string
  text: string
}
const navLinks: NavLinks[] = [
  { href: "#", text: "Courses" },
  { href: "#", text: "About" },
  { href: "#", text: "Contact" }
]
</script>
