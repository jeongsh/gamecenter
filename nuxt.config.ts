import type {
  DeployTarget,
} from '@/types/env'



const DEPLOY_TARGET = <DeployTarget> process.env?.DEPLOY_TARGET ?? 'local'

process.env.PORT = '9000';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/android-chrome-192x192.png',
          sizes: '192x192'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-32x32.png',
          sizes: '32x32'
        },
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
      ]
    }
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      /**
       * DEPLOY_TARGET
       * 빌드 시에 결정되는 배포 환경 값
       * local, development, production
       */
      DEPLOY_TARGET,
    },
  },
  css: [
    '@/assets/fonts/css/icon-font.css',
    '@/assets/fonts/css/icon-font-codes.css',
    '@/assets/scss/common.scss'
  ],

  devtools: { enabled: true }
})
