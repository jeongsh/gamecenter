<template>
  <div>
    <h1>{{ choices }}</h1>
  </div>
</template>

<script setup lang="ts">
  const { choices } = defineProps(['choices'])
</script>