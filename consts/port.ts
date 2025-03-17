import _ from 'lodash'

export const PORT = (process.server && _.toInteger(process.env.PORT)) || 3000
export const PROXY_PORT = (process.server && _.toInteger(process.env.PROXY_PORT)) || PORT + 1000
export const BACKEND_PORT = PROXY_PORT
export const NEST_PORT = BACKEND_PORT
export const NUXT_PORT = PORT
