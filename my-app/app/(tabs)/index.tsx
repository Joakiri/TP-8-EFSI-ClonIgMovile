import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { usePosts } from '../../src/context/PostsContext'
import Header from '../../src/components/Header'
import Stories from '../../src/components/Stories'
import Feed from '../../src/components/Feed'
import { stories } from '../../src/data/user'
import type { Post } from '../../src/types'

export default function FeedScreen() {
  const { posts, loading } = usePosts()
  const router = useRouter()

  const handleSelect = (post: Post) => {
    router.push(`/post/${post.id}`)
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />
      <Stories stories={stories} />
      <Feed posts={posts} loading={loading} onSelect={handleSelect} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
})