<template>
  <div class="h-full">
    <ul class="max-h-[600px] overflow-y-scroll">
      <template 
        v-for="result in props.searchResult?.data as SearchResult"
        :key="result?.topic_id">
        <ul 
          v-if="result"
          class="border-t-4 mb-8 py-4 px-2 bg-gray-800 rounded-md mx-2">
          <li class="my-2">
            {{ `solved: ${JSON.stringify(result.topic_status)}` }}
          </li>
          <li class="my-2">
            {{ `headline: ${JSON.stringify(result.topic_headline)}` }}
          </li>
          <li class="my-2">
            {{ `content: ${JSON.stringify(result.topic_content)}` }}
          </li>
          <li class="my-2">
            <a class="text-blue-400 hover:text-blue-200" :href="result.topic_link" target="_blank">
              link to forum
            </a>
          </li>
          <li>
            <div v-if="result.topic_images.length" class="max-h-[300px] overflow-y-scroll p-12">
              <template v-for="(imageSrc, idx) in result.topic_images" :key="idx">
                <div class="w-full bg-red-200 rounded-lg">
                  <img class="h-full w-full" :src="imageSrc" />
                </div>
              </template>
            </div>
          </li>
        </ul>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

interface SearchResult {
  data?: {
    topic_id: string
    topic_status: string
    topic_headline: string
    topic_content: string
    topic_link: string
    topic_images: []
  }
}

const props = defineProps({
  searchResult: {
    type: Object as PropType<SearchResult>,
    required: false,
    default: null
  }
})
</script>
