<template>
  <div>
    <img
        :src="`${CDN_ROOT}/question/resource/upload/question/${content.content}`"
    />
  </div>
</template>

<script setup lang="ts">
  const { content } = defineProps(['content'])
  const CDN_ROOT = useRuntimeConfig().public.cdnRoot

</script>