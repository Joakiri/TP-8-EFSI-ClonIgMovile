import { View, StyleSheet } from 'react-native'
import { usePosts } from '../../src/context/PostsContext'
import Profile from '../../src/components/Profile'
import PostModal from '../../src/components/PostModal'
import { currentUser } from '../../src/data/user'

export default function ProfileScreen() {
  const { posts, selectedPost, setSelectedPost } = usePosts()

  return (
    <View style={styles.container}>
      <Profile
        user={currentUser}
        posts={posts}
        onSelect={setSelectedPost}
      />
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