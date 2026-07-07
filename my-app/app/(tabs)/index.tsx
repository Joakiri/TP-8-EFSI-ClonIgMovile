import { View, StyleSheet } from 'react-native'
import { usePosts } from '../../src/context/PostsContext'
import Header from '../../src/components/Header'
import Stories from '../../src/components/Stories'
import Feed from '../../src/components/Feed'
import PostModal from '../../src/components/PostModal'
import { stories } from '../../src/data/user'

export default function FeedScreen() {
  const { posts, loading, selectedPost, setSelectedPost } = usePosts()

  return (
    <View style={styles.container}>
      <Header />
      <Stories stories={stories} />
      <Feed posts={posts} loading={loading} onSelect={setSelectedPost} />
      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})