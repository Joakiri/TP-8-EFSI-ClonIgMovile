import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { usePosts } from '../../src/context/PostsContext'
import Profile from '../../src/components/Profile'
import { currentUser } from '../../src/data/user'
import type { Post } from '../../src/types'

export default function ProfileScreen() {
  const { posts } = usePosts()
  const router = useRouter()

  const handleSelect = (post: Post) => {
    router.push(`/post/${post.id}`)
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Profile user={currentUser} posts={posts} onSelect={handleSelect} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
})