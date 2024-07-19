<template>
  <nav 
    role="navigation"
    class="flex w-full items-center bg-blue-400 h-24">
    <DefaultIcon v-if="props.hasDefaultIcon" />
    <DefaultLinkList />
    <AccessibleButton class="hover:text-cyan-900" :is-animated="true" text="SIGN IN" type="button" />
  </nav>
</template>

<script setup lang="ts">
import AccessibleButton from '@/components/AccessbleButton.vue'
import DefaultIcon from '@/layout/DefaultIcon.vue'
import DefaultLinkList from '@/layout/DefaultLinkList.vue'

const props = defineProps({
  hasDefaultIcon: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>
