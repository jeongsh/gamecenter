<template>
  <Header/>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import Header from '~/layouts/header.vue'
</script>

<style lang="scss" scoped>
.main{
  padding-top: 56px;
  background: #F8F8F8;
  height: 100vh;
}
</style>