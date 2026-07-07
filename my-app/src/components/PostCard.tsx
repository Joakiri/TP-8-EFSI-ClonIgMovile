import { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import type { Post } from '../types'

interface Props {
  post: Post
  onSelect: (post: Post) => void
}

const CARD_WIDTH = (Dimensions.get('window').width - 48) / 2  // 2 columnas con margen

const PostCard = ({ post, onSelect }: Props) => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <TouchableOpacity style={styles.card} onPress={() => onSelect(post)} activeOpacity={0.9}>
      <Image source={{ uri: post.url }} style={styles.image} />

      {/* Info del usuario arriba */}
      <View style={styles.userRow}>
        <Image
          source={{ uri: post.avatar.replace('/svg?', '/png?') }}
          style={styles.avatar}
        />
        <Text style={styles.username} numberOfLines={1}>{post.username}</Text>
      </View>

      {/* Acciones abajo */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike} style={styles.actionBtn}>
          <Text style={styles.actionText}>{liked ? '❤️' : '🤍'} {likeCount.toLocaleString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>📤</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    margin: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: CARD_WIDTH,     // cuadrada
    backgroundColor: '#f0f0f0',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 6,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  username: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 8,
    gap: 8,
  },
  actionBtn: { padding: 2 },
  actionText: { fontSize: 12, color: '#555' },
})

export default PostCard