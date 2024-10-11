<template>
  <LpHero>
    <template #hero-content>
      <div class="flex h-full">
        <div class="w-full h-full">
          <div class="h-full w-full p-12 bg-gray-200 grid grid-cols-2">
            <ImageUploader 
              @reset="reset()"
              @set-file="val => setFileInfo(val)" />
            <div class="bg-gray-900 flex flex-col justify-center items-center text-white p-8">
              <div class="h-1/6 w-full text-white">
                <ul 
                  v-if="file"
                  class="h-full">
                  <li>
                    {{ 'FILENAME: ' + file.filename }}
                  </li>
                  <li>
                    {{ 'FILESIZE: ' + (file.size / 1024 / 1024).toFixed(2) + 'MB' }}
                  </li>
                </ul>
              </div>

              <div class="w-full h-full flex flex-col">
                <div class="h-full">
                  <ul class="max-h-[600px] overflow-y-scroll">
                    <template 
                      v-for="result in searchResult?.data"
                      :key="result.topic_id">
                      <ul class="border-t-4 mb-8 py-4 px-2 bg-gray-800 rounded-md mx-2">
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
                <form
                  class="flex flex-col text-gray-900 bg-cyan-400"
                  @submit.prevent="scrapeData()">
                  <label 
                    for="query" 
                    class="text-white">
                    SUCHBEGRIFF</label>
                  <input 
                    id="query" 
                    v-model="searchQuery" 
                    name="query" 
                    type="text" />
                  <button 
                    class="text-white bg-red-900" 
                    type="submit">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </LpHero>
</template>

<script setup lang="ts">
import LpHero from '@/components/landingPage/LpHero.vue'
import ImageUploader from '@/components/ImageUploader.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

interface SearchResult {
  data?: {
    topic_status: string
    topic_headline: string
    topic_content: string
    topic_link: string
    topic_images: []
  }
}

const file = ref()
const searchQuery = ref()
const searchResult: Ref<SearchResult|undefined> = ref()

const scrapeData = () => {
  fetch(`http://localhost:8000/scrape/${searchQuery.value}`, {method: 'POST'})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      searchResult.value = data
    })
}

const setFileInfo = (val: any): void => {
  file.value = val
}

const reset = (): void => {
  file.value = null
}
</script>
