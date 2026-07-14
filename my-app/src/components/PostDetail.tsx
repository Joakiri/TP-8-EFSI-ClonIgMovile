import {
  View, Text, Image, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native'
import { useState } from 'react'
import { usePosts } from '../context/PostsContext'
import type { Post } from '../types'

interface Props {
  post: Post
}

const PostDetail = ({ post }: Props) => {
  const { likedIds, toggleLike } = usePosts()
  const liked = likedIds.has(post.id)
  const likeCount = liked ? post.likes + 1 : post.likes

  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState(post.comments)

  const handleComment = () => {
    if (!newComment.trim()) return
    setComments([
      ...comments,
      { id: Date.now(), username: '@catbata', text: newComment.trim() },
    ])
    setNewComment('')
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: post.url }} style={styles.image} resizeMode="cover" />

        <View style={styles.body}>
          {/* Usuario */}
          <View style={styles.userRow}>
            <Image
              source={{ uri: post.avatar.replace('/svg?', '/png?') }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.username}>{post.username}</Text>
              <Text style={styles.timestamp}>{post.timestamp}</Text>
            </View>
          </View>

          <Text style={styles.caption}>{post.caption}</Text>

          {/* Acciones */}
          <View style={styles.actions}>
            <TouchableOpacity onPress={() => toggleLike(post.id)} style={styles.actionBtn}>
              <Text style={styles.actionText}>
                {liked ? '❤️' : '🤍'} {likeCount.toLocaleString()} likes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionText}>💬 {comments.length}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionText}>📤</Text>
            </TouchableOpacity>
          </View>

          {/* Comentarios */}
          <Text style={styles.commentsTitle}>Comentarios</Text>
          {comments.map((c) => (
            <View key={c.id} style={styles.comment}>
              <Text style={styles.commentUser}>{c.username} </Text>
              <Text style={styles.commentText}>{c.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Input comentario */}
      <View style={styles.commentInputRow}>
        <TextInput
          style={styles.commentInput}
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Agregá un comentario..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={handleComment} style={styles.submitBtn}>
          <Text style={styles.submitText}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: '#f0f0f0',
  },
  body: { padding: 16 },
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#eee' },
  username: { fontSize: 14, fontWeight: '700', color: '#111' },
  timestamp: { fontSize: 12, color: '#999' },
  caption: { fontSize: 14, color: '#333', lineHeight: 20, marginBottom: 12 },
  actions: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  actionBtn: { padding: 4 },
  actionText: { fontSize: 14, color: '#333' },
  commentsTitle: { fontSize: 13, fontWeight: '700', color: '#999', marginBottom: 8 },
  comment: { flexDirection: 'row', marginBottom: 6 },
  commentUser: { fontSize: 13, fontWeight: '700', color: '#111' },
  commentText: { fontSize: 13, color: '#444', flex: 1 },
  commentInputRow: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 10,
    backgroundColor: '#fff',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 13,
    color: '#333',
  },
  submitBtn: {
    backgroundColor: '#3897f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  submitText: { color: '#fff', fontWeight: '700', fontSize: 13 },
})

export default PostDetail