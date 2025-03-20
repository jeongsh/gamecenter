<template>
  <div class="box-breadcrumb">
    <button class="btn-breadcumb" @click="toggleCollapse">
      <img src="@/assets/images/bread.svg" alt="">
    </button>
    <div class="box-link" :class="{ active: !isCollapsed }">
      <a :href="`/${gameType}`" class="link"> {{ breadcrumbName }}</a>
      <a
        v-for="(link, index) in linkList"
        :key="index"
        :href="link.link"
        class="link"
      >
        {{ link.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameType } from '@/types/common';
import { useCommonStore } from '@/stores/common';

const router = useRouter()
const route = useRoute()

const commonStore = useCommonStore()
const gameType = storeToRefs(commonStore).gameType as GameType
const isCollapsed = ref(false)

const props = defineProps({
  linkList: {
    type: Array as PropType<{ name: string; link: string }[]>,
    default: () => [],
  },
})

const breadcrumbList = {
  'qr': 'QR 방탈출',
  'ox': 'OX-배틀로얄',
  'bingo': '빙고의 신',
  'quiztime': '퀴즈 타임',
  'baseball': 'HIT & RUN',
}

const breadcrumbName = computed(() => {
  return breadcrumbList[gameType.value as keyof typeof breadcrumbList]
})

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="scss" scoped>
.box-breadcrumb{
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #16a3f7;
  overflow: hidden;
  .btn-breadcumb{
    width: 28px;
    height: 100%;
    background: #16a3f7;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-link{
    background: #fff;
    padding: 0;
    width: 0;
    overflow: hidden;
    opacity: 0;
    transition: all .3s ease-out,opacity 0s;
    display: flex;
    align-items: center;
    height: 100%;
    &.active{
      width: auto;
      padding: 0 12px 0 8px;
      opacity: 1;
    }
    .link{
      color: #949494;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: -0.52px;
      display: block;
      padding-right: 16px;
      position: relative;
      &::after{
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background: url(@/assets/images/bread-right.png) no-repeat center;
      }
      &:last-child{
        padding-right: 0;
        color: #2b2b2b;
        &::after{
          display: none;
        }
      }
    }
  }
}
</style>
