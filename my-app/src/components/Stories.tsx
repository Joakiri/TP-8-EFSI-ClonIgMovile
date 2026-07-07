import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import type { Story } from '../types'

interface Props {
  stories: Story[]
}

const Stories = ({ stories }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STORIES</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story) => (
          <View key={story.id} style={styles.storyItem}>
            <View style={[styles.ring, story.seen && styles.ringSeen]}>
              <Image
                source={{ uri: story.avatar.replace('/svg?', '/png?') }}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.username} numberOfLines={1}>{story.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 11,
    fontWeight: '700',
    color: '#999',
    letterSpacing: 1,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 64,
  },
  ring: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#e1306c',   // no visto → rosa
    padding: 2,
    marginBottom: 4,
  },
  ringSeen: {
    borderColor: '#ccc',      // visto → gris
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#f0f0f0',
  },
  username: {
    fontSize: 11,
    color: '#333',
    textAlign: 'center',
    width: 64,
  },
})

export default Stories