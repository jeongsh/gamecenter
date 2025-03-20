<template>
  <div class="rnb">
    <div class="box-info">
      <p class="info-type">테마정보</p>
      <div class="info-thumbnail">
        <img
          alt="테마 썸네일"
        />
      </div>
      <p class="info-title">한-프 Résistan-Story</p>
      <p class="writer">
        <span>제작자</span>
        이름이름이름이름이름
      </p>
      <p class="info-desc">
        한국-프랑스 학생들의 메타버스 활용 교류 수업을 위해 제작된 테마로 같은 아픔과 극복의 역사를 지닌 두 나라의 레지스탕스 스토리를 기반으로 이루어지는 방탈출 테마입니다.
      </p>
      <div class="box-tag">
        <span class="tag">#테마</span>
        <span class="tag">#게임</span>
        <span class="tag">#게임</span>
        <span class="tag">#게임</span>
        <span class="tag">#게임</span>
      </div>
    </div>
    <div class="box-btn">
      <button class="btn-blue">복사하기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameType } from '@/types/common'
import { useCommonStore } from '@/stores/common'

const props = defineProps({
  gameNo: {
    type: Number,
    required: true,
  },
  tabType: {
    type: String,
    default: 'general',
  },
})

const commonStore = useCommonStore()
const gameType = storeToRefs(commonStore).gameType as GameType
</script>

<style lang="scss" scoped>
.rnb{
  width: 238px;
  min-width: 238px;
  background: #FFF;
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  border-left: 1px solid #EDEDED;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .info-type{
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .info-thumbnail{
    width: 100%;
    height: 112px;
    display: block;
    margin-bottom: 12px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .info-title{
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.56px;
    margin-bottom: 4px;
  }
  .writer{
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px; /* 150% */
    letter-spacing: -0.48px;
    margin-bottom: 8px;
    span{
      color: #949494;
    }
  }
  .info-desc{
    color: #6C6C6C;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px; /* 150% */
    letter-spacing: -0.48px;
    margin-bottom: 12px;
  }

  .box-tag{
    border-radius: 8px;
    border: 1px solid #EDEDED;
    background: #FFF;
    padding: 16px;
    .tag{
      font-size: 12px;
      color: #949494;
      margin-right: 4px;
      word-break: keep-all;
    }
  }
  .btn-blue{
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.60);
    background: #16A3F7;
    box-shadow: 0px 2px 4px 0px rgba(108, 108, 108, 0.08);
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
