import { createContext, useContext, useEffect, useState } from 'react'
import type { Post } from '../types'
import { fetchCatPosts } from '../services/api'

interface PostsContextType {
  posts: Post[]
  loading: boolean
}

const PostsContext = createContext<PostsContextType>({
  posts: [],
  loading: true,
})

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCatPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  return (
    <PostsContext.Provider value={{ posts, loading }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)