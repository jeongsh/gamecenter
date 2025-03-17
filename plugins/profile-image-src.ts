import {
  CDN_DOMAIN,
} from '@/consts/path'

export default defineNuxtPlugin(async nuxtApp => {
  const getProfileImageSrc = (
    userNo: number,
    key: string,
  ) => {
    return `${CDN_DOMAIN}/web/resource/upload/profile/${userNo}/${key}`
  }

  return {
    provide: {
      getProfileImageSrc,
    }
  }
})
