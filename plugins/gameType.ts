// plugins/gameType.ts
import { defineNuxtPlugin } from '#app';
import { useRoute } from 'vue-router';
import { useCommonStore } from '@/stores/common';

export default defineNuxtPlugin(() => {
  const route = useRoute();
  const commonStore = useCommonStore();

  // 페이지가 로드될 때 gameType 설정
  if (route.params.gameType) {
    commonStore.setGameType(route.params.gameType as string);
  }

  // gameType이 변경될 때 자동 반영
  watch(() => route.params.gameType, (newGameType) => {
    if (newGameType) {
      commonStore.setGameType(newGameType as string);
    }
  }, { immediate: true });
});
