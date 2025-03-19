<template>
  <div class="modal-container" @click.stop>
      <div class="modal-body">
        <div class="box-info">
          <label for="inputFile" class="box-thumbnail" @click="consoleLog('click')">
            <img :src="imgSrc" alt="" />
          </label>
          <div class="d-flex g-8 mb-6">
            <label class="btn-white flex-1">
              <input type="file" ref="inputFile" id="inputFile" @change="handleFileChange"/>
              파일 업로드
            </label>
            <button class="btn-primary flex-1">
              테마 썸네일 사용
            </button>
          </div>
          <p class="desc">
            5MB이하의 jpg, jpeg, png 이미지, 310px x 170px 권장
          </p>
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

const imgUrls = {
  qr: `${CDN_DOMAIN}/game/resource/upload/qr/thumbnail/theme/49_104249804663950.png`,
  ox: `${CDN_DOMAIN}/game/resource/upload/ox/thumbnail/theme/0_173730565313428.png`,
  bingo: `${CDN_DOMAIN}/game/resource/upload/bingo/thumbnail/default.png`,
  quiztime: `${CDN_DOMAIN}/game/resource/upload/miniqr/thumbnail/theme/default.png`,
}

const inputFile = ref<HTMLInputElement | null>(null)
const imgSrc = ref(imgUrls[gameType as keyof typeof imgUrls])

const consoleLog = (msg: string) => {
  console.log(msg)
}

// 이미지 파일만 업로드
const handleFileChange = () => {
  const file = inputFile.value?.files?.[0]
  if (!file) return
  // 파일이 이미지파일일 경우 그리고 5mb안넘을때만
  if (!file.type.includes('image')) {
    alert('이미지 파일만 업로드 가능합니다.')
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    alert('5MB 이하의 파일만 업로드 가능합니다.')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    imgSrc.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
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
        height: 146px;
        display: flex;
        border: 1px solid rgba(255,255,255,.5607843137);
        overflow: hidden;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        margin-bottom: 8px;
        border-radius: 16px;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .btn-white{
        height: 28px;
        input{
          display: none;
        }
      }
      .btn-blue{
        height: 28px;
      }
      .desc{
        color: #6C6C6C;
        font-size: 10px;
        font-weight: 500;
        margin-bottom: 24px;
      }
    }
  }
}
</style>
