import { createContext, useContext, useEffect, useState } from 'react'
import type { Post } from '../types'
import { fetchCatPosts } from '../services/api'

interface PostsContextType {
  posts: Post[]
  loading: boolean
  likedIds: Set<string>
  toggleLike: (postId: string) => void
}

const PostsContext = createContext<PostsContextType>({
  posts: [],
  loading: true,
  likedIds: new Set(),
  toggleLike: () => {},
})

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchCatPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  const toggleLike = (postId: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev)
      next.has(postId) ? next.delete(postId) : next.add(postId)
      return next
    })
  }

  return (
    <PostsContext.Provider value={{ posts, loading, likedIds, toggleLike }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)