import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Post } from '../types'
import { fetchCatPosts } from '../services/api'

interface PostsContextType {
  posts: Post[]
  loading: boolean
  likedIds: Set<string>
  toggleLike: (postId: string) => void
}

export const PostsContext = createContext<PostsContextType | undefined>(undefined)

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchCatPosts()
      .then(setPosts)
      .catch((error) => {
        console.error('Error al cargar los posts:', error)
        setPosts([])
      })
      .finally(() => setLoading(false))
  }, [])

  const toggleLike = (postId: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev)
      if (next.has(postId)) {
        next.delete(postId)
      } else {
        next.add(postId)
      }
      return next
    })
  }

  const value = useMemo<PostsContextType>(
    () => ({ posts, loading, likedIds, toggleLike }),
    [posts, loading, likedIds]
  )

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}

export const usePosts = () => {
  const context = useContext(PostsContext)

  if (!context) {
    throw new Error('usePosts debe usarse dentro de PostsProvider')
  }

  return context
}