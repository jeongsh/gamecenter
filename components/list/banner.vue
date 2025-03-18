<template>
  <div class="box-banner">
    <img :src="bannerUrl" alt="" class="banner">
    <a
      v-if="manualUrl" 
      :href="manualUrl"
      class="btn-download"
    >
      사용법 다운로드
    </a>
  </div>
</template>

<script setup lang="ts">
import type { GameType } from "@/types/common";
import { CDN_GAME_PATH, CDN_GAME_MANUAL_PATH } from "@/consts/path";
const {
  gameType,
} = defineProps<{
  gameType: GameType
}>()

const bannerUrls = {
  qr: `${CDN_GAME_PATH}/qr/main-top-qr.png`,
  ox: `${CDN_GAME_PATH}/ox/main-top-ox.png`,
  bingo: `${CDN_GAME_PATH}/bingo/main-top-bingo.png`,
  quiztime: `${CDN_GAME_PATH}/miniqr/main-miniqr.png`,
  baseball: `${CDN_GAME_PATH}/baseball/main-top-baseball.png`,
}

const manualUrls = {
  qr: `${CDN_GAME_MANUAL_PATH}/QR%EB%B0%A9%ED%83%88%EC%B6%9C_%EC%82%AC%EC%9A%A9%EB%B2%95.pdf`,
  ox: `${CDN_GAME_MANUAL_PATH}/OX배틀로얄_사용법.pdf`,
  bingo: `${CDN_GAME_MANUAL_PATH}/빙고의신_사용법.pdf`,
  quiztime: null,
  baseball: null,
}

const bannerUrl = ref(bannerUrls[gameType as keyof typeof bannerUrls])
const manualUrl = ref(manualUrls[gameType as keyof typeof manualUrls])

</script>

<style lang="scss" scoped>
.box-banner{
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  height: 260px;
  img{
    display: block;
  }
}
.btn-download{
  border-radius: 8px;
  border: 1px solid #b7e2fd;
  background: #fff;
  width: 200px;
  height: 40px;
  color: #16a3f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  bottom: 16px;
  font-size: 14px;
}
</style>
