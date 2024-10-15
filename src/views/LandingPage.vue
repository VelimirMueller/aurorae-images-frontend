 f<template>
  <LpHero>
    <template #hero-content>
      <div class="flex h-full">
        <div class="w-full h-full">
          <section 
            id="section:ImageUploader"
            class="h-full">
            <div class="h-full w-full p-12 bg-gray-200 grid grid-cols-2 rounded-md">
              <ImageUploader 
                @reset="() => {}"
                @set-file="val => {}" />
              <div class="flex flex-col justify-center items-center text-white h-full w-full bg-gradient-to-r from-gray-900 to-teal-800 focus:border-teal-400">
                <div class="h-20 w-full p-2 mt-2">
                  <ImageSearch @submit="scrapeData" />
                </div>
                <div class="w-full h-full flex flex-col">
                  TEST
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </template>
  </LpHero>
</template>

<script setup lang="ts">
import LpHero from '@/components/landingPage/LpHero.vue'
import ImageSearch from '@/components/ImageSearch.vue'
import ImageUploader from '@/components/ImageUploader.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

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

const searchResult: Ref<SearchResult|undefined> = ref()
const scrapeData = (searchQuery: string) => {
  fetch(`http://127.0.0.1:8000/scrape/${searchQuery}`, {method: 'POST'})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      searchResult.value = data
    })
}
</script>
