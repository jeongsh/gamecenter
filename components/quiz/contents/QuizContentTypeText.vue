<template>
  <div
    v-html="content.content">
  </div>
</template>

<script setup lang="ts">
  const { content } = defineProps(['content'])

</script>