<template>
  <iframe
    :src="content.content"
  />
</template>

<script setup lang="ts">
  const { content } = defineProps(['content'])

</script>
<style lang="scss">
  iframe{
    width: 100%;
    aspect-ratio: 16/9;
  }
</style>