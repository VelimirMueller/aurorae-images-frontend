import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

interface ImageUploadResponse {
  data: {
    image: {
      file: object
      filename: string
      size: number
      headers: object
    }
  }
}

export const useImageStore = defineStore('image', () => {
  // states
  const images: Ref<[]>= ref([])
  const apiEndpoint: string = 'http://localhost:8000/upload/'
  
  // actions
  const saveImage = async (formData: FormData): Promise<ImageUploadResponse|void> => {
    try {
      if (formData) {
        fetch(apiEndpoint, {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then((data: ImageUploadResponse) => {
            return data
          })    
      }
    } catch (err) {
      console.error(err)
    }
  }

  return { apiEndpoint, images, saveImage }
})
