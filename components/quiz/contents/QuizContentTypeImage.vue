<template>
  <div>
    <img
      :src="`${CDN_DOMAIN}/question/resource/upload/${content.content}`"
      style="border-radius: 8px;"
    />
  </div>
</template>

<script setup lang="ts">
import { CDN_DOMAIN } from '~/consts/path';
const { content } = defineProps(['content'])
</script>