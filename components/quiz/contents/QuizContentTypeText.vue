<template>
  <p
    v-html="content.content"
    class="text"
  >
  </p>
</template>

<script setup lang="ts">
  const { content } = defineProps(['content'])

</script>
<style lang="scss">
.text{
  font-size: 14px;
  letter-spacing: -0.36px;
  color: #2b2b2b;
  font-weight: 500;
  word-break: break-all;
  min-height: 40px;
  height: auto;
  background: #fff;
  padding: 10px 16px;
}
</style>