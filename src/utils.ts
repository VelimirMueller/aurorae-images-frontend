import type { Component } from 'vue'

interface IdObjects<T> {
  id: T,
}

export interface IconMap extends IdObjects<string> {
  icon: Component
  type?: string
}

export enum IconVariants {
  Book = 'book',
  Upload = 'upload'
}

export const createIcons = (arrayOfIcons: IconMap[]): IconMap[] => {
  return arrayOfIcons.map((item: IconMap) => {
    return {
      id: item.id,
      icon: item.icon,
      type: 'iconComponent'
    }
  })
}
