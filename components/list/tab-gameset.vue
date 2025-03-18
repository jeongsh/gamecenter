<template>
  <div class="list-set">
    <div class="set-card" v-for="(set, index) in setList">
      <div class="set-header">
        <NuxtLink :to="`/${gameType}/gameset/${set.setNo}`" class="set-title">
          {{ set.setTitle }}
        </NuxtLink>
        <div class="box-dropdown">
          <button 
            class="btn-dropdown" 
            :class="{ active: isShowDropdown === index }"
            @click="toggleDropdown(index)"
          >
            <i class="icon-menu"></i>
          </button>
          <div class="dropdown-list" v-if="isShowDropdown === index">
            <button class="btn-dropdown-item">
              복사하기
            </button>
            <button class="btn-dropdown-item">
              삭제
            </button>
            <button class="btn-dropdown-item">
              기본정보 수정
            </button>
            <a :href="`https://play.raporapo.com/play/api/game/qr/pdf/${set.setNo}`" class="btn-dropdown-item">
              QR코드 출력
            </a>
          </div>
        </div>
      </div>
      <div class="set-body">
        <div class="box-thumbnail">
          <img src="https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/theme/43_104606897687911.png" alt="">
          <NuxtLink :to="`/${gameType}/gameset/${set.setNo}`" class="black">
            상세보기
            <i class="icon-arrow-right"></i>
          </NuxtLink>
        </div>
        <p class="set-desc">
          수학 2학년 문제 세팅용 게임
        </p>

        <dl>
          <dt>테마</dt>
          <dd>민주주의를 구하라</dd>
        </dl>
        <!-- 문제 없으면 가리기 -->
        <dl>
          <dt>문제</dt>
          <dd>10</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameType } from '@/types/common'
import { useCommonStore } from '@/stores/common';

onMounted(() => {
  // 윈도우 클릭시 드롭다운 닫기
  window.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.box-dropdown')) {
      isShowDropdown.value = null
    }
  })
})

const commonStore = useCommonStore()
const gameType = commonStore.gameType

const isShowDropdown = ref<number | null>(null)

const toggleDropdown = ( index: number ) => {
  isShowDropdown.value = index
}

const setList = [
  {
    setNo: 1,
    setTitle: '그 피라미드는 진짜가 아니야',
    setContent: '수학 2학년 문제 세팅용 게임',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    setThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/theme/43_104606897687911.png`,
    setMaker: '에듀테크교사연구회_009',
    themeNo: 1,
  },
  {
    setNo: 2,
    setTitle: '민주주의를 구하라',
    setContent: '수학 2학년 문제 세팅용 게임',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    setThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/theme/43_104606897687911.png`,
    setMaker: '에듀테크교사연구회_009',
    themeNo: 2,
  },
]
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables.scss" as *;

.list-set {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  .set-card{
    border-radius: 24px;
    border: 1px solid #EDEDED;
    background: #FFF;
    border-radius: 24px;
    overflow: hidden;
    .set-header{
      width: 100%;
      display: flex;
      padding: 6px 16px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #EDEDED;
      .set-title{
        font-size: 14px;
        font-weight: 700;
        width: calc(100% - 40px);
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .box-dropdown{
        width: 36px;
        height: 36px;
        position: relative;
      }
      .btn-dropdown{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        .icon-menu{
          font-size: 36px;
          color: #949494;
        }
        &:hover, &.active{
          background: #e8f6fe;
          .icon-menu{
            color: $primary;
          }
        }
      }
      .dropdown-list{
        position: absolute;
        inset: 0px auto auto 0px;
        margin: 0px;
        transform: translate(-100px, 20px);
        padding: 0;
        min-width: 120px;
        border-width: 0;
        border-radius: 8px;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.3px;
        box-shadow: 0px 8px 16px rgba(0,0,0,.1607843137);
        overflow: hidden;
        background: #fff;
        z-index: 10;
        .btn-dropdown-item{
          width: 100%;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2B2B2B;
          font-size: 12px;
          font-weight: 500;
          border-bottom: 1px solid #EDEDED;
          &:last-child{
            border-bottom: none;
          }
          &:hover{
            color: #fff;
            background-color: #16a3f7;
          }
        }
      }
    }
    .set-body{
      padding: 20px 24px 24px 24px;
      .box-thumbnail{
        width: 100%;
        height: 170px;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 12px;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .black{
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          background: rgba(0,0,0,.58);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
          font-weight: 400;
          opacity: 0;
          transition: .3s;
        }
        &:hover{
          .black{
            opacity: 1;
          }
        }
      }
      .set-desc{
        color: #6C6C6C;
        font-size: 14px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 16px;
      }
      dl{
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        dt{
          width: 37px;
          color: #949494;
          font-size: 14px;
        }
        dd{
          width: calc(100% - 45px);
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
