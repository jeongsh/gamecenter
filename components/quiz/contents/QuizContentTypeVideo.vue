<template>
  <iframe 
    :src="youtubeUrl"
    :class="isShorts ? 'shorts' : ''" 
    style="border-radius: 8px;"
  />
</template>

<script setup lang="ts">
const { content } = defineProps(["content"]);
const youtubeUrl = ref<string>("");
const isShorts = ref<boolean>(false);
onMounted(() => {
  youtubeUrl.value = covertYoutubeUrl(content.content);
});

const covertYoutubeUrl = (url : string) =>{
  let id = '';
  if (url) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(shorts\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const matchs = url.match(regExp);

    if (matchs) {
      id = matchs[8];
    }

    // shorts가 포함되어있으면 shorts로 변경
    if (url.includes('shorts')) {
      isShorts.value = true;
    }
  }
  return `https://www.youtube.com/embed/${id}`;
}
</script>
<style lang="scss">
iframe {
  width: 100%;
  aspect-ratio: 16/9;
  &.shorts{
    aspect-ratio: 9/16;
  }
}
</style>
