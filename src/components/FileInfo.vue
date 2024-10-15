<template>
  <div class="h-2/5 w-full text-white">
    <ul 
      v-if="props.file"
      class="h-full">
      <li>
        {{ 'FILENAME: ' + file.filename }}
      </li>
      <li>
        {{ 'FILESIZE: ' + (file.size / 1024 / 1024).toFixed(2) + 'MB' }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

interface FileInfo {
  filename: string
  size: number
}

const props = defineProps({
  file: {
    type: Object as PropType<FileInfo>,
    required: true
  }
})
</script>
