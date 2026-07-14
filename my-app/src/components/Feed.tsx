import { View, Text, FlatList, StyleSheet } from 'react-native'
import type { Post } from '../types'
import PostCard from './PostCard'

interface Props {
  posts: Post[]
  loading: boolean
  onSelect: (post: Post) => void
}

const Feed = ({ posts, loading, onSelect }: Props) => {
  if (loading) {
    return (
      <View style={styles.skeletonList}>
        {Array.from({ length: 3 }).map((_, i) => (
          <View key={i} style={styles.skeleton} />
        ))}
      </View>
    )
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PostCard post={item} onSelect={onSelect} />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={<Text style={styles.title}>TRENDING</Text>}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 11,
    fontWeight: '700',
    color: '#999',
    letterSpacing: 1,
    padding: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  skeletonList: {
    padding: 16,
    gap: 16,
  },
  skeleton: {
    width: '100%',
    height: 400,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
})

export default Feed