<template>
  <div class="wrap-question">

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
  .box-question{
    width: 470px;

  }
}
</style>
