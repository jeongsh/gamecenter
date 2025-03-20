<template>
  <div class="lnb">
    <div class="wrap-menu">
      <button
        v-if="gameType === 'qr'" 
        class="btn-menu"
        :class="{ active: tabType === 'scenario' }"
        @click="$emit('handleTab', 'scenario')"
      >
        시나리오
      </button>
      <button 
        class="btn-menu"
        :class="{ active: tabType === 'general' }"
        @click="$emit('handleTab', 'general')"
      >
        일반 문제(0)
      </button>
      <button 
        class="btn-menu"
        :class="{ active: tabType === 'boss' }"
        @click="$emit('handleTab', 'boss')"
      >
        추론 문제(0)
      </button>
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
.lnb{
  width: 152px;
  min-width: 152px;
  background: #FFF;
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid #EDEDED;

  .wrap-menu{
    border-radius: 8px;
    border: 1px solid #EDEDED;
    background: #FFF;
    overflow: hidden;
    width: 100%;
    .btn-menu{
      width: 100%;
      height: 36px;
      border-bottom: 1px solid #EDEDED;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #2B2B2B;
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      &.active{
        background: #E8F6FE;
      }
    }
  }
}
</style>
