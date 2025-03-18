<template>
  <div class="container">
    <ListLnb :gameType = "gameType"/>
    <div class="container-list">
      <div class="wrap-list">
        <ListBanner :gameType = "gameType"/>
        <List :gameType = "gameType"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameType } from "@/types/common";
import { useRouter } from 'vue-router';
const router = useRouter();
const gameType = router.currentRoute.value.params.listGameType as GameType;
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
