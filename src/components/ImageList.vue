<template>
  <div class="w-full h-full flex flex-col p-4">
    <div class="w-full h-full bg-white rounded-md text-gray-900 max-h-[626px] overflow-y-scroll grid grid-cols-4 max-h-full border-2 border-sky-400">
      <template v-for="imageData in props.searchResult?.data as SearchResult" :key="imageData.id">
        <template v-for="imageSrc in imageData?.topic_images" :key="imageSrc">
          <button class="relative h-full w-full border-2 bordr-white rounded-md hover:opacity-60 transition-all duration-200 ease-in">
            <img 
              :src="imageSrc"
              class="w-full h-full"
              :alt="`Ein gescraptes Bild mit folgender Überschrift und URL: ${imageData?.topic_id}-${imageSrc}`" />
            <span class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              +
            </span>
          </button>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchResult } from '@/types'

const props = defineProps({
  searchResult: {
    type: Object,
    required: false,
    default: undefined
  }
})
</script>
