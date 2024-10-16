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
              <div class="flex flex-col justify-center items-center text-white h-full w-full bg-gray-800 rounded-md">
                <div class="h-20 w-full px-4 py-2 mt-2">
                  <ImageSearch @submit="scrapeData" />
                </div>
                <ImageList :search-result="searchResult" />
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
import ImageList from '@/components/ImageList.vue'
import ImageSearch from '@/components/ImageSearch.vue'
import ImageUploader from '@/components/ImageUploader.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

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
