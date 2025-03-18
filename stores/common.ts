import { defineStore } from 'pinia';
import type { GameType } from '@/types/common';

export const useCommonStore = defineStore('common', () => {
  /**
   * 모달 상태
   */
  const gameType = ref<GameType>(null)
  const setGameType = (type: GameType) => {
    gameType.value = type
  }
  return {
    gameType,
    setGameType
  }
})
