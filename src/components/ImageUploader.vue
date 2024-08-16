<template>
  <form class="h-full w-full flex flex-col justify-center items-center">
    <div class="bg-white w-full h-full relative">
      <template v-if="!previewUrl">
        <div class="w-full h-full flex flex-col justify-center items-center border">
          <AccessibleIcon class="text-blue-400" icon="upload" :size="[248, 248]" />
          <h2 class="text-4xl">
            upload image
          </h2>
        </div>
      </template>
      <template v-else>
        <div 
          class="absolute right-0 text-4xl mr-2 mt-2 cursor-pointer" 
          @click="resetImage()">
          x
        </div>
        <img 
          class="w-full h-full" 
          :src="previewUrl" 
          alt="uploaded image preview" />
      </template>
    </div>
    <input 
      ref="inputFile" 
      class="w-full bg-white" 
      type="file" 
      @change="setPreviewUrl()" />
  </form>
</template>

<script setup lang="ts">
import AccessibleIcon from '@/components/AccessibleIcon.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
 
interface InputFile {
  files: Array<Blob|MediaSource>
}

const inputFile: Ref<InputFile | undefined> = ref(undefined)
const previewUrl: Ref<string> = ref('')

const setPreviewUrl = (): void => {
  try {
    if (inputFile.value) {
      previewUrl.value = window.URL.createObjectURL(inputFile.value.files[0])
    }
  } catch (err) {
    console.error('Could not set file due to: ', err)
  }
}

const resetImage = () => {
  previewUrl.value = ''
}
</script>
