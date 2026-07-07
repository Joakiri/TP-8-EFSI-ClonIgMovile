import type { User, Story } from '../types'

export const currentUser: User = {
  username: 'catbata',
  displayName: 'CatBata 🐱',
  avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=catbata',
  bio: 'Amante de los gatos 🐾 | Fotos felinas desde Buenos Aires 📸',
  posts: 48,
  followers: 12400,
  following: 312,
}

export const stories: Story[] = [
  { id: 1, username: 'connor',      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=connor',      seen: false },
  { id: 2, username: 'podasorapop', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=podasorapop', seen: false },
  { id: 3, username: 'batata',      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=batata',      seen: true  },
  { id: 4, username: 'ciruja',      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=ciruja',      seen: false },
  { id: 5, username: 'momia',       avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=momia',       seen: false },
  { id: 6, username: 'cheff',       avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=cheff',       seen: true  },
  { id: 7, username: 'iribasman',   avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=iribasman',   seen: false },
  { id: 8, username: 'señor_caca69',avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=caca69',      seen: false },
]

export const catUsernames = [
  '@micho_oficial', '@luna_felina',  '@neko.jpg',     '@felix_cats',
  '@mishi_real',    '@gatito_bello', '@bata_cat',     '@tiger_paws',
  '@snowball99',    '@whiskers_ar',  '@mittens_ok',   '@fluffycat',
]

export const captions = [
  'hoy escupí una bola de pelo que parecía testículo de Voldemort 🧙',
  'me senté en mi propia cola y grité como si me hubieran pisado el alma',
  'olí algo raro en el sillón y ahora no soy el mismo de antes',
  'me caí de la cama persiguiendo una mosca imaginaria. no hubo testigos. no pasó nada',
  'lamí el piso del baño por curiosidad científica. los resultados fueron decepcionantes',
  'me quedé mirando la pared 40 minutos. encontré respuestas. no las voy a compartir',
  'hice un ruido con la garganta que asustó al perro del vecino y a mí mismo',
  'me metí en una bolsa de papel y me arrepentí a los 3 segundos pero no lo admití',
  'estornudé y salió algo que prefiero no describir. hay fotos. no las voy a subir',
  'me rascé la oreja con la pata trasera y me quedé trabado 20 minutos en esa posición',
  'mordí un cable que "parecía inofensivo". spoiler: no lo era. estoy bien. el cable no',
  'me perseguí la cola durante 8 minutos. la atrapé. no supe qué hacer después. la solté',
]