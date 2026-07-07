import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import type { User, Post } from '../types'

interface Props {
  user: User
  posts: Post[]
  onSelect: (post: Post) => void
}

const GRID_SIZE = (Dimensions.get('window').width - 4) / 3  // 3 columnas

const Profile = ({ user, posts, onSelect }: Props) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      numColumns={3}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <>
          {/* Info del usuario */}
          <View style={styles.header}>
            <Image
              source={{ uri: user.avatar.replace('/svg?', '/png?') }}
              style={styles.avatar}
            />
            <View style={styles.info}>
              <View style={styles.topRow}>
                <Text style={styles.username}>{user.username}</Text>
                <TouchableOpacity style={styles.editBtn}>
                  <Text style={styles.editBtnText}>Editar perfil</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.stats}>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.posts}</Text>
                  <Text style={styles.statLabel}>publicaciones</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.followers.toLocaleString()}</Text>
                  <Text style={styles.statLabel}>seguidores</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.following}</Text>
                  <Text style={styles.statLabel}>seguidos</Text>
                </View>
              </View>
              <Text style={styles.displayName}>{user.displayName}</Text>
              <Text style={styles.bio}>{user.bio}</Text>
            </View>
          </View>
          <View style={styles.divider} />
        </>
      }
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)}>
          <Image source={{ uri: item.url }} style={styles.gridImage} />
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eee',
  },
  info: { flex: 1 },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  username: { fontSize: 16, fontWeight: '700', color: '#111' },
  editBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  editBtnText: { fontSize: 12, color: '#333', fontWeight: '600' },
  stats: { flexDirection: 'row', gap: 16, marginBottom: 8 },
  stat: { alignItems: 'center' },
  statValue: { fontSize: 15, fontWeight: '700', color: '#111' },
  statLabel: { fontSize: 11, color: '#666' },
  displayName: { fontSize: 14, fontWeight: '600', color: '#111', marginBottom: 2 },
  bio: { fontSize: 13, color: '#555', lineHeight: 18 },
  divider: { height: 1, backgroundColor: '#eee', marginTop: 8 },
  gridImage: {
    width: GRID_SIZE,
    height: GRID_SIZE,
    margin: 0.5,
    backgroundColor: '#f0f0f0',
  },
})

export default Profile