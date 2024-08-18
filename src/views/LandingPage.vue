<template>
  <LpHero>
    <template #hero-content>
      <div class="flex h-full">
        <div class="w-48 bg-blue-400 text-center">
          <ul class="h-full flex flex-col">
            <li class="p-4 h-1/3 flex justify-center items-center">
              Courses
            </li>
            <li class="p-4 h-1/3 flex justify-center items-center">
              Shop
            </li>
            <li class="p-4 h-1/3 flex justify-center items-center">
              AI
            </li>
          </ul>
        </div>
        <div class="w-full h-full">
          <div class="h-full w-full p-12 bg-red-400 grid grid-cols-2">
            <ImageUploader 
              @reset="reset()"
              @set-file="val => setFileInfo(val)" />
            <div class="bg-gray-900 flex flex-col justify-center items-center text-white p-8">
              <div class="h-1/4 w-full text-white">
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

              <div class="w-full h-3/4 flex flex-col">
                <div class="h-full">
                  <ul class="max-h-[300px] overflow-y-scroll">
                    <template 
                      v-for="result in searchResult.data"
                      :key="result.topic_id">
                      <ul class="border-t-4 mb-8 py-4 px-2">
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
        <div class="w-48">
          <div class="grid grid-rows-4 gap-4 h-full bg-white">
            <div class="bg-reg-100 h-full text-center flex justify-center items-center">
              01
            </div>
            <div class="bg-reg-100 h-full text-center flex justify-center items-center">
              02
            </div>
            <div class="bg-reg-100 h-full text-center flex justify-center items-center">
              03
            </div>
            <div class="bg-reg-100 h-full text-center flex justify-center items-center">
              04
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
const file = ref()
const searchQuery = ref()
const searchResult = ref('')

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
