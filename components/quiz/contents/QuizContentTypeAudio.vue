<template>
  <div>
    <audio
      controls
      :src="`${CDN_DOMAIN}/question/resource/upload/${content.content}`"
    />
  </div>
</template>

<script setup lang="ts">
import { CDN_DOMAIN } from '~/consts/path';
const { content } = defineProps(['content'])
</script>
<style lang="scss" scoped>
audio{
  max-width: 100%;
}
</style>