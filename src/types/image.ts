export interface ImageUploadResponse {
  data: {
    image: {
      file: object
      filename: string
      size: number
      headers: object
    }
  }
}
