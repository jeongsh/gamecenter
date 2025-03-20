<template>
  <div class="tab-header">
    <div class="box-left">
      <button 
        class="btn-tab" 
        :class="{ 'btn-secondary': tabType === 'theme' }" 
        @click="handleTab('theme')"
      >
        모든 테마 보기
      </button>
      <button 
        class="btn-tab"
        :class="{ 'btn-secondary': tabType === 'game-set' }"
        @click="handleTab('game-set')"
      >
        나의 게임 세트
      </button>
      <button 
        class="btn-create btn-secondary"
        @click="modalStore.openModal('create')"
      >
        <i class="icon-add"></i>
      </button>
    </div>
    <CommonSearch/>
  </div>
  <ListTabTheme v-if="tabType === 'theme'"/>
  <ListTabGameset v-else-if="tabType === 'game-set'"/>
</template>

<script setup lang="ts">
import type { GameType } from '@/types/common'
import { useModalStore } from '@/stores/modal';
import { useCommonStore } from '@/stores/common';

const modalStore = useModalStore();
const commonStore = useCommonStore();
const tabType = ref('theme')

const handleTab = (type: string) => {
  tabType.value = type
}
</script>

<style lang="scss" scoped>
.tab-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin: 40px 0 24px;
  .box-left{
    display: flex;
    align-items: center;
    gap: 8px;
    height: 100%;
  }
  .btn-tab{
    width: 160px;
    height: 100%;
    border-radius: 8px;
    border: 1px solid #EDEDED;
    background: #FFF;
    color: #949494;
    font-size: 14px;
    line-height: 1;
  }
  .btn-create{
    width: 44px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    i{
      font-size: 20px;
    }
  }
}
</style>
