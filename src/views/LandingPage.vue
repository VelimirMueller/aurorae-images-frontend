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
            <ImageUploader @set-file="val => setFileInfo(val)" />
            <div class="bg-white flex justify-center items-center">
              <ul v-if="file">
                <li>
                  {{ 'FILENAME: ' + file.filename }}
                </li>
                <li>
                  {{ 'FILESIZE: ' + (file.size / 1024 / 1024).toFixed(2) + 'MB' }}
                </li>
              </ul>
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

const setFileInfo = (val: any) => {
  console.log(val)
  file.value = val
}
</script>
