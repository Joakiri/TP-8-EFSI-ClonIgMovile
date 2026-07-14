import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Fila superior: logo + acciones */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>CatBata 🐱</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.icon}>📷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.icon}>✉️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Fila inferior: buscador + nuevo post */}
      <View style={styles.bottomRow}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.newPostBtn}>
          <Text style={styles.newPostText}>+ Nuevo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 10,
  },

  // Fila superior
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
    letterSpacing: -0.5,
  },
  actions: {
    flexDirection: 'row',
    gap: 4,
  },
  iconBtn: {
    padding: 6,
  },
  icon: {
    fontSize: 20,
  },

  // Fila inferior
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 36,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#333',
    paddingVertical: 0,
  },
  newPostBtn: {
    backgroundColor: '#3897f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  newPostText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
})

export default Header