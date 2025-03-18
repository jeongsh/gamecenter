<template>
  <div class="list-theme">
    <div class="theme-card" v-for="i in 10">
      <NuxtLink class="theme-thumbnail" :to="`/qr/${i}`">
        <img src="https://cdn.raporapo.com/game/resource/upload/qr/thumbnail/20250228/155028757449385.jpeg" alt="">
      </NuxtLink>
      <div class="theme-body">
        <NuxtLink class="theme-title" :to="`/qr/${i}`">
          그 피라미드는 진짜가 아니야
        </NuxtLink>
        <div class="box-tag">
          <span class="tag">#테마</span>
          <span class="tag">#게임</span>
          <span class="tag">#게임</span>
          <span class="tag">#게임</span>
          <span class="tag">#게임</span>
        </div>
        <div class="d-flex aic jcsb">
          <NuxtLink class="link-primary" :to="`/qr/${i}`">
            세트 만들기
          </NuxtLink>
          <p class="writer">
            <i class="icon-human"></i>
            에듀테크교사연구회_009
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
      padding: 15px 16px;
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
