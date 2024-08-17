<template>
  <form class="h-full w-full flex flex-col justify-center items-center">
    <div class="bg-white w-full h-full relative">
      <template v-if="!previewUrl">
        <div class="w-full h-full flex flex-col justify-center items-center">
          <label 
            for="image-upload" 
            class="custom-file-upload">
            <AccessibleIcon 
              class="text-blue-400" 
              icon="upload" 
              :size="[248, 248]" />
            <h2 class="text-4xl">
              upload image
            </h2>
            <input 
              id="image-upload"
              ref="inputFile" 
              class="w-full bg-white" 
              type="file" 
              @change="setPreviewUrl()" />
          </label>
        </div>
      </template>
      <template v-else>
        <div 
          class="absolute right-0 text-4xl cursor-pointer mr-4 mt-4 rounded-full bg-gray-900 text-white border-2 border-white hover:bg-gray-700 w-12 h-12 flex items-center justify-center" 
          @click="resetImage()">
          x
        </div>
        <div class="w-full h-full flex items-center justify-center p-8">
          <img  
            class="w-full h-full"
            :src="previewUrl" 
            alt="uploaded image preview" />
        </div>
      </template>
    </div>
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

<style scoped lang="scss">
input[type="file"] {
  display: none;
}

.custom-file-upload {
  display: inline-block;
  cursor: pointer;
}
</style>
