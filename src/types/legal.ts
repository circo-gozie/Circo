import { TypedObject } from '@portabletext/types'

export interface Section {
    _id: string
    title: string
    description: string
    content: TypedObject
    publishedAt?: string
}

export interface MenuItem {
    _id: string
    title: string
}
