<template>
  <div class="wrap-scene">
    <iframe :src="`${RAPORAPO_PLAY_HOST}/play/preview/qr/story?themeNo=${themeNo}`"></iframe>
  </div>
</template>

<script setup lang="ts">
import { CDN_DOMAIN, RAPORAPO_PLAY_HOST } from "@/consts/path";

const props = defineProps({
  themeNo: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.wrap-scene{
  border-radius: 16px;
  border: 1px solid #dbdbdb;
  background: #fff;
  aspect-ratio: 347/750;
  width: 347px;
  overflow: hidden;
  iframe{
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
