export interface Post {
  id: string
  url: string
  width?: number
  height?: number
  likes: number
  caption: string
  username: string
  avatar: string
  comments: Comment[]
  timestamp: string
}

export interface Comment {
  id: number
  username: string
  text: string
}

export interface User {
  username: string
  displayName: string
  avatar: string
  bio: string
  posts: number
  followers: number
  following: number
}

export interface Story {
  id: number
  username: string
  avatar: string
  seen: boolean
}