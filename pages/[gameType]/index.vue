<template>
  <div class="container">
    <ListLnb/>
    <div class="container-list">
      <div class="wrap-list">
        <ListBanner/>
        <List/>
      </div>
    </div>
  </div>
  <Modals/>
</template>

<script setup lang="ts">
import type { GameType } from "@/types/common";
import { useRouter } from 'vue-router';
import { useCommonStore } from '@/stores/common';
const router = useRouter();
const route = useRoute();
const commonStore = useCommonStore();

watchEffect(() => {
  if (route.params.gameType) {
    commonStore.setGameType(route.params.gameType as GameType);
  }
});
</script>

<style lang="scss" scoped>
.container-list{
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow-y: auto;
  .wrap-list{
    width: 1122px;
    padding: 36px 0 40px;
  }
}
</style>
