<template>
  <div class="list-theme">
    <div class="theme-card" v-for="theme in themeList">
      <NuxtLink class="theme-thumbnail" :to="`/${gameType}/theme/${theme.themeNo}`">
        <img :src="theme.themeThumbnail" alt="">
      </NuxtLink>
      <div class="theme-body">
        <NuxtLink class="theme-title" :to="`/${gameType}/theme/${theme.themeNo}`">
          {{ theme.themeTitle }}
        </NuxtLink>
        <div class="box-tag">
          <span class="tag" v-for="(tag, index) in theme.tagList" :key="index">
            #{{ tag }}
          </span>
        </div>
        <div class="d-flex aic jcsb">
          <NuxtLink class="link-primary" :to="`/${gameType}/theme/${theme.themeNo}`">
            세트 만들기
          </NuxtLink>
          <p class="writer">
            <i class="icon-human"></i>
            {{ theme.themeMaker }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameType } from '@/types/common'
import { CDN_DOMAIN } from "@/consts/path";
import { useCommonStore } from '@/stores/common';

const commonStore = useCommonStore()
const gameType = commonStore.gameType

// 테스트용 임시 데이터
const qrThemeList = [
  {
    themeNo: 1,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 2,
    themeTitle: '민주주의를 구하라',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/143901695749576.png`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 3,
    themeTitle: '세계시민교육(중학교2학년)',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/144144873253968.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 4,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 5,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 6,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 7,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 8,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 9,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 10,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 11,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 12,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 13,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
  {
    themeNo: 14,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg`,
    themeMaker: '에듀테크교사연구회_009',
  },
]
const oxThemeList = [
  {
    themeNo: 1,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/ox/thumbnail/theme/0_173730565313428.png`,
    themeMaker: '에듀테크교사연구회_009',
  },
]
const bingoThemeList = [
  {
    themeNo: 1,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/bingo/thumbnail/default.png`,
    themeMaker: '에듀테크교사연구회_009',
  },
]
const quiztimeThemeList = [
  {
    themeNo: 1,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/miniqr/thumbnail/theme/default.png`,
    themeMaker: '에듀테크교사연구회_009',
  },
]
const baseballThemeList = [
  {
    themeNo: 1,
    themeTitle: '그 피라미드는 진짜가 아니야',
    tagList: ['테마', '게임', '게임', '게임', '게임'],
    themeThumbnail: `https://cdn.raporapo.com/game/resource/upload/baseball/thumbnail/20220412/13_초등-3학년-영어.png`,
    themeMaker: '에듀테크교사연구회_009',
  },
]

// 테스트용 임시
const themeList = computed(() => {
  // gameType에 따라 테마 리스트를 반환
  if (gameType === 'qr') {
    return qrThemeList
  } else if (gameType === 'ox') {
    return oxThemeList
  } else if (gameType === 'bingo') {
    return bingoThemeList
  } else if (gameType === 'quiztime') {
    return quiztimeThemeList
  } else if (gameType === 'baseball') {
    return baseballThemeList
  }
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables.scss" as *;

.list-theme {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  .theme-card{
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid #EDEDED;
    background: #FFF;
    .theme-thumbnail{
      width: 100%;
      height: 146px;
      display: block;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .theme-body{
      padding: 15px 16px 24px;
      .theme-title{
        font-size: 17px;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.68px;
        margin-bottom: 14px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
      }
      .box-tag{
        display: flex;
        gap: 8px;
        margin-bottom: 10px;
        .tag{
          color: #949494;
          font-size: 14px;
          font-weight: 400;
        }
      }
      .link-primary{
        color: $primary;
        font-size: 14px;
        font-weight: 400;
      }
      .writer{
        color: #949494;
        letter-spacing: -0.4px;
        display: flex;
        align-items: center;
        font-size: 14px;
        .icon-human{
          font-size: 17px;
        }
      }
    }
  }
}
</style>
