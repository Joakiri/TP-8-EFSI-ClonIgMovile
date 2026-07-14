import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { PostsProvider } from '../src/context/PostsContext'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return (
    <PostsProvider>
      <StatusBar style="dark" backgroundColor="#fff" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="post/[id]"
          options={{
            headerShown: true,
            title: 'Publicación',
            headerBackTitle: 'Volver',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#333',
          }}
        />
      </Stack>
    </PostsProvider>
  )
}