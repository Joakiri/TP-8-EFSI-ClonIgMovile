# CatBata 🐱 — Clon Móvil de Instagram

Aplicación móvil desarrollada con React Native y Expo SDK 54, como migración del TP anterior (CatBata Web en React + Vite) hacia una arquitectura nativa mobile-first.

---

## Árbol de Directorios
my-app/
├── app/                          # Rutas manejadas por Expo Router
│   ├── _layout.tsx               # Stack raíz + PostsProvider + StatusBar + SplashScreen
│   ├── (tabs)/
│   │   ├── _layout.tsx           # Tab Navigator (Home / Mi perfil)
│   │   ├── index.tsx             # Pantalla Feed
│   │   └── profile.tsx           # Pantalla Perfil
│   └── post/
│       └── [id].tsx              # Pantalla dinámica de detalle del post
│
├── src/
│   ├── components/               # Componentes atómicos reutilizables
│   │   ├── Header.tsx
│   │   ├── Stories.tsx
│   │   ├── Feed.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostDetail.tsx
│   │   └── Profile.tsx
│   ├── context/
│   │   └── PostsContext.tsx      # Estado global: posts + loading
│   ├── data/
│   │   └── user.ts               # Datos estáticos: usuario, stories, captions
│   ├── services/
│   │   └── api.ts                # Llamada a The Cat API con Axios
│   └── types/
│       └── index.ts              # Interfaces TypeScript: Post, User, Story, Comment
│
├── assets/
│   └── images/                   # Ícono, adaptive icon y splash screen
├── .env                          # EXPO_PUBLIC_CAT_API_KEY
└── app.json                      # Configuración Expo: nombre, ícono, splash, plugins
---

## Componentes y Justificación

### `Header.tsx`
Barra superior fija que muestra el nombre de la app, íconos de acción y un buscador.
No recibe props, es completamente estático y decorativo.

### `Stories.tsx`
Carrusel horizontal de historias. Renderiza un `ScrollView` horizontal con avatares circulares
diferenciando historias vistas (anillo gris) de no vistas (anillo rosa).

| Prop | Tipo | Descripción |
|------|------|-------------|
| `stories` | `Story[]` | Lista de historias a mostrar |

### `Feed.tsx`
Lista vertical de posts usando `FlatList` para renderizado optimizado de listas largas.
Muestra skeletons de carga mientras los datos están pendientes.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `posts` | `Post[]` | Lista de posts a renderizar |
| `loading` | `boolean` | Controla la vista de carga |
| `onSelect` | `(post: Post) => void` | Callback al tocar un post |

### `PostCard.tsx`
Componente reutilizable que representa un post individual en el feed, con estructura
vertical estilo Instagram: header de usuario + localización, imagen, barra de acciones,
contador de likes y caption.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `post` | `Post` | Datos completos del post |
| `onSelect` | `(post: Post) => void` | Navega al detalle al tocar la imagen |

### `PostDetail.tsx`
Vista expandida de un post individual. Incluye imagen en alta definición, datos del autor,
caption, acciones interactivas y sección de comentarios con input para agregar nuevos.
Se renderiza dentro de la pantalla `post/[id].tsx`, parte del Stack Navigator.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `post` | `Post` | Post completo obtenido desde el contexto por id |

### `Profile.tsx`
Vista del perfil del usuario activo. Muestra avatar, estadísticas (publicaciones, seguidores,
seguidos), biografía y una cuadrícula de 3 columnas simétricas usando `FlatList` con
`numColumns={3}`.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `user` | `User` | Datos del usuario actual |
| `posts` | `Post[]` | Posts para la cuadrícula |
| `onSelect` | `(post: Post) => void` | Navega al detalle al tocar una imagen |

---

## Gestión de Estados

### Estado Global — `PostsContext.tsx`

Manejado con `createContext` + `useContext`. Disponible en todas las pantallas
sin necesidad de prop drilling.

| Estado | Tipo | Descripción |
|--------|------|-------------|
| `posts` | `Post[]` | Lista de posts traídos de The Cat API |
| `loading` | `boolean` | Indica si la petición está en curso |

El fetch se realiza una única vez al montar el Provider, usando `useEffect` + `axios`.

### Estado Local — por componente

| Componente | Estado | Descripción |
|------------|--------|-------------|
| `PostCard` | `liked`, `likeCount` | Control del botón de like por tarjeta |
| `PostDetail` | `liked`, `likeCount`, `comments`, `newComment` | Interacciones en la vista de detalle |

---

## Arquitectura de Navegación
Stack (Expo Router)
├── (tabs)/                    ← Tab Navigator
│   ├── index (Feed)           ← pantalla principal
│   └── profile (Perfil)       ← perfil del usuario
└── post/[id]                  ← pantalla de detalle (modal slide)
La navegación al detalle se resuelve con `router.push('/post/${id}')` desde
`PostCard` y la cuadrícula de `Profile`. La pantalla `post/[id].tsx` recupera
el post completo buscando por `id` en el contexto global.

---

## Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Expo SDK | 54 | Plataforma de desarrollo |
| React Native | 0.81 | Framework mobile |
| Expo Router | 4.x | Navegación file-based |
| Axios | latest | Consumo de API REST |
| TypeScript | 5.x | Tipado estático |
| The Cat API | v1 | Fuente de imágenes dinámicas |
| DiceBear API | 7.x | Generación de avatares |

---

## Requisitos del Sistema

- Node.js 20.19.4+
- Expo Go instalado en el dispositivo móvil

## Instalación y Ejecución

```bash
git clone <url-del-repo>
cd my-app
npm install
npx expo start
```

Escanear el QR con Expo Go para ver la app en el dispositivo.

---

## Referencia Visual

> Adjuntar capturas de pantalla o link a Figma utilizado como referencia de diseño.

   https://www.figma.com/community/file/1004033523744290376/instagram-modern-web-design