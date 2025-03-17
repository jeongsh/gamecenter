import { NuxtApp } from 'nuxt/app'

declare module 'nuxt/app' {
  interface NuxtApp {
    $getProfileImageSrc(userNo: number, userProfileImage: string): string;
  }
}
