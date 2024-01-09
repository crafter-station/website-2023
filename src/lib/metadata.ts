type ImagesMetadata = Array<{
  url: string
  width?: number
  height?: number
  alt?: string
}>

export interface Metadata {
  title?: string
  description?: string
  alternates?: {
    canonical?: string
    languages?: Record<string, string>
  }
  openGraph?: {
    title?: string
    description?: string
    url?: string
    images?: ImagesMetadata
  }
  twitter?: {
    card?: string
    title?: string
    description?: string
    image?: string
  }
  keywords?: string[]
}
