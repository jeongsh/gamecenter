<template>
  <div>
    <audio
      controls
      :src="`${CDN_ROOT}/question/resource/upload/question/${content.content}`"
    />
  </div>
</template>

<script setup lang="ts">
  const { content } = defineProps(['content'])
  const CDN_ROOT = useRuntimeConfig().public.cdnRoot

</script>
<style lang="scss" scoped>
audio{
  max-width: 100%;
}
</style>