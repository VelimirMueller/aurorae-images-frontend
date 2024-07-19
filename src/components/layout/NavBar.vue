<template>
  <nav 
    role="navigation"
    class="flex flex-row w-full items-center bg-blue-400 h-24">
    <template class="hidden lg:flex w-full h-full ">
      <DefaultIcon 
        v-if="props.hasDefaultIcon"
        class="justfy-center items-cente" />
      <DefaultLinkList />
      <AccessibleButton class="hover:text-cyan-900 h-2/3" :is-animated="true" text="SIGN IN" type="button" />
    </template>
  </nav>
</template>

<script setup lang="ts">
import AccessibleButton from '@/components/AccessbleButton.vue'
import DefaultIcon from '@/components/layout/DefaultIcon.vue'
import DefaultLinkList from '@/components/layout/DefaultLinkList.vue'

const props = defineProps({
  hasDefaultIcon: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>
