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

export const RAPORAPO_GAME_HOST_LOCAL = `http://localhost:${PORT}`
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

export const RAPORAPO_PLAY_HOST_LOCAL = 'http://localhost:3000'
export const RAPORAPO_PLAY_HOST_DEV = 'https://play.raporapo.dev'
export const RAPORAPO_PLAY_HOST_PROD = 'https://play.raporapo.com'
export const RAPORAPO_PLAY_HOST = (
  isLocal ?
  RAPORAPO_PLAY_HOST_LOCAL :
  (
    isDev ?
    RAPORAPO_PLAY_HOST_DEV :
    RAPORAPO_PLAY_HOST_PROD
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

export const RAPORAPO_SQUARE_HOST_LOCAL = 'http://localhost:3000'
export const RAPORAPO_SQUARE_HOST_DEV = 'https://square.raporapo.dev'
export const RAPORAPO_SQUARE_HOST_PROD = 'https://square.raporapo.com'
export const RAPORAPO_SQUARE_HOST = (
  isLocal ?
  RAPORAPO_SQUARE_HOST_LOCAL :
  (
    isDev ?
    RAPORAPO_SQUARE_HOST_DEV :
    RAPORAPO_SQUARE_HOST_PROD
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

export const CDN_GAME_PREFIX = 'game/resource/common/game'
export const CDN_GAME_PATH = `${CDN_DOMAIN}/${CDN_GAME_PREFIX}`
export const CDN_GAME_MANUAL_PATH = `${CDN_DOMAIN}/game/resource/upload/guide`

export const LOGIN_PAGE_URL = `${RAPORAPO_WEB_HOST}/login`
export const LOGOUT_PAGE_URL = `${RAPORAPO_WEB_HOST}/logout.do`
export const ENTER_URL = `${RAPORAPO_WEB_HOST}/ga,e/enter`
export const TREE_HOUSE_URL =  `${RAPORAPO_WEB_HOST}/account`
export const AGREEMENT_PAGE_URL = `${RAPORAPO_WEB_HOST}/agreement`
export const PRIVACY_PAGE_URL = `${RAPORAPO_WEB_HOST}/privacy`