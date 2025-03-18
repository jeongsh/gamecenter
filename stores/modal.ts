import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  /**
   * 모달 상태
   */
  const modalState = ref<string | null>(null)
  const openModal = (modal: string) => {
    modalState.value = modal
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    modalState.value = null
    document.body.style.overflow = ''
  }
  return {
    modalState,
    openModal,
    closeModal,
  }
})
