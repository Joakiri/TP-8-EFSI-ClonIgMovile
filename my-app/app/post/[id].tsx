import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { usePosts } from '../../src/context/PostsContext'
import PostDetail from '../../src/components/PostDetail'

export default function PostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { posts } = usePosts()
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Post no encontrado</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <PostDetail post={post} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { color: '#999', fontSize: 16 },
})