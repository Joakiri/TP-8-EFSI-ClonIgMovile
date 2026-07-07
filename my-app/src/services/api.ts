import axios from 'axios'
import type { Post } from '../types'
import { catUsernames, captions } from '../data/user'

const API_KEY = process.env.EXPO_PUBLIC_CAT_API_KEY ?? ''

export async function fetchCatPosts(): Promise<Post[]> {
  const res = await axios.get('https://api.thecatapi.com/v1/images/search', {
    params: { limit: 12, has_breeds: 0 },
    headers: { 'x-api-key': API_KEY },
  })

  return res.data.map((cat: any, i: number): Post => ({
    id: cat.id,
    url: cat.url,
    width: cat.width,
    height: cat.height,
    likes: Math.floor(Math.random() * 9000) + 500,
    caption: captions[i % captions.length],
    username: catUsernames[i % catUsernames.length],
    avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${catUsernames[i]}`,
    timestamp: `hace ${Math.floor(Math.random() * 23) + 1}h`,
    comments: [
      { id: 1, username: '@micho', text: '¡Qué hermoso! 😍' },
      { id: 2, username: '@luna',  text: 'Me encanta esta foto 🐾' },
      { id: 3, username: '@neko',  text: 'Iconic 👑' },
    ],
  }))
}