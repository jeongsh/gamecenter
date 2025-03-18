<template>
  <div>

  </div>
</template>

<script setup lang="ts">
// pages/qr로 redirect
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.push('/list/qr')
})
</script>

<style lang="scss" scoped>

</style>
