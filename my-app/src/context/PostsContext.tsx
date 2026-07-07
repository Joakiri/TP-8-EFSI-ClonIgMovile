import { createContext, useContext, useEffect, useState } from 'react'
import type { Post } from '../types'
import { fetchCatPosts } from '../services/api'

interface PostsContextType {
  posts: Post[]
  loading: boolean
  selectedPost: Post | null
  setSelectedPost: (post: Post | null) => void
}

const PostsContext = createContext<PostsContextType>({
  posts: [],
  loading: true,
  selectedPost: null,
  setSelectedPost: () => {},
})

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  useEffect(() => {
    fetchCatPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  return (
    <PostsContext.Provider value={{ posts, loading, selectedPost, setSelectedPost }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)