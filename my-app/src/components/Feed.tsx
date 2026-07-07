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
      <View style={styles.skeletonGrid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <View key={i} style={styles.skeleton} />
        ))}
      </View>
    )
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.list}
      ListHeaderComponent={<Text style={styles.title}>TRENDING</Text>}
      renderItem={({ item }) => (
        <PostCard post={item} onSelect={onSelect} />
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 11,
    fontWeight: '700',
    color: '#999',
    letterSpacing: 1,
    marginBottom: 10,
    paddingHorizontal: 4,
  },
  skeletonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  skeleton: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
  },
})

export default Feed