<template>
  <div class="modal-container" @click.stop>
      <div class="modal-body">
        <div class="box-info">
          <div class="box-thumbnail" @click="consoleLog('click')">
            <img :src="imgSrc" alt="" />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { GameType } from '@/types/common'
import { CDN_DOMAIN } from "@/consts/path";
import { useModalStore } from '@/stores/modal';

const commonStore = useCommonStore()
const gameType = commonStore.gameType

const modalStore = useModalStore()
const imgUrls = {
  qr: `${CDN_DOMAIN}/game/resource/upload/qr/thumbnail/theme/49_104249804663950.png`,
  ox: `${CDN_DOMAIN}/game/resource/upload/ox/thumbnail/theme/0_173730565313428.png`,
  bingo: `${CDN_DOMAIN}/game/resource/upload/bingo/thumbnail/default.png`,
  quiztime: `${CDN_DOMAIN}/game/resource/upload/miniqr/thumbnail/theme/default.png`,
}

const imgSrc = ref(imgUrls[gameType as keyof typeof imgUrls])

const consoleLog = (msg: string) => {
  console.log(msg)
}
</script>

<style lang="scss" scoped>
.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-container{
    background: #fff;
    border-radius: 24px;
    .modal-body{
      padding: 24px;
      .box-info{
        width: 270px;
      }
      .box-thumbnail{
        width: 100%;
        display: flex;
        border: 1px solid rgba(255,255,255,.5607843137);
        overflow: hidden;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        margin-bottom: 8px;
        border-radius: 16px;
        position: relative;
      }
    }
  }
}
</style>
