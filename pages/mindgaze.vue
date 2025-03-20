<template>
  <div>
    {{ gameType }}
  </div>
</template>

<script setup lang="ts">
import type { GameType } from "@/types/common";
import { useCommonStore } from '@/stores/common';

const commonStore = useCommonStore()
const gameType = commonStore.gameType
</script>

<style lang="scss" scoped>

</style>
