<template>
  <div class="container">
    <DetailLnb 
      :gameNo="themeNo" 
      :tabType="tabType" 
      @handleTab="handleTab"
    />
    <div class="wrap-tab">
      <CommonBreadcrumb
        :linkList ="[{
          name: '테마 상세',
          link: `/${gameType}/theme/${themeNo}`
        }]"
      />
      <DetailScenario 
        v-if="tabType === 'scenario'"
        :themeNo="themeNo"
      />
      <DetailGeneral 
        v-else-if="tabType === 'general'"
        :gameNo="themeNo"
        :detailType="'theme'"
      />
    </div>
    <DetailRnb 
      :gameNo="themeNo" 
      :tabType="tabType"
    />
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
const router = useRouter()
const route = useRoute()

const themeNo = Number(route.params.themeNo)
const gameType = storeToRefs(useCommonStore()).gameType

const tabType = ref(`${gameType.value === 'qr' ? 'scenario' : 'general'}`)

const handleTab = (type: string) => {
  tabType.value = type
}
</script>

<style lang="scss" scoped>
.wrap-tab{
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow-y: auto;
}
</style>
