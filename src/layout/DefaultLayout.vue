<template>
  <div class="flex flex-col h-screen max-h-screen">
    <NavBar 
      :nav-links="navLinks" 
      :has-default-icon="true" />
    <div class="h-full overflow-y-scroll">
      <slot />
    </div>
    <div class="h-12 p-4 bg-gradient-to-r from-gray-900 via-teal-900 to-teal-400 text-gray-50">
      FOOTER
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/layout/components/NavBar.vue'
import type { NavLinks } from '@/types'

const navLinks: NavLinks[] = [
  { href: "#", text: "Courses" },
  { href: "#", text: "About" },
  { href: "#", text: "Contact" }
]

import { provide } from 'vue'

provide('links', navLinks)
</script>
