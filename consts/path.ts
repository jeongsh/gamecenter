import {
  DEPLOY_TARGET,
} from './env'
import {
  PORT,
} from './port'

export const NEST_PREFIX = 'app'

const isLocal = DEPLOY_TARGET === 'local'
const isDev = DEPLOY_TARGET === 'development'
const isProd = DEPLOY_TARGET === 'production'


export const RAPORAPO_WEB_HOST_LOCAL = 'http://localhost:8080'
export const RAPORAPO_WEB_HOST_DEV = 'https://www.raporapo.dev'
export const RAPORAPO_WEB_HOST_PROD = 'https://www.raporapo.com'
export const RAPORAPO_WEB_HOST = (
  isLocal ?
  RAPORAPO_WEB_HOST_LOCAL :
  (
    isDev ?
    RAPORAPO_WEB_HOST_DEV :
    RAPORAPO_WEB_HOST_PROD
  )
)

export const RAPORAPO_GAME_HOST_LOCAL = 'http://localhost:9000'
export const RAPORAPO_GAME_HOST_DEV = 'https://game.raporapo.dev'
export const RAPORAPO_GAME_HOST_PROD = 'https://game.raporapo.com'
export const RAPORAPO_GAME_HOST = (
  isLocal ?
  RAPORAPO_GAME_HOST_LOCAL :
  (
    isDev ?
    RAPORAPO_GAME_HOST_DEV :
    RAPORAPO_GAME_HOST_PROD
  )
)

export const RAPORAPO_PLAYGROUND_HOST_LOCAL = 'http://localhost:3030'
export const RAPORAPO_PLAYGROUND_HOST_DEV = 'https://playground.raporapo.dev'
export const RAPORAPO_PLAYGROUND_HOST_PROD = 'https://playground.raporapo.com'
export const RAPORAPO_PLAYGROUND_HOST = (
  isLocal ?
  RAPORAPO_PLAYGROUND_HOST_LOCAL :
  (
    isDev ?
    RAPORAPO_PLAYGROUND_HOST_DEV :
    RAPORAPO_PLAYGROUND_HOST_PROD
  )
)

export const RAPORAPO_POOL_HOST_LOCAL = 'http://localhost:8090'
export const RAPORAPO_POOL_HOST_DEV = 'https://pool.raporapo.dev'
export const RAPORAPO_POOL_HOST_PROD = 'https://pool.raporapo.com'
export const RAPORAPO_POOL_HOST = (
  isLocal ?
  RAPORAPO_POOL_HOST_LOCAL :
  (
    isDev ?
    RAPORAPO_POOL_HOST_DEV :
    RAPORAPO_POOL_HOST_PROD
  )
)

export const SERVICE_HOST_LOCAL = `https://localhost:${PORT}`
export const SERVICE_HOST_DEV = 'https://square.raporapo.dev'
export const SERVICE_HOST_PROD = 'https://square.raporapo.com'
export const SERVICE_HOST = (
  isLocal ?
  SERVICE_HOST_LOCAL :
  (
    isDev ?
    SERVICE_HOST_DEV :
    SERVICE_HOST_PROD
  )
)

export const CDN_DOMAIN_LOCAL = 'https://cdn.raporapo.dev'
export const CDN_DOMAIN_DEV = 'https://cdn.raporapo.dev'
export const CDN_DOMAIN_PROD = 'https://cdn.raporapo.com'
export const CDN_DOMAIN = (
  isLocal ?
  CDN_DOMAIN_LOCAL :
  (
    isDev ?
    CDN_DOMAIN_DEV :
    CDN_DOMAIN_PROD
  )
)

export const CDN_SQUARE_PREFIX = 'square'
export const CDN_SQUARE_PATH = `${CDN_DOMAIN}/${CDN_SQUARE_PREFIX}`

export const LOGIN_PAGE_URL = `${RAPORAPO_WEB_HOST}/login`
export const LOGOUT_PAGE_URL = `${RAPORAPO_WEB_HOST}/logout.do`
export const ENTER_URL = `${RAPORAPO_WEB_HOST}/square/enter`
export const TREE_HOUSE_URL =  `${RAPORAPO_WEB_HOST}/account`
export const AGREEMENT_PAGE_URL = `${RAPORAPO_WEB_HOST}/agreement`
export const PRIVACY_PAGE_URL = `${RAPORAPO_WEB_HOST}/privacy`

// debate
export const DEBATE_PLACE_LIST_URL = `${SERVICE_HOST}/debate/debate-place`
export const DEBATE_PLACE_ENTERED_URL = `${SERVICE_HOST}/debate/debate-place/enter`

// battle
export const BATTLE_ROOM_LIST_URL = `${SERVICE_HOST}/battle/battle-room`
export const BATTLE_ROOM_ENTERED_URL = `${SERVICE_HOST}/battle/battle-room/enter`

export const CDN_SQUARE_DEFAULT_BATTLE_ROOM_THUMBNAIL_S3_KEY = `${CDN_SQUARE_PREFIX}/battle/defaults/default-battle-room-thumbnail.png`
export const CDN_SQUARE_DEFAULT_BATTLE_ROOM_THUMBNAIL_PATH = `${CDN_DOMAIN}/${CDN_SQUARE_DEFAULT_BATTLE_ROOM_THUMBNAIL_S3_KEY}`
export const CDN_SQUARE_BATTLE_ROOM_THUMBNAIL_PATH_PREFIX = `${CDN_DOMAIN}/${CDN_SQUARE_PREFIX}/battle/uploads/battle-room-thumbnails`
export const CDN_SQUARE_BATTLE_AVATAR_PATH_PREFIX = `${CDN_DOMAIN}/${CDN_SQUARE_PREFIX}/battle/avatars`

// vote
export const VOTE_ROOM_LIST_URL = `${SERVICE_HOST}/vote/vote-room`
export const VOTE_ROOM_ENTERED_URL = `${SERVICE_HOST}/vote/vote-room/enter`

export const CDN_SQUARE_DEFAULT_VOTE_ROOM_THUMBNAIL_S3_KEY = `${CDN_SQUARE_PREFIX}/vote/defaults/default-vote-room-thumbnail.png`
export const CDN_SQUARE_DEFAULT_VOTE_ROOM_THUMBNAIL_PATH = `${CDN_DOMAIN}/${CDN_SQUARE_DEFAULT_VOTE_ROOM_THUMBNAIL_S3_KEY}`
export const CDN_SQUARE_VOTE_ROOM_THUMBNAIL_PATH_PREFIX = `${CDN_DOMAIN}/${CDN_SQUARE_PREFIX}/vote/uploads/vote-room-thumbnails`
export const CDN_SQUARE_VOTE_AVATAR_PATH_PREFIX = `${CDN_DOMAIN}/${CDN_SQUARE_PREFIX}/vote/avatars`
