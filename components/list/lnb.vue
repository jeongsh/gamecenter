<template>
  <aside class="aside">
    <div class="box profile">
      <div class="thumbnail">
        <!-- <img :src="$getProfileImageSrc(user.userNo, user.userProfileImage)" alt="썸네일" width="64" height="64"> -->
        <img src="https://cdn.raporapo.com/web/resource/upload/profile/11/597419695.png" alt="썸네일" width="64" height="64">
      </div>
      <div class="text">
        <!-- <div class="name">{{user.userNickname}}</div> -->
        <p class="name">닉네임닉네임닉네임</p>
        <p class="code">
          <img src="@/assets/images/share.svg" alt="">
          공유코드 033141
        </p>
      </div>
    </div>

    <div class="box box-info">
      <div class="d-flex">
        <p class="info">
          게임 세트
          <span class="count">51</span>
        </p>
        <p class="info">
          플레이
          <span class="count">51</span>
        </p>
      </div>
      <button class="btn-share">
        <img src="@/assets/images/circle-share.svg" alt="">
        게임 세트 공유받기
      </button>
    </div>

    <a href="https://play.raporapo.com/play/room" class="btn-enter-room" target="_blank">
      <svg class="ico" xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24">
        <rect width="34" height="24" fill="none"></rect>
        <path d="M-7.789-8.911a.923.923,0,0,0,.252.683.93.93,0,0,0,.688.252h1.569v1.508a.966.966,0,0,0,.248.694.886.886,0,0,0,.675.261.882.882,0,0,0,.672-.261.966.966,0,0,0,.248-.694V-7.976h1.471a1.034,1.034,0,0,0,.735-.252.889.889,0,0,0,.27-.683.857.857,0,0,0-.27-.664,1.047,1.047,0,0,0-.735-.247H-3.436v-1.511a.955.955,0,0,0-.248-.691.888.888,0,0,0-.672-.258.892.892,0,0,0-.675.258.955.955,0,0,0-.248.691v1.511H-6.849a.94.94,0,0,0-.688.247A.888.888,0,0,0-7.789-8.911ZM6.343-8.982A1.431,1.431,0,0,0,7.391-9.4a1.407,1.407,0,0,0,.424-1.043A1.438,1.438,0,0,0,7.391-11.5a1.417,1.417,0,0,0-1.047-.427A1.425,1.425,0,0,0,5.3-11.5a1.429,1.429,0,0,0-.429,1.054A1.4,1.4,0,0,0,5.3-9.4,1.44,1.44,0,0,0,6.343-8.982ZM3.423-6.017a1.427,1.427,0,0,0,1.05-.424A1.419,1.419,0,0,0,4.9-7.485a1.438,1.438,0,0,0-.424-1.054,1.421,1.421,0,0,0-1.05-.427,1.422,1.422,0,0,0-1.042.427,1.429,1.429,0,0,0-.429,1.054A1.411,1.411,0,0,0,2.38-6.441,1.427,1.427,0,0,0,3.423-6.017ZM-14.215-1.855a4.242,4.242,0,0,0,.495,2.1,3.385,3.385,0,0,0,1.373,1.358,4.186,4.186,0,0,0,2.017.473,4.4,4.4,0,0,0,1.912-.417A4.868,4.868,0,0,0-6.859.479l1.712-1.941a1.357,1.357,0,0,1,.375-.309.88.88,0,0,1,.413-.1H4.809a.877.877,0,0,1,.414.1,1.368,1.368,0,0,1,.373.309L7.311.479A4.915,4.915,0,0,0,8.87,1.66a4.379,4.379,0,0,0,1.91.419A4.186,4.186,0,0,0,12.8,1.606,3.385,3.385,0,0,0,14.17.247a4.242,4.242,0,0,0,.495-2.1,9.531,9.531,0,0,0-.16-1.68A17.052,17.052,0,0,0,14.053-5.4q-.3-1.015-.73-2.206t-.926-2.4q-.495-1.206-.99-2.255a15.25,15.25,0,0,0-.817-1.51,3.382,3.382,0,0,0-1-1.028,5.183,5.183,0,0,0-1.71-.653,27.947,27.947,0,0,0-3.36-.519q-1.93-.194-4.286-.194t-4.291.194a28.073,28.073,0,0,0-3.364.519,5.162,5.162,0,0,0-1.709.653,3.407,3.407,0,0,0-1,1.028,14.627,14.627,0,0,0-.816,1.51q-.5,1.049-.991,2.255t-.924,2.4Q-13.3-6.418-13.6-5.4a17.31,17.31,0,0,0-.454,1.868A9.443,9.443,0,0,0-14.215-1.855Zm2.038-.059a5.517,5.517,0,0,1,.1-.988,13.141,13.141,0,0,1,.323-1.3q.335-1.138.8-2.429t.975-2.555q.515-1.265,1-2.337a9.648,9.648,0,0,1,.437-.865,1.952,1.952,0,0,1,.52-.592,2.31,2.31,0,0,1,.857-.361,25.064,25.064,0,0,1,3.224-.509q1.865-.188,4.17-.188t4.162.188a24.95,24.95,0,0,1,3.223.509,2.276,2.276,0,0,1,.853.361,1.973,1.973,0,0,1,.517.592q.209.36.444.865.5,1.072,1.01,2.337T11.4-6.634q.457,1.29.8,2.429.222.754.325,1.3a5.438,5.438,0,0,1,.1.988,1.817,1.817,0,0,1-.556,1.409,1.97,1.97,0,0,1-1.385.51,2.519,2.519,0,0,1-1.9-.97L6.756-3.2a2.661,2.661,0,0,0-.72-.6,2.066,2.066,0,0,0-.968-.191H-4.62a2.068,2.068,0,0,0-.966.191,2.65,2.65,0,0,0-.721.6L-8.338-.964a3.04,3.04,0,0,1-.9.719,2.18,2.18,0,0,1-1,.251,1.966,1.966,0,0,1-1.382-.51A1.817,1.817,0,0,1-12.177-1.914Z" transform="translate(17 19)" fill="currentColor"></path>
      </svg>
      대기실 참여하기
    </a>

    <ul class="box menu">
      <li class="mene-item">
        <NuxtLink
          to="/qr"
          class="menu-link"
          :class="{ active : gameType === 'qr' }"
        ><img src="https://cdn.raporapo.com/game/resource/common/game/qr/thumb-qr.png" alt="" class="ico">QR 퀴즈 방탈출</NuxtLink>
      </li>
      <li class="mene-item">
        <NuxtLink
          to="/ox"
          class="menu-link"
          :class="{ active : gameType === 'ox' }"
        ><img src="https://cdn.raporapo.com/game/resource/common/game/ox/thumb-ox.png" alt="" class="ico">OX-배틀로얄</NuxtLink>
      </li>
      <li class="mene-item">
        <NuxtLink
          to="/bingo"
          class="menu-link"
          :class="{ active : gameType === 'bingo' }"
        ><img src="https://cdn.raporapo.com/game/resource/common/game/bingo/thumb-bingo.png" alt="" class="ico">빙고의 신</NuxtLink>
      </li>
      <li class="mene-item">
        <NuxtLink
          to="/quiztime"
          class="menu-link"
          :class="{ active : gameType === 'quiztime' }"
        ><img src="https://cdn.raporapo.com/game/resource/common/game/miniqr/thumb-miniqr.png" alt="" class="ico">퀴즈 타임</NuxtLink>
      </li>
      <li class="mene-item">
        <NuxtLink
          to="/baseball"
          class="menu-link"
          :class="{ active : gameType === 'baseball' }"
        ><img src="https://cdn.raporapo.com/game/resource/common/game/baseball/thumb-baseball.png" alt="" class="ico">HIT & RUN</NuxtLink>
      </li>
      <li class="mene-item">
        <NuxtLink
          to="/mindgaze"
          class="menu-link"
          :class="{ active : gameType === 'mindgaze' }"
        ><img src="https://cdn.raporapo.com/game/resource/common/game/etc/thumb-mindgaze.png" alt="" class="ico">시선추적 AI 심리검사</NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import type { GameType } from '@/types/common';
// const {
//   $auth: {
//     user,
//   },
// } = useNuxtApp()


const {
  gameType,
} = defineProps<{
  gameType: GameType
}>()
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.aside {
  min-width: 283px;
  width: 283px;
  height: calc(100% - 56px);
  background: #fff;
  border-right: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  .box {
    padding: 24px;

    &.profile {
      display: flex;
      align-items: center;
      padding-bottom: 16px;

      .thumbnail {
        display: flex;
        border: 1px solid rgba(255,255,255,.5607843137);
        border-radius: 1rem;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        flex: 0 0 64px;
        width: 64px;
        height: 64px;
        border-radius: 28px;
      }
      .text {
        margin-left: 10px;
        width: calc(100% - 74px);
      }
      .name {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
      }
      .code {
        font-size: 12px;
        color: #949494;
        display: flex;
        align-items: center;
        line-height: 18px;
      }
    }
    &.menu {
      margin: 0;
      list-style: none;
      .menu-link {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #2b2b2b;
        border-radius: 16px;
        padding: 8px;
        margin: 4px 0;
        margin-left: -8px;
        width: calc(100% + 8px);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: normal;
        transition: 0.3s;
        &:hover {
          background: #f2f7ff;
          
        }
        &.active {
          background: #e8f6fe;
        }
      }
      .ico {
        width: 40px;
        height: 40px;
        border-radius: 12px;
      }
    }
  }
  .name {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .box-info{
    padding-top: 0;
    .d-flex{
      gap: 8px;
      margin-bottom: 12px;
    }
    .info{
      padding: 8px 12px;
      color: #949494;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 300;
      letter-spacing: -0.3px;
      line-height: 15px;
      background: #fff;
      border: 1px solid #dbdbdb;
      flex: 1;
      .count{
        color: #2b2b2b;
        font-size: 14px;
        font-weight: 500;
        line-height: 15px;
        float: right;
      }
    }
    .btn-share{
      color: #16a3f7;
      width: 100%;
      height: 40px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px !important;
      font-weight: 500;
      gap: 4px;
      border: 1px solid #b7e2fd;
      background: rgba(232,246,254,.24);
      letter-spacing: normal;
    }
  }
  .btn-enter-room{
    border: 1px solid rgba(237,237,237,.56);
    background: #16a3f7;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    height: 64px;
    gap: 4px;
    font-size: 15px;
  }
}
</style>
