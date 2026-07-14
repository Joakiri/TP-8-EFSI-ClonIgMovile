import { useState } from 'react'
import {
  View, Text, Image, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native'
import type { Post } from '../types'

interface Props {
  post: Post
  onSelect: (post: Post) => void
}

const IMAGE_WIDTH = Dimensions.get('window').width

const PostCard = ({ post, onSelect }: Props) => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <View style={styles.card}>

      {/* Header: avatar + usuario + localización */}
      <View style={styles.header}>
        <Image
          source={{ uri: post.avatar }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.location}>📍 {post.location}</Text>
        </View>
        <TouchableOpacity style={styles.moreBtn}>
          <Text style={styles.moreText}>•••</Text>
        </TouchableOpacity>
      </View>

      {/* Imagen */}
      <TouchableOpacity onPress={() => onSelect(post)} activeOpacity={0.95}>
        <Image
          source={{ uri: post.url }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {/* Barra de acciones */}
      <View style={styles.actions}>
        <View style={styles.actionsLeft}>
          <TouchableOpacity onPress={handleLike} style={styles.actionBtn}>
            <Text style={styles.actionIcon}>{liked ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSelect(post)}
            style={styles.actionBtn}
          >
            <Text style={styles.actionIcon}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionIcon}>📤</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.actionIcon}>🔖</Text>
        </TouchableOpacity>
      </View>

      {/* Contador de likes */}
      <Text style={styles.likeCount}>{likeCount.toLocaleString()} Me gusta</Text>

      {/* Caption */}
      <View style={styles.captionRow}>
        <Text style={styles.captionUsername}>{post.username} </Text>
        <Text style={styles.captionText}>{post.caption}</Text>
      </View>

      {/* Timestamp */}
      <Text style={styles.timestamp}>{post.timestamp}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 12,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  userInfo: { flex: 1 },
  username: { fontSize: 13, fontWeight: '700', color: '#111' },
  location: { fontSize: 11, color: '#888', marginTop: 1 },
  moreBtn: { padding: 4 },
  moreText: { fontSize: 16, color: '#555', letterSpacing: 1 },

  // Imagen
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    backgroundColor: '#f0f0f0',
  },

  // Acciones
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  actionsLeft: {
    flexDirection: 'row',
    gap: 14,
  },
  actionBtn: { padding: 2 },
  actionIcon: { fontSize: 24 },

  // Likes
  likeCount: {
    paddingHorizontal: 12,
    fontWeight: '700',
    fontSize: 13,
    color: '#111',
    marginBottom: 4,
  },

  // Caption
  captionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  captionUsername: {
    fontSize: 13,
    fontWeight: '700',
    color: '#111',
  },
  captionText: {
    fontSize: 13,
    color: '#333',
    flex: 1,
  },

  // Timestamp
  timestamp: {
    paddingHorizontal: 12,
    fontSize: 11,
    color: '#aaa',
    marginBottom: 10,
  },
})

export default PostCard