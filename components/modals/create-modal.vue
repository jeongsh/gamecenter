<template>
  <div class="modal-container" @click.stop>
      <div class="modal-body">
        <div class="box-info">
          <label for="inputFile" class="box-thumbnail">
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
          <p class="desc mb-24">
            5MB이하의 jpg, jpeg, png 이미지, 310px x 170px 권장
          </p>
          <div class="box-input mb-16">
            <label for="" class="label-input">
              세트 이름
            </label>
            <input type="text" class="input" placeholder="세트의 이름을 입력하세요." />
          </div>
          <div class="box-input">
            <label for="" class="label-input">
              설명
            </label>
            <textarea class="input textarea" placeholder="설명을 입력하세요."></textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button 
          class="btn-close"
          @click="emit('close')"
        >취소</button>
        <button class="btn-create">세트 만들기</button>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { GameType } from '@/types/common'
import { CDN_DOMAIN } from "@/consts/path";
import { useModalStore } from '@/stores/modal';

const commonStore = useCommonStore()
const gameType = commonStore.gameType

// emit('close') 이벤트를 부모 컴포넌트로 전달
const emit = defineEmits(['close'])

const imgUrls = {
  qr: `${CDN_DOMAIN}/game/resource/upload/qr/thumbnail/theme/49_104249804663950.png`,
  ox: `${CDN_DOMAIN}/game/resource/upload/ox/thumbnail/theme/0_173730565313428.png`,
  bingo: `${CDN_DOMAIN}/game/resource/upload/bingo/thumbnail/default.png`,
  quiztime: `${CDN_DOMAIN}/game/resource/upload/miniqr/thumbnail/theme/default.png`,
}

const inputFile = ref<HTMLInputElement | null>(null)
const imgSrc = ref(imgUrls[gameType as keyof typeof imgUrls])
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
  .modal-container{
    border-radius: 24px;
    border: 1px solid #EDEDED;
    background: #FFF;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
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
  .box-input{
    .label-input{
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 8px;
      display: block;
    }
    .input{
      border-radius: 4px;
      border: 1px solid #DBDBDB;
      background: #FFF;
      padding: 6px 12px;
      display: block;
      width: 100%;
      font-size: 12px;
      line-height: 18px;
      font-weight: 500;
      max-width: 100%;
      min-width: 100%;
      &::placeholder{
        color: #c9c9c9;
      }
      &.textarea{
        height: 60px;
        max-height: 160px;
        min-height: 60px;
      }
    }
  }
  .modal-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    padding: 0 24px;
    border-top: 1px solid #EDEDED;
    .btn-close{
      color: #6C6C6C;
      font-size: 14px;
      font-weight: 500;
    }
    .btn-create{
      color: #16A3F7;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
