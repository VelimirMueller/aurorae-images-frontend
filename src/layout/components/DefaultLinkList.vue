<template>
  <ul class="w-full flex h-e items-center justify-center hover:text-bold">
    <template 
      v-for="link in navLinks"
      :key="link.text">
      <li class="mr-12 text-gray-50 hover:text-cyan-400 hover:underline hover:-translate-y-px hover:translate-x-px transition-all duration-900 cubic-beziere delay-200">
        <a class="link mx-4 h-24" :href="link.href">
          {{ link.text ?? '' }}
        </a>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { NavLinks } from '@/types'

const navLinks: NavLinks[]|[] = inject('links') ?? []
</script>
