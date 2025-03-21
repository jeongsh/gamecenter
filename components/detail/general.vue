<template>
  <div class="wrap-question">
    <div class="question-container">
      <Quiz/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
const router = useRouter()
const route = useRoute()

const props = defineProps({
  gameNo: {
    type: Number
  },
  detailType: {
    type: String,
  }
})
const gameType = storeToRefs(useCommonStore()).gameType

</script>

<style lang="scss" scoped>
.wrap-question{
  display: flex;
  padding: 16px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #dbdbdb;
  gap: 16px;
  height: 100%;
  display: flex;
  gap: 16px;
  .question-container{
    width: 470px;
    padding: 16px;
    height: 100%;
    overflow-y: auto;
    border-radius: 16px;
    border: 1px solid #dbdbdb;
  }
  .question-title{
    min-height: 40px;
    font-size: 17px;
    letter-spacing: -0.5px;
    font-weight: 500;
    color: #2b2b2b;
    margin-bottom: 8px;
    padding: 0;
    line-height: 1.3;
  }
}
</style>
