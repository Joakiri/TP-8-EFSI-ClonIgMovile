import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar usuario, hashtag o historia..."
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconBtn}><Text style={styles.icon}>⚙️</Text></TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}><Text style={styles.icon}>📷</Text></TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}><Text style={styles.icon}>✉️</Text></TouchableOpacity>
        <TouchableOpacity style={styles.newPostBtn}>
          <Text style={styles.newPostText}>+ Nuevo Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 12,
    flex: 1,
    marginRight: 10,
  },
  searchIcon: { fontSize: 14, marginRight: 6 },
  searchInput: { flex: 1, fontSize: 13, paddingVertical: 7, color: '#333' },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  iconBtn: { padding: 6 },
  icon: { fontSize: 18 },
  newPostBtn: {
    backgroundColor: '#3897f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  newPostText: { color: '#fff', fontWeight: '600', fontSize: 13 },
})

export default Header