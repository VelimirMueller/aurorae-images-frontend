<template>
  <nav 
    role="navigation"
    class="flex flex-row w-full items-center bg-blue-400 h-24 px-4">
    <template class="hidden lg:flex w-full h-full">
      <DefaultIcon 
        v-if="props.hasDefaultIcon"
        class="justfy-center items-center" />
      <DefaultLinkList />
    </template>
    <AccessibleButton 
      class="hover:text-cyan-900 ml-auto lg:w-48 w-36 lg:mr-0" 
      :is-animated="true" 
      text="SIGN IN" 
      type="button" />
  </nav>
</template>

<script setup lang="ts">
import AccessibleButton from '@/components/AccessibleButton.vue'
import DefaultIcon from '@/layout/components/DefaultIcon.vue'
import DefaultLinkList from '@/layout/components/DefaultLinkList.vue'

const props = defineProps({
  hasDefaultIcon: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>
