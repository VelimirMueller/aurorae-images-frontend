<template>
  <LpHero>
    <template #hero-content>
      <ImageUploaderWrapper>
        <template #upload>
          <ImageUploader 
            @reset="() => {}"
            @set-file="val => {}" />
        </template>
        <template #search>
          <ImageSearch @submit="scrapeData" />
        </template>
        <template #list>
          <ImageList :search-result="searchResult" />
        </template>
      </ImageUploaderWrapper>
    </template>
  </LpHero>
</template>

<script setup lang="ts">
import LpHero from '@/views/landing/components/LpHero.vue'
import ImageList from '@/components/ImageUploader/ImageList.vue'
import ImageSearch from '@/components/ImageUploader/ImageSearch.vue'
import ImageUploader from '@/components/ImageUploader/ImageUploader.vue'
import ImageUploaderWrapper from '@/components/ImageUploader/ImageUploaderWrapper.vue'
import { ref, type Ref } from 'vue'
import type { SearchResult } from '@/types'

const searchResult: Ref<SearchResult|undefined> = ref()
const scrapeData = (searchQuery: string) => {
  try {
    fetch(`http://127.0.0.1:8000/scrape/${searchQuery}`, {method: 'POST'})
      .then(res => res.json())
      .then(data => {
        console.log(data)
        searchResult.value = data
      })
  } catch (err) {
    console.error(err)
  }
}
</script>
